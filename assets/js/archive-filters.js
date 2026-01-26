import { Filters } from './modules/filters.js';
import { Sorting } from './modules/sorting.js';
import { Rendering } from './modules/rendering.js';
import { Dropdowns } from './modules/dropdowns.js';
import { URLManager } from './modules/urlManager.js';
import { Search } from './modules/search.js';

// Add this flag at the top of the file, after imports
let initialFilterApplied = false;

// Modify the initArchiveFilters function
const initArchiveFilters = () => {
  console.log('Inicializando filtros de archivo');
  const archivePage = document.querySelector('.archive-page');
  if (!archivePage) return console.log('No se encontró la página de archivo');

  const DOM = getDOMElements();
  const isFirstVisit = isFirstLoad();

  initializeDropdowns(DOM);
  initializeSearch(DOM);
  initializeEventListeners(DOM);

  // Configurar lazy loading para posts adicionales
  if (typeof Rendering !== 'undefined' && Rendering.setupLazyLoading) {
    Rendering.setupLazyLoading();
  }

  if (isFirstVisit) resetAllFilters(DOM);
  else applyURLFilters(DOM);

  // Check if this is a navigation from another page
  const isNavigation = document.referrer && 
                      document.referrer !== document.location.href && 
                      !document.referrer.includes(document.location.pathname);
  
  // Aplicar filtros iniciales - aumentamos el tiempo para asegurar que todo esté listo
  // Prevent multiple filter applications during initialization
  if (!initialFilterApplied) {
    initialFilterApplied = true;
    setTimeout(() => {
      applyFilters(DOM);
      
      // If this is a navigation from another page, ensure posts are loaded
      if (isNavigation) {
        console.log('Navigation from another page detected, ensuring posts are loaded');
        setTimeout(() => {
          ensurePostsLoadedAfterNavigation();
        }, 300);
      }
    }, 100);
  }
};

function getDOMElements() {
  return {
    postItems: document.querySelectorAll('.archive-post-item'),
    categoryFilters: document.querySelectorAll('.category-filter'),
    tagFilters: document.querySelectorAll('.tag-filter'),
    categoryFilterLinks: document.querySelectorAll('.category-filter-link'),
    tagFilterLinks: document.querySelectorAll('.tag-filter-link'),
    sortButtons: document.querySelectorAll('.sort-button'),
    searchInput: document.getElementById('archive-search'),
    clearSearchBtn: document.getElementById('clear-search'),
    filterContainer: document.querySelector('.archive-filter-container'),
    selectedCategorySpan: document.querySelector('.selected-category'),
    selectedTagSpan: document.querySelector('.selected-tag'),
    categoryDropdownButton: document.querySelector('.categories-dropdown-container .dropdown-button'),
    categoryDropdownContent: document.querySelector('.categories-dropdown-container .dropdown-content'),
    tagDropdownButton: document.querySelector('.tags-dropdown-container .dropdown-button'),
    tagDropdownContent: document.querySelector('.tags-dropdown-container .dropdown-content'),
    activeCategoryFilter: document.querySelector('.active-category-filter'),
    activeTagFilter: document.querySelector('.active-tag-filter'),
    activeCategoryValue: document.querySelector('.active-category-filter .filter-value'),
    activeTagValue: document.querySelector('.active-tag-filter .filter-value'),
    clearCategoryFilter: document.querySelector('.clear-filter[data-filter-type="category"]'),
    clearTagFilter: document.querySelector('.clear-filter[data-filter-type="tag"]'),
    resetFiltersBtn: document.querySelector('.reset-filters-btn'),
    noResultsMessage: document.querySelector('.no-results-message'),
    noResultsResetBtn: document.querySelector('.no-results-message .reset-filters-btn'),
    mainPostsContainer: document.getElementById('main-posts-list'),
    additionalPostsMarker: document.getElementById('additional-posts-marker')
  };
}

function isFirstLoad() {
  const params = new URLSearchParams(window.location.search);
  
  // Si hay parámetros en la URL, no es primera carga
  if (params.has('category') || params.has('tag') || params.has('sort') || params.has('search') || params.has('direction')) {
    return false;
  }
  
  // Si es una recarga de página, tampoco es primera carga
  if (window.performance) {
    const navEntries = window.performance.getEntriesByType('navigation');
    if (navEntries.length > 0 && navEntries[0].type === 'reload') {
      console.log('Recarga detectada en isFirstLoad, aplicando filtros de URL');
      return false;
    }
  }
  
  return true;
}

