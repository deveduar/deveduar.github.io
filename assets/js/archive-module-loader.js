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
    window.loadArchiveScripts = function() {
      // Guardar los parámetros de URL antes de cargar los módulos
      const params = new URLSearchParams(window.location.search);
      const sortMethod = params.get('sort') || 'date';
      const sortDirection = params.get('direction') || 'desc';
      
      // Guardar estos valores en sessionStorage para asegurar que persistan durante recargas
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
        function() {
          // Callback después de cargar los módulos
          if (typeof Dropdowns !== 'undefined' && Dropdowns.reinitializeAllDropdowns) {
            console.log('Reinicializando dropdowns después de cargar módulos');
            Dropdowns.reinitializeAllDropdowns();
          }
          
          // Asegurarse de que los valores de ordenación se apliquen correctamente
          // Aplicar siempre, incluso si no hay parámetros en la URL
          if (typeof Sorting !== 'undefined') {
            // Intentar recuperar de sessionStorage primero (para recargas)
            let effectiveSortMethod = sortMethod;
            let effectiveSortDirection = sortDirection;
            
            try {
              const storedMethod = sessionStorage.getItem('lastSortMethod');
              const storedDirection = sessionStorage.getItem('lastSortDirection');
              
              if (storedMethod && storedDirection) {
                effectiveSortMethod = storedMethod;
                effectiveSortDirection = storedDirection;
                console.log(`Recuperando de sessionStorage: método=${effectiveSortMethod}, dirección=${effectiveSortDirection}`);
              }
            } catch (e) {
              console.warn('Error al recuperar de sessionStorage:', e);
            }
            
            console.log(`Aplicando ordenación final: método=${effectiveSortMethod}, dirección=${effectiveSortDirection}`);
            Sorting.setSortMethod(effectiveSortMethod, effectiveSortDirection);
            
            // FORZAR actualización de botones inmediatamente
            updateSortButtonsDirectly(effectiveSortMethod, effectiveSortDirection);
            
            // También aplicar con un retraso para asegurar que el DOM esté completamente listo
            setTimeout(() => {
              updateSortButtonsDirectly(effectiveSortMethod, effectiveSortDirection);
              
              // Aplicar filtros para actualizar la visualización
              if (typeof window.applyFilters === 'function') {
                console.log('Aplicando filtros después de actualizar ordenación');
                window.applyFilters();
              }
            }, 100);
            
            // Intentar una vez más después de un tiempo más largo
            setTimeout(() => {
              updateSortButtonsDirectly(effectiveSortMethod, effectiveSortDirection);
            }, 500);
          }
        }
      );
    };
    window.loadArchiveScripts();
  }
}

// Nueva función para actualizar directamente los botones de ordenación
function updateSortButtonsDirectly(method, direction) {
const sortButtons = document.querySelectorAll('.sort-button');
if (!sortButtons || sortButtons.length === 0) {
  console.log('No hay botones de ordenación para actualizar');
  return;
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
} else {
  console.log(`No se encontró botón para el método de ordenación: ${method}`);
}
}

// Track if we've already initialized on this page load
window.archiveInitialized = false;

// Añadir un evento específico para recargas de página
window.addEventListener('load', function() {
if (document.querySelector('.archive-page')) {
  console.log('Evento load detectado en archive-page');
  
  // Recuperar valores de sessionStorage
  try {
    const storedMethod = sessionStorage.getItem('lastSortMethod');
    const storedDirection = sessionStorage.getItem('lastSortDirection');
    
    if (storedMethod && storedDirection) {
      console.log(`Recuperando de sessionStorage en load: método=${storedMethod}, dirección=${storedDirection}`);
      
      // Esperar a que Sorting esté disponible
      const checkSorting = setInterval(() => {
        if (typeof Sorting !== 'undefined') {
          clearInterval(checkSorting);
          
          console.log(`Aplicando ordenación en load: método=${storedMethod}, dirección=${storedDirection}`);
          Sorting.setSortMethod(storedMethod, storedDirection);
          
          // Actualizar botones directamente
          updateSortButtonsDirectly(storedMethod, storedDirection);
          
          // Aplicar filtros para actualizar la visualización
          if (typeof window.applyFilters === 'function') {
            window.applyFilters();
          }
        }
      }, 100);
    }
  } catch (e) {
    console.warn('Error al recuperar de sessionStorage en load:', e);
  }
}
});

// Función para limpiar los filtros cuando se sale de la página de archivo
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

// Reiniciar variables globales de filtros si existen
if (typeof Filters !== 'undefined') {
  Filters.resetFilters();
}

if (typeof Search !== 'undefined') {
  Search.setSearchQuery('');
}

if (typeof Sorting !== 'undefined') {
  // Guardar los valores actuales de ordenación
  const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
  console.log(`Guardando valores de ordenación actuales: ${currentSortMethod}, ${currentSortDirection}`);
  
  // Solo resetear si no estamos recargando la página
  if (!isPageReload()) {
    console.log('No es una recarga, reseteando ordenación');
    Sorting.setSortMethod('date', 'desc');
    
    // Limpiar sessionStorage
    try {
      sessionStorage.removeItem('lastSortMethod');
      sessionStorage.removeItem('lastSortDirection');
    } catch (e) {
      console.warn('Error al limpiar sessionStorage:', e);
    }
  } else {
    console.log('Es una recarga, manteniendo ordenación actual');
  }
}

console.log('Filtros de archivo reiniciados');
}