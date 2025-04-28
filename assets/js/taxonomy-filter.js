// Unified taxonomy filtering for archive page
(function() {
  // State variables
  let currentCategoryFilter = 'all';
  let currentTagFilter = 'all';
  let isProcessing = false; // Add a flag to prevent multiple simultaneous filter operations
  
  function initArchiveFilters() {
    const archivePage = document.querySelector('.archive-page');
    if (!archivePage) return;
    
    // Elements
    const postItems = document.querySelectorAll('.archive-post-item');
    const categoryFilters = document.querySelectorAll('.category-filter');
    const tagFilters = document.querySelectorAll('.tag-filter');
    const categoryFilterLinks = document.querySelectorAll('.category-filter-link');
    const tagFilterLinks = document.querySelectorAll('.tag-filter-link');
    const filterContainer = document.querySelector('.archive-filter-container');
    const noResultsMessage = document.querySelector('.no-results-message');
    const resetFiltersBtn = document.querySelector('.reset-filters-btn');
    
    // Dropdown elements
    const categoryDropdownButton = document.querySelector('.categories-dropdown-container .dropdown-button');
    const categoryDropdownContent = document.querySelector('.categories-dropdown-container .dropdown-content');
    const selectedCategorySpan = document.querySelector('.selected-category');
    const tagDropdownButton = document.querySelector('.tags-dropdown-container .dropdown-button');
    const tagDropdownContent = document.querySelector('.tags-dropdown-container .dropdown-content');
    const selectedTagSpan = document.querySelector('.selected-tag');
    
    // Active filters elements
    const activeCategoryFilter = document.querySelector('.active-category-filter');
    const activeTagFilter = document.querySelector('.active-tag-filter');
    const activeCategoryValue = document.querySelector('.active-category-filter .filter-value');
    const activeTagValue = document.querySelector('.active-tag-filter .filter-value');
    const clearCategoryFilter = document.querySelector('.clear-filter[data-filter-type="category"]');
    const clearTagFilter = document.querySelector('.clear-filter[data-filter-type="tag"]');
    
    // Initialize dropdowns
    initDropdown(categoryDropdownButton, categoryDropdownContent);
    initDropdown(tagDropdownButton, tagDropdownContent);
    
    // Check URL parameters for initial filters
    function getURLParameters() {
      const urlParams = new URLSearchParams(window.location.search);
      const categoryParam = urlParams.get('category');
      const tagParam = urlParams.get('tag');
      
      if (categoryParam) {
        currentCategoryFilter = categoryParam;
      }
      
      if (tagParam) {
        currentTagFilter = tagParam;
      }
    }
    
    // Function to initialize dropdown behavior
    function initDropdown(button, content) {
      if (!button || !content) return;
      
      // Toggle dropdown
      button.addEventListener('click', function() {
        content.classList.toggle('show');
      });
      
      // Close dropdown when clicking outside
      window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-button') && 
            !event.target.parentElement.matches('.dropdown-button')) {
          if (content.classList.contains('show')) {
            content.classList.remove('show');
          }
        }
      });
    }
    
    // Function to apply filters and update UI
    function applyFilters() {
      // Prevent multiple simultaneous filter operations
      if (isProcessing) return;
      isProcessing = true;
      
      if (filterContainer) filterContainer.classList.add('loading');
      
      // Use setTimeout to allow the UI to update before processing
      setTimeout(() => {
        let visibleCount = 0;
        
        postItems.forEach(item => {
          const postCategories = item.dataset.categories || '';
          const postTags = item.dataset.tags || '';
          
          const matchesCategory = currentCategoryFilter === 'all' || 
                                postCategories.includes(currentCategoryFilter);
          const matchesTag = currentTagFilter === 'all' || 
                            postTags.includes(currentTagFilter);
          
          if (matchesCategory && matchesTag) {
            item.style.display = 'block';
            visibleCount++;
          } else {
            item.style.display = 'none';
          }
        });
        
        // Show/hide no results message
        if (visibleCount === 0) {
          noResultsMessage.style.display = 'block';
        } else {
          noResultsMessage.style.display = 'none';
        }
        
        // Update active filters display
        updateActiveFilters();
        
        // Update URL with current filters
        updateURL();
        
        if (filterContainer) filterContainer.classList.remove('loading');
        
        // Reset processing flag
        isProcessing = false;
      }, 10);
    }
    
    // Update URL with current filters
    function updateURL() {
      try {
        const url = new URL(window.location);
        
        // Clear existing parameters
        url.searchParams.delete('category');
        url.searchParams.delete('tag');
        
        // Add current filters if not 'all'
        if (currentCategoryFilter !== 'all') {
          url.searchParams.set('category', currentCategoryFilter);
        }
        
        if (currentTagFilter !== 'all') {
          url.searchParams.set('tag', currentTagFilter);
        }
        
        // Update URL without reloading the page
        window.history.pushState({}, '', url);
      } catch (e) {
        console.error('Error updating URL:', e);
      }
    }
    
    // Update active filters display
    function updateActiveFilters() {
      // Update category filter display
      if (currentCategoryFilter === 'all') {
        activeCategoryValue.textContent = 'All Categories';
        activeCategoryFilter.classList.remove('has-filter');
      } else {
        const activeCategory = document.querySelector(`.category-filter[data-category="${currentCategoryFilter}"]`);
        if (activeCategory) {
          activeCategoryValue.textContent = activeCategory.textContent.replace(/\(\d+\)/, '').trim();
          activeCategoryFilter.classList.add('has-filter');
        }
      }
      
      // Update tag filter display
      if (currentTagFilter === 'all') {
        activeTagValue.textContent = 'All Tags';
        activeTagFilter.classList.remove('has-filter');
      } else {
        const activeTag = document.querySelector(`.tag-filter[data-tag="${currentTagFilter}"]`);
        if (activeTag) {
          activeTagValue.textContent = activeTag.textContent.replace(/\(\d+\)/, '').trim();
          activeTagFilter.classList.add('has-filter');
        }
      }
      
      // Update dropdown text
      if (selectedCategorySpan) {
        if (currentCategoryFilter === 'all') {
          selectedCategorySpan.textContent = 'All Categories';
        } else {
          const activeCategory = document.querySelector(`.category-filter[data-category="${currentCategoryFilter}"]`);
          if (activeCategory) {
            selectedCategorySpan.textContent = activeCategory.textContent.replace(/\(\d+\)/, '').trim();
          }
        }
      }
      
      if (selectedTagSpan) {
        if (currentTagFilter === 'all') {
          selectedTagSpan.textContent = 'All Tags';
        } else {
          const activeTag = document.querySelector(`.tag-filter[data-tag="${currentTagFilter}"]`);
          if (activeTag) {
            selectedTagSpan.textContent = activeTag.textContent.replace(/\(\d+\)/, '').trim();
          }
        }
      }
      
      // Highlight active filters in dropdowns
      categoryFilters.forEach(filter => {
        if (filter.dataset.category === currentCategoryFilter) {
          filter.classList.add('active');
        } else {
          filter.classList.remove('active');
        }
      });
      
      tagFilters.forEach(filter => {
        if (filter.dataset.tag === currentTagFilter) {
          filter.classList.add('active');
        } else {
          filter.classList.remove('active');
        }
      });
    }
    
    // Category filter click handlers
    categoryFilters.forEach(filter => {
      filter.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        
        // Get category from data attribute
        const category = this.dataset.category;
        
        // Don't reapply the same filter
        if (category === currentCategoryFilter) {
          if (categoryDropdownContent.classList.contains('show')) {
            categoryDropdownContent.classList.remove('show');
          }
          return;
        }
        
        currentCategoryFilter = category;
        
        // Close dropdown
        if (categoryDropdownContent.classList.contains('show')) {
          categoryDropdownContent.classList.remove('show');
        }
        
        // Apply filters
        applyFilters();
      });
    });
    
    // Tag filter click handlers
    tagFilters.forEach(filter => {
      filter.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        
        // Get tag from data attribute
        const tag = this.dataset.tag;
        
        // Don't reapply the same filter
        if (tag === currentTagFilter) {
          if (tagDropdownContent.classList.contains('show')) {
            tagDropdownContent.classList.remove('show');
          }
          return;
        }
        
        currentTagFilter = tag;
        
        // Close dropdown
        if (tagDropdownContent.classList.contains('show')) {
          tagDropdownContent.classList.remove('show');
        }
        
        // Apply filters
        applyFilters();
      });
    });
    
    // Category filter links in post items
    categoryFilterLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get category from data attribute
        const category = this.dataset.filter;
        
        // Don't reapply the same filter
        if (category === currentCategoryFilter) return;
        
        currentCategoryFilter = category;
        
        // Apply filters
        applyFilters();
      });
    });
    
    // Tag filter links in post items
    tagFilterLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get tag from data attribute
        const tag = this.dataset.filter;
        
        // Don't reapply the same filter
        if (tag === currentTagFilter) return;
        
        currentTagFilter = tag;
        
        // Apply filters
        applyFilters();
      });
    });
    
    // Clear filter buttons
    if (clearCategoryFilter) {
      clearCategoryFilter.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        
        // Don't reapply if already 'all'
        if (currentCategoryFilter === 'all') return;
        
        currentCategoryFilter = 'all';
        applyFilters();
      });
    }
    
    if (clearTagFilter) {
      clearTagFilter.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        
        // Don't reapply if already 'all'
        if (currentTagFilter === 'all') return;
        
        currentTagFilter = 'all';
        applyFilters();
      });
    }
    
    // Reset all filters button
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Don't reapply if already all filters are 'all'
        if (currentCategoryFilter === 'all' && currentTagFilter === 'all') return;
        
        currentCategoryFilter = 'all';
        currentTagFilter = 'all';
        applyFilters();
      });
    }
    
    // Check URL parameters and apply initial filters
    getURLParameters();
    
    // Delay initial filter application to ensure DOM is fully loaded
    setTimeout(() => {
      applyFilters();
    }, 50);
  }
  
  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', initArchiveFilters);
  
  // Initialize with InstantClick if available
  if (typeof InstantClick !== 'undefined') {
    InstantClick.on('change', function() {
      // Reset state variables for new page
      currentCategoryFilter = 'all';
      currentTagFilter = 'all';
      isProcessing = false;
      
      // Small delay to ensure DOM is updated
      setTimeout(initArchiveFilters, 100);
    });
  }
})();