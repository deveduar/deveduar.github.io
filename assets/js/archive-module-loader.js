// Nueva función utilitaria para obtener parámetros de ordenación
window.getSortParameters = function() {
  const params = new URLSearchParams(window.location.search);
  return {
    method: params.get('sort') || 'date',
    direction: params.get('direction') || 'desc'
  };
};

// Añadir una función auxiliar para escapar caracteres especiales en expresiones regulares
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Función para asegurar que los filtros se aplican correctamente después de cargar posts adicionales
// Añadir un flag para controlar si estamos en proceso de cargar posts adicionales
window.isLoadingAdditionalPosts = false;

// Función para asegurar que los filtros se aplican correctamente después de cargar posts adicionales
// Update the ensureFiltersApplied function
window.ensureFiltersApplied = function() {
  if (typeof window.applyFilters === 'function') {
    console.log('Asegurando que los filtros se aplican correctamente después de cargar posts adicionales');
    window.applyFilters();
  }
};



// Update the initArchivePageOnNavigation function
window.initArchivePageOnNavigation = function() {
  console.log('Initializing archive page after navigation');
  
  // Check if we're on the archive page
  const archivePage = document.querySelector('.archive-page');
  if (!archivePage) return;
  
  // Reset Rendering state - use window.Rendering instead of Rendering
  if (typeof window.Rendering !== 'undefined' && typeof window.Rendering.reset === 'function') {
    console.log('Resetting Rendering state');
    window.Rendering.reset();
  }
  
  // Initialize archive filters if not already done
  if (typeof window.initArchiveFilters === 'function') {
    window.initArchiveFilters();
  }
  
  // Use the new ensurePostsLoadedAfterNavigation function
  setTimeout(() => {
    window.ensurePostsLoadedAfterNavigation();
  }, 300);
};

// Update the tryLoadAdditionalPosts function to better handle default view
// Update the tryLoadAdditionalPosts function to be more reliable
window.tryLoadAdditionalPosts = function (delay = 800, retryDelay = 500) {
  setTimeout(() => {
    // Check if we're using default sort (date desc) and no filters
    const params = new URLSearchParams(window.location.search);
    const sortMethod = params.get('sort') || 'date';
    const sortDirection = params.get('direction') || 'desc';
    const categoryFilter = params.get('category') || 'all';
    const tagFilter = params.get('tag') || 'all';
    const searchQuery = params.get('search') || '';
    
    // Check if there are any additional posts already loaded
    const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
    const hasAdditionalPosts = additionalPosts.length > 0;
    
    // If using default sort and no filters, just set up lazy loading
    const isDefaultView = sortMethod === 'date' && sortDirection === 'desc' && 
                         categoryFilter === 'all' && tagFilter === 'all' && 
                         (!searchQuery || searchQuery.trim() === '');
    
    // If we already have additional posts, just ensure filters are applied
    if (hasAdditionalPosts) {
      console.log(`Ya hay ${additionalPosts.length} posts adicionales cargados, solo aplicando filtros`);
      if (typeof window.applyFilters === 'function') {
        window.applyFilters();
      }
      
      // Set up lazy loading for default view
      if (isDefaultView) {
        if (typeof window.Rendering !== 'undefined' && typeof window.Rendering.setupLazyLoading === 'function') {
          window.Rendering.setupLazyLoading();
        } else if (typeof Rendering !== 'undefined' && typeof Rendering.setupLazyLoading === 'function') {
          Rendering.setupLazyLoading();
        }
      }
      return;
    }
    
    if (isDefaultView) {
      console.log('Vista por defecto detectada, configurando lazy loading en lugar de cargar posts inmediatamente');
      
      // Set up lazy loading
      if (typeof window.Rendering !== 'undefined' && typeof window.Rendering.setupLazyLoading === 'function') {
        window.Rendering.setupLazyLoading();
        return;
      } else if (typeof Rendering !== 'undefined' && typeof Rendering.setupLazyLoading === 'function') {
        Rendering.setupLazyLoading();
        return;
      }
    }
    
    // For non-default views or if Rendering is not available, load posts immediately
    // Check if Rendering is available - use window.Rendering
    if (typeof window.Rendering !== 'undefined' && typeof window.Rendering.loadMorePosts === 'function') {
      console.log('Cargando primer batch de posts adicionales usando Rendering');
      
      // Load first batch of posts
      window.Rendering.loadMorePosts(1, 50, !isDefaultView, () => {
        console.log('Primer batch de posts cargado, aplicando ordenación');
        
        // Update sort buttons
        if (typeof window.updateSortButtonsDirectly === 'function') {
          window.updateSortButtonsDirectly(sortMethod, sortDirection);
        }
        
        // Apply filters
        window.ensureFiltersApplied();
        
        // Set up lazy loading for default view - use window.Rendering
        if (isDefaultView && typeof window.Rendering.setupLazyLoading === 'function') {
          window.Rendering.setupLazyLoading();
        }
      });
    } else if (typeof window.loadAdditionalPosts === 'function') {
      // Fallback to direct loadAdditionalPosts if Rendering is not available
      console.log('Rendering no disponible, usando loadAdditionalPosts directamente');
      window.loadAdditionalPosts(1, 50, !isDefaultView, () => {
        console.log('Primer batch de posts cargado, aplicando ordenación');
        
        // Update sort buttons
        if (typeof window.updateSortButtonsDirectly === 'function') {
          window.updateSortButtonsDirectly(sortMethod, sortDirection);
        }
        
        // Apply filters
        window.ensureFiltersApplied();
      });
    } else {
      console.warn('loadAdditionalPosts no está disponible, intentando de nuevo...');
      setTimeout(() => window.tryLoadAdditionalPosts(0, retryDelay), retryDelay);
    }
  }, delay);
};

