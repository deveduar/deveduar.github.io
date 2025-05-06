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
          }
        );
      };
      window.loadArchiveScripts();
    }
}
  
  // Track if we've already initialized on this page load
  window.archiveInitialized = false;
  
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
      Sorting.setSortMethod('date', 'desc');
    }
    
    console.log('Filtros de archivo reiniciados');
  }
  
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