// _includes/js/modules/filters.js
export const Filters = (() => {
  let currentCategoryFilter = 'all';
  let currentTagFilter = 'all';

  const setCategoryFilter = (category) => {
    currentCategoryFilter = category;
  };

  const setTagFilter = (tag) => {
    currentTagFilter = tag;
  };

  const resetFilters = () => {
    currentCategoryFilter = 'all';
    currentTagFilter = 'all';
  };

  const updateActiveFiltersDisplay = (activeCategoryFilter, activeTagFilter, activeCategoryValue, activeTagValue, categoryFilter, tagFilter) => {
    // Use passed parameters if provided, otherwise use module state
    const currentCategory = categoryFilter || currentCategoryFilter;
    const currentTag = tagFilter || currentTagFilter;
    
    if (!activeCategoryFilter || !activeTagFilter || !activeCategoryValue || !activeTagValue) return;
    
    if (currentCategory === 'all') {
      activeCategoryValue.textContent = 'All Categories';
      activeCategoryFilter.classList.remove('has-filter');
    } else {
      const activeCategory = document.querySelector(`.category-filter[data-category="${currentCategory}"]`);
      if (activeCategory) {
        activeCategoryValue.textContent = activeCategory.textContent.replace(/\(\d+\)/, '').trim();
        activeCategoryFilter.classList.add('has-filter');
      }
    }
  
    if (currentTag === 'all') {
      activeTagValue.textContent = 'All Tags';
      activeTagFilter.classList.remove('has-filter');
    } else {
      const activeTag = document.querySelector(`.tag-filter[data-tag="${currentTag}"]`);
      if (activeTag) {
        activeTagValue.textContent = activeTag.textContent.replace(/\(\d+\)/, '').trim();
        activeTagFilter.classList.add('has-filter');
      }
    }
    
    // Highlight active filters in dropdowns
    const categoryFilters = document.querySelectorAll('.category-filter');
    const tagFilters = document.querySelectorAll('.tag-filter');
    
    categoryFilters.forEach(filter => {
      if (filter.dataset.category === currentCategory) {
        filter.classList.add('active');
      } else {
        filter.classList.remove('active');
      }
    });
    
    tagFilters.forEach(filter => {
      if (filter.dataset.tag === currentTag) {
        filter.classList.add('active');
      } else {
        filter.classList.remove('active');
      }
    });
  };
  
  return {
    setCategoryFilter,
    setTagFilter,
    resetFilters,
    getCurrentFilters: () => ({ currentCategoryFilter, currentTagFilter }),
    updateActiveFiltersDisplay
  };
})();