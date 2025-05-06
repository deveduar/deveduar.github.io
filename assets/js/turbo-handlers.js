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
      
      // Asegurarse de que ningún botón quede activo al salir
      const sortButtons = document.querySelectorAll('.sort-button');
      if (sortButtons.length > 0) {
        sortButtons.forEach(btn => {
          btn.classList.remove('active');
        });
      }
    }
  });
  
  // También reinicializar en turbo:render para asegurar que los eventos funcionan
  document.addEventListener('turbo:render', function() {
    // Verificar si estamos en la página de archivo
    const archivePage = document.querySelector('.archive-page');
    if (archivePage) {
      console.log('Turbo render en default.html - página de archivo');
      
      // Pequeño retraso para asegurar que el DOM está listo
      setTimeout(function() {
        if (!window.archiveInitialized) {
          window.archiveInitialized = true;
          console.log('Primera inicialización después de turbo:render');
          
          // Aplicar parámetros de URL inmediatamente
          const params = new URLSearchParams(window.location.search);
          const sortMethod = params.get('sort');
          const sortDirection = params.get('direction');
          
          // Reinicializar los botones de ordenación
          if (typeof window.initArchiveFilters === 'function') {
            window.initArchiveFilters();
            
            // Asegurarse de que los valores de ordenación se apliquen correctamente después de inicializar
            if (typeof Sorting !== 'undefined' && sortMethod && sortDirection) {
              console.log(`Aplicando ordenación desde URL en turbo:render: método=${sortMethod}, dirección=${sortDirection}`);
              Sorting.setSortMethod(sortMethod, sortDirection);
              
              // Actualizar botones de ordenación
              setTimeout(() => {
                const sortButtons = document.querySelectorAll('.sort-button');
                if (sortButtons.length > 0 && typeof Sorting.updateActiveSortButton === 'function') {
                  Sorting.updateActiveSortButton(sortButtons, sortMethod, sortDirection);
                }
              }, 50);
            }
          }
          
          // Reinicializar dropdowns explícitamente
          if (typeof Dropdowns !== 'undefined' && Dropdowns.reinitializeAllDropdowns) {
            Dropdowns.reinitializeAllDropdowns();
          }
          
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
    } else {
      // Si no estamos en la página de archivo, asegurarse de que no hay botones activos
      console.log('Turbo render en página que no es de archivo');
      const sortButtons = document.querySelectorAll('.sort-button');
      if (sortButtons.length > 0) {
        sortButtons.forEach(btn => {
          btn.classList.remove('active');
        });
      }
    }
  });
  
  // Añadir un evento específico para recargas de página
  // Añadir un evento específico para recargas de página
  // Añadir un evento específico para recargas de página
  window.addEventListener('pageshow', function(event) {
    if (document.querySelector('.archive-page')) {
      // Detectar si es una recarga o navegación hacia atrás/adelante
      const isBackForward = event.persisted;
      const isReload = window.performance && 
                       window.performance.getEntriesByType && 
                       window.performance.getEntriesByType('navigation').length > 0 && 
                       window.performance.getEntriesByType('navigation')[0].type === 'reload';
      
      console.log(`Evento pageshow en página de archivo - Back/Forward: ${isBackForward}, Reload: ${isReload}`);
      
      // Función para actualizar los botones de ordenación directamente
      function updateSortButtonsDirectly() {
        const params = new URLSearchParams(window.location.search);
        const sortMethod = params.get('sort') || 'date';
        const sortDirection = params.get('direction') || 'desc';
        
        console.log(`Actualizando botones directamente: método=${sortMethod}, dirección=${sortDirection}`);
        
        // Actualizar botones de ordenación manualmente sin depender de Sorting
        const sortButtons = document.querySelectorAll('.sort-button');
        if (sortButtons.length > 0) {
          console.log(`Actualizando ${sortButtons.length} botones de ordenación manualmente`);
          
          // Primero, quitar la clase active de todos los botones
          sortButtons.forEach(btn => {
            btn.classList.remove('active');
          });
          
          // Luego, encontrar y activar el botón correspondiente al método actual
          const activeButton = Array.from(sortButtons).find(btn => btn.dataset.sort === sortMethod);
          if (activeButton) {
            activeButton.classList.add('active');
            activeButton.dataset.direction = sortDirection;
            
            // Actualizar el ícono si existe
            const icon = activeButton.querySelector('i');
            if (icon) {
              icon.className = sortDirection === 'asc' ? 'fas fa-arrow-up' : 'fas fa-arrow-down';
            }
            
            console.log(`Botón de ordenación activado manualmente: ${sortMethod}, dirección: ${sortDirection}`);
          }
          
          // También actualizar usando Sorting si está disponible
          if (typeof Sorting !== 'undefined') {
            console.log(`Aplicando ordenación desde URL en pageshow: método=${sortMethod}, dirección=${sortDirection}`);
            Sorting.setSortMethod(sortMethod, sortDirection);
            
            if (typeof Sorting.updateActiveSortButton === 'function') {
              Sorting.updateActiveSortButton(sortButtons, sortMethod, sortDirection);
            }
          }
          
          return true;
        }
        return false;
      }
      
      // Intentar actualizar inmediatamente
      if (!updateSortButtonsDirectly()) {
        // Si no funciona, intentar varias veces con intervalos
        let attempts = 0;
        const maxAttempts = 10;
        const interval = setInterval(function() {
          attempts++;
          console.log(`Intento ${attempts} de actualizar botones de ordenación`);
          
          if (updateSortButtonsDirectly() || attempts >= maxAttempts) {
            clearInterval(interval);
            
            // Aplicar filtros para actualizar la visualización
            if (typeof window.applyFilters === 'function') {
              window.applyFilters();
            }
          }
        }, 100);
      } else {
        // Aplicar filtros para actualizar la visualización
        if (typeof window.applyFilters === 'function') {
          window.applyFilters();
        }
      }
    }
  });
  
  // Añadir un evento DOMContentLoaded para asegurar que los botones se actualicen
  document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.archive-page')) {
      console.log('DOMContentLoaded en página de archivo - Actualizando botones de ordenación');
      
      // Pequeño retraso para asegurar que el DOM está listo
      setTimeout(function() {
        const params = new URLSearchParams(window.location.search);
        const sortMethod = params.get('sort') || 'date';
        const sortDirection = params.get('direction') || 'desc';
        
        // Actualizar botones de ordenación manualmente
        const sortButtons = document.querySelectorAll('.sort-button');
        if (sortButtons.length > 0) {
          console.log(`DOMContentLoaded: Actualizando ${sortButtons.length} botones de ordenación`);
          
          // Primero, quitar la clase active de todos los botones
          sortButtons.forEach(btn => {
            btn.classList.remove('active');
          });
          
          // Luego, encontrar y activar el botón correspondiente al método actual
          const activeButton = Array.from(sortButtons).find(btn => btn.dataset.sort === sortMethod);
          if (activeButton) {
            activeButton.classList.add('active');
            activeButton.dataset.direction = sortDirection;
            
            // Actualizar el ícono si existe
            const icon = activeButton.querySelector('i');
            if (icon) {
              icon.className = sortDirection === 'asc' ? 'fas fa-arrow-up' : 'fas fa-arrow-down';
            }
          }
        }
      }, 300);
    }
  });

}