function initializeDropdowns({ categoryDropdownButton, categoryDropdownContent, selectedCategorySpan, tagDropdownButton, tagDropdownContent, selectedTagSpan }) {
  console.log('Inicializando dropdowns...');
  if (categoryDropdownButton && categoryDropdownContent) {
    console.log('Inicializando dropdown de categorías');
    Dropdowns.initDropdown(categoryDropdownButton, categoryDropdownContent, selectedCategorySpan);
  } else {
    console.log('No se encontraron elementos para el dropdown de categorías');
  }
  
  if (tagDropdownButton && tagDropdownContent) {
    console.log('Inicializando dropdown de etiquetas');
    Dropdowns.initDropdown(tagDropdownButton, tagDropdownContent, selectedTagSpan);
  } else {
    console.log('No se encontraron elementos para el dropdown de etiquetas');
  }
}

function initializeSearch({ searchInput, clearSearchBtn }) {
  if (searchInput && clearSearchBtn) {
    console.log('Inicializando búsqueda');
    Search.initSearchInput(searchInput, clearSearchBtn);
    searchInput.addEventListener('input', () => {
      clearTimeout(searchInput.debounceTimer);
      searchInput.debounceTimer = setTimeout(() => {
        applyFilters(getDOMElements());
      }, 300);
    });
    
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyFilters(getDOMElements());
      }
    });
    
    clearSearchBtn.addEventListener('click', () => {
      applyFilters(getDOMElements());
    });
  } else {
    console.log('No se encontraron elementos para la búsqueda');
  }
}

function resetAllFilters({ searchInput, clearSearchBtn }) {
  console.log('No hay parámetros de filtro en la URL, reiniciando filtros');
  Filters.resetFilters();
  Sorting.setSortMethod('date', 'desc');
  Search.setSearchQuery('');
  
  // Limpiar el campo de búsqueda si existe
  if (searchInput) {
    searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
  }
}

// Create a utility function for URL parameter handling
function decodeURLParameter(param) {
  if (!param || param === 'all') return 'all';
  
  try {
    // First decode with decodeURIComponent to handle %20
    const decoded = decodeURIComponent(param);
    // Then replace any + that might remain
    return decoded.replace(/\+/g, ' ');
  } catch (e) {
    console.warn('Error decoding parameter:', e);
    // If it fails, just replace +
    return param.replace(/\+/g, ' ');
  }
}

// Refactor applyURLFilters to use the utility function
function applyURLFilters({ searchInput, clearSearchBtn, sortButtons }) {
  const params = new URLSearchParams(window.location.search);
  
  // Get and decode parameters
  const categoryParam = decodeURLParameter(params.get('category') || 'all');
  const tagParam = decodeURLParameter(params.get('tag') || 'all');
  
  if (categoryParam !== 'all') {
    console.log(`Categoría decodificada de URL: "${categoryParam}"`);
  }
  
  if (tagParam !== 'all') {
    console.log(`Tag decodificado de URL: "${tagParam}"`);
  }
  
  Filters.setCategoryFilter(categoryParam);
  Filters.setTagFilter(tagParam);
  
  // Apply sorting parameters
  const sortMethod = params.get('sort') || 'date';
  const sortDirection = params.get('direction') || 'desc';
  
  console.log(`Aplicando ordenación desde URL: método=${sortMethod}, dirección=${sortDirection}`);
  Sorting.setSortMethod(sortMethod, sortDirection);
  Sorting.updateActiveSortButton(sortButtons, sortMethod, sortDirection);
  
  // Set search query from URL if present
  if (params.has('search')) {
    const searchQuery = decodeURLParameter(params.get('search'));
    
    Search.setSearchQuery(searchQuery);
    if (searchInput) {
      searchInput.value = searchQuery;
      if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    }
  } else {
    // Clear search if no parameter
    Search.setSearchQuery('');
    if (searchInput) {
      searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    }
  }
}


function initializeEventListeners(DOM) {
  initFilterListeners(DOM.categoryFilters, 'category', DOM.categoryDropdownContent);
  initFilterListeners(DOM.tagFilters, 'tag', DOM.tagDropdownContent);
  initLinkListeners(DOM.categoryFilterLinks, 'category');
  initLinkListeners(DOM.tagFilterLinks, 'tag');
  initSortButtons(DOM.sortButtons);
  initClearFilters(DOM);
  initNoResultsReset(DOM);
}

function initFilterListeners(filters, type, dropdownContent) {
  filters.forEach(filter => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Asegurarse de que el valor del filtro se obtenga correctamente, incluso con espacios
      const value = filter.dataset[type].toLowerCase(); // Ensure lowercase for consistency
      const currentValue = Filters.getCurrentFilters()[`current${capitalize(type)}Filter`];

      // Cerrar dropdown si está abierto
      if (dropdownContent && dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }

      // Si es el mismo filtro, no hacer nada más
      if (value === currentValue) return;

      console.log(`Aplicando filtro de ${type}: "${value}"`);
      Filters[`set${capitalize(type)}Filter`](value);
      applyFilters(getDOMElements());
    });
  });
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function initLinkListeners(links, type) {
  links?.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Asegurarse de que el valor del filtro se obtenga correctamente
      const value = link.dataset.filter.toLowerCase();
      const currentValue = Filters.getCurrentFilters()[`current${capitalize(type)}Filter`].toLowerCase();
      
      // Si es el mismo filtro, no hacer nada más
      if (value === currentValue) return;
      
      console.log(`Aplicando filtro de ${type} desde enlace: "${value}"`);
      Filters[`set${capitalize(type)}Filter`](value);
      applyFilters(getDOMElements());
    });
  });
}

