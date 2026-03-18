// DTC Database - In production, this would come from an API
const dtcDatabase = {
    "P0171": {
        code: "P0171",
        description: "System Too Lean (Bank 1)",
        system: "Engine",
        severity: "medium",
        symptoms: ["Check Engine Light On", "Reduced Power", "Poor Fuel Economy", "Rough Idle", "Hard Starting"],
        causes: ["Vacuum Leak", "MAF Sensor Failure", "O2 Sensor Fault", "Fuel Pump Weak", "Fuel Filter Clogged"],
        fixes: ["Check for Vacuum Leaks", "Test MAF Sensor", "Replace O2 Sensors", "Check Fuel Pressure", "Clean Fuel System"],
        occurrence: "Common"
    },
    "U0100": {
        code: "U0100",
        description: "Lost Communication with ECM/PCM",
        system: "Electrical",
        severity: "high",
        symptoms: ["Check Engine Light", "Transmission Issues", "No Start Condition", "Reduced Power Mode"],
        causes: ["Wiring Harness Damage", "ECM Failure", "CAN Bus Fault", "Power Supply Issue", "Ground Connection"],
        fixes: ["Check CAN Bus Communications", "Inspect Wiring Harness", "Test ECM Power Supply", "Reset ECU", "Update Software"],
        occurrence: "Less Common"
    },
    "C0035": {
        code: "C0035",
        description: "Right Front Wheel Speed Sensor Circuit",
        system: "ABS",
        severity: "critical",
        symptoms: ["ABS Light On", "Traction Control Disabled", "ESP Warning", "Brake Issues", "Speedometer Inaccurate"],
        causes: ["Sensor Failure", "Wiring Damage", "Tone Ring Damage", "ABS Module Fault", "Corrosion"],
        fixes: ["Replace Wheel Speed Sensor", "Check Wiring Harness", "Inspect Tone Ring", "Test ABS Module", "Clear Codes"],
        occurrence: "Common"
    },
    "P0300": {
        code: "P0300",
        description: "Random/Multiple Cylinder Misfire Detected",
        system: "Engine",
        severity: "high",
        symptoms: ["Engine Misfire", "Check Engine Light Flashing", "Rough Running", "Loss of Power", "Poor Acceleration"],
        causes: ["Ignition Coil Failure", "Spark Plug Fault", "Fuel Injector Issue", "Vacuum Leak", "Compression Loss"],
        fixes: ["Check Ignition System", "Replace Spark Plugs", "Test Fuel Injectors", "Compression Test", "Update ECU Software"],
        occurrence: "Very Common"
    },
    "P0420": {
        code: "P0420",
        description: "Catalyst System Efficiency Below Threshold",
        system: "Engine",
        severity: "medium",
        symptoms: ["Check Engine Light", "Reduced Performance", "Increased Emissions", "Fuel Smell", "Poor MPG"],
        causes: ["Failed Catalytic Converter", "O2 Sensor Fault", "Exhaust Leak", "Engine Misfire", "Fuel Contamination"],
        fixes: ["Replace Catalytic Converter", "Test O2 Sensors", "Check for Exhaust Leaks", "Fuel System Service", "Reset Adaptations"],
        occurrence: "Common"
    },
    "B1044": {
        code: "B1044",
        description: "Airbag Resistance Too Low",
        system: "Body",
        severity: "low",
        symptoms: ["Airbag Warning Light", "SRS System Disabled", "Seat Belt Warning", "No Airbag Deployment"],
        causes: ["Faulty Airbag", "Clock Spring Damage", "Wiring Short Circuit", "SRS Module Fault", "Connector Issue"],
        fixes: ["Diagnose Airbag Circuit", "Replace Clock Spring", "Repair Wiring Harness", "Reset SRS Module", "Professional Scan"],
        occurrence: "Rare"
    },
    "P0700": {
        code: "P0700",
        description: "Transmission Control System Malfunction",
        system: "Transmission",
        severity: "high",
        symptoms: ["Transmission Warning Light", "Limp Mode", "Harsh Shifting", "No Reverse Gear", "Slipping Gears"],
        causes: ["Transmission Control Module Fault", "Valve Body Issues", "Solenoid Failure", "Low Fluid Level", "Wiring Problems"],
        fixes: ["Scan Transmission Module", "Check Fluid Level/Condition", "Test Solenoids", "Update TCM Software", "Valve Body Service"],
        occurrence: "Common"
    }
};

