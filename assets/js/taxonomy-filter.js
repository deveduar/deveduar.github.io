// Funciones de filtrado para categorías y tags
(function() {
    // Función para inicializar el filtrado de categorías
    function initCategoryFiltering() {
      const filterLinks = document.querySelectorAll('.category-filter');
      const postCards = document.querySelectorAll('.category-post-card');
      const categoryBadges = document.querySelectorAll('.category-badge');
      const filterContainer = document.querySelector('.category-filter-container');
      
      if (!filterLinks.length) return; // No hay elementos para filtrar
      
      // Función para filtrar posts
      function filterPosts(category) {
        if (filterContainer) filterContainer.classList.add('loading');
        
        // Force browser to recognize style changes
        void filterContainer.offsetWidth;
        
        if (category === 'all') {
          postCards.forEach(card => {
            card.style.display = 'flex';
          });
        } else {
          postCards.forEach(card => {
            if (card.dataset.categories.includes(category)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        }
        
        if (filterContainer) filterContainer.classList.remove('loading');
      }
      
      // Función para aplicar filtro desde el hash
      function applyFilterFromHash() {
        // Obtener categoría del hash (quitar el símbolo #)
        let category = window.location.hash.substring(1);
        
        // Si no hay categoría o hash vacío, usar 'all'
        if (!category) {
          category = 'all';
        }
        
        console.log("Applying filter for category:", category);
        
        // Encontrar el enlace de filtro correspondiente
        const filterLink = document.querySelector(`.category-filter[data-category="${category}"]`);
        
        if (filterLink) {
          // Quitar clase active de todos los enlaces
          filterLinks.forEach(l => l.classList.remove('active'));
          
          // Añadir clase active al enlace objetivo
          filterLink.classList.add('active');
          
          // Filtrar posts
          filterPosts(category);
        } else {
          console.log("Filter link not found for category:", category);
        }
      }
      
      // Establecer clase active y filtrar posts al hacer clic en categoría en la nube
      filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Obtener categoría del atributo data
          const category = this.dataset.category;
          
          // Actualizar hash de URL sin desplazamiento
          history.pushState(null, null, category === 'all' ? '#' : '#' + category);
          
          // Aplicar el filtro
          applyFilterFromHash();
        });
      });
      
      // Filtrar por clics en badges de categoría
      categoryBadges.forEach(badge => {
        badge.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Obtener categoría del atributo data
          const category = this.dataset.filter;
          
          // Actualizar hash de URL sin salto de página
          history.pushState(null, null, '#' + category);
          
          // Aplicar filtro manualmente en lugar de depender de hashchange
          applyFilterFromHash();
        });
      });
      
      // Aplicar filtro cuando cambia el hash (funciona con botones atrás/adelante del navegador)
      window.addEventListener('hashchange', applyFilterFromHash);
      
      // Aplicar filtro en la carga inicial de la página
      applyFilterFromHash();
    }
  
    // Función para inicializar el filtrado de tags
    function initTagFiltering() {
      const filterLinks = document.querySelectorAll('.tag-filter');
      const tagSections = document.querySelectorAll('.tag-section');
      const relatedTagLinks = document.querySelectorAll('.tag-filter-link');
      const filterContainer = document.querySelector('.tag-filter-container');
      
      if (!filterLinks.length) return; // No hay elementos para filtrar
      
      // Función para filtrar secciones de tags
      function filterTags(tag) {
        if (filterContainer) filterContainer.classList.add('loading');
        
        // Force browser to recognize style changes
        void filterContainer.offsetWidth;
        
        if (tag === 'all') {
          tagSections.forEach(section => {
            section.style.display = 'block';
          });
        } else {
          tagSections.forEach(section => {
            if (section.getAttribute('data-tag-section') === tag) {
              section.style.display = 'block';
            } else {
              section.style.display = 'none';
            }
          });
        }
        
        if (filterContainer) filterContainer.classList.remove('loading');
      }
      
      // Función para aplicar filtro desde el hash
      function applyFilterFromHash() {
        // Obtener tag del hash (quitar el símbolo #)
        let tag = window.location.hash.substring(1);
        
        // Si no hay tag o hash vacío, usar 'all'
        if (!tag) {
          tag = 'all';
        }
        
        console.log("Applying filter for tag:", tag);
        
        // Encontrar el enlace de filtro correspondiente
        const filterLink = document.querySelector(`.tag-filter[data-tag="${tag}"]`);
        
        if (filterLink) {
          // Quitar clase active de todos los enlaces
          filterLinks.forEach(l => l.classList.remove('active'));
          
          // Añadir clase active al enlace objetivo
          filterLink.classList.add('active');
          
          // Filtrar secciones de tags
          filterTags(tag);
          
          // Desplazarse a la parte superior del contenedor de tags si no es "all"
          if (tag !== 'all') {
            const tagsContainer = document.querySelector('.tags-page');
            if (tagsContainer) {
              setTimeout(() => {
                window.scrollTo({
                  top: tagsContainer.offsetTop - 20,
                  behavior: 'smooth'
                });
              }, 100);
            }
          }
        } else {
          console.log("Filter link not found for tag:", tag);
        }
      }
      
      // Establecer clase active y filtrar posts al hacer clic en tag en la nube
      filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Obtener tag del atributo data
          const tag = this.dataset.tag;
          
          // Actualizar hash de URL sin desplazamiento
          history.pushState(null, null, tag === 'all' ? '#' : '#' + tag);
          
          // Aplicar el filtro
          applyFilterFromHash();
        });
      });
      
      // Filtrar por enlaces de tags relacionados
      relatedTagLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Obtener tag del atributo data
          const tag = this.dataset.filter;
          
          // Actualizar hash de URL sin salto de página
          history.pushState(null, null, '#' + tag);
          
          // Aplicar filtro manualmente en lugar de depender de hashchange
          applyFilterFromHash();
        });
      });
      
      // Aplicar filtro cuando cambia el hash (funciona con botones atrás/adelante del navegador)
      window.addEventListener('hashchange', applyFilterFromHash);
      
      // Aplicar filtro en la carga inicial de la página
      applyFilterFromHash();
    }
  
    // Función de inicialización general
    function initTaxonomyFilters() {
      // Inicializar filtrado de categorías si estamos en la página de categorías
      if (document.querySelector('.categories-page')) {
        initCategoryFiltering();
      }
      
      // Inicializar filtrado de tags si estamos en la página de tags
      if (document.querySelector('.tags-page')) {
        initTagFiltering();
      }
    }
  
    // Inicializar en DOMContentLoaded para cargas normales de página
    document.addEventListener('DOMContentLoaded', initTaxonomyFilters);
    
    // Inicializar con InstantClick si está disponible
    if (typeof InstantClick !== 'undefined') {
      InstantClick.on('change', function() {
        console.log("InstantClick change event triggered for taxonomy filters");
        // Pequeño retraso para asegurar que el DOM está actualizado
        setTimeout(initTaxonomyFilters, 50);
      });
    }
  })();