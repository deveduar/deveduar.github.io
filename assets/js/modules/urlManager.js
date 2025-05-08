// _includes/js/modules/urlManager.js
export const URLManager = (() => {
  const updateURL = (categoryFilter, tagFilter, sortMethod, sortDirection, searchQuery) => {
    // Crear un objeto URLSearchParams para manejar los parámetros de la URL
    const params = new URLSearchParams();
    
    // Añadir parámetros solo si no son los valores por defecto
    if (categoryFilter && categoryFilter !== 'all') {
      // Asegurarse de que los espacios se codifican correctamente
      // Usamos encodeURIComponent para garantizar una codificación consistente
      params.set('category', encodeURIComponent(categoryFilter));
    }
    
    if (tagFilter && tagFilter !== 'all') {
      // Asegurarse de que los espacios se codifican correctamente
      params.set('tag', encodeURIComponent(tagFilter));
    }
    
    if (sortMethod && sortMethod !== 'date') {
      params.set('sort', sortMethod);
    }
    
    if (sortDirection && sortDirection !== 'desc') {
      params.set('direction', sortDirection);
    }
    
    if (searchQuery) {
      params.set('search', encodeURIComponent(searchQuery));
    }
    
    // Construir la nueva URL
    const newURL = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
    
    // Actualizar la URL sin recargar la página
    window.history.pushState({ path: newURL }, '', newURL);
    
    console.log(`URL actualizada: ${newURL}`);
  };

  return {
    updateURL
  };
})();