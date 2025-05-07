// Nueva función utilitaria para obtener parámetros de ordenación
window.getSortParameters = function() {
  const params = new URLSearchParams(window.location.search);
  return {
    method: params.get('sort') || 'date',
    direction: params.get('direction') || 'desc'
  };
};


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
  if (typeof window.loadArchiveScripts === 'function') {
    window.loadArchiveScripts();
  } else {
    window.loadArchiveScripts = function () {
      // Usar la función utilitaria para obtener parámetros
      const { method: sortMethod, direction: sortDirection } = window.getSortParameters();

      // Guardar estos valores en sessionStorage
      try {
        sessionStorage.setItem('lastSortMethod', sortMethod);
        sessionStorage.setItem('lastSortDirection', sortDirection);
        console.log(`Guardando en sessionStorage: método=${sortMethod}, dirección=${sortDirection}`);
      } catch (e) {
        console.warn('No se pudo guardar en sessionStorage:', e);
      }

      window.loadModulesForPage(
        '.archive-page',
        window.archiveModules,
        window.ARCHIVE_PATHS.ARCHIVE_FILTERS_PATH,
        'initArchiveFilters',
        function () {
          // Callback después de cargar los módulos
          if (typeof window.initArchiveFilters === 'function') {
            window.initArchiveFilters();
          }

         // Aplicar ordenación inicial - simplificado
         const { method, direction } = window.getSortParameters();
         window.updateSortButtonsDirectly(method, direction);

          // Aplicar filtros para actualizar la visualización
          setTimeout(() => {
            if (typeof window.applyFilters === 'function') {
              console.log('Aplicando filtros después de actualizar ordenación');
              window.applyFilters();
            }
          }, 100);
        }
      );
    };
    window.loadArchiveScripts();
  }
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
    btn.classList.remove('active');
  });
  
  // Luego, encontrar y activar el botón correspondiente al método actual
  const activeButton = Array.from(sortButtons).find(btn => btn.dataset.sort === method);
  if (activeButton) {
    activeButton.classList.add('active');
    activeButton.dataset.direction = direction;
    
    // Actualizar el ícono si existe
    const icon = activeButton.querySelector('i');
    if (icon) {
      icon.className = direction === 'asc' ? 'fas fa-arrow-up' : 'fas fa-arrow-down';
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
    
    // Pequeño retraso para asegurar que el DOM está listo
    setTimeout(function() {
      // Usar la función utilitaria para inicializar componentes
      if (typeof window.initArchiveFilters === 'function') {
        window.initArchiveFilters();
      }
      
      // Obtener y aplicar parámetros de ordenación
      const { method, direction } = window.getSortParameters();
      window.updateSortButtonsDirectly(method, direction);
      
      // Cargar posts adicionales después de inicializar los filtros
      setTimeout(() => {
        if (typeof window.loadAdditionalPosts === 'function') {
          window.loadAdditionalPosts();
        }
      }, 200);
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
// window.addEventListener('pageshow', window.handlePageShowEvent);
document.addEventListener('DOMContentLoaded', window.initializeArchiveOnDOMReady);

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