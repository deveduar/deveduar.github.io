import { Filters } from './modules/filters.js';
import { Sorting } from './modules/sorting.js';
import { Rendering } from './modules/rendering.js';
import { Dropdowns } from './modules/dropdowns.js';
import { URLManager } from './modules/urlManager.js';
import { Search } from './modules/search.js';

// Función para inicializar los filtros
// Función para inicializar los filtros
const initArchiveFilters = () => {
  console.log('Inicializando filtros de archivo');
  const archivePage = document.querySelector('.archive-page');
  if (!archivePage) return console.log('No se encontró la página de archivo');

  const DOM = getDOMElements();
  const isFirstVisit = isFirstLoad();

  initializeDropdowns(DOM);
  initializeSearch(DOM);
  initializeEventListeners(DOM);

  if (isFirstVisit) resetAllFilters(DOM);
  else applyURLFilters(DOM);

  // Aplicar filtros iniciales - aumentamos el tiempo para asegurar que todo esté listo
  setTimeout(() => applyFilters(DOM), 100);
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
    additionalPostsContainer: document.getElementById('additional-posts-container')
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

function applyURLFilters({ searchInput, clearSearchBtn, sortButtons }) {
  const params = new URLSearchParams(window.location.search);
  
  // Si hay parámetros, aplicarlos
  Filters.setCategoryFilter(params.get('category') || 'all');
  Filters.setTagFilter(params.get('tag') || 'all');
  
  // Mejorar la aplicación de parámetros de ordenación
  const sortMethod = params.get('sort') || 'date';
  const sortDirection = params.get('direction') || 'desc';
  
  console.log(`Aplicando ordenación desde URL: método=${sortMethod}, dirección=${sortDirection}`);
  Sorting.setSortMethod(sortMethod, sortDirection);
  
  // Actualizar visualmente los botones de ordenación - FORZAR ACTUALIZACIÓN
  Sorting.updateActiveSortButton(sortButtons, sortMethod, sortDirection);
  
  // Set initial search query from URL if present
  if (params.has('search')) {
    const searchQuery = params.get('search');
    Search.setSearchQuery(searchQuery);
    if (searchInput) {
      searchInput.value = searchQuery;
      if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    }
  } else {
    // Si no hay parámetro de búsqueda, limpiar
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

      const value = filter.dataset[type];
      const currentValue = Filters.getCurrentFilters()[`current${capitalize(type)}Filter`];

      // Cerrar dropdown si está abierto
      if (dropdownContent && dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }

      // Si es el mismo filtro, no hacer nada más
      if (value === currentValue) return;

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
      const value = link.dataset.filter;
      if (value === Filters.getCurrentFilters()[`current${capitalize(type)}Filter`]) return;
      Filters[`set${capitalize(type)}Filter`](value);
      applyFilters(getDOMElements());
    });
  });
}

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
      
      // Usar la función del módulo Sorting para actualizar los botones
      Sorting.updateActiveSortButton(document.querySelectorAll('.sort-button'), sortMethod, 
        sortMethod === currentSortMethod ? 
          (currentSortDirection === 'desc' ? 'asc' : 'desc') : 
          (newButton.dataset.direction || 'desc')
      );
      
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

function applyFilters(DOM) {
  console.log('Aplicando filtros...');
  if (window.isProcessing) return;
  window.isProcessing = true;

  if (DOM.filterContainer) DOM.filterContainer.classList.add('loading');

  setTimeout(() => {
    const { currentCategoryFilter, currentTagFilter } = Filters.getCurrentFilters();
    const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
    const currentSearchQuery = Search.getCurrentSearchQuery();

    const additionalPostsContainer = DOM.additionalPostsContainer;
    let additionalPostsBackup = (additionalPostsContainer && additionalPostsContainer.children.length > 0)
      ? additionalPostsContainer.innerHTML
      : null;

    // Filtrar y ordenar posts
    const filteredByTaxonomy = Array.from(DOM.postItems).filter(item => {
      const matchesCategory = currentCategoryFilter === 'all' || item.dataset.categories?.includes(currentCategoryFilter);
      const matchesTag = currentTagFilter === 'all' || item.dataset.tags?.includes(currentTagFilter);
      return matchesCategory && matchesTag;
    });

    const filteredPosts = Search.filterPostsBySearch(filteredByTaxonomy, currentSearchQuery);
    const sortedPosts = Sorting.sortPosts(filteredPosts, currentSortMethod, currentSortDirection);

    Rendering.renderPosts(sortedPosts);

    // Actualizaciones visuales
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

    if (DOM.filterContainer) DOM.filterContainer.classList.remove('loading');

    // Restaurar posts adicionales si desaparecieron
    setTimeout(() => {
      if (additionalPostsContainer && additionalPostsBackup && additionalPostsContainer.children.length === 0) {
        console.log('Los posts adicionales desaparecieron después de aplicar filtros, restaurando...');
        additionalPostsContainer.innerHTML = additionalPostsBackup;

        Rendering.setAdditionalPostsLoaded?.();
        Rendering.applyVisualFilters?.(currentCategoryFilter, currentTagFilter, currentSearchQuery, currentSortMethod, currentSortDirection);
      }

      window.isProcessing = false;
    }, 100);
  }, 10);
}



