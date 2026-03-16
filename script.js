// State management
let selectedSymptoms = [];
let currentModelFilter = null;

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeSymptomsGrid();
    initializeModelGrid();
    displayCommonCodes();
    initializeSubmissionForm();
    handleUrlParams();
});

// Populate submission form dropdowns
function initializeSubmissionForm() {
    const codeSelect = document.getElementById('submit-code');
    const modelSelect = document.getElementById('submit-model');
    
    if (codeSelect) {
        dtcDatabase.forEach(d => {
            const option = document.createElement('option');
            option.value = d.code;
            option.textContent = `${d.code} - ${d.description}`;
            codeSelect.appendChild(option);
        });
    }
    
    if (modelSelect) {
        audiModels.forEach(m => {
            const option = document.createElement('option');
            option.value = m.id;
            option.textContent = m.name;
            modelSelect.appendChild(option);
        });
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Initialize symptoms grid
function initializeSymptomsGrid() {
    const grid = document.getElementById('symptom-grid');
    symptomsList.forEach(symptom => {
        const btn = document.createElement('button');
        btn.className = `symptom-tag p-3 rounded-lg border-2 border-slate-200 text-sm font-medium text-slate-700 hover:border-red-500 hover:text-red-600 bg-white ${selectedSymptoms.includes(symptom) ? 'border-red-500 bg-red-50 text-red-700' : ''}`;
        btn.textContent = symptom.charAt(0).toUpperCase() + symptom.slice(1);
        btn.onclick = () => toggleSymptom(symptom, btn);
        grid.appendChild(btn);
    });
}

// Toggle symptom selection
function toggleSymptom(symptom, btn) {
    if (selectedSymptoms.includes(symptom)) {
        selectedSymptoms = selectedSymptoms.filter(s => s !== symptom);
        btn.classList.remove('border-red-500', 'bg-red-50', 'text-red-700');
    } else {
        selectedSymptoms.push(symptom);
        btn.classList.add('border-red-500', 'bg-red-50', 'text-red-700');
    }
    updateSelectedSymptomsDisplay();
}

// Update selected symptoms display
function updateSelectedSymptomsDisplay() {
    const container = document.getElementById('selected-symptoms');
    const tags = document.getElementById('symptom-tags');
    
    if (selectedSymptoms.length === 0) {
        container.classList.add('hidden');
        return;
    }
    
    container.classList.remove('hidden');
    tags.innerHTML = selectedSymptoms.map(s => `
        <span class="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
            ${s}
            <button onclick="removeSymptom('${s}')" class="hover:text-red-900">
                <i data-lucide="x" class="w-3 h-3"></i>
            </button>
        </span>
    `).join('');
    lucide.createIcons();
}

// Remove symptom
function removeSymptom(symptom) {
    selectedSymptoms = selectedSymptoms.filter(s => s !== symptom);
    updateSelectedSymptomsDisplay();
    // Update button state
    const buttons = document.querySelectorAll('.symptom-tag');
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase() === symptom) {
            btn.classList.remove('border-red-500', 'bg-red-50', 'text-red-700');
        }
    });
}

// Find codes by symptoms
function findCodesBySymptoms() {
    if (selectedSymptoms.length === 0) {
        alert('Please select at least one symptom');
        return;
    }
    
    const results = dtcDatabase.filter(code => {
        const codeSymptoms = code.symptoms.map(s => s.toLowerCase());
        return selectedSymptoms.some(s => codeSymptoms.includes(s.toLowerCase()));
    });
    
    displaySearchResults(results, `Codes matching symptoms: ${selectedSymptoms.join(', ')}`);
}