// Add a new function to ensure posts are loaded after navigation
window.ensurePostsLoadedAfterNavigation = function() {
  console.log('Ensuring posts are loaded after navigation');
  
  // Check if we're on the archive page
  const archivePage = document.querySelector('.archive-page');
  if (!archivePage) return;
  
  // Reset Rendering state to ensure we can load posts again
  if (typeof window.Rendering !== 'undefined') {
    if (typeof window.Rendering.reset === 'function') {
      console.log('Resetting Rendering state');
      window.Rendering.reset();
    }
    
    // Check if additional posts are actually loaded
    const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
    const hasAdditionalPosts = additionalPosts.length > 0;
    
    if (!hasAdditionalPosts) {
      console.log('No additional posts found in DOM, forcing load');
      
      // Use the new forceLoadPosts function if available
      if (typeof window.Rendering.forceLoadPosts === 'function') {
        console.log('Using forceLoadPosts to bypass state checks');
        window.Rendering.forceLoadPosts(1, 50, false, () => {
          console.log('Posts loaded successfully after navigation');
          
          // Apply filters after loading
          if (typeof window.applyFilters === 'function') {
            window.applyFilters();
          }
        });
        return;
      }
    }
  }
  
  // Fallback if Rendering module doesn't have the new function
  // Check if additional posts are already loaded
  const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
  const hasAdditionalPosts = additionalPosts.length > 0;
  
  if (!hasAdditionalPosts) {
    console.log('No additional posts found after navigation, forcing load (fallback)');
    
    // Get current filter/sort parameters
    const params = new URLSearchParams(window.location.search);
    const sortMethod = params.get('sort') || 'date';
    const sortDirection = params.get('direction') || 'desc';
    const categoryFilter = params.get('category') || 'all';
    const tagFilter = params.get('tag') || 'all';
    const searchQuery = params.get('search') || '';
    
    // If using default sort and no filters, just load first batch
    const isDefaultView = sortMethod === 'date' && sortDirection === 'desc' && 
                         categoryFilter === 'all' && tagFilter === 'all' && 
                         (!searchQuery || searchQuery.trim() === '');
    
    // Force load posts
    if (typeof window.loadAdditionalPosts === 'function') {
      console.log('Forcing load of additional posts after navigation (fallback)');
      window.isLoadingAdditionalPosts = false; // Reset loading flag
      window.loadAdditionalPosts(1, 50, !isDefaultView, () => {
        console.log('Additional posts loaded after navigation');
        
        // Apply filters after loading
        if (typeof window.applyFilters === 'function') {
          window.applyFilters();
        }
      });
    }
  } else {
    console.log(`${additionalPosts.length} additional posts already loaded, just applying filters`);
    // Just apply filters if posts are already loaded
    if (typeof window.applyFilters === 'function') {
      window.applyFilters();
    }
  }
};