// Add this to the initSortButtons function
// Update the initSortButtons function to use the improved Rendering module
function initSortButtons(buttons) {
  buttons.forEach(button => {
    const newButton = button.cloneNode(true);
    if (button.parentNode) {
      button.parentNode.replaceChild(newButton, button);
    }

    newButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Click en botón de ordenación');
      
      const sortMethod = newButton.dataset.sort;
      const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
      
      console.log(`Botón clickeado: ${sortMethod}, Estado actual: ${currentSortMethod}, ${currentSortDirection}`);
      
      // Determine new sort direction
      const newDirection = (sortMethod === currentSortMethod) 
        ? (currentSortDirection === 'desc' ? 'asc' : 'desc')
        : (newButton.dataset.direction || 'desc');
      
      // Check if we need to load all posts first
      if (typeof Rendering !== 'undefined' && !Rendering.areAdditionalPostsLoaded()) {
        console.log('Cambiando ordenación, cargando todos los posts primero...');
        
        // Show loading indicator
        const loadingIndicator = document.querySelector('.loading-indicator');
        if (loadingIndicator) loadingIndicator.style.display = 'block';
        
        // Load all posts and then apply sort
        Rendering.loadAllRemainingPosts(() => {
          console.log('Todos los posts cargados, aplicando ordenación...');
          Sorting.setSortMethod(sortMethod, newDirection);
          applyFilters(getDOMElements());
        });
      } else {
        // If we already have all posts loaded, apply sort immediately
        console.log(`Aplicando ordenación: método=${sortMethod}, dirección=${newDirection}`);
        Sorting.setSortMethod(sortMethod, newDirection);
        applyFilters(getDOMElements());
      }
    });
  });
}

function initClearFilters({ clearCategoryFilter, clearTagFilter, resetFiltersBtn, searchInput, clearSearchBtn }) {
  clearCategoryFilter?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (Filters.getCurrentFilters().currentCategoryFilter === 'all') return;
    
    Filters.setCategoryFilter('all');
    applyFilters(getDOMElements());
  });
  
  clearTagFilter?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (Filters.getCurrentFilters().currentTagFilter === 'all') return;
    
    Filters.setTagFilter('all');
    applyFilters(getDOMElements());
  });

  resetFiltersBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    
    const { currentCategoryFilter, currentTagFilter } = Filters.getCurrentFilters();
    const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
    const currentSearchQuery = Search.getCurrentSearchQuery();
    
    if (currentCategoryFilter === 'all' && currentTagFilter === 'all' && 
        currentSortMethod === 'date' && currentSortDirection === 'desc' && 
        !currentSearchQuery) return;
    
    Search.resetSearch(searchInput, clearSearchBtn);
    Filters.resetFilters();
    Sorting.setSortMethod('date', 'desc');
    applyFilters(getDOMElements());
  });
}

function initNoResultsReset({ noResultsResetBtn, searchInput, clearSearchBtn }) {
  noResultsResetBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    
    Search.resetSearch(searchInput, clearSearchBtn);
    Filters.resetFilters();
    Sorting.setSortMethod('date', 'desc');
    applyFilters(getDOMElements());
  });
}

// Función auxiliar para escapar caracteres especiales en expresiones regulares
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Create a utility function for taxonomy matching
function matchesTaxonomy(postTaxonomies, filterValue) {
  if (filterValue === 'all') return true;
  
  // Convert to lowercase for case-insensitive comparison
  const filterLower = filterValue.toLowerCase();
  const taxonomiesLower = postTaxonomies.toLowerCase();
  
  // For taxonomies with spaces or special characters
  if (filterLower.includes(' ') || filterLower.includes('/')) {
    // Method 1: Look for exact match in the complete string
    const regex = new RegExp(`\\b${escapeRegExp(filterLower)}\\b`, 'i');
    const matchRegex = regex.test(taxonomiesLower);
    
    // Method 2: Split by spaces and look for exact match
    const taxonomiesArray = taxonomiesLower.split(' ').filter(Boolean);
    const matchSplit = taxonomiesArray.some(tax => tax === filterLower);
    
    return matchRegex || matchSplit;
  } else {
    // For simple taxonomies, split and look for exact match
    const taxonomiesArray = taxonomiesLower.split(' ').filter(Boolean);
    return taxonomiesArray.includes(filterLower);
  }
}

