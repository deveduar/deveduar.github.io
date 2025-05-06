if (typeof Turbo !== 'undefined' || 'Turbo' in window) {
    // Cuando se carga una nueva página
    document.addEventListener('turbo:load', function() {
      console.log('Turbo load en default.html');
      window.archiveInitialized = false; // Reset on each page load
      
      // Forzar una reinicialización completa
      window.archiveModules = undefined;
      
      // Pequeño retraso para asegurar que el DOM está listo y ARCHIVE_PATHS está definido
      setTimeout(function() {
        if (typeof window.ARCHIVE_PATHS === 'undefined') {
          console.warn('ARCHIVE_PATHS no está definido todavía, esperando...');
          // Intentar de nuevo después de un retraso más largo
          setTimeout(function() {
            if (typeof window.initializeArchiveModules === 'function' && 
                typeof window.ARCHIVE_PATHS !== 'undefined') {
              window.initializeArchiveModules();
            } else {
              console.error('No se pudo inicializar los módulos de archivo después de esperar.');
            }
          }, 300);
        } else if (typeof window.initializeArchiveModules === 'function') {
          window.initializeArchiveModules();
        }
      }, 100);
    });
    
    // Antes de visitar una nueva página, limpiar filtros si estamos saliendo de archive
    document.addEventListener('turbo:before-visit', function() {
      if (document.querySelector('.archive-page')) {
        console.log('Saliendo de la página de archivo, reiniciando filtros');
        if (typeof window.resetArchiveFilters === 'function') {
          window.resetArchiveFilters();
        }
      }
    });
    
    // También reinicializar en turbo:render para asegurar que los eventos funcionan
    document.addEventListener('turbo:render', function() {
      // Verificar si estamos en la página de archivo
      if (document.querySelector('.archive-page')) {
        console.log('Turbo render en default.html - página de archivo');
        
        // Pequeño retraso para asegurar que el DOM está listo
        setTimeout(function() {
          if (!window.archiveInitialized) {
            window.archiveInitialized = true;
            console.log('Primera inicialización después de turbo:render');
            
            // Reinicializar los botones de ordenación
            if (typeof window.initArchiveFilters === 'function') {
              window.initArchiveFilters();
            }
            
            // Reinicializar dropdowns explícitamente
            if (typeof Dropdowns !== 'undefined' && Dropdowns.reinitializeAllDropdowns) {
              Dropdowns.reinitializeAllDropdowns();
            }
            
            // Aplicar filtros iniciales y actualizar botones activos
            setTimeout(function() {
              const archiveFilters = document.querySelector('.archive-filter-container');
              if (archiveFilters) {
                // Obtener el estado actual
                if (typeof Sorting !== 'undefined') {
                  const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
                  const sortButtons = document.querySelectorAll('.sort-button');
                  
                  // Primero, quitar la clase active de todos los botones
                  sortButtons.forEach(btn => {
                    btn.classList.remove('active');
                  });
                  
                  // Luego, actualizar solo el botón activo
                  if (sortButtons.length > 0) {
                    Sorting.updateActiveSortButton(sortButtons, currentSortMethod, currentSortDirection);
                  }
                }
                
                // Aplicar filtros
                if (typeof window.applyFilters === 'function') {
                  window.applyFilters();
                }
              }
            }, 150);
          }
        }, 200);
      }
    });
  }