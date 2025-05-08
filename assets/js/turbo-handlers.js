if (typeof Turbo !== 'undefined' || 'Turbo' in window) {


  // Función centralizada para verificar y cargar posts adicionales
  window.checkAndLoadAdditionalPosts = function() {
    if (document.querySelector('.archive-page')) {
      // Verificar si ya hay posts adicionales cargados
      const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
      const additionalPostsMarker = document.getElementById('additional-posts-marker');
      
      if (additionalPosts.length === 0 && additionalPostsMarker && !window.isLoadingAdditionalPosts) {
        console.log('No hay posts adicionales cargados, intentando cargar...');
        window.tryLoadAdditionalPosts(300, 500);
      } else if (additionalPosts.length > 0) {
        console.log(`Ya hay ${additionalPosts.length} posts adicionales cargados`);
        // Asegurar que los filtros se aplican correctamente
        if (typeof window.ensureFiltersApplied === 'function') {
          window.ensureFiltersApplied();
        }
      }
    }
  };

  window.addEventListener('load', function () {
    // Usar la función centralizada
    window.checkAndLoadAdditionalPosts();
  });
  // Cuando se carga una nueva página
 // Cuando se carga una nueva página
 document.addEventListener('turbo:load', function () {
  console.log('Turbo load en default.html');
  window.archiveInitialized = false;
  window.archiveModules = undefined;

  setTimeout(function () {
    if (typeof window.ARCHIVE_PATHS === 'undefined') {
      console.warn('ARCHIVE_PATHS no está definido todavía, esperando...');
      setTimeout(function () {
        if (typeof window.initializeArchiveModules === 'function' && typeof window.ARCHIVE_PATHS !== 'undefined') {
          window.initializeArchiveModules();

          if (document.querySelector('.archive-page')) {
            console.log('Inicializando módulos de archivo...');
            
            // Asegurarse de que la ordenación se aplica correctamente
            const { method, direction } = window.getSortParameters();
            console.log(`Método de ordenación en turbo:load: ${method}, ${direction}`);
            
            // Usar la función centralizada
            window.checkAndLoadAdditionalPosts();
          }
        } else {
          console.error('No se pudo inicializar los módulos de archivo después de esperar.');
        }
      }, 300);
    } else if (typeof window.initializeArchiveModules === 'function') {
      window.initializeArchiveModules();

      if (document.querySelector('.archive-page')) {
        console.log('Inicializando módulos de archivo...');
        
        // Asegurarse de que la ordenación se aplica correctamente
        const { method, direction } = window.getSortParameters();
        console.log(`Método de ordenación en turbo:load: ${method}, ${direction}`);
        
        // Usar la función centralizada
        window.checkAndLoadAdditionalPosts();
      }
    }
  }, 100);
});

  // Añadir un evento específico para turbo:visit para manejar la navegación entre páginas
  document.addEventListener('turbo:visit', function() {
    console.log('Turbo visit detectado - preparando para navegación');
    // Marcar que necesitamos cargar posts adicionales en la próxima página si es archive
    window.needsAdditionalPosts = true;
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
  
  document.addEventListener('turbo:render', function () {
    const archivePage = document.querySelector('.archive-page');
    if (archivePage) {
      console.log('Turbo render en default.html - página de archivo');

      if (typeof window.initializeArchiveOnTurboRender === 'function') {
        window.initializeArchiveOnTurboRender();
      }

      // Usar la función centralizada con un pequeño retraso
      setTimeout(() => {
        window.checkAndLoadAdditionalPosts();
      }, 300);
    } else {
      console.log('Turbo render en página que no es de archivo');
      const sortButtons = document.querySelectorAll('.sort-button');
      sortButtons.forEach(btn => btn.classList.remove('active'));
    }
  });

  document.addEventListener('turbo:before-render', function (event) {
    const newBody = event.detail.newBody;
    if (newBody.querySelector('.archive-page')) {
      console.log('Navegando a página de archivo, preparando para cargar posts adicionales');
      window.needsAdditionalPosts = true;
    }
  });

  document.addEventListener('turbo:frame-render', function(event) {
    const frame = event.target;
    if (frame.closest('.archive-page') || document.querySelector('.archive-page')) {
      console.log('Frame renderizado en página de archivo');
      
      // Usar la función centralizada con un retraso para evitar conflictos
      setTimeout(() => {
        window.checkAndLoadAdditionalPosts();
      }, 500);
    }
  });


  // Añadir un último recurso con setTimeout
  // setTimeout(function() {
  //   if (document.querySelector('.archive-page')) {
  //     const additionalPostsContainer = document.getElementById('additional-posts-container');
  //     if (additionalPostsContainer && additionalPostsContainer.children.length === 0) {
  //       console.log('Último recurso: Contenedor de posts adicionales sigue vacío después de 3s');
  //       if (typeof window.loadAdditionalPosts === 'function') {
  //         window.loadAdditionalPosts();
  //       }
  //     }
  //   }
  // }, 3000);
}