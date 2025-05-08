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

// Refactorizar tryLoadAdditionalPosts para evitar cargas múltiples
window.tryLoadAdditionalPosts = function (delay = 800, retryDelay = 500) {
  // Si ya estamos cargando posts o ya hay posts adicionales, no hacer nada
  if (window.isLoadingAdditionalPosts) {
    console.log('Ya se están cargando posts adicionales, ignorando solicitud');
    return;
  }
  
  // Verificar si ya hay posts adicionales cargados
  const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
  if (additionalPosts.length > 0) {
    console.log(`Ya hay ${additionalPosts.length} posts adicionales cargados, aplicando filtros`);
    window.ensureFiltersApplied();
    return;
  }
  
  // Marcar que estamos cargando
  window.isLoadingAdditionalPosts = true;
  
  setTimeout(() => {
    if (typeof window.loadAdditionalPosts === 'function') {
      console.log('Cargando posts adicionales (primera vez)');
      window.loadAdditionalPosts();
      
      // Aplicar ordenación después de cargar posts adicionales
      setTimeout(() => {
        console.log('Aplicando ordenación después de cargar posts adicionales');
        const { method, direction } = window.getSortParameters();
        
        // Actualizar botones de ordenación
        window.updateSortButtonsDirectly(method, direction);
        
        // Aplicar filtros para ordenar todos los posts
        window.ensureFiltersApplied();
        
        // Resetear el flag
        window.isLoadingAdditionalPosts = false;
      }, 500);
    } else {
      console.warn('loadAdditionalPosts no está disponible, intentando de nuevo...');
      setTimeout(() => {
        if (typeof window.loadAdditionalPosts === 'function') {
          console.log('Cargando posts adicionales (reintento)');
          window.loadAdditionalPosts();
          
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

    setTimeout(function() {
      if (typeof window.initArchiveFilters === 'function') {
        window.initArchiveFilters();
      }

      const { method, direction } = window.getSortParameters();
      window.updateSortButtonsDirectly(method, direction);

      // ✅ Usamos la función reutilizable
      setTimeout(() => {
        console.log('Intentando cargar posts desde initializeArchiveOnDOMReady con retry');
        window.tryLoadAdditionalPosts(300, 500);
      }, 300);
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