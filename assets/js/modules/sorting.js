// _includes/js/modules/sorting.js
export const Sorting = (() => {
  let currentSortMethod = 'date';
  let currentSortDirection = 'desc';

  const setSortMethod = (method, direction) => {
    console.log(`Sorting: Estableciendo método de ordenación: ${method}, dirección: ${direction}`);
    currentSortMethod = method || 'date';
    currentSortDirection = direction || 'desc';
  };

  const sortPosts = (posts, method, direction) => {
    // Use passed parameters if provided, otherwise use module state
    const sortMethod = method || currentSortMethod;
    const sortDirection = direction || currentSortDirection;
    
    console.log(`Sorting: Ordenando ${posts.length} posts por: ${sortMethod}, dirección: ${sortDirection}`);
    
    if (!posts || posts.length === 0) {
      console.log('Sorting: No hay posts para ordenar');
      return [];
    }
    
    const sortedPosts = [...posts];
    try {
      switch (sortMethod) {
        case 'date':
          sortedPosts.sort((a, b) => {
            let dateA, dateB;
            try {
              const dateElementA = a.querySelector('.post-date');
              const dateElementB = b.querySelector('.post-date');
              
              if (!dateElementA || !dateElementB) {
                console.warn('Sorting: Elementos de fecha no encontrados');
                return 0;
              }
              
              dateA = new Date(dateElementA.getAttribute('data-date') || dateElementA.textContent);
              dateB = new Date(dateElementB.getAttribute('data-date') || dateElementB.textContent);
              
              if (isNaN(dateA) || isNaN(dateB)) {
                console.warn('Sorting: Fechas inválidas', dateA, dateB);
                return 0;
              }
            } catch (e) {
              console.error('Sorting: Error al obtener fechas', e);
              return 0;
            }
            
            return sortDirection === 'desc' ? dateB - dateA : dateA - dateB;
          });
          break;
        case 'title':
          sortedPosts.sort((a, b) => {
            let titleA = '', titleB = '';
            try {
              const titleElementA = a.querySelector('.post-link');
              const titleElementB = b.querySelector('.post-link');
              
              if (!titleElementA || !titleElementB) {
                console.warn('Sorting: Elementos de título no encontrados');
                return 0;
              }
              
              titleA = titleElementA.textContent.trim().toLowerCase();
              titleB = titleElementB.textContent.trim().toLowerCase();
            } catch (e) {
              console.error('Sorting: Error al obtener títulos', e);
              return 0;
            }
            
            return sortDirection === 'desc' ? titleB.localeCompare(titleA) : titleA.localeCompare(titleB);
          });
          break;
        case 'category':
          sortedPosts.sort((a, b) => {
            let categoryA = '', categoryB = '';
            try {
              const categoryElementA = a.querySelector('.category-badge');
              const categoryElementB = b.querySelector('.category-badge');
              
              categoryA = categoryElementA ? categoryElementA.textContent.trim().toLowerCase() : '';
              categoryB = categoryElementB ? categoryElementB.textContent.trim().toLowerCase() : '';
            } catch (e) {
              console.error('Sorting: Error al obtener categorías', e);
              return 0;
            }
            
            return sortDirection === 'desc' ? categoryB.localeCompare(categoryA) : categoryA.localeCompare(categoryB);
          });
          break;
        case 'tag':
          sortedPosts.sort((a, b) => {
            let tagA = '', tagB = '';
            try {
              const tagElementA = a.querySelector('.tag-badge');
              const tagElementB = b.querySelector('.tag-badge');
              
              tagA = tagElementA ? tagElementA.textContent.trim().toLowerCase() : '';
              tagB = tagElementB ? tagElementB.textContent.trim().toLowerCase() : '';
            } catch (e) {
              console.error('Sorting: Error al obtener etiquetas', e);
              return 0;
            }
            
            return sortDirection === 'desc' ? tagB.localeCompare(tagA) : tagA.localeCompare(tagB);
          });
          break;
      }
    } catch (e) {
      console.error('Sorting: Error general al ordenar', e);
    }
    
    console.log(`Sorting: Ordenación completada, ${sortedPosts.length} posts ordenados`);
    return sortedPosts;
  };

const updateActiveSortButton = (sortButtons, method, direction) => {
  // Verificar si estamos en la página de archivo antes de actualizar botones
  if (!document.querySelector('.archive-page')) {
    console.log('Sorting: No estamos en la página de archivo, no se actualizarán los botones');
    return;
  }
  
  if (!sortButtons || sortButtons.length === 0) {
    console.log('Sorting: No hay botones de ordenación para actualizar');
    return;
  }
  
  console.log(`Sorting: Actualizando botones de ordenación para método: ${method}, dirección: ${direction}`);
  
  // Primero, quitar la clase active de TODOS los botones
  Array.from(sortButtons).forEach(button => {
    button.classList.remove('active');
  });
  
  // Luego, encontrar el botón que coincide con el método actual y activarlo
  const activeButton = Array.from(sortButtons).find(button => button.dataset.sort === method);
  
  if (activeButton) {
    // Añadir clase active SOLO al botón correspondiente
    activeButton.classList.add('active');
    
    // Update direction attribute and icon
    activeButton.dataset.direction = direction;
    const icon = activeButton.querySelector('i');
    if (icon) {
      icon.className = direction === 'desc' ? 
        'fas fa-arrow-down' : 'fas fa-arrow-up';
    }
    
    console.log(`Sorting: Botón ${method} activado con dirección ${direction}`);
  } else {
    console.log(`Sorting: No se encontró botón para el método ${method}`);
  }
};

  return {
    sortPosts,
    setSortMethod,
    updateActiveSortButton,
    getCurrentSort: () => ({ currentSortMethod, currentSortDirection })
  };
})();