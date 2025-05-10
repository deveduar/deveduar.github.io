// _includes/js/modules/rendering.js
export const Rendering = (() => {
  // Variable para rastrear si los posts adicionales ya se han cargado
  let additionalPostsLoaded = false;
  // Track the current batch of posts
  let currentBatch = 1;
  // Number of posts to load per batch
  const POSTS_PER_BATCH = 50;

  const renderPosts = (sortedPosts) => {
    console.log(`Renderizando ${sortedPosts.length} posts en total`);
    
    const mainPostsContainer = document.getElementById('main-posts-list');
    // const additionalPostsMarker = document.getElementById('additional-posts-marker');
    const noResultsMessage = document.querySelector('.no-results-message');
    
    if (!mainPostsContainer) {
      console.error('No se encontró el contenedor de posts');
      return;
    }
    
    // Mostrar mensaje de no resultados si es necesario
    if (sortedPosts.length === 0) {
      if (noResultsMessage) noResultsMessage.style.display = 'block';
      
      // Ocultar todos los posts
      const allPosts = mainPostsContainer.querySelectorAll('.archive-post-item');
      allPosts.forEach(post => post.style.display = 'none');
      
      return;
    } else {
      if (noResultsMessage) noResultsMessage.style.display = 'none';
    }
    
    // Enfoque más seguro: solo ocultar los posts que no están en sortedPosts
    const allPosts = Array.from(mainPostsContainer.querySelectorAll('.archive-post-item'));
    const sortedPostIds = sortedPosts.map(post => post.dataset.url || post.querySelector('a.post-link')?.getAttribute('href'));
    
    // Ocultar posts que no están en la lista ordenada
    allPosts.forEach(post => {
      const postUrl = post.dataset.url || post.querySelector('a.post-link')?.getAttribute('href');
      if (!sortedPostIds.includes(postUrl)) {
        post.style.display = 'none';
      }
    });
    
    // Mostrar y ordenar los posts que sí están en la lista
    if (sortedPosts.length > 0) {
      console.log('Aplicando orden visual a los posts...');
      
      // Crear un mapa para acceso rápido a los índices
      const postOrderMap = new Map();
      sortedPosts.forEach((post, index) => {
        const postUrl = post.dataset.url || post.querySelector('a.post-link')?.getAttribute('href');
        postOrderMap.set(postUrl, index);
      });
      
      // Ordenar los posts visualmente (cambiando el orden de flexbox)
      allPosts.forEach(post => {
        const postUrl = post.dataset.url || post.querySelector('a.post-link')?.getAttribute('href');
        if (postOrderMap.has(postUrl)) {
          post.style.display = 'block';
          post.style.order = postOrderMap.get(postUrl);
        }
      });
      
      // Asegurarse de que el contenedor usa flexbox
      mainPostsContainer.style.display = 'flex';
      mainPostsContainer.style.flexDirection = 'column';
      
      console.log('Posts ordenados visualmente según el criterio de ordenación');
    } else {
      // Si no hay posts que mostrar, simplemente mostrarlos
      sortedPosts.forEach(post => {
        post.style.display = 'block';
      });
    }
    
    // Verificar si necesitamos cargar más posts
    checkIfMorePostsNeeded();
  };
  
  // Función para aplicar filtros visuales sin modificar el DOM
  const applyVisualFilters = (categoryFilter, tagFilter, searchQuery) => {
    console.log('Aplicando filtros visuales a posts');
    const mainPostsContainer = document.getElementById('main-posts-list');
    
    if (!mainPostsContainer) return;
    
    // Aplicar filtros a todos los posts
    const allPosts = mainPostsContainer.querySelectorAll('.archive-post-item');
    
    // Convertir filtros a minúsculas para comparación case-insensitive
    const categoryFilterLower = categoryFilter.toLowerCase();
    const tagFilterLower = tagFilter.toLowerCase();
    
    console.log(`Aplicando filtros visuales: categoría="${categoryFilterLower}", tag="${tagFilterLower}", búsqueda="${searchQuery}"`);
    
    allPosts.forEach(post => {
      // Obtener categorías y tags del post
      const postCategories = (post.dataset.categories || '').toLowerCase();
      const postTags = (post.dataset.tags || '').toLowerCase();
      
      // Verificar si coincide con el filtro de categoría
      let matchesCategory = categoryFilterLower === 'all';
      if (!matchesCategory) {
        // Para manejar categorías con espacios o caracteres especiales
        if (categoryFilterLower.includes(' ') || categoryFilterLower.includes('/')) {
          // Buscar la categoría exacta en el string completo
          const regex = new RegExp(`\\b${escapeRegExp(categoryFilterLower)}\\b`, 'i');
          matchesCategory = regex.test(postCategories);
        } else {
          // Para categorías simples, dividir y buscar coincidencia exacta
          const categoriesArray = postCategories.split(' ').filter(Boolean);
          matchesCategory = categoriesArray.includes(categoryFilterLower);
        }
      }
      
      // Verificar si coincide con el filtro de tag
      let matchesTag = tagFilterLower === 'all';
      if (!matchesTag) {
        // Para manejar tags con espacios o caracteres especiales
        if (tagFilterLower.includes(' ') || tagFilterLower.includes('/')) {
          // Buscar el tag exacto en el string completo
          const regex = new RegExp(`\\b${escapeRegExp(tagFilterLower)}\\b`, 'i');
          matchesTag = regex.test(postTags);
        } else {
          // Para tags simples, dividir y buscar coincidencia exacta
          const tagsArray = postTags.split(' ').filter(Boolean);
          matchesTag = tagsArray.includes(tagFilterLower);
        }
      }
      
      // Aplicar filtro de búsqueda
      let matchesSearch = true;
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const title = post.dataset.title?.toLowerCase() || '';
        matchesSearch = title.includes(searchLower) || 
                       postCategories.includes(searchLower) || 
                       postTags.includes(searchLower);
      }
      
      // Mostrar u ocultar según los filtros
      post.style.display = (matchesCategory && matchesTag && matchesSearch) ? 'block' : 'none';
      
      // Debug para posts que no coinciden
      if (categoryFilterLower !== 'all' || tagFilterLower !== 'all') {
        if (!matchesCategory || !matchesTag) {
          console.log(`Post no coincide: ${post.querySelector('.post-link')?.textContent || 'Sin título'} - Categoría: ${matchesCategory}, Tag: ${matchesTag}`);
        }
      }
    });
  };
  
  // Función auxiliar para escapar caracteres especiales en expresiones regulares
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
// Función para verificar si necesitamos cargar más posts
const checkIfMorePostsNeeded = () => {
  // Si los posts adicionales ya están completamente cargados, no hacemos nada
  if (additionalPostsLoaded) {
    console.log('Todos los posts adicionales ya están cargados, no se cargarán más');
    return false;
  }
  
  // Check if we're using default sort (date desc)
  // Only load more posts automatically if using default sort
  if (typeof Sorting !== 'undefined') {
    const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
    // If we're not using the default sort, we should load all posts
    if (currentSortMethod !== 'date' || currentSortDirection !== 'desc') {
      console.log('Ordenación no predeterminada detectada, cargando todos los posts...');
      loadAllRemainingPosts();
      return true;
    }
  }
  
  // Continue with normal lazy loading for default sort
  const mainPostsContainer = document.getElementById('main-posts-list');
  const visiblePosts = mainPostsContainer ? 
    Array.from(mainPostsContainer.querySelectorAll('.archive-post-item')).filter(post => 
      post.style.display !== 'none'
    ) : [];
  
  // Si hay menos de X posts visibles, cargar los adicionales
  if (visiblePosts.length < 10) {
    console.log(`Solo hay ${visiblePosts.length} posts visibles, cargando más posts...`);
    if (typeof window.loadAdditionalPosts === 'function' && !window.isLoadingAdditionalPosts) {
      // Cargar el siguiente lote
      window.loadAdditionalPosts(currentBatch, POSTS_PER_BATCH);
      return true;
    }
  }
  
  return false;
};

// Add a new function to load all remaining posts at once
const loadAllRemainingPosts = () => {
  if (additionalPostsLoaded || window.isLoadingAdditionalPosts) {
    return;
  }
  
  console.log('Cargando todos los posts restantes para ordenación no predeterminada...');
  if (typeof window.loadAdditionalPosts === 'function') {
    window.loadAdditionalPosts(1, 500, true); // Load all posts at once
  }
};
  
// Función para configurar lazy loading
const setupLazyLoading = () => {
  console.log('Configurando lazy loading para posts adicionales');
  
  // Verificar si estamos en la página de archivo
  const archivePage = document.querySelector('.archive-page');
  if (!archivePage) return;
  
  // Check if we need to reset the state when coming back to the archive page
  const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
  if (additionalPosts.length === 0 && additionalPostsLoaded) {
    console.log('Detectada navegación de regreso a la página de archivo sin posts adicionales, reseteando estado');
    reset();
  }
  
  // Remove any existing observers to prevent duplicates
  if (window.postsIntersectionObserver) {
    window.postsIntersectionObserver.disconnect();
    console.log('Disconnected existing intersection observer');
  }
  
  // Verificar si ya tenemos posts adicionales cargados
  if (additionalPosts.length > 0) {
    console.log(`${additionalPosts.length} posts adicionales ya cargados`);
    // No marcamos como completamente cargados, solo que ya hay algunos cargados
  }
  
  // Configurar un observador de intersección para cargar posts adicionales
  // cuando el usuario se acerca al final de la lista principal
  window.postsIntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !window.isLoadingAdditionalPosts && !additionalPostsLoaded) {
        console.log('Usuario cerca del final de la lista, cargando posts adicionales...');
        if (typeof window.loadAdditionalPosts === 'function') {
          // Load the next batch of posts
          window.loadAdditionalPosts(currentBatch, POSTS_PER_BATCH);
          // Don't disconnect the observer - we want to continue observing for infinite scroll
        }
      }
    });
  }, {
    rootMargin: '0px 0px 300px 0px' // Cargar cuando estemos a 300px del final
  });
  
  // Observar el marcador de posts adicionales
  const loadMoreTrigger = document.getElementById('load-more-trigger') || 
                          document.getElementById('additional-posts-marker');
  if (loadMoreTrigger) {
    window.postsIntersectionObserver.observe(loadMoreTrigger);
    console.log('Observador de scroll configurado en el elemento trigger');
  } else {
    console.warn('No se encontró el elemento trigger para lazy loading');
    // Si no hay trigger, cargar inmediatamente la primera tanda
    if (typeof window.loadAdditionalPosts === 'function' && !window.isLoadingAdditionalPosts) {
      window.loadAdditionalPosts(currentBatch, POSTS_PER_BATCH);
    }
  }
  
  // También observar cuando se aplican filtros para cargar más posts si es necesario
  if (!window.filtersAppliedListenerAdded) {
    document.addEventListener('filtersApplied', () => {
      setTimeout(() => {
        checkIfMorePostsNeeded();
      }, 300);
    });
    window.filtersAppliedListenerAdded = true;
  }
};
  
