import { Filters } from './modules/filters.js';
import { Sorting } from './modules/sorting.js';
import { Rendering } from './modules/rendering.js';
import { Dropdowns } from './modules/dropdowns.js';
import { URLManager } from './modules/urlManager.js';
import { Search } from './modules/search.js';

// Función para inicializar los filtros
const initArchiveFilters = () => {
  console.log('Inicializando filtros de archivo');
  const archivePage = document.querySelector('.archive-page');
  if (!archivePage) {
    console.log('No se encontró la página de archivo');
    return;
  }

  // Obtener todos los elementos necesarios
  const postItems = document.querySelectorAll('.archive-post-item');
  if (postItems.length === 0) {
    console.log('No se encontraron elementos de post');
  } else {
    console.log(`Se encontraron ${postItems.length} elementos de post`);
  }

  // Elementos de categoría
  const categoryFilters = document.querySelectorAll('.category-filter');
  const categoryFilterLinks = document.querySelectorAll('.category-filter-link');
  const categoryDropdownButton = document.querySelector('.categories-dropdown-container .dropdown-button');
  const categoryDropdownContent = document.querySelector('.categories-dropdown-container .dropdown-content');
  const selectedCategorySpan = document.querySelector('.selected-category');
  
  // Elementos de etiqueta
  const tagFilters = document.querySelectorAll('.tag-filter');
  const tagFilterLinks = document.querySelectorAll('.tag-filter-link');
  const tagDropdownButton = document.querySelector('.tags-dropdown-container .dropdown-button');
  const tagDropdownContent = document.querySelector('.tags-dropdown-container .dropdown-content');
  const selectedTagSpan = document.querySelector('.selected-tag');
  
  // Elementos de filtro activo
  const activeCategoryFilter = document.querySelector('.active-category-filter');
  const activeTagFilter = document.querySelector('.active-tag-filter');
  const activeCategoryValue = document.querySelector('.active-category-filter .filter-value');
  const activeTagValue = document.querySelector('.active-tag-filter .filter-value');
  
  // Botones de limpieza
  const clearCategoryFilter = document.querySelector('.clear-filter[data-filter-type="category"]');
  const clearTagFilter = document.querySelector('.clear-filter[data-filter-type="tag"]');
  const resetFiltersBtn = document.querySelector('.reset-filters-btn');
  
  // Botones de ordenación
  const sortButtons = document.querySelectorAll('.sort-button');
  
  // Contenedor de filtros
  const filterContainer = document.querySelector('.archive-filter-container');
  
  // Elementos de búsqueda
  const searchInput = document.getElementById('archive-search');
  const clearSearchBtn = document.getElementById('clear-search');

  let isProcessing = false; // Add processing flag

  console.log('Inicializando dropdowns...');
  // Verificar que los elementos existen antes de inicializar
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

  // Inicializar búsqueda
  if (searchInput && clearSearchBtn) {
    console.log('Inicializando búsqueda');
    Search.initSearchInput(searchInput, clearSearchBtn);
  } else {
    console.log('No se encontraron elementos para la búsqueda');
  }

  const params = new URLSearchParams(window.location.search);
  
  // Si no hay parámetros en la URL, asegurarse de que los filtros estén en su estado inicial
  if (!params.has('category') && !params.has('tag') && !params.has('sort') && !params.has('search')) {
    console.log('No hay parámetros de filtro en la URL, reiniciando filtros');
    Filters.resetFilters();
    Sorting.setSortMethod('date', 'desc');
    Search.setSearchQuery('');
    
    // Limpiar el campo de búsqueda si existe
    if (searchInput) {
      searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    }
  } else {
    // Si hay parámetros, aplicarlos
    Filters.setCategoryFilter(params.get('category') || 'all');
    Filters.setTagFilter(params.get('tag') || 'all');
    Sorting.setSortMethod(params.get('sort') || 'date', params.get('direction') || 'desc');
    
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

  

  // Apply filters on page load
  setTimeout(() => applyFilters(), 50);



  function applyFilters() {
    console.log('Aplicando filtros...');
    // Prevent multiple simultaneous filter operations
    if (isProcessing) return;
    isProcessing = true;
    
    if (filterContainer) filterContainer.classList.add('loading');
    
    // Use setTimeout to allow the UI to update before processing
    setTimeout(() => {
      const { currentCategoryFilter, currentTagFilter } = Filters.getCurrentFilters();
      const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
      const currentSearchQuery = Search.getCurrentSearchQuery();

      // Filter posts by category and tag
      const filteredByTaxonomy = Array.from(postItems).filter(item => {
        const postCategories = item.dataset.categories || '';
        const postTags = item.dataset.tags || '';
        
        const matchesCategory = currentCategoryFilter === 'all' || 
                              postCategories.includes(currentCategoryFilter);
        const matchesTag = currentTagFilter === 'all' || 
                          postTags.includes(currentTagFilter);
        
        return matchesCategory && matchesTag;
      });


      const filteredPosts = Search.filterPostsBySearch(filteredByTaxonomy, currentSearchQuery);


      // Sort posts
      const sortedPosts = Sorting.sortPosts(filteredPosts, currentSortMethod, currentSortDirection);

      // Render posts
      Rendering.renderPosts(sortedPosts);

      // Update active filters display
      Filters.updateActiveFiltersDisplay(activeCategoryFilter, activeTagFilter, activeCategoryValue, activeTagValue, currentCategoryFilter, currentTagFilter);

      // Update dropdown text
      Dropdowns.updateDropdownText(selectedCategorySpan, 'category', currentCategoryFilter);
      Dropdowns.updateDropdownText(selectedTagSpan, 'tag', currentTagFilter);

      // Update active sort button
      Sorting.updateActiveSortButton(sortButtons, currentSortMethod, currentSortDirection);

      // Update URL
      URLManager.updateURL(currentCategoryFilter, currentTagFilter, currentSortMethod, currentSortDirection, currentSearchQuery);
      
      if (filterContainer) filterContainer.classList.remove('loading');
      
      // Reset processing flag
      isProcessing = false;
    }, 10);
  }

    // Add search input event listener
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        // Debounce search to avoid too many updates
        clearTimeout(searchInput.debounceTimer);
        searchInput.debounceTimer = setTimeout(() => {
          applyFilters();
        }, 300);
      });
      
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyFilters();
        }
      });
    }
    
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        applyFilters();
      });
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

