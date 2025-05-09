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
window.ensureFiltersApplied = function() {
  setTimeout(() => {
    if (typeof window.applyFilters === 'function') {
      console.log('Asegurando que los filtros se aplican correctamente después de cargar posts adicionales');
      window.applyFilters();
    }
  }, 300);
};

window.initArchivePageOnNavigation = function() {
  console.log('Initializing archive page after navigation');
  
  // Check if we're on the archive page
  const archivePage = document.querySelector('.archive-page');
  if (!archivePage) return;
  
  // Initialize archive filters if not already done
  if (typeof window.initArchiveFilters === 'function') {
    window.initArchiveFilters();
  }
  
  // Ensure lazy loading is set up
  if (typeof Rendering !== 'undefined' && Rendering.setupLazyLoading) {
    console.log('Setting up lazy loading after navigation');
    Rendering.setupLazyLoading();
  }
  
  // Try to load additional posts if needed
  setTimeout(() => {
    if (typeof window.tryLoadAdditionalPosts === 'function') {
      window.tryLoadAdditionalPosts(300);
    }
  }, 500);
};

// Refactorizar tryLoadAdditionalPosts para evitar cargas múltiples
window.tryLoadAdditionalPosts = function (delay = 800, retryDelay = 500) {
  // Si ya estamos cargando posts, no hacer nada
  if (window.isLoadingAdditionalPosts) {
    console.log('Ya se están cargando posts adicionales, ignorando solicitud');
    return;
  }
  
  // Marcar que estamos cargando
  window.isLoadingAdditionalPosts = true;
  
  setTimeout(() => {
    if (typeof window.loadAdditionalPosts === 'function') {
      console.log('Cargando primer batch de posts adicionales');
      // Start with batch 1
      window.loadAdditionalPosts(1, 50);
      
      // Aplicar ordenación después de cargar posts adicionales
      setTimeout(() => {
        console.log('Aplicando ordenación después de cargar posts adicionales');
        const { method, direction } = window.getSortParameters();
        
        // Actualizar botones de ordenación
        if (typeof window.updateSortButtonsDirectly === 'function') {
          window.updateSortButtonsDirectly(method, direction);
        }
        
        // Aplicar filtros para ordenar todos los posts
        window.ensureFiltersApplied();
        
        // Resetear el flag
        window.isLoadingAdditionalPosts = false;
        
        // Set up intersection observer for infinite scroll
        if (typeof Rendering !== 'undefined' && Rendering.setupLazyLoading) {
          Rendering.setupLazyLoading();
        }
      }, 500);
    } else {
      console.warn('loadAdditionalPosts no está disponible, intentando de nuevo...');
      setTimeout(() => {
        if (typeof window.loadAdditionalPosts === 'function') {
          console.log('Cargando primer batch de posts adicionales (reintento)');
          window.loadAdditionalPosts(1, 50);
          
          // Aplicar ordenación después de cargar posts adicionales
          setTimeout(() => {
            console.log('Aplicando ordenación después de cargar posts adicionales (retry)');
            const { method, direction } = window.getSortParameters();
            
            // Actualizar botones de ordenación
            window.updateSortButtonsDirectly(method, direction);
            
            // Aplicar filtros para ordenar todos los posts
            window.ensureFiltersApplied();
            
            // Resetear el flag
            window.isLoadingAdditionalPosts = false;
          }, 500);
        } else {
          // Si después del reintento sigue sin estar disponible, resetear el flag
          window.isLoadingAdditionalPosts = false;
        }
      }, retryDelay);
    }
  }, delay);
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
          // Exponer Rendering globalmente para que sea accesible desde otros archivos
          if (typeof Rendering !== 'undefined' && typeof window.Rendering === 'undefined') {
            window.Rendering = Rendering;
            console.log('Rendering expuesto globalmente');
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

      // Verificar si llegamos aquí por navegación desde otra página
      if (document.referrer && document.referrer !== document.location.href) {
        console.log('Detectada navegación desde otra página a la página de archivo en DOMContentLoaded');
        if (typeof window.initArchivePageOnNavigation === 'function' || 
            typeof window.initArchivePageAfterNavigation === 'function') {
          const navigationFunction = window.initArchivePageAfterNavigation || window.initArchivePageOnNavigation;
          setTimeout(() => navigationFunction(), 300);
        } else {
          // Si no hay función específica de navegación, usar la carga normal
          console.log('Intentando cargar posts desde initializeArchiveOnDOMReady con retry');
          window.tryLoadAdditionalPosts(300, 500);
        }
      } else {
        // ✅ Usamos la función reutilizable para carga normal
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