// Utility function to check and remove duplicate posts
function checkAndRemoveDuplicates(container) {
  if (!container) return [];
  
  const allPosts = container.querySelectorAll('.archive-post-item');
  const postUrls = new Map();
  const duplicates = [];
  
  allPosts.forEach(item => {
    const url = item.dataset.url || item.querySelector('a.post-link')?.getAttribute('href');
    if (url) {
      if (postUrls.has(url)) {
        // This is a duplicate
        duplicates.push(item);
      } else {
        postUrls.set(url, item);
      }
    }
  });
  
  // Remove duplicates if found
  if (duplicates.length > 0) {
    console.warn(`Encontrados ${duplicates.length} posts duplicados, eliminando...`);
    duplicates.forEach(item => {
      if (item.parentNode) {
        item.parentNode.removeChild(item);
      }
    });
  }
  
  return duplicates;
}

// Update the applyFilters function to use the improved Rendering module
function applyFilters(DOM) {
  console.log('Aplicando filtros...');
  
  // Check if we're already processing filters
  if (window.isProcessing) {
    console.log('Ya se están procesando filtros, ignorando solicitud');
    
    // Add a safety timeout to reset the flag if it gets stuck
    if (!window.filterResetTimeout) {
      window.filterResetTimeout = setTimeout(() => {
        console.log('Reseteando flag de procesamiento por timeout de seguridad');
        window.isProcessing = false;
        window.filterResetTimeout = null;
      }, 3000); // 3 seconds safety timeout
    }
    
    return;
  }
  
  // Set processing flag and clear any existing safety timeout
  window.isProcessing = true;
  if (window.filterResetTimeout) {
    clearTimeout(window.filterResetTimeout);
    window.filterResetTimeout = null;
  }

  if (DOM.filterContainer) DOM.filterContainer.classList.add('loading');

  // Wrap the filter application in a try-catch to ensure the flag gets reset
  try {
    setTimeout(() => {
      try {
        // Get current filter state
        const { currentCategoryFilter, currentTagFilter } = Filters.getCurrentFilters();
        const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
        const currentSearchQuery = Search.getCurrentSearchQuery();
        
        console.log(`Aplicando filtros con: categoría="${currentCategoryFilter}", tag="${currentTagFilter}", ordenación=${currentSortMethod}, dirección=${currentSortDirection}, búsqueda="${currentSearchQuery}"`);
        
        // Apply filters to DOM
        applyFiltersToDOM(DOM);
        
        // Always reset processing flag and remove loading class
        window.isProcessing = false;
        if (DOM.filterContainer) DOM.filterContainer.classList.remove('loading');
      } catch (error) {
        console.error('Error al aplicar filtros:', error);
        // Ensure flag is reset even on error
        window.isProcessing = false;
        if (DOM.filterContainer) DOM.filterContainer.classList.remove('loading');
      }
    }, 10);
  } catch (error) {
    console.error('Error crítico al aplicar filtros:', error);
    // Ensure flag is reset even on critical error
    window.isProcessing = false;
    if (DOM.filterContainer) DOM.filterContainer.classList.remove('loading');
  }
}

