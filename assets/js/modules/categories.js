// categories.js
export const handleCategories = () => {
    const categoryHeaders = document.querySelectorAll('.category-header');
    const currentPath = window.location.pathname;
  
    // Cargar categorías expandidas previamente desde localStorage
    const loadExpandedCategories = () => {
      try {
        const saved = localStorage.getItem('expandedCategories');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    };
  
    // Guardar categorías expandidas en localStorage
    const saveExpandedCategories = (categories) => {
      try {
        localStorage.setItem('expandedCategories', JSON.stringify(categories));
      } catch {}
    };
  
    // Función para guardar el estado actual de las categorías expandidas
    const saveExpandedState = () => {
      const expandedCategories = [];
      document.querySelectorAll('.category-item.category-expanded').forEach(item => {
        const nameElement = item.querySelector('.category-name');
        if (nameElement) {
          expandedCategories.push(nameElement.textContent.trim());
        }
      });
      saveExpandedCategories(expandedCategories);
      console.log('Saved expanded categories state:', expandedCategories);
    };
    
    // Exponer la función para uso global
    window.saveExpandedState = saveExpandedState;
  
    // Limpiar listeners previos para evitar duplicados
    const clearListeners = () => {
      categoryHeaders.forEach((header) => {
        const clone = header.cloneNode(true);
        if (header.parentNode) {
          header.parentNode.replaceChild(clone, header);
        }
      });
    };
  
    // Manejar el toggle de la categoría
    const toggleCategory = function () {
      const categoryItem = this.parentElement;
      const categoryName = this.querySelector('.category-name').textContent.trim();
      const toggleIcon = this.querySelector('.category-toggle');
  
      // Toggle the expanded class
      categoryItem.classList.toggle('category-expanded');
  
      // Guardar el estado actual después del toggle
      saveExpandedState();
    };
  
    // Adjuntar listeners
    const attachListeners = () => {
      // Usar los elementos actuales en el DOM
      document.querySelectorAll('.category-header').forEach((header) => {
        header.addEventListener('click', toggleCategory);
      });
    };
  
    // Aplicar el estado expandido a las categorías
    const applyExpandedState = () => {
      const expandedCategories = loadExpandedCategories();
      document.querySelectorAll('.category-header').forEach((header) => {
        const categoryItem = header.parentElement;
        const categoryName = header.querySelector('.category-name').textContent.trim();
  
        if (expandedCategories.includes(categoryName)) {
          categoryItem.classList.add('category-expanded');
        } else {
          categoryItem.classList.remove('category-expanded');
        }
      });
    };
  
    // Evitar el colapso de la categoría al hacer clic en los enlaces
    document.querySelectorAll('.category-posts a').forEach((link) => {
      // Remove existing listeners by cloning
      const newLink = link.cloneNode(true);
      if (link.parentNode) {
        link.parentNode.replaceChild(newLink, link);
      }
      
      newLink.addEventListener('click', function (e) {
        e.stopPropagation();

        // Guardar posición de scroll al hacer clic en un enlace
        const sidebarContent = document.querySelector('.sidebar-content');
        if (sidebarContent) {
          // Save scroll position immediately when clicking a link
          localStorage.setItem('sidebarScrollPos', sidebarContent.scrollTop);
        }
        
        // Save expanded categories state
        saveExpandedState();
      });

      // Resaltar el post activo
      if (newLink.getAttribute('href') === currentPath) {
        newLink.classList.add('active-post');
        const categoryItem = newLink.closest('.category-item');
        if (categoryItem) {
          categoryItem.classList.add('category-expanded');
          saveExpandedState(); // Save state after expanding
        }
      }
    });
  
    // Inicializar todo
    applyExpandedState();
    clearListeners(); // Limpiar antes de adjuntar
    attachListeners();
};

// Exponer la función al objeto window para mantener compatibilidad
if (typeof window !== 'undefined') {
  window.handleCategories = handleCategories;
}