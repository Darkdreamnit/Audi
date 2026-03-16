// State Management
let selectedSymptoms = [];
let currentModelFilter = null;
let currentSearchResults = [];
let currentCommunityFilter = 'all';

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Firebase first
    firebaseInitialized = initFirebase();
    
    initSymptomGrid();
    initModelGrid();
    initCommonCodes();
    
    // Load community posts from Firebase if available, otherwise use fallback
    if (firebaseInitialized) {
        loadCommunityPostsFromFirebase();
    } else {
        communityPosts = [...fallbackCommunityPosts];
        initCommunityPosts();
    }
    
    initSubmissionForm();
    
    // Re-initialize Lucide icons after dynamic content
    if (window.lucide) {
        lucide.createIcons();
    }
});

// ============================================
// FIREBASE DATABASE FUNCTIONS
// ============================================

// Load community posts from Firebase with real-time updates
function loadCommunityPostsFromFirebase() {
    const postsRef = getCommunityPostsRef();
    
    postsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            // Convert object to array
            communityPosts = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));
            // Sort by date descending
            communityPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else {
            // If no data in Firebase, seed with fallback data
            communityPosts = [...fallbackCommunityPosts];
            // Optionally seed Firebase with initial data:
            // seedInitialData();
        }
        
        initCommunityPosts();
        lucide.createIcons();
    }, (error) => {
        console.error("Error loading posts:", error);
        // Fallback to static data on error
        communityPosts = [...fallbackCommunityPosts];
        initCommunityPosts();
    });
}

// Submit new post to Firebase
async function submitPostToFirebase(postData) {
    if (!firebaseInitialized) {
        throw new Error("Firebase not initialized");
    }
    
    const postsRef = getCommunityPostsRef();
    const newPostRef = postsRef.push();
    
    await newPostRef.set(postData);
    return newPostRef.key;
}

// Upload image to Firebase Storage
async function uploadImageToFirebase(file, postId) {
    if (!firebaseInitialized || !file) return null;
    
    try {
        const storageRef = firebaseStorage.ref();
        const imageRef = storageRef.child(`community-images/${postId}-${file.name}`);
        await imageRef.put(file);
        const downloadURL = await imageRef.getDownloadURL();
        return downloadURL;
    } catch (error) {
        console.error("Image upload error:", error);
        return null;
    }
}

// Like a post
async function likePost(postId) {
    if (!firebaseInitialized) return;
    
    const postRef = firebaseDatabase.ref(`community-posts/${postId}`);
    const likesRef = postRef.child('likes');
    
    // Transaction to safely increment likes
    await likesRef.transaction((currentLikes) => {
        return (currentLikes || 0) + 1;
    });
}

// Delete a post (optional - for moderation)
async function deletePost(postId) {
    if (!firebaseInitialized) return;
    
    if (confirm('Are you sure you want to delete this post?')) {
        await firebaseDatabase.ref(`community-posts/${postId}`).remove();
    }
}