// DOM Elements
const mainSearch = document.getElementById('mainSearch');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const filterBtns = document.querySelectorAll('.filter-btn');
const recentSearches = document.getElementById('recentSearches');
const clearRecentBtn = document.getElementById('clearRecent');
const template = document.getElementById('dtcResultTemplate');

// Recent Searches from Local Storage
let recentCodes = JSON.parse(localStorage.getItem('audiRecentSearches')) || ['P0171', 'U0100', 'C0035'];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateRecentSearches();
    setupEventListeners();
    populateAutocomplete();
    
    // Show initial state message
    searchResults.innerHTML = `
        <div class="text-center py-12 text-gray-500">
            <i data-lucide="search" class="w-16 h-16 mx-auto mb-4 opacity-20"></i>
            <p>Enter a DTC code above to begin diagnostic analysis</p>
            <p class="text-sm mt-2 text-gray-600">Try: P0171, U0100, C0035, P0300, P0420</p>
        </div>
    `;
    lucide.createIcons();
});

// Event Listeners Setup
function setupEventListeners() {
    // Search button click
    searchBtn.addEventListener('click', performSearch);
    
    // Enter key in search field
    mainSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active', 'bg-[var(--audi-blue)]'));
            this.classList.add('active', 'bg-[var(--audi-blue)]');
            // Filter logic would go here
        });
    });
    
    // Clear recent searches
    clearRecentBtn.addEventListener('click', clearRecentSearches);
    
    // Search field autocomplete
    mainSearch.addEventListener('input', showAutocomplete);
    
    // Close autocomplete on click outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.autocomplete-container')) {
            hideAutocomplete();
        }
    });
}

// Perform DTC Search
function performSearch() {
    const searchTerm = mainSearch.value.trim().toUpperCase();
    
    if (!searchTerm) {
        showError("Please enter a DTC code");
        return;
    }
    
    if (!dtcDatabase[searchTerm]) {
        showError(`Code "${searchTerm}" not found in database. Try: P0171, U0100, C0035`);
        return;
    }
    
    displayDTCResult(dtcDatabase[searchTerm]);
    addToRecentSearches(searchTerm);
    hideAutocomplete();
}