// Add a new function to check if additional posts are loaded
window.checkAdditionalPostsLoaded = function() {
  const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
  return additionalPosts.length > 0;
};

// Modificar la función initializeArchiveModules para exponer Rendering globalmente
function initializeArchiveModules() {
  // Check if ARCHIVE_PATHS exists
  if (typeof window.ARCHIVE_PATHS === 'undefined') {
    console.error('ARCHIVE_PATHS is not defined. Make sure it is initialized before calling initializeArchiveModules.');
    return;
  }

  // Define modules for archive page
  if (typeof window.archiveModules === 'undefined') {
    window.archiveModules = [
      window.ARCHIVE_PATHS.FILTERS_PATH,
      window.ARCHIVE_PATHS.SORTING_PATH,
      window.ARCHIVE_PATHS.RENDERING_PATH,
      window.ARCHIVE_PATHS.DROPDOWNS_PATH,
      window.ARCHIVE_PATHS.URL_MANAGER_PATH,
      window.ARCHIVE_PATHS.SEARCH_PATH
    ];
  }

  // Function to load archive modules
  if (typeof window.loadArchiveScripts !== 'function') {
    window.loadArchiveScripts = function () {
      const { method, direction } = window.getSortParameters();

      try {
        sessionStorage.setItem('lastSortMethod', method);
        sessionStorage.setItem('lastSortDirection', direction);
        console.log(`Guardando en sessionStorage: método=${method}, dirección=${direction}`);
      } catch (e) {
        console.warn('No se pudo guardar en sessionStorage:', e);
      }

      window.loadModulesForPage(
        '.archive-page',
        window.archiveModules,
        window.ARCHIVE_PATHS.ARCHIVE_FILTERS_PATH,
        'initArchiveFilters',
        function () {
          // Exponer todos los módulos globalmente para que sean accesibles desde otros archivos
          if (typeof Rendering !== 'undefined' && typeof window.Rendering === 'undefined') {
            window.Rendering = Rendering;
            console.log('Rendering expuesto globalmente');
          }
          
          // Exponer Filters globalmente
          if (typeof Filters !== 'undefined' && typeof window.Filters === 'undefined') {
            window.Filters = Filters;
            console.log('Filters expuesto globalmente');
          }
          
          // Exponer Sorting globalmente
          if (typeof Sorting !== 'undefined' && typeof window.Sorting === 'undefined') {
            window.Sorting = Sorting;
            console.log('Sorting expuesto globalmente');
          }
          
          // Exponer Search globalmente
          if (typeof Search !== 'undefined' && typeof window.Search === 'undefined') {
            window.Search = Search;
            console.log('Search expuesto globalmente');
          }
          
          // Exponer URLManager globalmente
          if (typeof URLManager !== 'undefined' && typeof window.URLManager === 'undefined') {
            window.URLManager = URLManager;
            console.log('URLManager expuesto globalmente');
          }
          
          // Exponer Dropdowns globalmente
          if (typeof Dropdowns !== 'undefined' && typeof window.Dropdowns === 'undefined') {
            window.Dropdowns = Dropdowns;
            console.log('Dropdowns expuesto globalmente');
          }

          if (typeof window.initArchiveFilters === 'function') {
            window.initArchiveFilters();
          }

          window.updateSortButtonsDirectly(method, direction);

          setTimeout(() => {
            if (typeof window.applyFilters === 'function') {
              console.log('Aplicando filtros después de actualizar ordenación');
              window.applyFilters();
            }
          }, 100);
        }
      );
    };
  }

  window.loadArchiveScripts();
}