// Function to increment the batch counter
const incrementBatch = () => {
  currentBatch++;
  console.log(`Incrementando a batch ${currentBatch}`);
  
  // Después de incrementar el batch, verificar si necesitamos cargar más posts
  // debido a los filtros actuales
  setTimeout(() => {
    checkIfMorePostsNeeded();
  }, 200);
};

  // Add this function to check if additional posts are loaded
  const areAdditionalPostsLoaded = () => {
    return additionalPostsLoaded;
  };

  // Add this function to set the flag when posts are loaded
  const setAdditionalPostsLoaded = () => {
    additionalPostsLoaded = true;
  };

  // Function to load more posts for operations that need all posts
  const loadMorePostsForOperation = (callback) => {
    if (isLoadingMorePosts) {
      console.log('Ya se están cargando más posts, ignorando solicitud');
      return;
    }
    
    isLoadingMorePosts = true;
    console.log('Cargando todos los posts para la operación actual...');
    
    // Use the window.loadAdditionalPosts function to load all posts
    if (typeof window.loadAdditionalPosts === 'function') {
      window.loadAdditionalPosts(currentBatch, POSTS_PER_BATCH, true, callback);
    } else {
      console.error('window.loadAdditionalPosts no está disponible');
      isLoadingMorePosts = false;
      
      // Execute callback if provided
      if (typeof callback === 'function') {
        callback();
      }
    }
  };

// Función para reiniciar el estado
const reset = () => {
  additionalPostsLoaded = false;
  currentBatch = 1;
  console.log('Estado de carga de posts adicionales reiniciado');
};

return {
  renderPosts,
  areAdditionalPostsLoaded,
  applyVisualFilters,
  setAdditionalPostsLoaded,
  loadMorePostsForOperation,
  incrementBatch,
  setupLazyLoading,
  checkIfMorePostsNeeded,
  loadAllRemainingPosts,
  reset
};
})();