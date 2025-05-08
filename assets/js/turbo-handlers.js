if (typeof Turbo !== 'undefined' || 'Turbo' in window) {

  window.addEventListener('load', function () {
    if (document.querySelector('.archive-page')) {
      console.log('Verificando posts adicionales en evento load...');
      // Check if additional posts are already loaded by looking for posts with data-additional-post="true"
      const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
      if (additionalPosts.length === 0) {
        console.log('No hay posts adicionales cargados en load, intentando cargar...');
        window.tryLoadAdditionalPosts();
      }
    }
  });
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
              console.log('Cargando posts adicionales después de inicializar módulos...');
              
              // Asegurarse de que la ordenación se aplica correctamente
              const { method, direction } = window.getSortParameters();
              console.log(`Método de ordenación en turbo:load: ${method}, ${direction}`);
              
              // Primero cargar posts adicionales
              window.tryLoadAdditionalPosts(300, 500);
              
              // Luego aplicar ordenación después de un tiempo
              setTimeout(() => {
                window.updateSortButtonsDirectly(method, direction);
                if (typeof window.applyFilters === 'function') {
                  window.applyFilters();
                }
              }, 1000);
            }
          } else {
            console.error('No se pudo inicializar los módulos de archivo después de esperar.');
          }
        }, 300);
      } else if (typeof window.initializeArchiveModules === 'function') {
        window.initializeArchiveModules();

        if (document.querySelector('.archive-page')) {
          console.log('Cargando posts adicionales después de inicializar módulos...');
          
          // Asegurarse de que la ordenación se aplica correctamente
          const { method, direction } = window.getSortParameters();
          console.log(`Método de ordenación en turbo:load: ${method}, ${direction}`);
          
          // Primero cargar posts adicionales
          window.tryLoadAdditionalPosts(300, 500);
          
          // Luego aplicar ordenación después de un tiempo
          setTimeout(() => {
            window.updateSortButtonsDirectly(method, direction);
            if (typeof window.applyFilters === 'function') {
              window.applyFilters();
            }
          }, 1000);
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

      // Check if additional posts are already loaded
      const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
      const additionalPostsMarker = document.getElementById('additional-posts-marker');
      
      if (additionalPosts.length === 0 && additionalPostsMarker) {
        console.log('No hay posts adicionales cargados, intentando cargar...');
        window.tryLoadAdditionalPosts(600);
      }
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
      setTimeout(() => {
        // Check if additional posts are already loaded
        const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
        const additionalPostsMarker = document.getElementById('additional-posts-marker');
        
        if (additionalPosts.length === 0 && additionalPostsMarker) {
          console.log('No hay posts adicionales cargados después de frame-render');
          if (typeof window.loadAdditionalPosts === 'function') {
            window.loadAdditionalPosts();
            
            // Aplicar ordenación después de cargar posts adicionales
            setTimeout(() => {
              console.log('Aplicando ordenación después de cargar posts adicionales (frame-render)');
              const { method, direction } = window.getSortParameters();
              
              // Actualizar botones de ordenación
              window.updateSortButtonsDirectly(method, direction);
              
              // Aplicar filtros para ordenar todos los posts
              if (typeof window.applyFilters === 'function') {
                window.applyFilters();
              }
            }, 500);
          }
        } else {
          // Incluso si ya hay posts adicionales, asegurarse de que la ordenación es correcta
          setTimeout(() => {
            const { method, direction } = window.getSortParameters();
            window.updateSortButtonsDirectly(method, direction);
            if (typeof window.applyFilters === 'function') {
              window.applyFilters();
            }
          }, 300);
        }
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