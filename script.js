// State management
let selectedSymptoms = [];
let currentModelFilter = null;

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeSymptomsGrid();
    initializeModelGrid();
    displayCommonCodes();
    
    // Check for URL parameters for direct code access
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');
    if (codeParam) {
        const code = dtcDatabase.find(c => c.code.toLowerCase() === codeParam.toLowerCase());
        if (code) {
            showCodeDetail(code);
        }
    }
});

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
                <h2 class="