// Display DTC Result
function displayDTCResult(dtc) {
    const clone = template.content.cloneNode(true);
    const result = clone.querySelector('.slide-in');
    
    // Fill in data
    result.querySelector('.code-display').textContent = dtc.code;
    result.querySelector('.description-display').textContent = dtc.description;
    
    // Severity badge
    const severityBadge = result.querySelector('.severity-badge');
    severityBadge.textContent = dtc.severity.charAt(0).toUpperCase() + dtc.severity.slice(1);
    severityBadge.classList.add(`severity-${dtc.severity}`);
    
    // Symptoms list
    const symptomsList = result.querySelector('.symptoms-list');
    dtc.symptoms.forEach(symptom => {
        const li = document.createElement('li');
        li.className = 'flex items-start';
        li.innerHTML = `
            <i data-lucide="check-circle" class="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-500"></i>
            <span>${symptom}</span>
        `;
        symptomsList.appendChild(li);
    });
    
    // Causes list
    const causesList = result.querySelector('.causes-list');
    dtc.causes.forEach(cause => {
        const li = document.createElement('li');
        li.className = 'flex items-start';
        li.innerHTML = `
            <i data-lucide="x-circle" class="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[var(--audi-red)]"></i>
            <span>${cause}</span>
        `;
        causesList.appendChild(li);
    });
    
    // Fixes list
    const fixesList = result.querySelector('.fixes-list');
    dtc.fixes.forEach(fix => {
        const li = document.createElement('li');
        li.className = 'flex items-start';
        li.innerHTML = `
            <i data-lucide="wrench" class="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[var(--audi-blue)]"></i>
            <span>${fix}</span>
        `;
        fixesList.appendChild(li);
    });
    
    // System info
    result.querySelector('.system-display').textContent = dtc.system;
    result.querySelector('.occurrence-display').textContent = `Occurrence: ${dtc.occurrence}`;
    
    // Button events
    const saveBtn = result.querySelector('.save-btn');
    const shareBtn = result.querySelector('.share-btn');
    
    saveBtn.addEventListener('click', function() {
        saveDTCToFavorites(dtc.code);
        this.innerHTML = '<i data-lucide="bookmark" class="w-5 h-5 text-yellow-500"></i>';
        showNotification(`${dtc.code} saved to favorites`);
    });
    
    shareBtn.addEventListener('click', function() {
        shareDTCResult(dtc);
    });
    
    // Clear previous results and add new one
    searchResults.innerHTML = '';
    searchResults.appendChild(result);
    
    // Recreate icons in the new content
    lucide.createIcons();
    
    // Scroll to results
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Show error message
function showError(message) {
    searchResults.innerHTML = `
        <div class="slide-in glass-effect rounded-2xl p-8 text-center">
            <i data-lucide="alert-circle" class="w-16 h-16 mx-auto mb-4 text-[var(--audi-red)]"></i>
            <h3 class="text-xl font-bold mb-2">Code Not Found</h3>
            <p class="text-gray-400 mb-4">${message}</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                <button class="suggestion-btn bg-[var(--audi-light-gray)] hover:bg-[var(--audi-blue)]/20 px-4 py-2 rounded-lg transition-colors">P0171</button>
                <button class="suggestion-btn bg-[var(--audi-light-gray)] hover:bg-[var(--audi-blue)]/20 px-4 py-2 rounded-lg transition-colors">U0100</button>
                <button class="suggestion-btn bg-[var(--audi-light-gray)] hover:bg-[var(--audi-blue)]/20 px-4 py-2 rounded-lg transition-colors">C0035</button>
                <button class="suggestion-btn bg-[var(--audi-light-gray)] hover:bg-[var(--audi-blue)]/20 px-4 py-2 rounded-lg transition-colors">P0300</button>
            </div>
        </div>
    `;
    
    // Add event listeners to suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            mainSearch.value = this.textContent;
            performSearch();
        });
    });
    
    lucide.createIcons();
}

// Add to recent searches
function addToRecentSearches(code) {
    if (!recentCodes.includes(code)) {
        recentCodes.unshift(code);
        if (recentCodes.length > 6) {
            recentCodes.pop();
        }
        localStorage.setItem('audiRecentSearches', JSON.stringify(recentCodes));
        updateRecentSearches();
    }
}