// Seed initial data to Firebase (run once)
function seedInitialData() {
    if (!firebaseInitialized) return;
    
    const postsRef = getCommunityPostsRef();
    fallbackCommunityPosts.forEach(post => {
        const newRef = postsRef.push();
        newRef.set({
            ...post,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
    });
    console.log("✅ Seeded initial data to Firebase");
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Show Home Content
function showHome() {
    document.getElementById('home-content').classList.remove('hidden');
    document.getElementById('search-results-container').classList.add('hidden');
    document.getElementById('code-detail-view').classList.add('hidden');
    document.getElementById('main-search').value = '';
    document.getElementById('clear-search').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Search Functionality
function handleSearch(query) {
    const clearBtn = document.getElementById('clear-search');
    const searchContainer = document.getElementById('search-results-container');
    const homeContent = document.getElementById('home-content');
    const detailView = document.getElementById('code-detail-view');
    
    if (query.length > 0) {
        clearBtn.classList.remove('hidden');
        searchContainer.classList.remove('hidden');
        homeContent.classList.add('hidden');
        detailView.classList.add('hidden');
        
        performSearch(query);
    } else {
        clearSearch();
    }
}

function quickSearch(term) {
    const searchInput = document.getElementById('main-search');
    searchInput.value = term;
    handleSearch(term);
    searchInput.focus();
}

function clearSearch() {
    const searchInput = document.getElementById('main-search');
    searchInput.value = '';
    document.getElementById('clear-search').classList.add('hidden');
    document.getElementById('search-results-container').classList.add('hidden');
    document.getElementById('code-detail-view').classList.add('hidden');
    document.getElementById('home-content').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToSearch() {
    document.getElementById('code-detail-view').classList.add('hidden');
    document.getElementById('search-results-container').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function performSearch(query) {
    const lowerQuery = query.toLowerCase();
    const results = [];
    
    // Search in DTC codes
    dtcDatabase.forEach(dtc => {
        if (dtc.code.toLowerCase().includes(lowerQuery) ||
            dtc.name.toLowerCase().includes(lowerQuery) ||
            dtc.description.toLowerCase().includes(lowerQuery)) {
            results.push({ type: 'code', data: dtc });
        }
    });
    
    // Search by symptoms
    dtcDatabase.forEach(dtc => {
        if (dtc.symptoms.some(s => s.toLowerCase().includes(lowerQuery))) {
            if (!results.find(r => r.data.code === dtc.code)) {
                results.push({ type: 'symptom', data: dtc });
            }
        }
    });
    
    // Search by model
    if (lowerQuery.includes('a1') || lowerQuery.includes('a3') || lowerQuery.includes('a4') || 
        lowerQuery.includes('a5') || lowerQuery.includes('a6') || lowerQuery.includes('a7') || 
        lowerQuery.includes('a8') || lowerQuery.includes('q3') || lowerQuery.includes('q5') || 
        lowerQuery.includes('q7') || lowerQuery.includes('q8') || lowerQuery.includes('tt') || 
        lowerQuery.includes('s4') || lowerQuery.includes('r8')) {
        
        const modelQuery = lowerQuery.match(/[a-z][0-9]/)[0].toUpperCase();
        dtcDatabase.forEach(dtc => {
            if (dtc.commonModels.some(m => m.toLowerCase() === modelQuery) ||
                dtc.commonModels.includes(modelQuery.toUpperCase())) {
                if (!results.find(r => r.data.code === dtc.code)) {
                    results.push({ type: 'model', data: dtc });
                }
            }
        });
    }
    
    currentSearchResults = results;
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const container = document.getElementById('search-results');
    const countSpan = document.getElementById('result-count');
    
    countSpan.textContent = `(${results.length} found)`;
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 bg-white rounded-xl border border-slate-200">
                <i data-lucide="search-x" class="w-16 h-16 text-slate-300 mx-auto mb-4"></i>
                <h3 class="text-lg font-semibold text-slate-900 mb-2">No results found</h3>
                <p class="text-slate-600">Try searching with a different term or check the spelling.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    container.innerHTML = results.map(result => createCodeCard(result.data)).join('');
    lucide.createIcons();
}

function createCodeCard(dtc) {
    const categoryClass = `category-${dtc.category}`;
    const difficultyClass = `difficulty-${dtc.difficulty}`;
    const difficultyText = dtc.difficulty.charAt(0).toUpperCase() + dtc.difficulty.slice(1);
    
    return `
        <div class="code-card bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden ${categoryClass} cursor-pointer" onclick="showCodeDetail('${dtc.code}')">
            <div class="p-5">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <span class="inline-block px-2 py-1 rounded text-xs font-bold bg-slate-100 text-slate-700 mb-2">${dtc.code}</span>
                        <h3 class="font-bold text-lg text-slate-900 leading-tight">${dtc.name}</h3>
                    </div>
                    <span class="text-xs px-2 py-1 rounded-full ${difficultyClass} font-medium">${difficultyText}</span>
                </div>
                <p class="text-sm text-slate-600 mb-3 line-clamp-2">${dtc.description}</p>
                <div class="flex flex-wrap gap-1 mb-3">
                    ${dtc.symptoms.slice(0, 3).map(s => `<span class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">${s}</span>`).join('')}
                </div>
                <div class="flex justify-between items-center text-sm text-slate-500 pt-3 border-t border-slate-100">
                    <span class="flex items-center gap-1">
                        <i data-lucide="wrench" class="w-4 h-4"></i>
                        ${dtc.cost}
                    </span>
                    <span class="text-red-600 font-medium flex items-center gap-1">
                        View Details
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </span>
                </div>
            </div>
        </div>
    `;
}

// Code Detail View
function showCodeDetail(code) {
    const dtc = dtcDatabase.find(d => d.code === code);
    if (!dtc) return;
    
    document.getElementById('search-results-container').classList.add('hidden');
    document.getElementById('home-content').classList.add('hidden');
    const detailView = document.getElementById('code-detail-view');
    const content = document.getElementById('code-detail-content');
    
    const categoryColors = {
        powertrain: 'red',
        body: 'blue',
        chassis: 'green',
        network: 'amber'
    };
    
    const color = categoryColors[dtc.category] || 'slate';
    const difficultyText = dtc.difficulty.charAt(0).toUpperCase() + dtc.difficulty.slice(1);
    
    content.innerHTML = `
        <div class="bg-${color}-50 p-6 border-b border-${color}-100">
            <div class="flex flex-wrap justify-between items-start gap-4">
                <div>
                    <span class="inline-block px-3 py-1 rounded-full bg-${color}-100 text-${color}-800 text-sm font-bold mb-2">${dtc.code}</span>
                    <h1 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">${dtc.name}</h1>
                    <p class="text-slate-600">${dtc.description}</p>
                </div>
                <span class="px-4 py-2 rounded-lg bg-white shadow-sm border border-${color}-200 text-${color}-800 font-semibold">
                    ${difficultyText} Difficulty
                </span>
            </div>
        </div>
        
        <div class="p-6 md:p-8">
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                        <i data-lucide="alert-circle" class="w-5 h-5 text-red-500"></i>
                        Symptoms
                    </h3>
                    <ul class="space-y-2 mb-6">
                        ${dtc.symptoms.map(s => `<li class="flex items-start gap-2 text-slate-700"><span class="text-red-500 mt-1">•</span> ${s}</li>`).join('')}
                    </ul>
                    
                    <h3 class="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                        <i data-lucide="zap" class="w-5 h-5 text-amber-500"></i>
                        Common Causes
                    </h3>
                    <ul class="space-y-2">
                        ${dtc.causes.map(c => `<li class="flex items-start gap-2 text-slate-700"><span class="text-amber-500 mt-1">•</span> ${c}</li>`).join('')}
                    </ul>
                </div>
                
                <div>
                    <h3 class="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                        <i data-lucide="wrench" class="w-5 h-5 text-blue-500"></i>
                        Recommended Fixes
                    </h3>
                    <ul class="space-y-2 mb-6">
                        ${dtc.fixes.map(f => `<li class="flex items-start gap-2 text-slate-700"><span class="text-blue-500 mt-1">•</span> ${f}</li>`).join('')}
                    </ul>
                    
                    <div class="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <h4 class="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                            <i data-lucide="dollar-sign" class="w-5 h-5 text-green-600"></i>
                            Estimated Repair Cost
                        </h4>
                        <p class="text-2xl font-bold text-slate-900 mb-1">${dtc.cost}</p>
                        <p class="text-sm text-slate-500">Parts + Labor estimate. DIY may reduce costs significantly.</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-8 pt-6 border-t border-slate-200">
                <h3 class="font-bold text-lg text-slate-900 mb-3">Common on Models</h3>
                <div class="flex flex-wrap gap-2">
                    ${dtc.commonModels.map(m => `
                        <button onclick="filterByModel('${m}')" class="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm transition">
                            Audi ${m}
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="mt-8 pt-6 border-t border-slate-200">
                <h3 class="font-bold text-lg text-slate-900 mb-4">Community Fixes for ${dtc.code}</h3>
                <div class="grid gap-4 md:grid-cols-2">
                    ${getCommunityPostsForCode(dtc.code)}
                </div>
            </div>
        </div>
    `;
    
    detailView.classList.remove('hidden');
    lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getCommunityPostsForCode(code) {
    const posts = communityPosts.filter(p => p.code === code);
    if (posts.length === 0) {
        return `<p class="text-slate-500 col-span-full">No community posts yet for this code. <button onclick="openSubmissionModal()" class="text-red-600 underline hover:text-red-700">Be the first to share!</button></p>`;
    }
    
    return posts.map(post => `
        <div class="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <div class="flex justify-between items-start mb-2">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span class="text-red-600 font-bold text-sm">${post.author.charAt(0)}</span>
                    </div>
                    <div>
                        <p class="font-semibold text-sm text-slate-900">${post.author}</p>
                        <p class="text-xs text-slate-500">${post.model} ${post.year} • ${post.date}</p>
                    </div>
                </div>
                <span class="text-green-600 font-semibold text-sm">${post.cost}</span>
            </div>
            <p class="text-sm text-slate-700 mb-2">${post.solution}</p>
            <div class="flex items-center gap-4 text-xs text-slate-500">
                <span class="flex items-center gap-1"><i data-lucide="thumbs-up" class="w-3 h-3"></i> ${post.likes} helpful</span>
            </div>
        </div>
    `).join('');
}

// Symptom Checker
function initSymptomGrid() {
    const grid = document.getElementById('symptom-grid');
    grid.innerHTML = symptomsList.map(sym => `
        <button 
            class="symptom-btn p-3 rounded-lg border border-slate-300 bg-white hover:border-red-300 flex flex-col items-center gap-2 transition"
            onclick="toggleSymptom('${sym.id}', '${sym.name}', this)"
            data-symptom="${sym.id}"
        >
            <i data-lucide="${sym.icon}" class="w-6 h-6 text-slate-600"></i>
            <span class="text-sm font-medium text-slate-700">${sym.name}</span>
        </button>
    `).join('');
    lucide.createIcons();
}

function toggleSymptom(id, name, btn) {
    const index = selectedSymptoms.findIndex(s => s.id === id);
    
    if (index > -1) {
        selectedSymptoms.splice(index, 1);
        btn.classList.remove('active');
    } else {
        selectedSymptoms.push({ id, name });
        btn.classList.add('active');
    }
    
    updateSelectedSymptomsDisplay();
}

function updateSelectedSymptomsDisplay() {
    const container = document.getElementById('selected-symptoms');
    const tags = document.getElementById('symptom-tags');
    
    if (selectedSymptoms.length === 0) {
        container.classList.add('hidden');
    } else {
        container.classList.remove('hidden');
        tags.innerHTML = selectedSymptoms.map(s => `
            <span class="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                ${s.name}
                <button onclick="removeSymptom('${s.id}')" class="hover:text-red-900">
                    <i data-lucide="x" class="w-3 h-3"></i>
                </button>
            </span>
        `).join('');
        lucide.createIcons();
    }
}

function removeSymptom(id) {
    const btn = document.querySelector(`[data-symptom="${id}"]`);
    if (btn) btn.classList.remove('active');
    selectedSymptoms = selectedSymptoms.filter(s => s.id !== id);
    updateSelectedSymptomsDisplay();
}

function findCodesBySymptoms() {
    if (selectedSymptoms.length === 0) {
        alert('Please select at least one symptom');
        return;
    }
    
    const symptomNames = selectedSymptoms.map(s => s.name.toLowerCase());
    const results = dtcDatabase.filter(dtc => {
        return dtc.symptoms.some(s => 
            symptomNames.some(sn => s.toLowerCase().includes(sn))
        );
    });
    
    // Show results
    document.getElementById('home-content').classList.add('hidden');
    document.getElementById('search-results-container').classList.remove('hidden');
    document.getElementById('main-search').value = `Symptoms: ${selectedSymptoms.map(s => s.name).join(', ')}`;
    document.getElementById('clear-search').classList.remove('hidden');
    
    currentSearchResults = results.map(r => ({ type: 'symptom', data: r }));
    displaySearchResults(currentSearchResults);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Model Explorer
function initModelGrid() {
    const grid = document.getElementById('model-grid');
    grid.innerHTML = audiModels.map(model => `
        <button 
            class="model-card bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md text-center"
            onclick="filterByModel('${model.id}')"
        >
            <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i data-lucide="car" class="w-6 h-6 text-slate-600"></i>
            </div>
            <h3 class="font-bold text-slate-900">${model.name}</h3>
            <p class="text-xs text-slate-500 mt-1">${model.years}</p>
            <p class="text-xs text-slate-400 mt-1">${model.type}</p>
        </button>
    `).join('');
    lucide.createIcons();
}

function filterByModel(modelId) {
    const model = audiModels.find(m => m.id === modelId);
    if (!model) return;
    
    currentModelFilter = modelId;
    const results = dtcDatabase.filter(dtc => 
        dtc.commonModels.includes(modelId) || 
        dtc.commonModels.includes(model.name)
    );
    
    // Update UI
    document.getElementById('model-specific-codes').classList.remove('hidden');
    document.getElementById('model-title').textContent = `Common Issues for Audi ${model.name}`;
    
    const list = document.getElementById('model-codes-list');
    if (results.length === 0) {
        list.innerHTML = `<p class="col-span-full text-center text-slate-500">No common codes found for this model in database.</p>`;
    } else {
        list.innerHTML = results.map(dtc => createCodeCard(dtc)).join('');
    }
    
    lucide.createIcons();
    
    // Scroll to model section
    document.getElementById('models-section').scrollIntoView({ behavior: 'smooth' });
}

function clearModelFilter() {
    currentModelFilter = null;
    document.getElementById('model-specific-codes').classList.add('hidden');
}

// Common Codes
function initCommonCodes() {
    const container = document.getElementById('common-codes-grid');
    const commonCodes = dtcDatabase.filter(dtc => commonDTCs.includes(dtc.code));
    
    container.innerHTML = commonCodes.map(dtc => createCodeCard(dtc)).join('');
    lucide.createIcons();
}

// Community Section
function initCommunityPosts() {
    displayCommunityPosts(communityPosts, currentCommunityFilter);
}

function filterCommunity(filterCode) {
    currentCommunityFilter = filterCode;
    
    // Update button styles
    document.querySelectorAll('.community-filter').forEach(btn => {
        if (btn.dataset.filter === filterCode) {
            btn.classList.remove('bg-slate-200', 'text-slate-700');
            btn.classList.add('bg-slate-900', 'text-white');
        } else {
            btn.classList.remove('bg-slate-900', 'text-white');
            btn.classList.add('bg-slate-200', 'text-slate-700');
        }
    });
    
    displayCommunityPosts(communityPosts, filterCode);
}

function displayCommunityPosts(posts, filter = 'all') {
    const container = document.getElementById('community-grid');
    const emptyState = document.getElementById('community-empty');
    
    // Filter posts
    let filteredPosts = posts;
    if (filter !== 'all') {
        filteredPosts = posts.filter(p => p.code === filter);
    }
    
    if (filteredPosts.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
        return;
    }
    
    emptyState.classList.add('hidden');
    
    container.innerHTML = filteredPosts.map(post => `
        <div class="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
            ${post.image ? `
                <div class="h-48 bg-slate-100 overflow-hidden">
                    <img src="${post.image}" alt="Fix for ${post.code}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                </div>
            ` : ''}
            <div class="p-5">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <span class="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded mb-2">${post.code}</span>
                        <h3 class="font-bold text-slate-900">${post.model} ${post.year}</h3>
                    </div>
                    <span class="text-green-600 font-semibold text-sm bg-green-50 px-2 py-1 rounded">${post.cost}</span>
                </div>
                <p class="text-sm text-slate-700 mb-4 line-clamp-3">${post.solution}</p>
                <div class="flex justify-between items-center pt-3 border-t border-slate-100">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                            <span class="text-slate-600 font-bold text-sm">${post.author ? post.author.charAt(0) : 'A'}</span>
                        </div>
                        <span class="text-sm text-slate-600 font-medium">${post.author || 'Anonymous'}</span>
                    </div>
                    <button onclick="likeCommunityPost('${post.id}')" class="flex items-center gap-1 text-sm text-slate-500 hover:text-red-600 transition">
                        <i data-lucide="thumbs-up" class="w-4 h-4"></i>
                        <span id="likes-${post.id}">${post.likes || 0}</span>
                    </button>
                </div>
                <div class="mt-2 text-xs text-slate-400">
                    ${formatDate(post.date)}
                </div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

function formatDate(dateString) {
    if (!dateString) return 'Recently';
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 30) return `${diffDays} days ago`;
    return date.toLocaleDateString();
}

async function likeCommunityPost(postId) {
    // Optimistic UI update
    const likeElement = document.getElementById(`likes-${postId}`);
    if (likeElement) {
        const currentLikes = parseInt(likeElement.textContent) || 0;
        likeElement.textContent = currentLikes + 1;
    }
    
    // Update Firebase if available
    if (firebaseInitialized) {
        try {
            await likePost(postId);
        } catch (error) {
            console.error("Error liking post:", error);
            // Revert on error
            if (likeElement) {
                likeElement.textContent = currentLikes;
            }
        }
    }
}
