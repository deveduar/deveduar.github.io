// Manejo simplificado de scroll para paginación en Jekyll
(function() {
    // Función simple para detectar si estamos en una página de paginación
    function isPaginationPage() {
      return document.querySelector('.pagination') !== null;
    }
    
    // Función para manejar el scroll suave a la sección de paginación
    function handleSmoothScroll() {
      // Si hay un hash en la URL y es #pagination-section
      if (window.location.hash === '#pagination-section') {
        // Esperar un momento para que la página se cargue completamente
        setTimeout(function() {
          // Obtener el elemento de paginación
          const paginationSection = document.getElementById('pagination-section');
          if (paginationSection) {
            // Scroll suave a la sección de paginación
            paginationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            console.log('Scrolled to pagination section');
          }
        }, 100);
      }
    }
    
    // Función principal para inicializar todo
    function initPaginationScroll() {
      if (!isPaginationPage()) return;
      
      console.log('Initializing simplified pagination scroll');
      
      // Manejar el scroll suave si hay un hash en la URL
      handleSmoothScroll();
      
      // Configurar los enlaces de paginación para que incluyan el hash
      const paginationLinks = document.querySelectorAll('.pagination a');
      paginationLinks.forEach(link => {
        // Asegurarse de que el enlace tenga el hash #pagination-section
        const href = link.getAttribute('href');
        if (href && !href.includes('#pagination-section')) {
          link.setAttribute('href', href + '#pagination-section');
        }
      });
    }
    
    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initPaginationScroll);
    } else {
      // Si el DOM ya está cargado, inicializar inmediatamente
      initPaginationScroll();
    }
    
    // Configurar para InstantClick si está disponible
    if (typeof InstantClick !== 'undefined') {
      InstantClick.on('change', function() {
        console.log('InstantClick change detected');
        // Inicializar después de que InstantClick haya cambiado la página
        setTimeout(initPaginationScroll, 10);
      });
    }
    
    // Exponer funciones para debugging
    window.jekyllPagination = {
      init: initPaginationScroll,
      scrollToPagination: function() {
        const paginationSection = document.getElementById('pagination-section');
        if (paginationSection) {
          paginationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      }
    };
})();