// Función simplificada para actualizar botones de ordenación
window.updateSortButtonsDirectly = function(method, direction) {
  const sortButtons = document.querySelectorAll('.sort-button');
  if (!sortButtons || sortButtons.length === 0) {
    console.log('No hay botones de ordenación para actualizar');
    return false;
  }
  
  console.log(`Actualizando ${sortButtons.length} botones de ordenación directamente: método=${method}, dirección=${direction}`);
  
  // Primero, quitar la clase active de todos los botones
  sortButtons.forEach(btn => {
    btn.classList.remove('active', 'asc', 'desc');
  });
  
  // Luego, encontrar y activar el botón correspondiente al método actual
  const activeButton = Array.from(sortButtons).find(btn => btn.dataset.sort === method);
  if (activeButton) {
    activeButton.classList.add('active', direction);
    activeButton.dataset.direction = direction;
    
    // Actualizar el ícono si existe
    const icon = activeButton.querySelector('i');
    if (icon) {
      icon.className = direction === 'asc' ? 'fas fa-arrow-up' : 'fas fa-arrow-down';
    }
    
    // Importante: Actualizar también el módulo de ordenación si está disponible
    if (typeof window.Sorting !== 'undefined') {
      if (typeof window.Sorting.setSortMethod === 'function') {
        window.Sorting.setSortMethod(method, direction);
        console.log(`Método de ordenación actualizado en módulo Sorting: ${method}, ${direction}`);
      } else if (typeof window.Sorting.getCurrentSort === 'function') {
        // Si no podemos establecer directamente, intentamos aplicar filtros
        console.log('No se puede establecer directamente el método de ordenación, aplicando filtros...');
        if (typeof window.applyFilters === 'function') {
          window.applyFilters();
        }
      }
    }
    
    console.log(`Botón de ordenación activado: ${method}, dirección: ${direction}`);
    return true;
  } else {
    console.log(`No se encontró botón para el método de ordenación: ${method}`);
    return false;
  }
};

// Función para detectar si es una recarga de página
window.isPageReload = function() {
  if (window.performance) {
    const navEntries = window.performance.getEntriesByType('navigation');
    if (navEntries.length > 0 && navEntries[0].type === 'reload') {
      return true;
    }
  }
  return false;
};

// Track if we've already initialized on this page load
window.archiveInitialized = false;

// Función centralizada para inicializar los filtros de archivo
// Improve the initializeArchiveOnDOMReady function
window.initializeArchiveOnDOMReady = function() {
  if (document.querySelector('.archive-page')) {
    console.log('Inicializando archivo en DOMContentLoaded centralizado');

    // Reset Rendering state when initializing the archive page
    if (typeof window.Rendering !== 'undefined' && window.Rendering.reset) {
      console.log('Reseteando estado de Rendering en initializeArchiveOnDOMReady');
      window.Rendering.reset();
    }

    setTimeout(function() {
      if (typeof window.initArchiveFilters === 'function') {
        window.initArchiveFilters();
      }

      const { method, direction } = window.getSortParameters();
      window.updateSortButtonsDirectly(method, direction);

      // Check if we arrived here by navigation from another page
      const isNavigation = document.referrer && document.referrer !== document.location.href;
      
      if (isNavigation) {
        console.log('Detectada navegación desde otra página a la página de archivo en DOMContentLoaded');
        
        // Force check for additional posts
        const hasAdditionalPosts = window.checkAdditionalPostsLoaded();
        
        if (!hasAdditionalPosts) {
          console.log('No se detectaron posts adicionales después de navegación, forzando carga');
          if (typeof window.initArchivePageOnNavigation === 'function') {
            setTimeout(() => window.initArchivePageOnNavigation(), 300);
          } else if (typeof window.initArchivePageAfterNavigation === 'function') {
            setTimeout(() => window.initArchivePageAfterNavigation(), 300);
          } else {
            // If no specific navigation function is available, use normal loading
            console.log('Intentando cargar posts desde initializeArchiveOnDOMReady con retry');
            window.tryLoadAdditionalPosts(300, 500);
          }
        } else {
          console.log('Posts adicionales ya cargados, solo aplicando filtros');
          if (typeof window.applyFilters === 'function') {
            window.applyFilters();
          }
        }
      } else {
        // Use the reusable function for normal loading
        console.log('Intentando cargar posts desde initializeArchiveOnDOMReady con retry');
        window.tryLoadAdditionalPosts(300, 500);
      }
    }, 100);
  }
};

