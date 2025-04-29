import { Filters } from './modules/filters.js';
import { Sorting } from './modules/sorting.js';
import { Rendering } from './modules/rendering.js';
import { Dropdowns } from './modules/dropdowns.js';
import { URLManager } from './modules/urlManager.js';

document.addEventListener('DOMContentLoaded', () => {
  const archivePage = document.querySelector('.archive-page');
  if (!archivePage) return;

  const postItems = document.querySelectorAll('.archive-post-item');
  const categoryFilters = document.querySelectorAll('.category-filter');
  const tagFilters = document.querySelectorAll('.tag-filter');
  const categoryFilterLinks = document.querySelectorAll('.category-filter-link');
  const tagFilterLinks = document.querySelectorAll('.tag-filter-link');
  const categoryDropdownButton = document.querySelector('.categories-dropdown-container .dropdown-button');
  const categoryDropdownContent = document.querySelector('.categories-dropdown-container .dropdown-content');
  const selectedCategorySpan = document.querySelector('.selected-category');
  const tagDropdownButton = document.querySelector('.tags-dropdown-container .dropdown-button');
  const tagDropdownContent = document.querySelector('.tags-dropdown-container .dropdown-content');
  const selectedTagSpan = document.querySelector('.selected-tag');
  const activeCategoryFilter = document.querySelector('.active-category-filter');
  const activeTagFilter = document.querySelector('.active-tag-filter');
  const activeCategoryValue = document.querySelector('.active-category-filter .filter-value');
  const activeTagValue = document.querySelector('.active-tag-filter .filter-value');
  const clearCategoryFilter = document.querySelector('.clear-filter[data-filter-type="category"]');
  const clearTagFilter = document.querySelector('.clear-filter[data-filter-type="tag"]');
  const resetFiltersBtn = document.querySelector('.reset-filters-btn');
  const sortButtons = document.querySelectorAll('.sort-button');
  const filterContainer = document.querySelector('.archive-filter-container');
  
  let isProcessing = false; // Add processing flag

  // Initialize dropdowns
  Dropdowns.initDropdown(categoryDropdownButton, categoryDropdownContent);
  Dropdowns.initDropdown(tagDropdownButton, tagDropdownContent);

  // Check URL parameters for initial filters and sort method
  const params = new URLSearchParams(window.location.search);
  Filters.setCategoryFilter(params.get('category') || 'all');
  Filters.setTagFilter(params.get('tag') || 'all');
  Sorting.setSortMethod(params.get('sort') || 'date', params.get('direction') || 'desc');

  // Apply filters on page load
  setTimeout(() => applyFilters(), 50);

  function applyFilters() {
    // Prevent multiple simultaneous filter operations
    if (isProcessing) return;
    isProcessing = true;
    
    if (filterContainer) filterContainer.classList.add('loading');
    
    // Use setTimeout to allow the UI to update before processing
    setTimeout(() => {
      const { currentCategoryFilter, currentTagFilter } = Filters.getCurrentFilters();
      const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();

      // Filter posts
      const filteredPosts = Array.from(postItems).filter(item => {
        const postCategories = item.dataset.categories || '';
        const postTags = item.dataset.tags || '';
        
        const matchesCategory = currentCategoryFilter === 'all' || 
                              postCategories.includes(currentCategoryFilter);
        const matchesTag = currentTagFilter === 'all' || 
                          postTags.includes(currentTagFilter);
        
        return matchesCategory && matchesTag;
      });

      // Sort posts
      const sortedPosts = Sorting.sortPosts(filteredPosts, currentSortMethod, currentSortDirection);

      // Render posts - this now includes reordering in the DOM
      Rendering.renderPosts(sortedPosts);

      // Update active filters display
      Filters.updateActiveFiltersDisplay(activeCategoryFilter, activeTagFilter, activeCategoryValue, activeTagValue, currentCategoryFilter, currentTagFilter);

      // Update dropdown text
      Dropdowns.updateDropdownText(selectedCategorySpan, 'category', currentCategoryFilter);
      Dropdowns.updateDropdownText(selectedTagSpan, 'tag', currentTagFilter);

      // Update active sort button
      Sorting.updateActiveSortButton(sortButtons, currentSortMethod, currentSortDirection);

      // Update URL
      URLManager.updateURL(currentCategoryFilter, currentTagFilter, currentSortMethod, currentSortDirection);
      
      if (filterContainer) filterContainer.classList.remove('loading');
      
      // Reset processing flag
      isProcessing = false;
    }, 10);
  }

  // Add event listeners for filters, sorting, and reset
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // Prevent event bubbling
      
      const category = filter.dataset.category;
      
      // Don't reapply the same filter
      if (category === Filters.getCurrentFilters().currentCategoryFilter) {
        if (categoryDropdownContent.classList.contains('show')) {
          categoryDropdownContent.classList.remove('show');
        }
        return;
      }
      
      Filters.setCategoryFilter(category);
      
      // Close dropdown
      if (categoryDropdownContent.classList.contains('show')) {
        categoryDropdownContent.classList.remove('show');
      }
      
      applyFilters();
    });
  });

  tagFilters.forEach(filter => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // Prevent event bubbling
      
      const tag = filter.dataset.tag;
      
      // Don't reapply the same filter
      if (tag === Filters.getCurrentFilters().currentTagFilter) {
        if (tagDropdownContent.classList.contains('show')) {
          tagDropdownContent.classList.remove('show');
        }
        return;
      }
      
      Filters.setTagFilter(tag);
      
      // Close dropdown
      if (tagDropdownContent.classList.contains('show')) {
        tagDropdownContent.classList.remove('show');
      }
      
      applyFilters();
    });
  });

  // Category filter links in post items
  categoryFilterLinks?.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get category from data attribute
      const category = this.dataset.filter;
      
      // Don't reapply the same filter
      if (category === Filters.getCurrentFilters().currentCategoryFilter) return;
      
      Filters.setCategoryFilter(category);
      
      // Apply filters
      applyFilters();
    });
  });
  
  // Tag filter links in post items
  tagFilterLinks?.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get tag from data attribute
      const tag = this.dataset.filter;
      
      // Don't reapply the same filter
      if (tag === Filters.getCurrentFilters().currentTagFilter) return;
      
      Filters.setTagFilter(tag);
      
      // Apply filters
      applyFilters();
    });
  });

  sortButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get sort method from data attribute
      const sortMethod = button.dataset.sort;
      const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
      
      // If clicking the same sort method, toggle direction
      if (sortMethod === currentSortMethod) {
        const newDirection = currentSortDirection === 'desc' ? 'asc' : 'desc';
        Sorting.setSortMethod(sortMethod, newDirection);
      } else {
        // New sort method, use the button's default direction
        Sorting.setSortMethod(sortMethod, button.dataset.direction);
      }
      
      applyFilters();
    });
  });

  // Clear filter buttons
  clearCategoryFilter?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    
    // Don't reapply if already 'all'
    if (Filters.getCurrentFilters().currentCategoryFilter === 'all') return;
    
    Filters.setCategoryFilter('all');
    applyFilters();
  });
  
  clearTagFilter?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    
    // Don't reapply if already 'all'
    if (Filters.getCurrentFilters().currentTagFilter === 'all') return;
    
    Filters.setTagFilter('all');
    applyFilters();
  });

  resetFiltersBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    
    const { currentCategoryFilter, currentTagFilter } = Filters.getCurrentFilters();
    const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
    
    // Don't reapply if already all filters are 'all' and sort is default
    if (currentCategoryFilter === 'all' && currentTagFilter === 'all' && 
        currentSortMethod === 'date' && currentSortDirection === 'desc') return;
    
    Filters.resetFilters();
    Sorting.setSortMethod('date', 'desc');
    applyFilters();
  });

  // Support for InstantClick
  if (typeof InstantClick !== 'undefined') {
    InstantClick.on('change', () => {
      Filters.resetFilters();
      Sorting.setSortMethod('date', 'desc');
      isProcessing = false;
      
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        const newArchivePage = document.querySelector('.archive-page');
        if (newArchivePage) {
          // Re-initialize everything
          location.reload();
        }
      }, 100);
    });
  }
});