/* =========================================================
   GLOBAL STATE MANAGEMENT
   ========================================================= */

// Symptoms selected by the user
let selectedSymptoms = [];

// Current model filter
let currentModelFilter = null;

// Search results
let currentSearchResults = [];

// Community filter
let currentCommunityFilter = 'all';

// Firebase status
let firebaseInitialized = false;


/* =========================================================
   INITIALIZATION
   Runs when page finishes loading
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

    /* Initialize Firebase FIRST */
    firebaseInitialized = initFirebase();

    /* Initialize all UI components */
    initSymptomGrid();
    initModelGrid();
    initCommonCodes();
    initSubmissionForm();

    /* Load community posts */
    if (firebaseInitialized) {
        loadCommunityPostsFromFirebase();
    } else {
        communityPosts = [...fallbackCommunityPosts];
        initCommunityPosts();
    }

    /* Initialize icons */
    if (window.lucide) {
        lucide.createIcons();
    }
});


/* =========================================================
   SHARE YOUR FIX BUTTON
   Opens submission modal
   ========================================================= */

function openSubmissionModal() {
    document.getElementById('submission-modal').classList.remove('hidden');
}

function closeSubmissionModal() {
    document.getElementById('submission-modal').classList.add('hidden');
    document.getElementById('submission-form').reset();
    // Reset preview
    document.getElementById('photo-preview').classList.add('hidden');
    document.getElementById('photo-preview-container').classList.remove('hidden');
}


/* =========================================================
   Handles the form submit and prevents the default page reload
   ========================================================= */
async function submitCommunityFix(event) {
    event.preventDefault();

    // Get form values
    const code = document.getElementById('submit-code').value;
    const model = document.getElementById('submit-model').value;
    const year = document.getElementById('submit-year').value;
    const solution = document.getElementById('submit-solution').value;
    const cost = document.getElementById('submit-cost').value || '';
    const author = document.getElementById('submit-name').value || 'Anonymous';
    const photoInput = document.getElementById('submit-photo');
    const file = photoInput.files[0] || null;

    if (!code || !model || !solution || !file) {
        alert('Please fill in all required fields.');
        return;
    }

    try {
        // Upload image to Firebase Storage
        const postId = Date.now().toString(); // Temporary ID if needed
        let imageURL = null;
        if (file && firebaseInitialized) {
            imageURL = await uploadImageToFirebase(file, postId);
        }

        // Prepare post data
        const postData = {
            code,
            model,
            year,
            solution,
            cost,
            author,
            image: imageURL || null,
            date: new Date().toISOString(),
            likes: 0
        };

        // Submit to Firebase
        if (firebaseInitialized) {
            await submitPostToFirebase(postData);
            alert('✅ Your fix has been shared!');
        } else {
            // Fallback: push to local array
            communityPosts.push(postData);
            initCommunityPosts();
            alert('✅ Your fix has been added locally.');
        }

        // Reset form
        closeSubmissionModal();

    } catch (err) {
        console.error(err);
        alert('❌ Error submitting your fix. Try again.');
    }
}


/* =========================================================
   FIREBASE DATABASE FUNCTIONS
   ========================================================= */


/* ----------------------------------------
   Load Community Posts (Realtime Listener)
---------------------------------------- */

function loadCommunityPostsFromFirebase() {

    const postsRef = getCommunityPostsRef();

    postsRef.on('value', (snapshot) => {

        const data = snapshot.val();

        if (data) {

            communityPosts = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));

            /* Sort newest first */
            communityPosts.sort((a, b) =>
                new Date(b.date) - new Date(a.date)
            );

        } else {

            /* If empty database fallback */
            communityPosts = [...fallbackCommunityPosts];
        }

        initCommunityPosts();

        if (window.lucide) {
            lucide.createIcons();
        }

    }, (error) => {

        console.error("Firebase load error:", error);

        communityPosts = [...fallbackCommunityPosts];
        initCommunityPosts();
    });
}


/* ----------------------------------------
   Submit Post To Firebase
---------------------------------------- */

async function submitPostToFirebase(postData) {

    if (!firebaseInitialized) {
        throw new Error("Firebase not initialized");
    }

    const postsRef = getCommunityPostsRef();
    const newPostRef = postsRef.push();

    await newPostRef.set(postData);

    return newPostRef.key;
}


/* ----------------------------------------
   Upload Image To Firebase Storage
---------------------------------------- */

async function uploadImageToFirebase(file, postId) {

    if (!firebaseInitialized || !file) return null;

    try {

        const storageRef = firebaseStorage.ref();

        const imageRef = storageRef.child(
            `community-images/${postId}-${file.name}`
        );

        await imageRef.put(file);

        const downloadURL = await imageRef.getDownloadURL();

        return downloadURL;

    } catch (error) {

        console.error("Image upload error:", error);
        return null;
    }
}


/* ----------------------------------------
   Like A Post
---------------------------------------- */

async function likePost(postId) {

    if (!firebaseInitialized) return;

    const postRef = firebaseDatabase.ref(`community-posts/${postId}`);
    const likesRef = postRef.child('likes');

    await likesRef.transaction((currentLikes) => {
        return (currentLikes || 0) + 1;
    });
}


/* ----------------------------------------
   Delete Post
---------------------------------------- */

async function deletePost(postId) {

    if (!firebaseInitialized) return;

    if (!confirm('Delete this post?')) return;

    await firebaseDatabase
        .ref(`community-posts/${postId}`)
        .remove();
}


/* =========================================================
   SEARCH SYSTEM
   ========================================================= */

