// _includes/js/modules/filters.js
export const Filters = (() => {
  let currentCategoryFilter = 'all';
  let currentTagFilter = 'all';

  const setCategoryFilter = (category) => {
    currentCategoryFilter = category;
  };

  const setTagFilter = (tag) => {
    currentTagFilter = tag;
  };

  const resetFilters = () => {
    currentCategoryFilter = 'all';
    currentTagFilter = 'all';
  };

  const updateActiveFiltersDisplay = (activeCategoryFilter, activeTagFilter, activeCategoryValue, activeTagValue, categoryFilter, tagFilter) => {
    // Use passed parameters if provided, otherwise use module state
    const currentCategory = categoryFilter || currentCategoryFilter;
    const currentTag = tagFilter || currentTagFilter;
    
    if (!activeCategoryFilter || !activeTagFilter || !activeCategoryValue || !activeTagValue) return;
    
    if (currentCategory === 'all') {
      activeCategoryValue.textContent = 'All Categories';
      activeCategoryFilter.classList.remove('has-filter');
    } else {
      // Buscar de forma case-insensitive
      const currentCategoryLower = currentCategory.toLowerCase();
      
      // Mejorar la búsqueda para manejar espacios correctamente
      const activeCategory = Array.from(document.querySelectorAll('.category-filter'))
        .find(el => {
          const dataValue = (el.dataset.category || '').toLowerCase();
          // Comparación exacta para manejar correctamente los espacios
          return dataValue === currentCategoryLower;
        });
        
      if (activeCategory) {
        activeCategoryValue.textContent = activeCategory.textContent.replace(/\(\d+\)/, '').trim();
        activeCategoryFilter.classList.add('has-filter');
      } else {
        // Si no encontramos la categoría en los dropdowns, buscar en los enlaces de filtro
        const activeCategoryLink = Array.from(document.querySelectorAll('.category-filter-link'))
          .find(el => {
            const dataValue = (el.dataset.filter || '').toLowerCase();
            return dataValue === currentCategoryLower;
          });
          
        if (activeCategoryLink) {
          activeCategoryValue.textContent = activeCategoryLink.textContent.trim();
          activeCategoryFilter.classList.add('has-filter');
        } else {
          // Si no encontramos la categoría, usar el valor directamente con la primera letra en mayúscula
          const words = currentCategory.split(' ');
          const capitalizedWords = words.map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          );
          activeCategoryValue.textContent = capitalizedWords.join(' ');
          activeCategoryFilter.classList.add('has-filter');
        }
      }
    }
  
    if (currentTag === 'all') {
      activeTagValue.textContent = 'All Tags';
      activeTagFilter.classList.remove('has-filter');
    } else {
      // Buscar de forma case-insensitive
      const currentTagLower = currentTag.toLowerCase();
      
      // Mejorar la búsqueda para manejar espacios correctamente
      const activeTag = Array.from(document.querySelectorAll('.tag-filter'))
        .find(el => {
          const dataValue = (el.dataset.tag || '').toLowerCase();
          // Comparación exacta para manejar correctamente los espacios
          return dataValue === currentTagLower;
        });
        
      if (activeTag) {
        activeTagValue.textContent = activeTag.textContent.replace(/\(\d+\)/, '').trim();
        activeTagFilter.classList.add('has-filter');
      } else {
        // Si no encontramos el tag en los dropdowns, buscar en los enlaces de filtro
        const activeTagLink = Array.from(document.querySelectorAll('.tag-filter-link'))
          .find(el => {
            const dataValue = (el.dataset.filter || '').toLowerCase();
            return dataValue === currentTagLower;
          });
          
        if (activeTagLink) {
          activeTagValue.textContent = activeTagLink.textContent.replace(/^#/, '').trim();
          activeTagFilter.classList.add('has-filter');
        } else {
          // Si no encontramos el tag, usar el valor directamente con la primera letra en mayúscula
          const words = currentTag.split(' ');
          const capitalizedWords = words.map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          );
          activeTagValue.textContent = capitalizedWords.join(' ');
          activeTagFilter.classList.add('has-filter');
        }
      }
    }
    
    console.log(`Filtros activos actualizados: categoría="${activeCategoryValue.textContent}", tag="${activeTagValue.textContent}"`);
  };
  
  const getCurrentFilters = () => {
    return {
      currentCategoryFilter,
      currentTagFilter
    };
  };

  return {
    setCategoryFilter,
    setTagFilter,
    resetFilters,
    updateActiveFiltersDisplay,
    getCurrentFilters
  };
})();