// Initialize model grid
function initializeModelGrid() {
    const grid = document.getElementById('model-grid');
    audiModels.forEach(model => {
        const card = document.createElement('div');
        card.className = 'model-card bg-white rounded-xl border-2 border-slate-200 p-4 cursor-pointer hover:shadow-md';
        card.innerHTML = `
            <div class="flex items-center justify-between mb-2">
                <h3 class="font-bold text-lg text-slate-900">${model.id}</h3>
                <i data-lucide="chevron-right" class="w-5 h-5 text-slate-400"></i>
            </div>
            <p class="text-xs text-slate-500 mb-2">${model.years}</p>
            <p class="text-xs text-slate-600">${model.engine}</p>
        `;
        card.onclick = () => filterByModel(model.id);
        grid.appendChild(card);
    });
    lucide.createIcons();
}

// Filter by model
function filterByModel(modelId) {
    currentModelFilter = modelId;
    const results = dtcDatabase.filter(code => 
        code.affectedModels.includes(modelId) || code.affectedModels.includes('All Models')
    );
    
    // Show model specific section
    document.getElementById('model-specific-codes').classList.remove('hidden');
    document.getElementById('model-title').textContent = `Common DTCs for Audi ${modelId}`;
    
    const list = document.getElementById('model-codes-list');
    list.innerHTML = results.map(code => createCodeCard(code)).join('');
    lucide.createIcons();
    
    // Scroll to results
    document.getElementById('model-specific-codes').scrollIntoView({ behavior: 'smooth' });
}

// Clear model filter
function clearModelFilter() {
    currentModelFilter = null;
    document.getElementById('model-specific-codes').classList.add('hidden');
}

// Display common codes
function displayCommonCodes() {
    const container = document.getElementById('common-codes-grid');
    const common = dtcDatabase.filter(code => commonCodes.includes(code.code));
    container.innerHTML = common.map(code => createCodeCard(code)).join('');
    lucide.createIcons();
}

// Handle search
function handleSearch(query) {
    const clearBtn = document.getElementById('clear-search');
    if (query.length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
        showHome();
        return;
    }
    
    if (query.length < 2) return;
    
    const lowerQuery = query.toLowerCase();
    
    // Search by code
    let results = dtcDatabase.filter(code => 
        code.code.toLowerCase().includes(lowerQuery)
    );
    
    // If no code matches, search by description, symptoms, or causes
    if (results.length === 0) {
        results = dtcDatabase.filter(code => 
            code.description.toLowerCase().includes(lowerQuery) ||
            code.symptoms.some(s => s.toLowerCase().includes(lowerQuery)) ||
            code.causes.some(c => c.toLowerCase().includes(lowerQuery)) ||
            code.affectedModels.some(m => m.toLowerCase().includes(lowerQuery))
        );
    }
    
    displaySearchResults(results, `Search results for "${query}"`);
}

// Quick search
function quickSearch(term) {
    document.getElementById('main-search').value = term;
    handleSearch(term);
}

// Clear search
function clearSearch() {
    document.getElementById('main-search').value = '';
    document.getElementById('clear-search').classList.add('hidden');
    showHome();
}

// Display search results
function displaySearchResults(results, title) {
    const container = document.getElementById('search-results-container');
    const resultsDiv = document.getElementById('search-results');
    const countSpan = document.getElementById('result-count');
    const homeContent = document.getElementById('home-content');
    const detailView = document.getElementById('code-detail-view');
    
    homeContent.classList.add('hidden');
    detailView.classList.add('hidden');
    container.classList.remove('hidden');
    
    countSpan.textContent = `(${results.length} found)`;
    
    if (results.length === 0) {
        resultsDiv.innerHTML = `
            <div class="col-span-full text-center py-12 bg-white rounded-xl border border-slate-200">
                <i data-lucide="search-x" class="w-16 h-16 text-slate-300 mx-auto mb-4"></i>
                <h3 class="text-lg font-semibold text-slate-900 mb-2">No codes found</h3>
                <p class="text-slate-600">Try searching with different keywords or check the spelling.</p>
                <button onclick="clearSearch()" class="mt-4 text-red-600 hover:text-red-700 font-medium">Clear Search</button>
            </div>
        `;
    } else {
        resultsDiv.innerHTML = results.map(code => createCodeCard(code)).join('');
    }
    
    lucide.createIcons();
    window.scrollTo({ top: document.getElementById('search-section').offsetTop - 100, behavior: 'smooth' });
}

