// Encapsulamiento con IIFE (Immediately Invoked Function Expression)
(function () {
  // Definir las funciones solo si no existen ya
  if (!window.handleCategories || !window.handleScroll) {
    // Función para manejar el estado de las categorías colapsables
    const handleCategories = () => {
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
        categoryItem.classList.toggle('category-expanded');

        let expandedCategories = loadExpandedCategories();

        // Actualizar localStorage
        if (categoryItem.classList.contains('category-expanded')) {
          if (!expandedCategories.includes(categoryName)) {
            expandedCategories.push(categoryName);
          }
        } else {
          expandedCategories = expandedCategories.filter((name) => name !== categoryName);
        }

        saveExpandedCategories(expandedCategories);
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
        link.addEventListener('click', function (e) {
          e.stopPropagation();

          // Guardar posición de scroll al hacer clic en un enlace
          const sidebarContent = document.querySelector('.sidebar-content');
          if (sidebarContent) {
            sessionStorage.setItem('sidebarScrollPos', sidebarContent.scrollTop);
          }
        });

        // Resaltar el post activo
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('active-post');
          const categoryItem = link.closest('.category-item');
          if (categoryItem) {
            const categoryName = categoryItem.querySelector('.category-name').textContent.trim();
            categoryItem.classList.add('category-expanded');

            let expandedCategories = loadExpandedCategories();
            if (!expandedCategories.includes(categoryName)) {
              expandedCategories.push(categoryName);
              saveExpandedCategories(expandedCategories);
            }
          }
        }
      });

      // Inicializar todo
      applyExpandedState();
      clearListeners(); // Limpiar antes de adjuntar
      attachListeners();
    };

    // Función para manejar el scroll de .site-sidebar
    const handleScroll = () => {
      const sidebarContent = document.querySelector('.sidebar-content');
      if (!sidebarContent) return;

      // Restaurar el scroll cuando la página se carga
      const restoreScroll = () => {
        const savedScrollPos = sessionStorage.getItem('sidebarScrollPos');
        if (savedScrollPos) {
          setTimeout(() => {
            sidebarContent.scrollTop = parseInt(savedScrollPos, 10);
          }, 10);
        }
      };

      // Guardar el scroll cuando el usuario se desplaza
      const saveScroll = () => {
        sidebarContent.addEventListener('scroll', function () {
          sessionStorage.setItem('sidebarScrollPos', this.scrollTop);
        });
      };

      // Inicializar todo
      restoreScroll();
      saveScroll();
    };

    // Función de inicialización que se puede llamar desde cualquier lugar
    const initSidebar = () => {
      handleCategories();
      handleScroll();
    };

    // Asignar funciones al objeto global window
    window.handleCategories = handleCategories;
    window.handleScroll = handleScroll;
    window.initSidebar = initSidebar;

 // Configurar eventos de InstantClick si está disponible
 if (typeof InstantClick !== 'undefined') {
  InstantClick.on('fetch', () => {
    const sidebarContent = document.querySelector('.sidebar-content');
    if (sidebarContent) {
      sessionStorage.setItem('sidebarScrollPos', sidebarContent.scrollTop);
    }
  });

  InstantClick.on('change', () => {
    initSidebar();
  });
  
  }
}
})();