// Helper function to actually apply filters to the DOM
function applyFiltersToDOM(DOM) {
  // Get current filter state
  const { currentCategoryFilter, currentTagFilter } = Filters.getCurrentFilters();
  const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
  const currentSearchQuery = Search.getCurrentSearchQuery();
  
  // Update URL with current filters
  URLManager.updateURL(currentCategoryFilter, currentTagFilter, currentSortMethod, currentSortDirection, currentSearchQuery);
  
  // Update UI to reflect current filters - use the imported modules directly
  // Instead of updateActiveFilters, use Filters module's function
  Filters.updateActiveFiltersDisplay(
    DOM.activeCategoryFilter, 
    DOM.activeTagFilter, 
    DOM.activeCategoryValue, 
    DOM.activeTagValue, 
    currentCategoryFilter, 
    currentTagFilter
  );
  
  // Update dropdown text using Dropdowns module
  Dropdowns.updateDropdownText(DOM.selectedCategorySpan, 'category', currentCategoryFilter);
  Dropdowns.updateDropdownText(DOM.selectedTagSpan, 'tag', currentTagFilter);
  
  // Update sort buttons using Sorting module
  Sorting.updateActiveSortButton(DOM.sortButtons, currentSortMethod, currentSortDirection);
  
  // Check and remove any duplicate posts that might have been added
  if (DOM.mainPostsContainer) {
    checkAndRemoveDuplicates(DOM.mainPostsContainer);
  }
  
  // Get all posts
  const allPosts = Array.from(DOM.postItems);
  
  // If Rendering module is available, use it for visual filters
  if (typeof Rendering !== 'undefined' && Rendering.applyVisualFilters) {
    Rendering.applyVisualFilters(currentCategoryFilter, currentTagFilter, currentSearchQuery);
  } else {
    // Fallback: Apply filters manually if Rendering module is not available
    console.log('Aplicando filtros manualmente (Rendering no disponible)');
    
    // Apply category and tag filters
    allPosts.forEach(post => {
      const postCategories = post.dataset.categories || '';
      const postTags = post.dataset.tags || '';
      const postTitle = post.dataset.title || '';
      
      // Check if post matches category filter
      const matchesCategory = matchesTaxonomy(postCategories, currentCategoryFilter);
      
      // Check if post matches tag filter
      const matchesTag = matchesTaxonomy(postTags, currentTagFilter);
      
      // Check if post matches search query
      const matchesSearch = !currentSearchQuery || 
        postTitle.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        postCategories.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        postTags.toLowerCase().includes(currentSearchQuery.toLowerCase());
      
      // Show/hide post based on filters
      post.style.display = (matchesCategory && matchesTag && matchesSearch) ? '' : 'none';
    });
  }
  
  // Get visible posts after filtering
  const visiblePosts = allPosts.filter(post => post.style.display !== 'none');
  console.log(`${visiblePosts.length} posts visibles después de aplicar filtros`);
  
  // Sort visible posts
  const sortedPosts = Sorting.sortPosts(visiblePosts, currentSortMethod, currentSortDirection);
  
  // Render sorted posts - this will handle the no results message internally
  if (typeof Rendering !== 'undefined' && Rendering.renderPosts) {
    Rendering.renderPosts(sortedPosts);
  } else {
    console.error('Rendering.renderPosts no está disponible');
    
    // If Rendering is not available, handle no results message manually
    if (DOM.noResultsMessage) {
      DOM.noResultsMessage.style.display = visiblePosts.length === 0 ? 'block' : 'none';
    }
  }
  
  // REMOVED: toggleNoResultsMessage(DOM.noResultsMessage, visiblePosts.length === 0);
  
  // Dispatch event that filters have been applied
  document.dispatchEvent(new CustomEvent('filtersApplied', {
    detail: {
      visiblePostsCount: sortedPosts.length,
      totalPostsCount: allPosts.length,
      filters: {
        category: currentCategoryFilter,
        tag: currentTagFilter,
        search: currentSearchQuery,
        sort: currentSortMethod,
        direction: currentSortDirection
      }
    }
  }));
  
  // Remove loading class
  if (DOM.filterContainer) DOM.filterContainer.classList.remove('loading');
  
  // Reset processing flag
  window.isProcessing = false;
  
  // Check if we need to load more posts (for infinite scroll with default sort)
  if (typeof Rendering !== 'undefined' && Rendering.checkIfMorePostsNeeded) {
    setTimeout(() => Rendering.checkIfMorePostsNeeded(), 300);
  }
}

// POST RENDERING

// Break down loadAdditionalPosts into smaller functions
function createPostElement(post) {
  // Ensure categories and tags are arrays
  const categories = Array.isArray(post.categories) ? post.categories : [];
  const tags = Array.isArray(post.tags) ? post.tags : [];
  
  // Format date correctly
  let formattedDate = post.date || '';
  let displayDate = post.date_formatted || '';
  
  if (formattedDate && !formattedDate.includes('T')) {
    try {
      const dateObj = new Date(formattedDate);
      if (!isNaN(dateObj)) {
        formattedDate = dateObj.toISOString();
        if (!displayDate) {
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          displayDate = `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
        }
      }
    } catch (e) {
      console.warn('Error formatting date:', e);
    }
  }
  
  // Format categories and tags to match Liquid format
  const categoriesData = categories.map(cat => cat.toLowerCase()).join(' ');
  const tagsData = tags.map(tag => tag.toLowerCase()).join(' ');
  
  // Add debug data
  const categoriesDebug = JSON.stringify(categories);
  const tagsDebug = JSON.stringify(tags);
  
  return `
    <div class="archive-post-item" 
         data-title="${post.title || ''}" 
         data-date="${formattedDate}" 
         data-categories="${categoriesData}" 
         data-tags="${tagsData}"
         data-categories-debug="${categoriesDebug.replace(/"/g, '&quot;')}"
         data-tags-debug="${tagsDebug.replace(/"/g, '&quot;')}"
         data-url="${post.url || ''}"
         data-additional-post="true">
      <div class="post-meta">
        <span class="post-date" data-date="${formattedDate}">${displayDate}</span>
        <a class="post-link" href="${post.url || '#'}">${post.title || 'Sin título'}</a>
        
        <div class="post-taxonomies">
          ${categories.length > 0 ? `
            <div class="post-categories">
              ${categories.map(cat => 
                `<a href="javascript:void(0);" class="category-badge category-filter-link" data-filter="${cat.toLowerCase()}">${cat}</a>`
              ).join(' ')}
            </div>
          ` : ''}
          
          ${tags.length > 0 ? `
            <div class="post-tags">
              ${tags.map(tag => 
                `<a href="javascript:void(0);" class="tag-badge tag-filter-link" data-filter="${tag.toLowerCase()}">#${tag}</a>`
              ).join(' ')}
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}
// Check if additional posts are already loaded
function checkExistingAdditionalPosts(mainPostsContainer) {
  const existingAdditionalPosts = mainPostsContainer.querySelectorAll('.archive-post-item[data-additional-post="true"]');
  if (existingAdditionalPosts.length > 0) {
    console.log(`Los posts adicionales ya están cargados (${existingAdditionalPosts.length} posts)`);
    
    // Notify rendering module
    if (typeof Rendering !== 'undefined' && Rendering.setAdditionalPostsLoaded) {
      Rendering.setAdditionalPostsLoaded();
    }
    
    // Apply current filters
    setTimeout(() => {
      if (typeof window.applyFilters === 'function') {
        window.applyFilters(getDOMElements());
      }
    }, 50);
    
    return true;
  }
  return false;
}

