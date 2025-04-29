// _includes/js/modules/sorting.js
export const Sorting = (() => {
  let currentSortMethod = 'date';
  let currentSortDirection = 'desc';

  const sortPosts = (posts, method, direction) => {
    // Use passed parameters if provided, otherwise use module state
    const sortMethod = method || currentSortMethod;
    const sortDirection = direction || currentSortDirection;
    
    const sortedPosts = [...posts];
    switch (sortMethod) {
      case 'date':
        sortedPosts.sort((a, b) => {
          const dateA = new Date(a.querySelector('.post-date').getAttribute('data-date') || a.querySelector('.post-date').textContent);
          const dateB = new Date(b.querySelector('.post-date').getAttribute('data-date') || b.querySelector('.post-date').textContent);
          return sortDirection === 'desc' ? dateB - dateA : dateA - dateB;
        });
        break;
      case 'title':
        sortedPosts.sort((a, b) => {
          const titleA = a.querySelector('.post-link').textContent.trim().toLowerCase();
          const titleB = b.querySelector('.post-link').textContent.trim().toLowerCase();
          return sortDirection === 'desc' ? titleB.localeCompare(titleA) : titleA.localeCompare(titleB);
        });
        break;
      case 'category':
        sortedPosts.sort((a, b) => {
          const categoryA = a.querySelector('.category-badge')?.textContent.trim().toLowerCase() || '';
          const categoryB = b.querySelector('.category-badge')?.textContent.trim().toLowerCase() || '';
          return sortDirection === 'desc' ? categoryB.localeCompare(categoryA) : categoryA.localeCompare(categoryB);
        });
        break;
      case 'tag':
        sortedPosts.sort((a, b) => {
          const tagA = a.querySelector('.tag-badge')?.textContent.trim().toLowerCase() || '';
          const tagB = b.querySelector('.tag-badge')?.textContent.trim().toLowerCase() || '';
          return sortDirection === 'desc' ? tagB.localeCompare(tagA) : tagA.localeCompare(tagB);
        });
        break;
    }
    return sortedPosts;
  };

  const setSortMethod = (method, direction) => {
    currentSortMethod = method;
    currentSortDirection = direction;
  };
  
  const updateActiveSortButton = (sortButtons, method, direction) => {
    if (!sortButtons) return;
    
    sortButtons.forEach(button => {
      const buttonSort = button.dataset.sort;
      const isActive = buttonSort === method;
      
      // Update active state
      if (isActive) {
        button.classList.add('active');
        
        // Update direction attribute and icon
        button.dataset.direction = direction;
        const icon = button.querySelector('i');
        if (icon) {
          icon.className = direction === 'desc' ? 
            'fas fa-arrow-down' : 'fas fa-arrow-up';
        }
      } else {
        button.classList.remove('active');
      }
    });
  };

  return {
    sortPosts,
    setSortMethod,
    updateActiveSortButton,
    getCurrentSort: () => ({ currentSortMethod, currentSortDirection })
  };
})();