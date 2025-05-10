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

  // Aplicar filtros iniciales - aumentamos el tiempo para asegurar que todo esté listo
  // Prevent multiple filter applications during initialization
  if (!initialFilterApplied) {
    initialFilterApplied = true;
    setTimeout(() => {
      applyFilters(DOM);
      
      // Initialize page for navigation if this is not a direct page load
      if (document.readyState === 'complete' && !window.performance.getEntriesByType('navigation')[0].type.includes('navigate')) {
        if (typeof window.initArchivePageOnNavigation === 'function') {
          window.initArchivePageOnNavigation();
        }
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
      
      // Check if we need to load all posts first
      const needToLoadAllPosts = 
        (sortMethod !== 'date' || 
        (sortMethod === 'date' && currentSortDirection === 'desc')) && 
        typeof Rendering !== 'undefined' && 
        typeof Rendering.areAdditionalPostsLoaded === 'function' && 
        !Rendering.areAdditionalPostsLoaded();
      
      if (needToLoadAllPosts) {
        console.log('Cambiando ordenación, cargando todos los posts primero...');
        
        // Show loading indicator
        const loadingIndicator = document.querySelector('.loading-indicator');
        if (loadingIndicator) loadingIndicator.style.display = 'block';
        
        // Store the sort method and direction to apply after loading
        window.pendingSortMethod = sortMethod;
        window.pendingSortDirection = (sortMethod === currentSortMethod) ? 
          (currentSortDirection === 'desc' ? 'asc' : 'desc') : 
          (newButton.dataset.direction || 'desc');
        
        // Load all posts
        if (typeof window.loadAdditionalPosts === 'function') {
          window.loadAdditionalPosts(1, 500, true, () => {
            // This callback will be called after all posts are loaded
            console.log('Todos los posts cargados, aplicando ordenación...');
            
            // Apply the pending sort method
            if (window.pendingSortMethod) {
              Sorting.setSortMethod(window.pendingSortMethod, window.pendingSortDirection);
              
              // Clear pending sort
              window.pendingSortMethod = null;
              window.pendingSortDirection = null;
              
              // Apply filters with the new sort
              applyFilters(getDOMElements());
            }
          });
        }
        return;
      }
      
      // If we already have all posts loaded, apply sort immediately
      // Si clickeamos el mismo método de ordenación, invertir la dirección
      if (sortMethod === currentSortMethod) {
        const newDirection = currentSortDirection === 'desc' ? 'asc' : 'desc';
        console.log(`Cambiando dirección a: ${newDirection}`);
        Sorting.setSortMethod(sortMethod, newDirection);
      } else {
        // Nuevo método de ordenación, usar la dirección predeterminada del botón
        const direction = newButton.dataset.direction || 'desc';
        console.log(`Cambiando método a: ${sortMethod}, dirección: ${direction}`);
        Sorting.setSortMethod(sortMethod, direction);
      }
      
      applyFilters(getDOMElements());
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

function applyFilters(DOM) {
  console.log('Aplicando filtros...');
  if (window.isProcessing) {
    console.log('Ya se están procesando filtros, ignorando solicitud');
    return;
  }
  window.isProcessing = true;

  if (DOM.filterContainer) DOM.filterContainer.classList.add('loading');

  setTimeout(() => {
    const { currentCategoryFilter, currentTagFilter } = Filters.getCurrentFilters();
    const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
    const currentSearchQuery = Search.getCurrentSearchQuery();

    console.log(`Aplicando filtros con: categoría="${currentCategoryFilter}", tag="${currentTagFilter}", ordenación=${currentSortMethod}, dirección=${currentSortDirection}, búsqueda="${currentSearchQuery}"`);

    // Check if we need to load all posts immediately
    // Only use lazy loading for default sort (date desc)
    const isDefaultSort = currentSortMethod === 'date' && currentSortDirection === 'desc';
    const hasFilters = 
      (currentCategoryFilter !== 'all' && currentCategoryFilter !== '') || 
      (currentTagFilter !== 'all' && currentTagFilter !== '') || 
      (currentSearchQuery && currentSearchQuery.trim() !== '');
    
    // Load all posts immediately if not using default sort or if filters are applied
    if ((!isDefaultSort || hasFilters) && 
        typeof Rendering !== 'undefined' && 
        typeof Rendering.areAdditionalPostsLoaded === 'function' && 
        !Rendering.areAdditionalPostsLoaded()) {
      
      console.log('Usando filtros o ordenación no predeterminada, cargando todos los posts inmediatamente...');
      
      // Show loading indicator
      const loadingIndicator = document.querySelector('.loading-indicator');
      if (loadingIndicator) loadingIndicator.style.display = 'block';
      
      // Set a flag to indicate we're loading posts for filters
      window.loadingPostsForFilters = true;
      
      // Try to load all posts at once
      if (typeof window.loadAdditionalPosts === 'function') {
        // Store current filter state to reapply after loading
        window.pendingFilters = {
          category: currentCategoryFilter,
          tag: currentTagFilter,
          sort: currentSortMethod,
          direction: currentSortDirection,
          search: currentSearchQuery
        };
        
        // Load all posts with a larger batch size
        window.loadAdditionalPosts(1, 200, true); // Pass true to indicate loading all posts
        
        // Reset processing flag before returning
        if (DOM.filterContainer) DOM.filterContainer.classList.remove('loading');
        window.isProcessing = false;
        
        return; // Exit early, we'll reapply filters after loading in the loadAdditionalPosts callback
      }
    }

    // Check for and remove duplicates
    checkAndRemoveDuplicates(DOM.mainPostsContainer);
    
    // Continue with normal filtering on the deduplicated posts
    const deduplicatedPosts = Array.from(DOM.mainPostsContainer?.querySelectorAll('.archive-post-item') || []);
    
    // Filter by taxonomy using the utility function
    const filteredByTaxonomy = deduplicatedPosts.filter(item => {
      const postCategories = item.dataset.categories || '';
      const postTags = item.dataset.tags || '';
      
      const matchesCategory = matchesTaxonomy(postCategories, currentCategoryFilter);
      const matchesTag = matchesTaxonomy(postTags, currentTagFilter);
      
      return matchesCategory && matchesTag;
    });

    // Filter by search
    const filteredPosts = Search.filterPostsBySearch(filteredByTaxonomy, currentSearchQuery);
    
    // Sort posts
    console.log(`Ordenando ${filteredPosts.length} posts por ${currentSortMethod} en dirección ${currentSortDirection}`);
    const sortedPosts = Sorting.sortPosts(filteredPosts, currentSortMethod, currentSortDirection);

    // Render posts
    Rendering.renderPosts(sortedPosts);

    // Visual updates
    Filters.updateActiveFiltersDisplay(
      DOM.activeCategoryFilter, 
      DOM.activeTagFilter, 
      DOM.activeCategoryValue, 
      DOM.activeTagValue, 
      currentCategoryFilter, 
      currentTagFilter
    );

    Dropdowns.updateDropdownText(DOM.selectedCategorySpan, 'category', currentCategoryFilter);
    Dropdowns.updateDropdownText(DOM.selectedTagSpan, 'tag', currentTagFilter);

    Sorting.updateActiveSortButton(DOM.sortButtons, currentSortMethod, currentSortDirection);

    URLManager.updateURL(currentCategoryFilter, currentTagFilter, currentSortMethod, currentSortDirection, currentSearchQuery);

    // Dispatch event that filters have been applied
    document.dispatchEvent(new CustomEvent('filtersApplied', {
      detail: {
        visiblePostsCount: sortedPosts.length,
        totalPostsCount: deduplicatedPosts.length,
        filters: {
          category: currentCategoryFilter,
          tag: currentTagFilter,
          search: currentSearchQuery,
          sort: currentSortMethod,
          direction: currentSortDirection
        }
      }
    }));

    if (DOM.filterContainer) DOM.filterContainer.classList.remove('loading');
    window.isProcessing = false;
  }, 10);
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

// Process loaded posts data
// function processPostsData(data, existingPostUrls, loadingElement, additionalPostsMarker, mainPostsContainer) {
//   if (!data || !data.posts || !Array.isArray(data.posts)) {
//     throw new Error('Formato de datos inválido');
//   }
  
//   // Filter out duplicates
//   const nonDuplicatePosts = data.posts.filter(post => !existingPostUrls.has(post.url));
//   console.log(`Filtrando duplicados: ${data.posts.length} posts totales, ${nonDuplicatePosts.length} posts únicos`);
  
//   // Remove loading indicator
//   if (loadingElement && loadingElement.parentNode) {
//     loadingElement.parentNode.removeChild(loadingElement);
//   }
  
//   // Create HTML for each post
//   const postsHTML = nonDuplicatePosts.map(createPostElement).join('');
  
//   // Insert posts before marker
//   additionalPostsMarker.insertAdjacentHTML('beforebegin', postsHTML);
//   console.log(`${nonDuplicatePosts.length} posts adicionales cargados y añadidos al DOM`);
  
//   // Save in sessionStorage for future navigation
//   saveToSessionStorage(postsHTML);
  
//   // Notify rendering module
//   if (typeof Rendering !== 'undefined' && Rendering.setAdditionalPostsLoaded) {
//     Rendering.setAdditionalPostsLoaded();
//   }
  
//   // Add event listeners to new filter links
//   addEventListenersToNewPosts(mainPostsContainer);
  
//   // Apply current filters
//   setTimeout(() => {
//     if (typeof window.applyFilters === 'function') {
//       window.applyFilters(getDOMElements());
//     }
//   }, 50);
// }

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

window.loadAdditionalPosts = function(batch = 1, postsPerBatch = 50, loadAll = false, callback = null) {
  console.log(`Cargando posts adicionales (batch ${batch}, ${postsPerBatch} posts por batch, loadAll=${loadAll})...`);
  
  const mainPostsContainer = document.getElementById('main-posts-list');
  const additionalPostsMarker = document.getElementById('additional-posts-marker');
  const loadingIndicator = document.getElementById('posts-loading-indicator');
  
  if (!mainPostsContainer || !additionalPostsMarker) {
    console.error('No se encontraron los elementos necesarios para cargar posts adicionales');
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
  
  // Insert loading indicator if not using the global one
  const loadingElement = loadingIndicator ? null : createLoadingIndicator(mainPostsContainer, additionalPostsMarker);
  
  // Collect existing post URLs to avoid duplicates
  const existingPostUrls = collectExistingPostUrls(mainPostsContainer);
  
  // Load posts from server
  fetch('/posts.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar posts adicionales: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      // Process the data and get posts array
      const postsArray = processPostsData(data);
      
      if (postsArray.length === 0) {
        throw new Error('No se encontraron posts en los datos recibidos');
      }
      
      console.log(`Procesando ${postsArray.length} posts totales`);
      
      // Filter out posts that already exist in the DOM
      const newPosts = postsArray.filter(post => !existingPostUrls.has(post.url));
      
      // If loadAll is true, load all remaining posts at once
      if (loadAll) {
        console.log('Cargando todos los posts restantes de una vez');
        const batchPosts = newPosts;
        processBatchPosts(batchPosts, newPosts, mainPostsContainer, additionalPostsMarker, loadingElement, loadingIndicator, true, callback);
      } else {
        // Calculate start and end indices for this batch
        const startIndex = (batch - 1) * postsPerBatch;
        const endIndex = startIndex + postsPerBatch;
        
        // Get the current batch of posts
        const batchPosts = newPosts.slice(startIndex, endIndex);
        
        console.log(`Batch ${batch}: Procesando ${batchPosts.length} posts nuevos (de ${newPosts.length} disponibles)`);
        processBatchPosts(batchPosts, newPosts, mainPostsContainer, additionalPostsMarker, loadingElement, loadingIndicator, false, callback);
      }
    })
    .catch(error => {
      handleLoadError(error, loadingElement, additionalPostsMarker, mainPostsContainer);
      if (loadingIndicator) loadingIndicator.style.display = 'none';
      window.isLoadingAdditionalPosts = false;
      
      // If we were loading posts for filters, try to apply them anyway
      if (window.loadingPostsForFilters && window.pendingFilters) {
        console.log('Error loading posts for filters, applying filters anyway');
        setTimeout(() => {
          window.loadingPostsForFilters = false;
          applyFilters(getDOMElements());
        }, 100);
      }
      
      // Call the callback even on error
      if (callback) callback();
    });
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


// Exportar la función para que pueda ser llamada desde fuera
window.initArchiveFilters = initArchiveFilters;
window.applyFilters = () => applyFilters(getDOMElements());
export { initArchiveFilters };