// sidebar.js
import { handleCategories } from './modules/categories.js';
import { handleScroll } from './modules/scroll.js';

// Variable to track if sidebar is already initialized
let sidebarInitialized = false;

// Función para inicializar la barra lateral
const initSidebar = () => {
  console.log('Inicializando sidebar...');
  
  // Inicializar manejo de categorías
  handleCategories();
  
  // Inicializar manejo de scroll
  handleScroll();

  // Add click handlers for sidebar links to save scroll position
  document.querySelectorAll('.category-posts a').forEach(link => {
    // Remove existing click listeners by cloning
    const newLink = link.cloneNode(true);
    if (link.parentNode) {
      link.parentNode.replaceChild(newLink, link);
    }
    
    // Add new click listener
    newLink.addEventListener('click', function(e) {
      // Don't use InstantClick for sidebar links
      // This will prevent the sidebar from reloading
      // this.classList.add('no-instant');
      
      // Save scroll position before navigation
      if (typeof window.saveSidebarScroll === 'function') {
        const scrollPos = window.saveSidebarScroll();
        console.log('Saved scroll position on sidebar link click:', scrollPos);
        
        // Store in data attribute for debugging
        this.setAttribute('data-saved-scroll', scrollPos);
      }
    });
  });
  
  // Force restore scroll position after initialization

    if (typeof window.restoreSidebarScroll === 'function') {
      window.restoreSidebarScroll();
    }

  
  // Mark as initialized
  sidebarInitialized = true;
};

// Exponer la función al objeto window para que pueda ser llamada desde fuera
window.initSidebar = initSidebar;

// Inicializar cuando el DOM esté listo, but only if not already initialized
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM cargado en sidebar.js');
  if (!sidebarInitialized) {
    setTimeout(initSidebar, 100);
  }
});

// Exportar la función para uso como módulo
export { initSidebar };