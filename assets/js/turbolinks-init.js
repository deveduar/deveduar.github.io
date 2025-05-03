/**
 * turbolinks-init.js - Inicialización de Turbolinks 
 */

if (typeof window.turbolinksPersistScroll !== 'function') {
  // Almacenamiento de posiciones de scroll
  const scrollPositions = {
    main: 0,
    sidebar: 0
  };
  
  // Flag para controlar si se debe preservar el scroll
  let preserveScroll = false;
  
  // Detectar si es una recarga de página
  const isPageReload = (() => {
    if (performance && performance.getEntriesByType && performance.getEntriesByType('navigation').length) {
      const navEntry = performance.getEntriesByType('navigation')[0];
      return navEntry.type === 'reload';
    }
    return sessionStorage.getItem('lastPageUrl') === window.location.href;
  })();
  
  // Guardar URL actual para futuras comprobaciones
  sessionStorage.setItem('lastPageUrl', window.location.href);
  sessionStorage.setItem('isPageReload', isPageReload ? 'true' : 'false');
  
  // Guardar posiciones de scroll
  const saveScrollPositions = () => {
    scrollPositions.main = window.scrollY || window.pageYOffset || 0;
    
    const sidebarContent = document.querySelector('.sidebar-content');
    if (sidebarContent) {
      scrollPositions.sidebar = sidebarContent.scrollTop || 0;
      
      try {
        sessionStorage.setItem('sidebarScrollPos', scrollPositions.sidebar.toString());
        sessionStorage.setItem('mainScrollPos', scrollPositions.main.toString());
        sessionStorage.setItem('lastSavedUrl', location.pathname);
      } catch (e) {
        console.warn('Error al guardar posiciones en sessionStorage:', e);
      }
    }
    
    return scrollPositions;
  };
  
  // Restaurar posiciones de scroll
  const restoreScrollPositions = () => {
    if (scrollPositions.main > 0) {
      window.scrollTo({
        top: scrollPositions.main,
        left: 0,
        behavior: 'auto'
      });
    }
    
    const sidebarContent = document.querySelector('.sidebar-content');
    if (sidebarContent && scrollPositions.sidebar > 0) {
      const originalScrollBehavior = sidebarContent.style.scrollBehavior;
      sidebarContent.style.scrollBehavior = 'auto';
      sidebarContent.scrollTop = scrollPositions.sidebar;
      
      setTimeout(() => {
        sidebarContent.style.scrollBehavior = originalScrollBehavior;
      }, 100);
    }
  };
  
  // Evento antes de visitar una nueva página
  document.addEventListener('turbolinks:before-visit', (event) => {
    document.documentElement.classList.add('turbolinks-transition');
    saveScrollPositions();
  
    if (event.data && event.data.url) {
      event.data.action = 'replace';
    }
  });
  
  // Evento después de cargar una nueva página
  document.addEventListener('turbolinks:load', function() {
    document.activeElement && document.activeElement.blur();
    const updateActiveSidebarLink = () => {
      const currentPath = window.location.pathname;
      document.querySelectorAll('.sidebar-post-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };
    
    document.addEventListener('turbolinks:load', () => {
      updateActiveSidebarLink();
    });

    requestAnimationFrame(() => {
      document.documentElement.classList.remove('turbolinks-transition');
    });
    
    if (window.turbolinksLoadingTimeout) {
      clearTimeout(window.turbolinksLoadingTimeout);
    }
    
    const isReload = sessionStorage.getItem('isPageReload') === 'true';
    
    if (isReload) {
      sessionStorage.setItem('isPageReload', 'false');
      
      if (typeof window.initSidebar === 'function') {
        window.initSidebar();
      }
    }
    
    // Configurar enlaces de la sidebar
    document.querySelectorAll('.sidebar-post-link').forEach(link => {
      link.setAttribute('data-turbolinks-action', 'replace');
      link.setAttribute('data-turbolinks-persist-scroll', 'true');
      
      link.removeEventListener('click', enableScrollPreservation);
      link.addEventListener('click', enableScrollPreservation);
    });
    
    // Restaurar posiciones si es necesario
    if (preserveScroll) {
      restoreScrollPositions();
      preserveScroll = false;
    } else {
      try {
        const lastUrl = sessionStorage.getItem('lastSavedUrl');
        
        if (lastUrl === location.pathname) {
          const mainPos = sessionStorage.getItem('mainScrollPos');
          const sidebarPos = sessionStorage.getItem('sidebarScrollPos');
          
          if (mainPos) {
            scrollPositions.main = parseInt(mainPos, 10) || 0;
          }
          
          if (sidebarPos) {
            scrollPositions.sidebar = parseInt(sidebarPos, 10) || 0;
          }
          
          restoreScrollPositions();
        }
      } catch (e) {
        console.warn('Error al leer posiciones de sessionStorage:', e);
      }
    }
  });
  
  // Manejar errores de Turbolinks
  document.addEventListener('turbolinks:request-error', () => {
    if (typeof window.initSidebar === 'function' && 
        (!window.sidebarState || !window.sidebarState.isInitialized)) {
      window.initSidebar();
    }
  });

  // Función para habilitar la preservación de scroll al hacer clic en un enlace
  const enableScrollPreservation = (event) => {
    saveScrollPositions();
    preserveScroll = true;
    
    if (event.currentTarget) {
      event.currentTarget.setAttribute('data-turbolinks-action', 'replace');
    }
  };
  
  // Prevenir que el navegador restaure su propio scroll
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  // Exponer funciones globalmente
  window.turbolinksScrollManager = {
    save: saveScrollPositions,
    restore: restoreScrollPositions,
    enable: () => { preserveScroll = true; },
    disable: () => { preserveScroll = false; }
  };
  
  window.turbolinksPersistScroll = true;
}

// Iniciar Turbolinks si aún no está iniciado
if (typeof Turbolinks !== 'undefined') {
  if (!Turbolinks.controller) {
    console.log('Iniciando Turbolinks...');
    
    // Desactivar el scroll automático de Turbolinks
    if (Turbolinks.Controller) {
      Turbolinks.Controller.prototype.scroll = function() {
        // No hacer nada, evitamos que Turbolinks maneje el scroll
      };
      
      // Modificar caché de Turbolinks
      if (Turbolinks.Controller.prototype.cache) {
        const originalCache = Turbolinks.Controller.prototype.cache;
        const originalGet = originalCache.get;
        const originalPut = originalCache.put;
        
        originalCache.get = function(location) {
          if (location && (location.toString().includes('/posts/') || 
              sessionStorage.getItem('isPageReload') === 'true')) {
            return null;
          }
          return originalGet.apply(this, arguments);
        };
        
        originalCache.put = function(location, html) {
          if (location && (location.toString().includes('/posts/') || 
              sessionStorage.getItem('isPageReload') === 'true')) {
            return null;
          }
          return originalPut.apply(this, arguments);
        };
      }
    }
    
    // Manejar transición entre páginas
    document.addEventListener('turbolinks:before-render', function() {
      if (!window.sidebarState || !window.sidebarState.isInitialized) {
        if (typeof window.initSidebar === 'function') {
          window.initSidebar();
        }
      }
    });

    // Timeout para evitar carga indefinida
    document.addEventListener('turbolinks:before-visit', function() {
      const loadingTimeout = setTimeout(() => {
        document.documentElement.classList.remove('turbolinks-transition');
      }, 5000);
      
      window.turbolinksLoadingTimeout = loadingTimeout;
    });
    
    // Limpiar timeout cuando la carga se complete
    document.addEventListener('turbolinks:load', function() {
      if (window.turbolinksLoadingTimeout) {
        clearTimeout(window.turbolinksLoadingTimeout);
      }
    });
    
    Turbolinks.start();
  } else {
    // Si Turbolinks ya está iniciado, modificar su comportamiento
    if (Turbolinks.controller) {
      // Sobrescribir el método de visita
      const originalVisit = Turbolinks.controller.visit;
      Turbolinks.controller.visit = function(location, options) {
        options = options || {};
        
        if (location.toString().includes('/posts/') || 
            location.toString().includes('/categories/') ||
            sessionStorage.getItem('isPageReload') === 'true') {
          options.action = 'replace';
        }
        
        return originalVisit.call(this, location, options);
      };
      
      // Modificar caché
      if (Turbolinks.controller.cache) {
        const originalCache = Turbolinks.controller.cache;
        const originalGet = originalCache.get;
        const originalPut = originalCache.put;
        
        originalCache.get = function(location) {
          if (location && (location.toString().includes('/posts/') || 
              sessionStorage.getItem('isPageReload') === 'true')) {
            return null;
          }
          return originalGet.apply(this, arguments);
        };
        
        originalCache.put = function(location, html) {
          if (location && (location.toString().includes('/posts/') || 
              sessionStorage.getItem('isPageReload') === 'true')) {
            return null;
          }
          return originalPut.apply(this, arguments);
        };
      }
    }
  }
  
  // Configuración adicional para Turbolinks
  Turbolinks.setProgressBarDelay(100);
} else {
  console.error('Turbolinks no está disponible. Por favor, incluye la biblioteca Turbolinks.');
}