// Completely rewrite the ensurePostsLoadedAfterNavigation function
function ensurePostsLoadedAfterNavigation() {
  console.log('🚀 ENSURING POSTS ARE LOADED AFTER NAVIGATION 🚀');
  
  // Check if we're on the archive page
  const archivePage = document.querySelector('.archive-page');
  if (!archivePage) return;
  
  // Reset ALL state flags
  if (typeof Rendering !== 'undefined' && typeof Rendering.reset === 'function') {
    console.log('Resetting Rendering state');
    Rendering.reset();
  }
  
  // Reset global loading flag
  window.isLoadingAdditionalPosts = false;
  
  // ALWAYS force load posts regardless of what's in the DOM
  if (typeof Rendering !== 'undefined' && typeof Rendering.forceLoadPosts === 'function') {
    console.log('Using forceLoadPosts to bypass all state checks');
    Rendering.forceLoadPosts(1, 50, false, () => {
      console.log('Posts loaded successfully after navigation');
      
      // Apply filters after loading
      setTimeout(() => {
        applyFilters(getDOMElements());
      }, 100);
    });
    return;
  }
  
  // Fallback if Rendering module doesn't have the forceLoadPosts function
  console.log('Forcing load of additional posts after navigation (fallback)');
  
  // Reset loading flag to ensure we can load posts
  window.isLoadingAdditionalPosts = false;
  
  // Force load posts
  if (typeof window.loadAdditionalPosts === 'function') {
    window.loadAdditionalPosts(1, 50, false, () => {
      console.log('Additional posts loaded after navigation');
      
      // Apply filters after loading
      setTimeout(() => {
        applyFilters(getDOMElements());
      }, 100);
    });
  }
}

// Create and insert loading indicator
function createLoadingIndicator(mainPostsContainer, additionalPostsMarker) {
  const loadingElement = document.createElement('div');
  loadingElement.className = 'loading-indicator';
  loadingElement.textContent = 'Cargando posts adicionales...';
  mainPostsContainer.insertBefore(loadingElement, additionalPostsMarker);
  return loadingElement;
}

// Collect existing post URLs to avoid duplicates
function collectExistingPostUrls(mainPostsContainer) {
  const existingPostUrls = new Set();
  const existingPosts = mainPostsContainer.querySelectorAll('.archive-post-item[data-original-post="true"]');
  existingPosts.forEach(post => {
    const url = post.dataset.url || '';
    if (url) existingPostUrls.add(url);
  });
  return existingPostUrls;
}

// Helper function to process posts data
function processPostsData(data) {
  let postsArray = [];
  
  if (Array.isArray(data)) {
    // If data is already an array
    postsArray = data;
  } else if (data && typeof data === 'object') {
    // If data is an object with a posts property
    if (Array.isArray(data.posts)) {
      postsArray = data.posts;
    } else {
      // Try to convert object to array if it has post-like properties
      if (data.url || data.title) {
        postsArray = [data];
      } else {
        // Last resort: try to extract values from the object
        postsArray = Object.values(data).filter(item => 
          item && typeof item === 'object' && (item.url || item.title)
        );
      }
    }
  }
  
  return postsArray;
}

// Save posts HTML to sessionStorage
function saveToSessionStorage(postsHTML) {
  try {
    sessionStorage.setItem('additionalPosts', postsHTML);
    sessionStorage.setItem('additionalPostsTimestamp', Date.now().toString());
  } catch (e) {
    console.warn('No se pudieron guardar los posts adicionales en sessionStorage:', e);
  }
}

