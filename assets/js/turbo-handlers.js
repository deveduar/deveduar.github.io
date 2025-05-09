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

// Función para inicializar la página de archivo después de la navegación
window.initArchivePageAfterNavigation = function() {
  console.log('Inicializando página de archivo después de la navegación');
  
  // Verificar si estamos en la página de archivo
  const archivePage = document.querySelector('.archive-page');
  if (!archivePage) return;
  
  // Reset Rendering state to ensure we can load posts again
  if (typeof window.Rendering !== 'undefined' && window.Rendering.reset) {
    console.log('Reseteando estado de Rendering después de navegación');
    window.Rendering.reset();
  } else if (typeof Rendering !== 'undefined' && Rendering.reset) {
    console.log('Reseteando estado de Rendering (módulo local) después de navegación');
    Rendering.reset();
  }
  
  // Inicializar filtros de archivo si aún no se ha hecho
  if (typeof window.initArchiveFilters === 'function') {
    window.initArchiveFilters();
  }
  
  // Asegurar que se configura la carga lazy
  if (typeof window.Rendering !== 'undefined' && window.Rendering.setupLazyLoading) {
    console.log('Configurando lazy loading después de la navegación');
    window.Rendering.setupLazyLoading();
  } else {
    console.warn('Rendering no está disponible globalmente, intentando acceder a través de módulos');
    // Intentar acceder a Rendering a través de módulos importados
    if (typeof Rendering !== 'undefined' && Rendering.setupLazyLoading) {
      console.log('Usando Rendering del módulo importado');
      Rendering.setupLazyLoading();
    }
  }
  
  // Intentar cargar posts adicionales si es necesario
  setTimeout(() => {
    if (typeof window.tryLoadAdditionalPosts === 'function') {
      window.tryLoadAdditionalPosts(300);
    }
  }, 500);
};

  window.addEventListener('load', function () {
    // Usar la función centralizada
    window.checkAndLoadAdditionalPosts();
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
    
    // Reset Rendering state when leaving the archive page
    if (typeof window.Rendering !== 'undefined' && window.Rendering.reset) {
      console.log('Reseteando estado de Rendering al salir de la página de archivo');
      window.Rendering.reset();
    } else if (typeof Rendering !== 'undefined' && Rendering.reset) {
      console.log('Reseteando estado de Rendering (módulo local) al salir de la página de archivo');
      Rendering.reset();
    }
    
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

      // Verificar si llegamos aquí por navegación desde otra página
      if (document.referrer && document.referrer !== document.location.href) {
        console.log('Detectada navegación desde otra página a la página de archivo');
        if (typeof window.initArchivePageAfterNavigation === 'function') {
          setTimeout(() => window.initArchivePageAfterNavigation(), 300);
        }
      } else {
        // Usar la función centralizada con un pequeño retraso
        setTimeout(() => {
          window.checkAndLoadAdditionalPosts();
        }, 300);
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
      
      // Usar la función centralizada con un retraso para evitar conflictos
      setTimeout(() => {
        window.checkAndLoadAdditionalPosts();
      }, 500);
    }
  });

  // Añadir un evento para pageshow para manejar navegación back/forward
  // window.addEventListener('pageshow', function(event) {
  //   // Verificar si la página se está cargando desde el bfcache
  //   if (event.persisted) {
  //     console.log('Página cargada desde caché back/forward');
  //     if (document.querySelector('.archive-page')) {
  //       if (typeof window.initArchivePageAfterNavigation === 'function') {
  //         setTimeout(() => window.initArchivePageAfterNavigation(), 300);
  //       }
  //     }
  //   }
  // });
}