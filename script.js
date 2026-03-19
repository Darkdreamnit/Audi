
let currentFilter = "all";

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // Remove active class from all
    filterButtons.forEach(b => b.classList.remove("active"));

    // Add active to clicked
    btn.classList.add("active");

    // Set filter
    currentFilter = btn.dataset.filter;

    // Re-run search
    const searchInput = document.getElementById("dtcSearch");
    if (searchInput) {
      searchInput.dispatchEvent(new Event("input"));
    }
  });
});

// DOM Elements
const mainSearch = document.getElementById('mainSearch');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const filterBtns = document.querySelectorAll('.filter-btn');
const recentSearches = document.getElementById('recentSearches');
const clearRecentBtn = document.getElementById('clearRecent');
const template = document.getElementById('dtcResultTemplate');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const dtcSearch = document.getElementById('dtcSearch');

// Recent Searches from Local Storage
let recentCodes = JSON.parse(localStorage.getItem('audiRecentSearches')) || ['P0171', 'U0100', 'C0035'];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateRecentSearches();
    setupEventListeners();
    populateAutocomplete();
    
    // Show initial state message
    searchResults.innerHTML = `
        <div class="text-center py-8 md:py-12 text-gray-500">
            <i data-lucide="search" class="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-20"></i>
            <p class="text-sm md:text-base">Enter a DTC code above to begin diagnostic analysis</p>
            <p class="text-xs md:text-sm mt-2 text-gray-600">Try: P0171, U0100, C0035, P0300, P0420</p>
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
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        });
    }
    
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
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#mobileMenu') && !e.target.closest('#mobileMenuBtn')) {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
    
    // Hero search interaction
    if (dtcSearch) {
        dtcSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                mainSearch.value = this.value;
                document.querySelector('#search').scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    performSearch();
                    // Close mobile menu if open
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        const icon = mobileMenuBtn.querySelector('i');
                        icon.setAttribute('data-lucide', 'menu');
                        lucide.createIcons();
                    }
                }, 500);
            }
        });
    }
    
    // Hero suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            mainSearch.value = this.textContent;
            document.querySelector('#search').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                performSearch();
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
            }, 500);
        });
    });
}

// Perform DTC Search
function performSearch() {
    searchResults.innerHTML = "";
    searchResults.style.opacity = "0";
    searchResults.style.opacity = "1";
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
    result.style.cursor = "pointer";

result.addEventListener("click", () => {
  window.location.href = `dtc.html?code=${dtc.code}`;
});
    
    const detailsBtn = result.querySelector('.details-btn');
detailsBtn.href = `dtc.html?code=${dtc.code}`;
    
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

saveBtn.addEventListener("click", e => e.stopPropagation());
shareBtn.addEventListener("click", e => e.stopPropagation());
if (detailsBtn) {
  detailsBtn.addEventListener("click", e => e.stopPropagation());
}
    
    saveBtn.addEventListener('click', function() {
        saveDTCToFavorites(dtc.code);
        this.innerHTML = '<i data-lucide="bookmark" class="w-5 h-5 text-yellow-500"></i>';
        showNotification(`${dtc.code} saved to favorites`);
    });
    
    shareBtn.addEventListener('click', function() {
        shareDTCResult(dtc);
    });
    
    // Clear previous results and add new one
    
    searchResults.appendChild(result);
    
    // Recreate icons in the new content
    lucide.createIcons();
    
    // Scroll to results
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Show error message
function showError(message) {
    searchResults.innerHTML = `
        <div class="slide-in glass-effect rounded-2xl p-6 md:p-8 text-center">
            <i data-lucide="alert-circle" class="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-[var(--audi-red)]"></i>
            <h3 class="text-lg md:text-xl font-bold mb-2">Code Not Found</h3>
            <p class="text-gray-400 text-sm md:text-base mb-4">${message}</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mt-6">
                <button class="suggestion-btn bg-[var(--audi-light-gray)] hover:bg-[var(--audi-blue)]/20 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base mobile-touch-friendly">P0171</button>
                <button class="suggestion-btn bg-[var(--audi-light-gray)] hover:bg-[var(--audi-blue)]/20 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base mobile-touch-friendly">U0100</button>
                <button class="suggestion-btn bg-[var(--audi-light-gray)] hover:bg-[var(--audi-blue)]/20 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base mobile-touch-friendly">C0035</button>
                <button class="suggestion-btn bg-[var(--audi-light-gray)] hover:bg-[var(--audi-blue)]/20 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base mobile-touch-friendly">P0300</button>
            </div>
        </div>
    `;
    
    // Add event listeners to suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            mainSearch.value = this.textContent;
            performSearch();
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });
    
    lucide.createIcons();
}

// Add to recent searches
async function addToRecentSearches(code) {
  try {
    const { collection, addDoc } = window.firebaseFns;

    await addDoc(collection(window.db, "recentSearches"), {
      code: code,
      timestamp: Date.now()
    });

  } catch (error) {
    console.error("Error saving search:", error);
  }
}

// Update recent searches display
async function updateRecentSearches() {
  const { collection, getDocs, query, orderBy, limit } = window.firebaseFns;

  recentSearches.innerHTML = "";

  try {
    const q = query(
      collection(window.db, "recentSearches"),
      orderBy("timestamp", "desc"),
      limit(6)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      recentSearches.innerHTML = `<p class="text-gray-500">No recent searches</p>`;
      return;
    }

    snapshot.forEach(doc => {
      const data = doc.data();

      if (dtcDatabase[data.code]) {
        const dtc = dtcDatabase[data.code];

        const card = document.createElement('div');
        card.className = 'glass-effect rounded-xl p-5 hover:bg-white/5 cursor-pointer';

        card.innerHTML = `
          <div class="flex justify-between items-start mb-3">
            <span class="text-xl font-bold">${dtc.code}</span>
          </div>
          <h4 class="font-bold mb-1">${dtc.description}</h4>
        `;

        card.onclick = () => {
          window.location.href = `dtc.html?code=${dtc.code}`;
        };

        recentSearches.appendChild(card);
      }
    });

  } catch (error) {
    console.error("Error loading searches:", error);
  }
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
    autocomplete.className = 'autocomplete-container absolute left-0 right-0 mt-1 z-50 mobile-no-overflow';
    autocomplete.innerHTML = `
        <div class="glass-effect rounded-xl overflow-hidden border border-white/10 shadow-xl max-h-80 overflow-y-auto">
            <div class="divide-y divide-white/10">
                ${matches.map(code => `
                    <div class="autocomplete-item p-3 md:p-4 hover:bg-white/5 cursor-pointer transition-colors flex justify-between items-center mobile-touch-friendly" data-code="${code}">
                        <div class="flex-1 min-w-0">
                            <div class="font-bold text-sm md:text-base truncate">${code}</div>
                            <div class="text-xs md:text-sm text-gray-400 truncate">${dtcDatabase[code].description}</div>
                        </div>
                        <span class="text-xs bg-[var(--audi-light-gray)] px-2 py-1 rounded ml-2 flex-shrink-0">${dtcDatabase[code].system}</span>
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
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
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
    notification.className = 'fixed bottom-4 left-4 right-4 md:left-auto md:right-4 glass-effect px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center space-x-3 z-50 slide-in max-w-md mx-auto md:mx-0';
    notification.innerHTML = `
        <i data-lucide="check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"></i>
        <span class="text-sm md:text-base">${message}</span>
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

    div.onclick = () => {
  window.location.href = `dtc.html?code=${dtc.code}`;
};
});
