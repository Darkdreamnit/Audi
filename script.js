/* =========================================================
   GLOBAL VARIABLES
   These store app data that multiple functions use
========================================================= */

// stores community posts loaded from Firebase
let communityPosts = []

// tracks if Firebase initialized correctly
let firebaseInitialized = false

// stores current community filter
let currentCommunityFilter = "all"



/* =========================================================
   PAGE INITIALIZATION
   Runs after the HTML finishes loading
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Page loaded")

    /* -----------------------------------------
       Initialize Firebase
    ----------------------------------------- */

    try {

        firebaseInitialized = initFirebase()

        console.log("Firebase initialized:", firebaseInitialized)

    } catch (err) {

        console.error("Firebase failed:", err)

        firebaseInitialized = false

    }


    /* -----------------------------------------
       Initialize form submission handler
    ----------------------------------------- */

    initSubmissionForm()


    /* -----------------------------------------
       Load community posts
    ----------------------------------------- */

    if (firebaseInitialized) {

        loadCommunityPostsFromFirebase()

    } else {

        console.warn("Using fallback posts")

        communityPosts = [...fallbackCommunityPosts]

        displayCommunityPosts(communityPosts)

    }


    /* -----------------------------------------
       Initialize icons (Lucide)
    ----------------------------------------- */

    if (window.lucide) {

        lucide.createIcons()

    }

})



/* =========================================================
   SHARE YOUR FIX MODAL
========================================================= */


/* Opens the submission popup */
function openSubmissionModal() {

    const modal = document.getElementById("submission-modal")

    if (modal) modal.classList.remove("hidden")

}


/* Closes the popup */
function closeSubmissionModal() {

    const modal = document.getElementById("submission-modal")

    const form = document.getElementById("submission-form")

    if (modal) modal.classList.add("hidden")

    if (form) form.reset()

}



/* =========================================================
   FORM SETUP
========================================================= */


/* Connects the form submit event to our function */
function initSubmissionForm() {

    const form = document.getElementById("submission-form")

    if (!form) {

        console.warn("Submission form not found")

        return

    }

    form.addEventListener("submit", submitCommunityFix)

}



/* =========================================================
   FORM SUBMISSION
========================================================= */

async function submitCommunityFix(event) {

    // stop page reload
    event.preventDefault()


    /* -----------------------------------------
       Get form values
    ----------------------------------------- */

    const code = document.getElementById("submit-code").value

    const model = document.getElementById("submit-model").value

    const year = document.getElementById("submit-year").value

    const solution = document.getElementById("submit-solution").value

    const cost = document.getElementById("submit-cost").value || ""

    const author = document.getElementById("submit-name").value || "Anonymous"

    const photoInput = document.getElementById("submit-photo")

    const file = photoInput.files[0] || null


    /* -----------------------------------------
       Validate required fields
    ----------------------------------------- */

    if (!code || !model || !solution) {

        alert("Please fill in required fields.")

        return

    }


    try {

        let imageURL = null

        const postId = Date.now().toString()


        /* -----------------------------------------
           Upload image to Firebase Storage
        ----------------------------------------- */

        if (file && firebaseInitialized) {

            imageURL = await uploadImageToFirebase(file, postId)

        }


        /* -----------------------------------------
           Build post object
        ----------------------------------------- */

        const postData = {

            code,
            model,
            year,
            solution,
            cost,
            author,
            image: imageURL,
            date: new Date().toISOString(),
            likes: 0

        }


        /* -----------------------------------------
           Save to Firebase
        ----------------------------------------- */

        if (firebaseInitialized) {

            await submitPostToFirebase(postData)

            alert("✅ Your fix has been shared!")

        } else {

            /* fallback if Firebase unavailable */

            communityPosts.push(postData)

            displayCommunityPosts(communityPosts)

            alert("Saved locally (Firebase offline).")

        }


        closeSubmissionModal()

    } catch (err) {

        console.error("Submit error:", err)

        alert("❌ Error submitting your fix.")

    }

}



/* =========================================================
   FIREBASE DATABASE FUNCTIONS
========================================================= */


/* Submit post to Firebase database */
async function submitPostToFirebase(postData) {

    const postsRef = getCommunityPostsRef()

    const newPost = postsRef.push()

    await newPost.set(postData)

}



/* Load posts from Firebase in realtime */
function loadCommunityPostsFromFirebase() {

    const postsRef = getCommunityPostsRef()

    postsRef.on("value", snapshot => {

        const data = snapshot.val()

        if (!data) {

            communityPosts = []

        } else {

            communityPosts = Object.keys(data).map(key => ({

                id: key,
                ...data[key]

            }))

        }

        displayCommunityPosts(communityPosts)

    })

}



/* Upload image to Firebase storage */
async function uploadImageToFirebase(file, postId) {

    const storageRef = firebaseStorage.ref()

    const imageRef = storageRef.child(`community-images/${postId}-${file.name}`)

    await imageRef.put(file)

    const url = await imageRef.getDownloadURL()

    return url

}



/* =========================================================
   COMMUNITY POST DISPLAY
========================================================= */

function displayCommunityPosts(posts) {

    const container = document.getElementById("community-grid")

    if (!container) return


    if (posts.length === 0) {

        container.innerHTML = "<p>No fixes shared yet.</p>"

        return

    }

    function toggleCustomField(select, fieldId) {

  const field = document.getElementById(fieldId);

  if (select.value === "other") {
    field.classList.remove("hidden");
  } else {
    field.classList.add("hidden");
  }

}



/* Preview Photo */
function previewPhoto(input){

  const file = input.files[0];
  const preview = document.getElementById("photo-preview");
  const container = document.getElementById("photo-preview-container");

  if(!file) return;

  const reader = new FileReader();

  reader.onload = function(e){
    preview.src = e.target.result;
    preview.classList.remove("hidden");
    container.classList.add("hidden");
  };

  reader.readAsDataURL(file);
}

function handleDragOver(event){
  event.preventDefault();
}

function handleDrop(event){
  event.preventDefault();

  const file = event.dataTransfer.files[0];
  const input = document.getElementById("submit-photo");

  input.files = event.dataTransfer.files;

  previewPhoto(input);
}


    container.innerHTML = posts.map(post => `

        <div class="bg-white rounded-xl shadow-md border p-5">

            ${post.image ? `<img src="${post.image}" class="w-full h-48 object-cover rounded-lg mb-3">` : ""}

            <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">${post.code}</span>

            <h3 class="font-bold mt-2">${post.model} ${post.year || ""}</h3>

            <p class="text-sm text-slate-700 mt-2">${post.solution}</p>

            <div class="text-sm text-slate-500 mt-2">${post.author}</div>

        </div>

    `).join("")


    if (window.lucide) {

        lucide.createIcons()

    }

}