// Función para cargar posts adicionales
window.loadAdditionalPosts = function() {
  console.log('Cargando posts adicionales...');
  const additionalPostsContainer = document.getElementById('additional-posts-container');
  
  if (!additionalPostsContainer) {
    console.error('No se encontró el contenedor de posts adicionales');
    return;
  }
  
  // Verificar si ya hay posts adicionales cargados
  if (additionalPostsContainer.children.length > 0) {
    console.log('Los posts adicionales ya están cargados');
    
    // Notificar al módulo de renderizado
    if (typeof Rendering !== 'undefined' && Rendering.setAdditionalPostsLoaded) {
      Rendering.setAdditionalPostsLoaded();
    }
    
    return;
  }
  
  // Intentar recuperar de sessionStorage primero
  try {
    const savedPosts = sessionStorage.getItem('additionalPosts');
    if (savedPosts) {
      additionalPostsContainer.innerHTML = savedPosts;
      console.log('Posts adicionales restaurados desde sessionStorage');
      
      // Notificar al módulo de renderizado
      if (typeof Rendering !== 'undefined' && Rendering.setAdditionalPostsLoaded) {
        Rendering.setAdditionalPostsLoaded();
      }
      
      // Aplicar filtros actuales
      applyFilters(getDOMElements());
      return;
    }
  } catch (e) {
    console.warn('Error al recuperar posts adicionales de sessionStorage:', e);
  }
  
  // Si no hay posts en sessionStorage, cargar desde el servidor
  fetch('/posts.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar posts adicionales');
      }
      return response.json();
    })
    .then(data => {
      if (!data || !data.posts || !Array.isArray(data.posts)) {
        throw new Error('Formato de datos inválido');
      }
      
      // Crear elementos HTML para cada post
      const postsHTML = data.posts.map(post => {
        return `
          <div class="archive-post-item additional-post" 
               data-title="${post.title}" 
               data-date="${post.date}" 
               data-categories="${post.categories.join(',')}" 
               data-tags="${post.tags.join(',')}"
               data-additional-post="true">
            <div class="post-meta">
              <span class="post-date">${post.date_formatted}</span>
            </div>
            <h3 class="post-title">
              <a href="${post.url}">${post.title}</a>
            </h3>
            <div class="post-categories">
              ${post.categories.map(cat => 
                `<a href="javascript:void(0);" class="category-filter-link" data-filter="${cat}">${cat}</a>`
              ).join(', ')}
            </div>
            <div class="post-tags">
              ${post.tags.map(tag => 
                `<a href="javascript:void(0);" class="tag-filter-link" data-filter="${tag}">${tag}</a>`
              ).join(', ')}
            </div>
          </div>
        `;
      }).join('');
      
      // Añadir al contenedor
      additionalPostsContainer.innerHTML = postsHTML;
      
      // Guardar en sessionStorage para futuras navegaciones
      try {
        sessionStorage.setItem('additionalPosts', postsHTML);
        sessionStorage.setItem('additionalPostsTimestamp', Date.now().toString());
      } catch (e) {
        console.warn('No se pudieron guardar los posts adicionales en sessionStorage:', e);
      }
      
      // Añadir event listeners a los nuevos enlaces
      const newCategoryLinks = additionalPostsContainer.querySelectorAll('.category-filter-link');
      const newTagLinks = additionalPostsContainer.querySelectorAll('.tag-filter-link');
      
      initLinkListeners(newCategoryLinks, 'category');
      initLinkListeners(newTagLinks, 'tag');
      
      // Notificar al módulo de renderizado
      if (typeof Rendering !== 'undefined' && Rendering.setAdditionalPostsLoaded) {
        Rendering.setAdditionalPostsLoaded();
      }
      
      // Aplicar filtros actuales
      applyFilters(getDOMElements());
    })
    .catch(error => {
      console.error('Error al cargar posts adicionales:', error);
      additionalPostsContainer.innerHTML = '<p class="error-message">Error al cargar posts adicionales. <button class="retry-button">Reintentar</button></p>';
      
      // Añadir event listener al botón de reintentar
      const retryButton = additionalPostsContainer.querySelector('.retry-button');
      if (retryButton) {
        retryButton.addEventListener('click', () => {
          window.loadAdditionalPosts();
        });
      }
    });
};

// Exportar la función para que pueda ser llamada desde fuera
window.initArchiveFilters = initArchiveFilters;
window.applyFilters = () => applyFilters(getDOMElements());
export { initArchiveFilters };