// Create code card HTML
function createCodeCard(code) {
    const categoryClass = `category-${code.category.toLowerCase()}`;
    const difficultyClass = code.difficulty === 'DIY' ? 'difficulty-easy' : 
                           code.difficulty === 'Intermediate' ? 'difficulty-medium' : 'difficulty-hard';
    
    return `
        <div class="code-card bg-white rounded-xl border border-slate-200 p-6 cursor-pointer ${categoryClass}" onclick="showCodeDetailByCode('${code.code}')">
            <div class="flex justify-between items-start mb-3">
                <div>
                    <span class="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded mb-2">${code.category}</span>
                    <h3 class="text-2xl font-bold text-slate-900">${code.code}</h3>
                </div>
                <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold ${difficultyClass}">
                    ${code.difficulty}
                </span>
            </div>
            <p class="text-slate-700 font-medium mb-3">${code.description}</p>
            <p class="text-sm text-slate-600 mb-4 line-clamp-2">${code.detailedExplanation}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
                ${code.symptoms.slice(0, 3).map(s => `
                    <span class="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">${s}</span>
                `).join('')}
                ${code.symptoms.length > 3 ? `<span class="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">+${code.symptoms.length - 3} more</span>` : ''}
            </div>
            
            <div class="flex justify-between items-center pt-3 border-t border-slate-100">
                <span class="text-sm font-semibold text-slate-900">${code.costRange}</span>
                <span class="text-sm text-red-600 font-medium flex items-center gap-1">
                    View Details <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </span>
            </div>
        </div>
    `;
}

// Show code detail by code string
function showCodeDetailByCode(codeStr) {
    const code = dtcDatabase.find(c => c.code === codeStr);
    if (code) showCodeDetail(code);
}