// Modificar la sección de los botones de ordenación
sortButtons.forEach(button => {
  // Eliminar eventos anteriores para evitar duplicados
  const newButton = button.cloneNode(true);
  
  if (button.parentNode) {
    button.parentNode.replaceChild(newButton, button);
  }
  
  newButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Click en botón de ordenación');
    
    // Get sort method from data attribute
    const sortMethod = this.dataset.sort;
    const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
    
    console.log(`Botón clickeado: ${sortMethod}, Estado actual: ${currentSortMethod}, ${currentSortDirection}`);
    
    // Remover clase active de TODOS los botones de ordenación
    document.querySelectorAll('.sort-button').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Añadir clase active SOLO al botón actual
    this.classList.add('active');
    
    // Si clickeamos el mismo método de ordenación, invertir la dirección
    if (sortMethod === currentSortMethod) {
      const newDirection = currentSortDirection === 'desc' ? 'asc' : 'desc';
      console.log(`Cambiando dirección a: ${newDirection}`);
      
      // Actualizar el atributo data-direction del botón
      this.dataset.direction = newDirection;
      
      // Actualizar el ícono si existe
      const icon = this.querySelector('i');
      if (icon) {
        icon.className = newDirection === 'asc' ? 'fas fa-arrow-up' : 'fas fa-arrow-down';
      }
      
      Sorting.setSortMethod(sortMethod, newDirection);
    } else {
      // Nuevo método de ordenación, usar la dirección predeterminada del botón
      const direction = this.dataset.direction || 'desc';
      console.log(`Cambiando método a: ${sortMethod}, dirección: ${direction}`);
      Sorting.setSortMethod(sortMethod, direction);
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
    const currentSearchQuery = Search.getCurrentSearchQuery();
    
    // Don't reapply if already all filters are 'all' and sort is default and no search query
    if (currentCategoryFilter === 'all' && currentTagFilter === 'all' && 
        currentSortMethod === 'date' && currentSortDirection === 'desc' && 
        !currentSearchQuery) return;
    
    // Reset search input
    Search.resetSearch(searchInput, clearSearchBtn);
    
    // Reset filters and sorting
    Filters.resetFilters();
    Sorting.setSortMethod('date', 'desc');
    applyFilters();
  });

  const noResultsResetBtn = document.querySelector('.no-results-message .reset-filters-btn');
  noResultsResetBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Reset search input
    Search.resetSearch(searchInput, clearSearchBtn);
    
    // Reset filters and sorting
    Filters.resetFilters();
    Sorting.setSortMethod('date', 'desc');
    applyFilters();
  });

  

  if (typeof Turbo !== 'undefined') {

    // document.addEventListener('turbo:load', () => {
    //   console.log('Cambio de página detectado en archive-filters.js (Turbo)');
      
    //   // Verificar si estamos en la página de archivo
    //   const archivePage = document.querySelector('.archive-page');
    //   if (archivePage) {
    //     console.log('Reinicializando filtros de archivo después de navegación Turbo');
        
    //     // Reinicializar dropdowns explícitamente
    //     Dropdowns.reinitializeAllDropdowns();
        
    //     // Pequeño retraso para asegurar que todo está listo
    //     setTimeout(() => {
    //       initArchiveFilters();
    //     }, 50);
    //   }
    // });
    
    // También manejar el evento render para asegurar que los dropdowns funcionan
    document.addEventListener('turbo:render', () => {
      console.log('Turbo render en archive-filters.js');
      
      // Verificar si estamos en la página de archivo
      const archivePage = document.querySelector('.archive-page');
      if (archivePage) {
        // Reinicializar dropdowns explícitamente con un retraso mayor
        setTimeout(() => {
          console.log('Reinicializando dropdowns después de turbo:render');
          if (typeof Dropdowns !== 'undefined' && Dropdowns.reinitializeAllDropdowns) {
            Dropdowns.reinitializeAllDropdowns();
          }
        }, 150); // Increased delay for better reliability
      }
    });
  } 
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM cargado en archive-filters.js');
  setTimeout(initArchiveFilters, 100); // Pequeño retraso para asegurar que el DOM está completamente cargado
});

// Exportar la función para que pueda ser llamada desde fuera
window.initArchiveFilters = initArchiveFilters;
export { initArchiveFilters };