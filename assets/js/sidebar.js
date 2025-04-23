// Encapsulamiento con IIFE (Immediately Invoked Function Expression)
(function () {
  // Verificar si las funciones ya están definidas en window
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

      // Obtener categorías expandidas desde localStorage
      let expandedCategories = loadExpandedCategories();

      // Aplicar el estado expandido a las categorías
      categoryHeaders.forEach((header) => {
        const categoryItem = header.parentElement;
        const categoryName = header.querySelector('.category-name').textContent.trim();

        // Expandir categorías que estaban previamente expandidas
        if (expandedCategories.includes(categoryName)) {
          categoryItem.classList.add('category-expanded');
        }

        // Manejar el toggle de la categoría
        header.addEventListener('click', function () {
          const categoryName = this.querySelector('.category-name').textContent.trim();
          categoryItem.classList.toggle('category-expanded');

          // Actualizar localStorage
          if (categoryItem.classList.contains('category-expanded')) {
            if (!expandedCategories.includes(categoryName)) {
              expandedCategories.push(categoryName);
            }
          } else {
            expandedCategories = expandedCategories.filter((name) => name !== categoryName);
          }

          saveExpandedCategories(expandedCategories);
        });
      });

      // Evitar el colapso de la categoría al hacer clic en los enlaces
      const categoryLinks = document.querySelectorAll('.category-posts a');
      categoryLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
          e.stopPropagation();
        });

        // Resaltar el post activo
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('active-post');
          // Expandir la categoría padre si no está ya expandida
          const categoryItem = link.closest('.category-item');
          if (categoryItem) {
            const categoryName = categoryItem.querySelector('.category-name').textContent.trim();
            categoryItem.classList.add('category-expanded');

            // Agregar a las categorías expandidas si no está ya incluida
            if (!expandedCategories.includes(categoryName)) {
              expandedCategories.push(categoryName);
              saveExpandedCategories(expandedCategories);
            }
          }
        }
      });
    };

    // Función para manejar el scroll de .site-sidebar
    const handleScroll = () => {
      const sidebarContent = document.querySelector('.sidebar-content'); // Capturar el scroll desde .sidebar-content
      if (!sidebarContent) return;

      // Restaurar el scroll cuando la página se carga
      const restoreScroll = () => {
        const savedScrollPos = sessionStorage.getItem('sidebarScrollPos');
        if (savedScrollPos) {
          sidebarContent.scrollTop = parseInt(savedScrollPos, 10); // Restaurar inmediatamente
        }
      };

      // Guardar el scroll cuando el usuario se desplaza
      const saveScroll = () => {
        sidebarContent.addEventListener('scroll', () => {
          sessionStorage.setItem('sidebarScrollPos', sidebarContent.scrollTop);
        });
      };

      // Inicializar todo
      restoreScroll();
      saveScroll();
    };

    // Asignar funciones al objeto global window
    window.handleCategories = handleCategories;
    window.handleScroll = handleScroll;
  }
})();