// Show code detail view
function showCodeDetail(code) {
    const container = document.getElementById('search-results-container');
    const homeContent = document.getElementById('home-content');
    const detailView = document.getElementById('code-detail-view');
    const content = document.getElementById('code-detail-content');
    
    container.classList.add('hidden');
    homeContent.classList.add('hidden');
    detailView.classList.remove('hidden');
    
    const difficultyClass = code.difficulty === 'DIY' ? 'difficulty-easy' : 
                           code.difficulty === 'Intermediate' ? 'difficulty-medium' : 'difficulty-hard';
    
    const categoryColors = {
        'Powertrain': 'border-red-500 bg-red-50 text-red-700',
        'Body': 'border-blue-500 bg-blue-50 text-blue-700',
        'Chassis': 'border-green-500 bg-green-50 text-green-700',
        'Network': 'border-amber-500 bg-amber-50 text-amber-700'
    };
    
    content.innerHTML = `
        <!-- Header -->
        <div class="gradient-bg text-white p-8 md:p-12">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                    <span class="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${categoryColors[code.category] || 'bg-white text-slate-900'}">
                        ${code.category} Category
                    </span>
                    <h1 class="text-4xl md:text-5xl font-bold mb-2">${code.code}</h1>
                    <p class="text-xl text-slate-300">${code.description}</p>
                </div>
                <div class="flex gap-2">
                    <button onclick="copyCodeLink('${code.code}')" class="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
                        <i data-lucide="share-2" class="w-4 h-4"></i> Share
                    </button>
                </div>
            </div>
            <div class="flex flex-wrap gap-4 mt-6">
                <span class="flex items-center gap-2 text-sm">
                    <i data-lucide="wrench" class="w-4 h-4"></i>
                    Difficulty: <span class="${difficultyClass} px-2 py-1 rounded text-xs font-bold">${code.difficulty}</span>
                </span>
                <span class="flex items-center gap-2 text-sm">
                    <i data-lucide="dollar-sign" class="w-4 h-4"></i>
                    Est. Cost: ${code.costRange}
                </span>
                <span class="flex items-center gap-2 text-sm">
                    <i data-lucide="trending-up" class="w-4 h-4"></i>
                    Commonality: ${code.commonality || 'Medium'}
                </span>
            </div>
        </div>
        
        <div class="p-8 md:p-12 space-y-8">
            <!-- Description -->
            <section>
                <h2 class="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i data-lucide="file-text" class="w-6 h-6 text-red-500"></i>
                    Detailed Explanation
                </h2>
                <p class="text-slate-700 leading-relaxed text-lg">${code.detailedExplanation}</p>
            </section>

            <!-- Symptoms -->
            <section class="bg-red-50 rounded-xl p-6 border border-red-100">
                <h2 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i data-lucide="activity" class="w-5 h-5 text-red-600"></i>
                    Common Symptoms
                </h2>
                <div class="grid md:grid-cols-2 gap-3">
                    ${code.symptoms.map(s => `
                        <div class="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                            <i data-lucide="alert-circle" class="w-4 h-4 text-red-500"></i>
                            <span class="text-slate-700 capitalize">${s}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Causes -->
            <section>
                <h2 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i data-lucide="search" class="w-5 h-5 text-amber-500"></i>
                    Most Common Causes
                </h2>
                <div class="space-y-3">
                    ${code.causes.map((cause, index) => `
                        <div class="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                            <div class="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold text-sm">
                                ${index + 1}
                            </div>
                            <div>
                                <p class="text-slate-700">${cause}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Fixes -->
            <section>
                <h2 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i data-lucide="check-circle" class="w-5 h-5 text-green-500"></i>
                    Recommended Fixes
                </h2>
                <div class="space-y-3">
                    ${code.fixes.map((fix, index) => `
                        <div class="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                            <div class="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm">
                                ${index + 1}
                            </div>
                            <div>
                                <p class="text-slate-700">${fix}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- DIY Steps -->
            <section class="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h2 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i data-lucide="wrench" class="w-5 h-5 text-blue-600"></i>
                    DIY Diagnostic Steps
                </h2>
                <div class="space-y-4">
                    ${code.diySteps.map(step => `
                        <div class="flex gap-3">
                            <div class="flex-shrink-0 mt-1">
                                <i data-lucide="chevron-right" class="w-5 h-5 text-blue-500"></i>
                            </div>
                            <p class="text-slate-700">${step}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Related Codes -->
            ${code.relatedCodes.length > 0 ? `
            <section>
                <h2 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i data-lucide="link" class="w-5 h-5 text-purple-500"></i>
                    Related Codes
                </h2>
                <div class="flex flex-wrap gap-3">
                    ${code.relatedCodes.map(rc => `
                        <button onclick="showCodeDetailByCode('${rc}')" class="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg border border-purple-200 hover:bg-purple-100 transition font-medium">
                            ${rc}
                        </button>
                    `).join('')}
                </div>
            </section>
            ` : ''}

            <!-- Affected Models -->
            <section>
                <h2 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i data-lucide="car" class="w-5 h-5 text-slate-500"></i>
                    Commonly Affected Models
                </h2>
                <div class="flex flex-wrap gap-2">
                    ${code.affectedModels.map(model => `
                        <span class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                            Audi ${model}
                        </span>
                    `).join('')}
                </div>
            </section>

            <!-- Warning -->
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
                <i data-lucide="alert-triangle" class="w-6 h-6 text-amber-500 flex-shrink-0 mt-1"></i>
                <div>
                    <h3 class="font-bold text-amber-900 mb-1">Important Safety Notice</h3>
                    <p class="text-sm text-amber-800 leading-relaxed">
                        This information is for educational purposes only. Always use proper safety equipment and procedures when working on your vehicle. If you're unsure about any repair, consult a certified Audi technician. Some repairs may affect your warranty or emissions compliance.
                    </p>
                </div>
            </div>
        </div>
    `;
    
    lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show home content
function showHome() {
    document.getElementById('search-results-container').classList.add('hidden');
    document.getElementById('code-detail-view').classList.add('hidden');
    document.getElementById('home-content').classList.remove('hidden');
    document.getElementById('main-search').value = '';
    document.getElementById('clear-search').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Back to search results
function backToSearch() {
    document.getElementById('code-detail-view').classList.add('hidden');
    document.getElementById('search-results-container').classList.remove('hidden');
    window.scrollTo({ top: document.getElementById('search-section').offsetTop - 100, behavior: 'smooth' });
}

// Copy code link to clipboard
function copyCodeLink(code) {
    const url = `${window.location.origin}${window.location.pathname}?code=${code}`;
    navigator.clipboard.writeText(url).then(() => {
        alert(`Link copied to clipboard: ${url}`);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert(`Link copied to clipboard: ${url}`);
    });
}

// Handle URL parameters on load
function handleUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');
    if (codeParam) {
        const code = dtcDatabase.find(c => c.code.toLowerCase() === codeParam.toLowerCase());
        if (code) {
            showCodeDetail(code);
        }
    }
}

// Configuration
const API_URL = window.location.origin.includes('localhost')
  ? 'http://localhost:3000/api'
  : 'https://https://audi-vses.onrender.com/api';

// Community Solutions Functions
let communityPosts = [];
let currentCommunityFilter = 'all';

function initializeCommunitySection() {
    loadCommunityPosts();
}

async function loadCommunityPosts() {
    try {
        const response = await fetch(`${API_URL}/submissions?code=${currentCommunityFilter}`);
        if (!response.ok) throw new Error('Failed to load posts');
        communityPosts = await response.json();
        renderCommunityPosts();
    } catch (error) {
        console.error('Error loading community posts:', error);
        // Show empty state or error message
        const grid = document.getElementById('community-grid');
        const empty = document.getElementById('community-empty');
        grid.innerHTML = '';
        empty.classList.remove('hidden');
        empty.innerHTML = `
            <i data-lucide="wifi-off" class="w-16 h-16 text-slate-300 mx-auto mb-4"></i>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Connection Error</h3>
            <p class="text-slate-600">Unable to load community posts. Please check your connection.</p>
        `;
        lucide.createIcons();
    }
}

function openSubmissionModal() {
    document.getElementById('submission-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeSubmissionModal() {
    document.getElementById('submission-modal').classList.add('hidden');
    document.body.style.overflow = '';
    document.getElementById('submission-form').reset();
    document.getElementById('photo-preview').classList.add('hidden');
    document.getElementById('photo-preview-container').classList.remove('hidden');
}

function previewPhoto(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('photo-preview').src = e.target.result;
            document.getElementById('photo-preview').classList.remove('hidden');
            document.getElementById('photo-preview-container').classList.add('hidden');
        };
        reader.readAsDataURL(input.files[0]);
    }
}

async function submitCommunityFix(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Uploading...';
    submitBtn.disabled = true;
    lucide.createIcons();

    try {
        const formData = new FormData();
        formData.append('code', document.getElementById('submit-code').value);
        formData.append('model', document.getElementById('submit-model').value);
        formData.append('year', document.getElementById('submit-year').value);
        formData.append('solution', document.getElementById('submit-solution').value);
        formData.append('cost', document.getElementById('submit-cost').value || '');
        formData.append('name', document.getElementById('submit-name').value || 'Anonymous Audi Enthusiast');
        
        const photoFile = document.getElementById('submit-photo').files[0];
        if (photoFile) {
            formData.append('photo', photoFile);
        }

        const response = await fetch(`${API_URL}/submissions`, {
            method: 'POST',
            body: formData
        });

        

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to submit');
        }

        const newPost = await response.json();
        
        closeSubmissionModal();
        await loadCommunityPosts(); // Reload to show new post
        
        // Show success message
        alert('Thank you for sharing your fix! It has been added to the community.');
    } catch (error) {
        console.error('Error submitting fix:', error);
        alert('Error submitting your fix: ' + error.message + '\n\nPlease try again or check your connection.');
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        lucide.createIcons();
    }
}

function renderCommunityPosts() {
    const grid = document.getElementById('community-grid');
    const empty = document.getElementById('community-empty');
    
    if (communityPosts.length === 0) {
        grid.innerHTML = '';
        empty.classList.remove('hidden');
        empty.innerHTML = `
            <i data-lucide="users" class="w-16 h-16 text-slate-300 mx-auto mb-4"></i>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">No fixes shared yet</h3>
            <p class="text-slate-600">Be the first to share your DTC repair experience!</p>
        `;
        lucide.createIcons();
        return;
    }
    
    empty.classList.add('hidden');
    grid.innerHTML = communityPosts.map(post => createCommunityCard(post)).join('');
    lucide.createIcons();
}

function createCommunityCard(post) {
    const codeInfo = dtcDatabase.find(d => d.code === post.code);
    return `
        <div class="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="relative h-48 bg-slate-100 overflow-hidden">
                <img src="${post.image}" alt="Fix for ${post.code}" class="w-full h-full object-cover" loading="lazy">
                <div class="absolute top-3 left-3">
                    <span class="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full shadow-lg">
                        ${post.code}
                    </span>
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p class="text-white font-semibold">Audi ${post.model}${post.year ? ' ' + post.year : ''}</p>
                </div>
            </div>
            <div class="p-5">
                <h4 class="font-bold text-slate-900 mb-2">${codeInfo ? codeInfo.description : post.code}</h4>
                <p class="text-slate-600 text-sm mb-4 line-clamp-3">${post.solution}</p>
                
                <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div class="flex items-center gap-2 text-sm text-slate-500">
                        <i data-lucide="user" class="w-4 h-4"></i>
                        <span>${post.name}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        ${post.cost ? `<span class="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">${post.cost}</span>` : ''}
                        <button onclick="likePost(${post.id})" class="flex items-center gap-1 text-sm text-slate-500 hover:text-red-600 transition">
                            <i data-lucide="thumbs-up" class="w-4 h-4"></i>
                            <span id="likes-${post.id}">${post.likes || 0}</span>
                        </button>
                    </div>
                </div>
                <div class="mt-3 text-xs text-slate-400">
                    Posted ${post.date}
                </div>
            </div>
        </div>
    `;
}

async function filterCommunity(code) {
    currentCommunityFilter = code;
    
    // Update button styles
    document.querySelectorAll('.community-filter').forEach(btn => {
        if (btn.dataset.filter === code) {
            btn.classList.remove('bg-slate-200', 'text-slate-700');
            btn.classList.add('bg-slate-900', 'text-white');
        } else {
            btn.classList.remove('bg-slate-900', 'text-white');
            btn.classList.add('bg-slate-200', 'text-slate-700');
        }
    });
    
    await loadCommunityPosts();
}

async function likePost(id) {
    try {
        const response = await fetch(`${API_URL}/submissions/${id}/like`, {
            method: 'POST'
        });
        
        if (!response.ok) throw new Error('Failed to like post');
        
        const data = await response.json();
        const likesElement = document.getElementById(`likes-${id}`);
        if (likesElement) {
            likesElement.textContent = data.likes;
        }
        
        // Update local data
        const post = communityPosts.find(p => p.id === id);
        if (post) post.likes = data.likes;
    } catch (error) {
        console.error('Error liking post:', error);
    }
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSubmissionModal();
    }
});

// Initialize community section on load
document.addEventListener('DOMContentLoaded', () => {
    initializeCommunitySection();
});
