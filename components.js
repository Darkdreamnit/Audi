// components.js

export function loadComponents() {

  // RELATED CODES COMPONENT
  document.querySelectorAll("[data-related]").forEach(el => {
    const codes = el.getAttribute("data-related").split(",");

    el.innerHTML = `
      <div class="glass p-5 rounded-xl max-w-xl mx-auto text-center">
        <h2 class="text-lg font-semibold mb-4 text-gray-200">
          Related Codes
        </h2>

        <div class="flex flex-wrap justify-center gap-2">
          ${codes.map(code => `
            <a href="${code.toLowerCase()}.html"
               class="px-4 py-1.5 rounded-full text-sm font-medium 
                      bg-white/5 border border-white/10 
                      hover:bg-blue-500/20 hover:border-blue-400 
                      hover:text-blue-300 transition-all duration-300">
              ${code}
            </a>
          `).join("")}
        </div>
      </div>
    `;
  });

}