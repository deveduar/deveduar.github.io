export const Sorting = (() => {
  let currentSortMethod = 'date';
  let currentSortDirection = 'desc';
  
  const setSortMethod = (method, direction) => {
    currentSortMethod = method;
    currentSortDirection = direction;
    console.log(`Método de ordenación establecido: ${method}, dirección: ${direction}`);
  };
  
  const getCurrentSort = () => {
    return { currentSortMethod, currentSortDirection };
  };
  
  const sortPosts = (posts, method, direction) => {
    console.log(`Ordenando ${posts.length} posts por ${method} en dirección ${direction}`);
    
    return [...posts].sort((a, b) => {
      let valueA, valueB;
      
      // Extraer valores según el método de ordenación
      switch (method) {
        case 'date':
          valueA = a.dataset.date || '';
          valueB = b.dataset.date || '';
          break;
        case 'title':
          valueA = (a.dataset.title || '').toLowerCase();
          valueB = (b.dataset.title || '').toLowerCase();
          break;
        case 'category':
          // Usar la primera categoría para ordenar
          const categoriesA = a.dataset.categories ? a.dataset.categories.split(' ').filter(c => c) : [];
          const categoriesB = b.dataset.categories ? b.dataset.categories.split(' ').filter(c => c) : [];
          valueA = categoriesA.length > 0 ? categoriesA[0].toLowerCase() : '';
          valueB = categoriesB.length > 0 ? categoriesB[0].toLowerCase() : '';
          break;
        case 'tag':
          // Usar el primer tag para ordenar
          const tagsA = a.dataset.tags ? a.dataset.tags.split(' ').filter(t => t) : [];
          const tagsB = b.dataset.tags ? b.dataset.tags.split(' ').filter(t => t) : [];
          valueA = tagsA.length > 0 ? tagsA[0].toLowerCase() : '';
          valueB = tagsB.length > 0 ? tagsB[0].toLowerCase() : '';
          break;
        default:
          valueA = a.dataset.date || '';
          valueB = b.dataset.date || '';
      }
      
      // Comparar valores
      let comparison = 0;
      
      if (method === 'date') {
        // Para fechas, convertir a objetos Date para comparación
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);
        
        // Verificar si las fechas son válidas
        const isValidDateA = !isNaN(dateA.getTime());
        const isValidDateB = !isNaN(dateB.getTime());
        
        if (isValidDateA && isValidDateB) {
          comparison = dateA - dateB;
        } else if (isValidDateA) {
          comparison = -1; // A es válido, B no, A va primero
        } else if (isValidDateB) {
          comparison = 1;  // B es válido, A no, B va primero
        } else {
          // Ninguna fecha es válida, comparar como strings
          comparison = valueA.localeCompare(valueB);
        }
      } else {
        // Para otros tipos, comparar como strings
        comparison = valueA.localeCompare(valueB);
      }
      
      // Aplicar dirección
      return direction === 'asc' ? comparison : -comparison;
    });
  };
  
  const updateActiveSortButton = (buttons, method, direction) => {
    if (!buttons) return;
    
    console.log(`Actualizando botones de ordenación: método=${method}, dirección=${direction}`);
    
    buttons.forEach(button => {
      const buttonMethod = button.dataset.sort;
      
      // Eliminar clases activas de todos los botones
      button.classList.remove('active', 'asc', 'desc');
      
      // Si este botón corresponde al método actual, marcarlo como activo
      if (buttonMethod === method) {
        button.classList.add('active', direction);
        button.dataset.direction = direction; // Actualizar la dirección en el dataset
        
        // Actualizar el ícono según la dirección
        const icon = button.querySelector('i');
        if (icon) {
          icon.className = direction === 'asc' ? 'fas fa-arrow-up' : 'fas fa-arrow-down';
        }
      }
    });
  };
  
  return {
    setSortMethod,
    getCurrentSort,
    sortPosts,
    updateActiveSortButton
  };
})();