// Add event listeners to new filter links
function addEventListenersToNewPosts(mainPostsContainer) {
  const newCategoryLinks = mainPostsContainer.querySelectorAll('.archive-post-item[data-additional-post="true"] .category-filter-link');
  const newTagLinks = mainPostsContainer.querySelectorAll('.archive-post-item[data-additional-post="true"] .tag-filter-link');
  
  initLinkListeners(newCategoryLinks, 'category');
  initLinkListeners(newTagLinks, 'tag');
}

// Handle error when loading posts
function handleLoadError(error, loadingElement, additionalPostsMarker, mainPostsContainer) {
  console.error('Error al cargar posts adicionales:', error);
  
  // Remove loading indicator
  if (loadingElement && loadingElement.parentNode) {
    loadingElement.parentNode.removeChild(loadingElement);
  }
  
  // Insert error message
  const errorHTML = '<div class="error-message">Error al cargar posts adicionales. <button class="retry-button">Reintentar</button></div>';
  additionalPostsMarker.insertAdjacentHTML('beforebegin', errorHTML);
  
  // Add event listener to retry button
  const retryButton = mainPostsContainer.querySelector('.error-message .retry-button');
  if (retryButton) {
    retryButton.addEventListener('click', () => {
      const errorMessage = mainPostsContainer.querySelector('.error-message');
      if (errorMessage && errorMessage.parentNode) {
        errorMessage.parentNode.removeChild(errorMessage);
      }
      
      window.loadAdditionalPosts();
    });
  }
}

// Fix the loadAdditionalPosts function to properly use existing helper functions
window.loadAdditionalPosts = function(batch = 1, postsPerBatch = 50, loadAll = false, callback = null) {
  console.log(`🔄 LOADING POSTS: batch ${batch}, ${postsPerBatch} posts per batch, loadAll=${loadAll}...`);
  
  // Get DOM elements
  const mainPostsContainer = document.getElementById('main-posts-list');
  const additionalPostsMarker = document.getElementById('additional-posts-marker');
  const loadingIndicator = document.getElementById('posts-loading-indicator');
  
  if (!mainPostsContainer || !additionalPostsMarker) {
    console.error('No se encontraron los elementos necesarios para cargar posts adicionales');
    if (callback) callback();
    return;
  }
  
  // Check if additional posts are already loaded
  if (checkExistingAdditionalPosts(mainPostsContainer)) {
    console.log('Posts adicionales ya cargados, no se cargarán más');
    if (callback) callback();
    return;
  }
  
  // Check if we're already loading posts
  if (window.isLoadingAdditionalPosts) {
    console.log('Ya se están cargando posts adicionales, ignorando solicitud');
    if (callback) callback();
    return;
  }
  
  // Set loading flag
  window.isLoadingAdditionalPosts = true;
  
  // Show loading indicator
  if (loadingIndicator) loadingIndicator.style.display = 'flex';
  
  // Create loading indicator if needed
  const loadingElement = createLoadingIndicator(mainPostsContainer, additionalPostsMarker);
  
  // Collect existing post URLs to avoid duplicates
  // Collect existing post URLs to avoid duplicates
  const existingPostUrls = collectExistingPostUrls(mainPostsContainer);
  
  // Make AJAX request to get additional posts
  const xhr = new XMLHttpRequest();
  // FIX: Use the correct URL for posts.json instead of undefined path
  xhr.open('GET', `/posts.json?batch=${batch}&count=${postsPerBatch}`, true);
  
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        const posts = processPostsData(response);
        
        if (posts.length > 0) {
          console.log(`Recibidos ${posts.length} posts adicionales`);
          
          // Filter out posts that already exist
          const newPosts = posts.filter(post => !existingPostUrls.has(post.url));
          console.log(`${newPosts.length} posts nuevos después de filtrar duplicados`);
          
          // Process the batch of posts
          processBatchPosts(
            newPosts, 
            posts, 
            mainPostsContainer, 
            additionalPostsMarker, 
            loadingElement, 
            loadingIndicator, 
            loadAll, 
            callback
          );
        } else {
          console.log('No hay más posts para cargar');
          
          // Show "no more posts" message
          showNoMorePostsMessage(mainPostsContainer, additionalPostsMarker);
          
          // Remove loading indicators
          if (loadingElement && loadingElement.parentNode) {
            loadingElement.parentNode.removeChild(loadingElement);
          }
          if (loadingIndicator) loadingIndicator.style.display = 'none';
          
          // Update the flag to indicate we've loaded all posts
          if (typeof Rendering !== 'undefined' && Rendering.setAdditionalPostsLoaded) {
            Rendering.setAdditionalPostsLoaded();
          }
          
          // Reset loading flag
          window.isLoadingAdditionalPosts = false;
          
          // Execute callback if provided
          if (callback) callback();
        }
      } catch (error) {
        handleLoadError(error, loadingElement, additionalPostsMarker, mainPostsContainer);
        window.isLoadingAdditionalPosts = false;
        if (callback) callback();
      }
    } else {
      handleLoadError(xhr.statusText, loadingElement, additionalPostsMarker, mainPostsContainer);
      window.isLoadingAdditionalPosts = false;
      if (callback) callback();
    }
  };
  
  xhr.onerror = function() {
    handleLoadError('Network error', loadingElement, additionalPostsMarker, mainPostsContainer);
    window.isLoadingAdditionalPosts = false;
    if (callback) callback();
  };
  
  xhr.send();
};


