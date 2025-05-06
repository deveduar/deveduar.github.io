// _includes/js/modules/rendering.js
export const Rendering = (() => {
  // Variable para rastrear si los posts adicionales ya se han cargado
  let additionalPostsLoaded = false;
  
  const renderPosts = (sortedPosts) => {
    // Separar los contenedores
    const mainPostsContainer = document.getElementById('main-posts-list');
    const additionalPostsContainer = document.getElementById('additional-posts-container');
    const postItems = document.querySelectorAll('.archive-post-item');
    const noResultsMessage = document.querySelector('.no-results-message');
    
    // Ocultar todos los posts primero
    postItems.forEach(item => item.style.display = 'none');
    
    // Mostrar mensaje de no resultados si es necesario
    if (sortedPosts.length === 0) {
      if (noResultsMessage) noResultsMessage.style.display = 'block';
      return;
    } else {
      if (noResultsMessage) noResultsMessage.style.display = 'none';
    }
    
    // Identificar a qué contenedor pertenece cada post
    sortedPosts.forEach(post => {
      post.style.display = 'block';
      
      // Verificar si es un post adicional
      const isAdditionalPost = post.classList.contains('additional-post') || 
                              post.dataset.additionalPost === 'true' ||
                              post.closest('#additional-posts-container') !== null;
      
      // Mover al contenedor correcto
      if (isAdditionalPost && additionalPostsContainer) {
        additionalPostsContainer.appendChild(post);
      } else if (mainPostsContainer) {
        mainPostsContainer.appendChild(post);
      }
    });
  };
  
  // Función para establecer que los posts adicionales están cargados
  const setAdditionalPostsLoaded = () => {
    additionalPostsLoaded = true;
    
    // Guardar en sessionStorage para recuperación futura
    const additionalPostsContainer = document.getElementById('additional-posts-container');
    if (additionalPostsContainer && additionalPostsContainer.children.length > 0) {
      try {
        sessionStorage.setItem('additionalPosts', additionalPostsContainer.innerHTML);
        sessionStorage.setItem('additionalPostsTimestamp', Date.now().toString());
      } catch (e) {
        console.warn('No se pudieron guardar los posts adicionales en sessionStorage:', e);
      }
    }
  };
  
  // Función para limpiar duplicados sin eliminar posts adicionales
  const cleanDuplicates = () => {
    const additionalPostsContainer = document.getElementById('additional-posts-container');
    if (!additionalPostsContainer) return;
    
    // Crear un mapa para rastrear posts únicos
    const uniquePosts = new Map();
    const duplicates = [];
    
    // Procesar solo los posts adicionales
    Array.from(additionalPostsContainer.children).forEach(post => {
      const postId = `${post.dataset.title}-${post.dataset.date}`;
      
      if (uniquePosts.has(postId)) {
        duplicates.push(post);
      } else {
        uniquePosts.set(postId, post);
      }
    });
    
    // Eliminar duplicados
    duplicates.forEach(duplicate => {
      if (duplicate.parentNode) {
        duplicate.parentNode.removeChild(duplicate);
      }
    });
  };

  return {
    renderPosts,
    setAdditionalPostsLoaded,
    cleanDuplicates,
    isAdditionalPostsLoaded: () => additionalPostsLoaded
  };
})();