// Función centralizada para manejar el evento turbo:render
window.initializeArchiveOnTurboRender = function() {
  // Pequeño retraso para asegurar que el DOM está listo
  setTimeout(function() {
    if (!window.archiveInitialized) {
      window.archiveInitialized = true;
      console.log('Primera inicialización después de turbo:render');
      
      // Usar la función utilitaria para inicializar componentes
      if (typeof window.initArchiveFilters === 'function') {
        window.initArchiveFilters();
      }
      
      // Obtener y aplicar parámetros de ordenación
      const { method, direction } = window.getSortParameters();
      window.updateSortButtonsDirectly(method, direction);
      
      // Aplicar filtros iniciales y actualizar botones activos
      setTimeout(function() {
        const archiveFilters = document.querySelector('.archive-filter-container');
        if (archiveFilters) {
          // Aplicar filtros
          if (typeof window.applyFilters === 'function') {
            window.applyFilters();
          }
        }
      }, 150);
    }
  }, 200);
};

// El resto del código permanece igual
function resetArchiveFilters() {
  // Limpiar los parámetros de URL relacionados con filtros
  if (window.history && window.history.replaceState) {
    const url = new URL(window.location.href);
    url.searchParams.delete('category');
    url.searchParams.delete('tag');
    url.searchParams.delete('sort');
    url.searchParams.delete('direction');
    url.searchParams.delete('search');
    window.history.replaceState({}, '', url.toString());
  }
  
  // Simplificado - eliminadas referencias a módulos
  console.log('Filtros de archivo reiniciadoss');
}


// Registrar event listeners
document.addEventListener('DOMContentLoaded', window.initializeArchiveOnDOMReady);


// Añadir listener para pageshow para manejar navegación back/forward
window.addEventListener('pageshow', function(event) {
  // Verificar si la página se está cargando desde el bfcache
  if (event.persisted) {
    console.log('Página cargada desde caché back/forward en archive-module-loader');
    if (document.querySelector('.archive-page')) {
      if (typeof window.initArchivePageOnNavigation === 'function') {
        setTimeout(() => window.initArchivePageOnNavigation(), 300);
      } else if (typeof window.initArchivePageAfterNavigation === 'function') {
        setTimeout(() => window.initArchivePageAfterNavigation(), 300);
      }
    }
  }
});

// Fallback para navegación normal (sin Turbo)
if (typeof Turbo === 'undefined' && !('Turbo' in window)) {
  document.addEventListener('DOMContentLoaded', initializeArchiveModules);
  
  // Para navegación normal, usar beforeunload
  window.addEventListener('beforeunload', function() {
    if (document.querySelector('.archive-page')) {
      console.log('Saliendo de la página de archivo, reiniciando filtros');
      resetArchiveFilters();
    }
  });
}

// Exportar funciones para uso global
window.initializeArchiveModules = initializeArchiveModules;
window.resetArchiveFilters = resetArchiveFilters;