function processBatchPosts(batchPosts, newPosts, mainPostsContainer, additionalPostsMarker, loadingElement, loadingIndicator, loadedAll, callback) {
  if (batchPosts.length === 0) {
    console.log('No hay más posts para cargar');
    
    // Show "no more posts" message
    showNoMorePostsMessage(mainPostsContainer, additionalPostsMarker);
    
    // Remove loading indicators
    if (loadingElement && loadingElement.parentNode) {
      loadingElement.parentNode.removeChild(loadingElement);
    }
    if (loadingIndicator) loadingIndicator.style.display = 'none';
    
    // Update the flag to indicate we've loaded all posts
    if (typeof Rendering !== 'undefined' && Rendering.setAdditionalPostsLoaded) {
      Rendering.setAdditionalPostsLoaded();
    }
    
    window.isLoadingAdditionalPosts = false;
    
    // If we were loading posts for filters, reapply them now
    if (window.loadingPostsForFilters && window.pendingFilters) {
      console.log('Reapplying filters after loading all posts');
      setTimeout(() => {
        window.loadingPostsForFilters = false;
        applyFilters(getDOMElements());
      }, 100);
    }
    
    // Execute callback if provided
    if (callback) callback();
    
    return;
  }
  
  // Generate HTML for the batch of posts
  const postsHTML = batchPosts.map(createPostElement).join('');
  
  // Insert the posts before the marker
  additionalPostsMarker.insertAdjacentHTML('beforebegin', postsHTML);
  
  // Save to session storage
  saveToSessionStorage(postsHTML);
  
  // Add event listeners to new posts
  addEventListenersToNewPosts(mainPostsContainer);
  
  // Remove loading indicators
  if (loadingElement && loadingElement.parentNode) {
    loadingElement.parentNode.removeChild(loadingElement);
  }
  if (loadingIndicator) loadingIndicator.style.display = 'none';
  
  // Increment the batch counter
  if (typeof Rendering !== 'undefined' && Rendering.incrementBatch) {
    Rendering.incrementBatch();
  }
  
  // Check if we've loaded all available posts
  const allPostsLoaded = loadedAll || batchPosts.length >= newPosts.length;
  
  // If we've loaded all posts, set the flag
  if (allPostsLoaded) {
    console.log('Se han cargado todos los posts disponibles');
    showNoMorePostsMessage(mainPostsContainer, additionalPostsMarker);
    if (typeof Rendering !== 'undefined' && Rendering.setAdditionalPostsLoaded) {
      Rendering.setAdditionalPostsLoaded();
    }
  }
  
  // Reset loading flag
  window.isLoadingAdditionalPosts = false;
  
  // If we were loading posts for filters, reapply them now
  if (window.loadingPostsForFilters && window.pendingFilters) {
    console.log('Reapplying filters after loading posts');
    setTimeout(() => {
      window.loadingPostsForFilters = false;
      applyFilters(getDOMElements());
    }, 100);
  } else if (callback) {
    // Execute callback if provided
    callback();
  } else {
    // Apply filters to include the new posts
    setTimeout(() => {
      if (typeof window.applyFilters === 'function') {
        window.applyFilters(getDOMElements());
      }
      
      // If we haven't loaded all posts, check if we need to load more
      if (!allPostsLoaded) {
        setTimeout(() => {
          if (typeof Rendering !== 'undefined' && Rendering.checkIfMorePostsNeeded) {
            Rendering.checkIfMorePostsNeeded();
          }
        }, 300);
      }
    }, 100);
  }
}
// Function to show "no more posts" message
function showNoMorePostsMessage(mainPostsContainer, additionalPostsMarker) {
  // Check if message already exists
  if (document.getElementById('no-more-posts-message')) return;
  
  const messageElement = document.createElement('div');
  messageElement.id = 'no-more-posts-message';
  messageElement.className = 'no-more-posts-message';
  messageElement.innerHTML = '<p>No hay más posts para cargar</p>';
  
  // Insert after the marker
  if (additionalPostsMarker.nextSibling) {
    mainPostsContainer.insertBefore(messageElement, additionalPostsMarker.nextSibling);
  } else {
    mainPostsContainer.appendChild(messageElement);
  }
}

window.ensurePostsLoadedAfterNavigation = ensurePostsLoadedAfterNavigation;
window.initArchiveFilters = initArchiveFilters;
window.applyFilters = () => applyFilters(getDOMElements());
export { initArchiveFilters };