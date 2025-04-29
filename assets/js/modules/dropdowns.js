// _includes/js/modules/dropdowns.js
export const Dropdowns = (() => {
  const initDropdown = (button, content, selectedSpan) => {
    if (!button || !content) return;

    button.addEventListener('click', () => {
      content.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown-button')) {
        content.classList.remove('show');
      }
    });
  };

  const updateDropdownText = (selectedSpan, filterType, currentFilter) => {
    if (!selectedSpan) return;

    if (currentFilter === 'all') {
      // Fix the pluralization for "category" -> "categories"
      if (filterType === 'category') {
        selectedSpan.textContent = 'All Categories';
      } else {
        selectedSpan.textContent = `All ${filterType.charAt(0).toUpperCase() + filterType.slice(1)}s`;
      }
    } else {
      const activeFilter = document.querySelector(`.${filterType}-filter[data-${filterType}="${currentFilter}"]`);
      if (activeFilter) {
        selectedSpan.textContent = activeFilter.textContent.replace(/\(\d+\)/, '').trim();
      }
    }
  };

  return {
    initDropdown,
    updateDropdownText
  };
})();