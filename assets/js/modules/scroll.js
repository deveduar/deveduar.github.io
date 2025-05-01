// scroll.js
export const handleScroll = () => {
    const sidebarContent = document.querySelector('.sidebar-content');
    if (!sidebarContent) return;
  
    // Restaurar el scroll cuando la página se carga
    const restoreScroll = () => {
      const savedScrollPos = localStorage.getItem('sidebarScrollPos');
      if (savedScrollPos) {
        setTimeout(() => {
          sidebarContent.scrollTop = parseInt(savedScrollPos, 10);
          console.log('Restored sidebar scroll position:', sidebarContent.scrollTop);
        }, 10);
      }
    };
  
    // Guardar el scroll cuando el usuario se desplaza
    const saveScroll = () => {
      // Remove existing listener if any
      if (sidebarContent._scrollListener) {
        sidebarContent.removeEventListener('scroll', sidebarContent._scrollListener);
      }
      
      // Create scroll listener
      sidebarContent._scrollListener = function() {
        localStorage.setItem('sidebarScrollPos', this.scrollTop);
      };
      
      sidebarContent.addEventListener('scroll', sidebarContent._scrollListener);
      sidebarContent.hasScrollListener = true;
    };
  
    // Inicializar todo
    restoreScroll();
    saveScroll();
};

// Exponer la función al objeto window para mantener compatibilidad
if (typeof window !== 'undefined') {
  window.handleScroll = handleScroll;
}