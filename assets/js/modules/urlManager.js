// _includes/js/modules/urlManager.js
export const URLManager = (() => {
    const updateURL = (category, tag, sort, direction) => {
      const url = new URL(window.location);
      url.searchParams.delete('category');
      url.searchParams.delete('tag');
      url.searchParams.delete('sort');
      url.searchParams.delete('direction');
  
      if (category !== 'all') url.searchParams.set('category', category);
      if (tag !== 'all') url.searchParams.set('tag', tag);
      if (sort !== 'date' || direction !== 'desc') {
        url.searchParams.set('sort', sort);
        url.searchParams.set('direction', direction);
      }
  
      window.history.pushState({}, '', url);
    };
  
    return {
      updateURL
    };
  })();