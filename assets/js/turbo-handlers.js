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
    const archivePage = document.querySelector('.archive-page');
    if (archivePage) {
      console.log('Turbo render en default.html - página de archivo');
      
      // Usar la función centralizada para inicializar la página de archivo
      if (typeof window.initializeArchiveOnTurboRender === 'function') {
        window.initializeArchiveOnTurboRender();
      }
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
}