// Update recent searches display
function updateRecentSearches() {
    recentSearches.innerHTML = '';
    
    if (recentCodes.length === 0) {
        recentSearches.innerHTML = `
            <div class="col-span-full text-center py-8 text-gray-500">
                <i data-lucide="history" class="w-12 h-12 mx-auto mb-4 opacity-20"></i>
                <p>No recent searches</p>
            </div>
        `;
        return;
    }
    
    recentCodes.forEach(code => {
        if (dtcDatabase[code]) {
            const dtc = dtcDatabase[code];
            const card = document.createElement('div');
            card.className = 'glass-effect rounded-xl p-5 hover:bg-white/5 transition-all cursor-pointer';
            card.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <span class="text-xl font-bold">${dtc.code}</span>
                    <span class="text-xs text-gray-500">${getTimeAgo()}</span>
                </div>
                <h4 class="font-bold mb-1 truncate">${dtc.description}</h4>
                <div class="flex items-center justify-between text-sm">
                    <span class="bg-[var(--audi-light-gray)] px-2 py-1 rounded">${dtc.system}</span>
                    <span class="severity-${dtc.severity}">${dtc.severity.charAt(0).toUpperCase() + dtc.severity.slice(1)}</span>
                </div>
            `;
            
            card.addEventListener('click', function() {
                mainSearch.value = dtc.code;
                performSearch();
            });
            
            recentSearches.appendChild(card);
        }
    });
    
    lucide.createIcons();
}

// Clear recent searches
function clearRecentSearches() {
    recentCodes = [];
    localStorage.setItem('audiRecentSearches', JSON.stringify(recentCodes));
    updateRecentSearches();
    showNotification("Recent searches cleared");
}

// Autocomplete functionality
function populateAutocomplete() {
    // This would normally fetch from API
    // For now, use our database keys
}

function showAutocomplete() {
    const searchTerm = mainSearch.value.toUpperCase();
    if (searchTerm.length < 1) {
        hideAutocomplete();
        return;
    }
    
    const matches = Object.keys(dtcDatabase).filter(code => 
        code.includes(searchTerm)
    ).slice(0, 5);
    
    if (matches.length === 0) {
        hideAutocomplete();
        return;
    }
    
    // Remove existing autocomplete if present
    hideAutocomplete();
    
    // Create autocomplete container
    const autocomplete = document.createElement('div');
    autocomplete.className = 'autocomplete-container absolute left-0 right-0 mt-1 z-50';
    autocomplete.innerHTML = `
        <div class="glass-effect rounded-xl overflow-hidden border border-white/10 shadow-xl">
            <div class="divide-y divide-white/10">
                ${matches.map(code => `
                    <div class="autocomplete-item p-4 hover:bg-white/5 cursor-pointer transition-colors flex justify-between items-center" data-code="${code}">
                        <div>
                            <div class="font-bold">${code}</div>
                            <div class="text-sm text-gray-400">${dtcDatabase[code].description}</div>
                        </div>
                        <span class="text-xs bg-[var(--audi-light-gray)] px-2 py-1 rounded">${dtcDatabase[code].system}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Position below search input
    const searchContainer = mainSearch.closest('.relative');
    searchContainer.appendChild(autocomplete);
    
    // Add click events to items
    autocomplete.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('click', function() {
            mainSearch.value = this.getAttribute('data-code');
            performSearch();
        });
    });
}

function hideAutocomplete() {
    const existing = document.querySelector('.autocomplete-container');
    if (existing) {
        existing.remove();
    }
}

// Helper functions
function getTimeAgo() {
    const times = ['Just now', '10 min ago', '1 hour ago', 'Yesterday', '2 days ago'];
    return times[Math.floor(Math.random() * times.length)];
}

function saveDTCToFavorites(code) {
    let favorites = JSON.parse(localStorage.getItem('audiFavorites')) || [];
    if (!favorites.includes(code)) {
        favorites.push(code);
        localStorage.setItem('audiFavorites', JSON.stringify(favorites));
    }
}

function shareDTCResult(dtc) {
    if (navigator.share) {
        navigator.share({
            title: `Audi DTC: ${dtc.code}`,
            text: `Check out this Audi diagnostic trouble code: ${dtc.code} - ${dtc.description}`,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        const text = `Audi DTC ${dtc.code}: ${dtc.description}\n\nSymptoms: ${dtc.symptoms.join(', ')}\nCauses: ${dtc.causes.join(', ')}\nFixes: ${dtc.fixes.join(', ')}`;
        navigator.clipboard.writeText(text);
        showNotification("Diagnostic information copied to clipboard!");
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 glass-effect px-6 py-4 rounded-xl flex items-center space-x-3 z-50 slide-in';
    notification.innerHTML = `
        <i data-lucide="check-circle" class="w-5 h-5 text-green-500"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    lucide.createIcons();
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(10px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize search suggestions in hero section
document.querySelectorAll('#dtcSearch, .suggestion-btn').forEach(element => {
    if (element.id === 'dtcSearch') {
        element.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                mainSearch.value = this.value;
                document.querySelector('#search').scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => performSearch(), 500);
            }
        });
    } else if (element.classList.contains('suggestion-btn')) {
        element.addEventListener('click', function() {
            mainSearch.value = this.textContent;
            document.querySelector('#search').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => performSearch(), 500);
        });
    }
});