function handleSearch(query) {

    const clearBtn = document.getElementById('clear-search');
    const resultsContainer = document.getElementById('search-results-container');
    const homeContent = document.getElementById('home-content');

    if (query.length > 0) {

        clearBtn.classList.remove('hidden');
        resultsContainer.classList.remove('hidden');
        homeContent.classList.add('hidden');

        performSearch(query);

    } else {

        clearSearch();
    }
}

function clearSearch() {

    document.getElementById('main-search').value = '';

    document.getElementById('clear-search')
        .classList.add('hidden');

    document.getElementById('search-results-container')
        .classList.add('hidden');

    document.getElementById('home-content')
        .classList.remove('hidden');
}


/* =========================================================
   SEARCH LOGIC
   ========================================================= */

function performSearch(query) {

    const lowerQuery = query.toLowerCase();
    const results = [];

    dtcDatabase.forEach(dtc => {

        if (
            dtc.code.toLowerCase().includes(lowerQuery) ||
            dtc.name.toLowerCase().includes(lowerQuery) ||
            dtc.description.toLowerCase().includes(lowerQuery)
        ) {

            results.push({
                type: 'code',
                data: dtc
            });
        }
    });

    currentSearchResults = results;

    displaySearchResults(results);
}


/* =========================================================
   SEARCH RESULTS DISPLAY
   ========================================================= */

function displaySearchResults(results) {

    const container = document.getElementById('search-results');

    const countSpan = document.getElementById('result-count');

    countSpan.textContent = `(${results.length} found)`;


    if (results.length === 0) {

        container.innerHTML = `
        <div class="text-center py-12">
            <h3 class="text-lg font-semibold">No results found</h3>
        </div>
        `;

        return;
    }

    container.innerHTML = results
        .map(result => createCodeCard(result.data))
        .join('');

    if (window.lucide) {
        lucide.createIcons();
    }
}


/* =========================================================
   COMMUNITY SECTION
   ========================================================= */

function initCommunityPosts() {

    displayCommunityPosts(
        communityPosts,
        currentCommunityFilter
    );
}


/* ----------------------------------------
   Display Community Posts
---------------------------------------- */

function displayCommunityPosts(posts, filter = 'all') {

    const container = document.getElementById('community-grid');

    let filteredPosts = posts;

    if (filter !== 'all') {
        filteredPosts = posts.filter(p => p.code === filter);
    }

    if (filteredPosts.length === 0) {

        container.innerHTML = `
        <div class="text-center py-10">
            No community fixes yet.
        </div>
        `;

        return;
    }

    container.innerHTML = filteredPosts.map(post => `

    <div class="bg-white rounded-xl shadow-md border p-5">

        ${post.image ? `
        <img src="${post.image}" 
        class="w-full h-48 object-cover rounded-lg mb-3">
        ` : ''}

        <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
            ${post.code}
        </span>

        <h3 class="font-bold mt-2">
            ${post.model} ${post.year}
        </h3>

        <p class="text-sm text-slate-700 mt-2">
            ${post.solution}
        </p>

        <div class="flex justify-between items-center mt-3">

            <span class="text-sm text-slate-500">
                ${post.author || 'Anonymous'}
            </span>

            <button onclick="likeCommunityPost('${post.id}')"
            class="flex items-center gap-1 text-sm">

            👍 <span id="likes-${post.id}">
            ${post.likes || 0}
            </span>

            </button>

        </div>

    </div>

    `).join('');

    if (window.lucide) {
        lucide.createIcons();
    }
}


/* =========================================================
   LIKE COMMUNITY POST
   ========================================================= */

async function likeCommunityPost(postId) {

    const likeElement = document.getElementById(`likes-${postId}`);

    let currentLikes = parseInt(likeElement.textContent) || 0;

    likeElement.textContent = currentLikes + 1;

    if (firebaseInitialized) {

        try {

            await likePost(postId);

        } catch (error) {

            console.error("Like error:", error);

            likeElement.textContent = currentLikes;
        }
    }
}


/* =========================================================
   This is for Chat GPT Dropdown
   ========================================================= */
function toggleCustomField(selectElement, fieldId) {

const field = document.getElementById(fieldId);

if(selectElement.value === "other"){

field.classList.remove("hidden");

}else{

field.classList.add("hidden");

}
}

// Preview the selected image
function previewPhoto(input) {
    const preview = document.getElementById('photo-preview');
    const container = document.getElementById('photo-preview-container');

    if (input.files && input.files[0]) {
        const file = input.files[0];

        // Validate size (<5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('File too large. Max 5MB allowed.');
            input.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.classList.remove('hidden');
            container.classList.add('hidden');
        }
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.classList.add('hidden');
        container.classList.remove('hidden');
    }
}

// Drag & Drop Support
function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy";
    event.currentTarget.classList.add('border-red-500');
}

function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const input = document.getElementById('submit-photo');
        input.files = files;
        previewPhoto(input);
    }
    event.currentTarget.classList.remove('border-red-500');
}


/* =========================================================
   Submit function
   ========================================================= */
const code = document.getElementById("submit-code").value === "other"
? document.getElementById("custom-code").value
: document.getElementById("submit-code").value;

const model = document.getElementById("submit-model").value === "other"
? document.getElementById("custom-model").value
: document.getElementById("submit-model").value;

const year = document.getElementById("submit-year").value === "other"
? document.getElementById("custom-year").value
: document.getElementById("submit-year").value;



/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMobileMenu() {

    const menu = document.getElementById('mobile-menu');

    menu.classList.toggle('hidden');
}