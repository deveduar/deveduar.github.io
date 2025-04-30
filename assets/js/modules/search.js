// _includes/js/modules/search.js
export const Search = (() => {
    let currentSearchQuery = '';
    
    const setSearchQuery = (query) => {
      currentSearchQuery = query.trim().toLowerCase();
    };
    
    const filterPostsBySearch = (posts, query) => {
      if (!query) return posts;
      
      return posts.filter(post => {
        const title = post.querySelector('.post-link')?.textContent.toLowerCase() || '';
        const category = post.querySelector('.category-badge')?.textContent.toLowerCase() || '';
        const tag = post.querySelector('.tag-badge')?.textContent.toLowerCase() || '';
        const date = post.querySelector('.post-date')?.textContent.toLowerCase() || '';
        
        return title.includes(query) || 
               category.includes(query) || 
               tag.includes(query) || 
               date.includes(query);
      });
    };
    
    const initSearchInput = (searchInput, clearSearchBtn) => {
      if (!searchInput || !clearSearchBtn) return;
      
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        setSearchQuery(query);
        
        // Show/hide clear button
        if (query.length > 0) {
          clearSearchBtn.style.display = 'block';
        } else {
          clearSearchBtn.style.display = 'none';
        }
      });
      
      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        setSearchQuery('');
        clearSearchBtn.style.display = 'none';
        searchInput.focus();
      });
    };
    
    // Add a new function to reset the search input
    const resetSearch = (searchInput, clearSearchBtn) => {
        if (!searchInput || !clearSearchBtn) return;
        
        searchInput.value = '';
        setSearchQuery('');
        clearSearchBtn.style.display = 'none';
      };
      
      return {
        setSearchQuery,
        filterPostsBySearch,
        initSearchInput,
        resetSearch,
        getCurrentSearchQuery: () => currentSearchQuery
      };
    })();