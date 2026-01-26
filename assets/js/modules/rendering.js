// _includes/js/modules/rendering.js
export const Rendering = (() => {
  // Variable para rastrear si los posts adicionales ya se han cargado
  let additionalPostsLoaded = false;
  // Track the current batch of posts
  let currentBatch = 1;
  // Number of posts to load per batch
  const POSTS_PER_BATCH = 50;

    // Track if we're currently loading posts
    let isLoadingPosts = false;
    // Queue for pending operations after loading
    let pendingOperations = [];

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
      // if (categoryFilterLower !== 'all' || tagFilterLower !== 'all') {
      //   if (!matchesCategory || !matchesTag) {
      //     console.log(`Post no coincide: ${post.querySelector('.post-link')?.textContent || 'Sin título'} - Categoría: ${matchesCategory}, Tag: ${matchesTag}`);
      //   }
      // }
    });
  };
  
  // Función auxiliar para escapar caracteres especiales en expresiones regulares
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  

// Fix the checkIfMorePostsNeeded function to properly detect and load posts
const checkIfMorePostsNeeded = () => {
  console.log('Checking if more posts are needed...');
  
  // CRITICAL: First check if posts are actually loaded in the DOM
  const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
  
  // If posts are found, mark as loaded
  if (additionalPosts.length > 0) {
    additionalPostsLoaded = true;
    console.log(`Found ${additionalPosts.length} posts, marking as loaded`);
    return false;
  }
  
  // If no posts are found in DOM and we're not already loading, force load
  if (additionalPosts.length === 0 && !isLoadingPosts && !additionalPostsLoaded) {
    console.log('NO ADDITIONAL POSTS FOUND IN DOM! Resetting state and forcing load');
    additionalPostsLoaded = false;
    isLoadingPosts = false;
    
    // Force load posts immediately, but only if we're not already loading
    if (typeof window.loadAdditionalPosts === 'function' && !window.isLoadingAdditionalPosts) {
      console.log('FORCING LOAD of additional posts from checkIfMorePostsNeeded');
      window.loadAdditionalPosts(1, POSTS_PER_BATCH, false);
      return true;
    }
  }
  
  // If posts are already completely loaded or currently loading, do nothing
  if (additionalPostsLoaded) {
    console.log('Posts ya cargados completamente, no se cargarán más');
    return false;
  }
  
  if (isLoadingPosts) {
    console.log('Posts actualmente cargando, esperando...');
    return false;
  }
  
  // Check if we need more posts based on visibility
  const mainPostsContainer = document.getElementById('main-posts-list');
  const additionalPostsMarker = document.getElementById('additional-posts-marker');
  
  if (!mainPostsContainer || !additionalPostsMarker) {
    console.warn('No se encontró el contenedor de posts o el marcador de posts adicionales');
    return false;
  }
  
  // Check if the marker is visible
  const markerRect = additionalPostsMarker.getBoundingClientRect();
  const isMarkerVisible = markerRect.top < window.innerHeight * 1.5 && markerRect.bottom >= 0;
  
  if (isMarkerVisible) {
    console.log('Marcador de posts adicionales visible, cargando más posts...');
    
    // Use the existing implementation in archive-filters.js
    if (typeof window.loadAdditionalPosts === 'function') {
      window.loadAdditionalPosts(currentBatch + 1, POSTS_PER_BATCH, false);
      return true;
    } else {
      console.error('window.loadAdditionalPosts no está disponible');
    }
  }
  
  return false;
};


// Add a new function to force load posts regardless of state
// Completely rewrite the forceLoadPosts function to be more aggressive
const forceLoadPosts = (batch = 1, postsPerBatch = POSTS_PER_BATCH, loadAll = false, callback = null) => {
  console.log('🔥 FORCE LOADING POSTS: Ignorando estado actual y forzando carga de posts 🔥');
  
  // Reset ALL state flags
  additionalPostsLoaded = false;
  isLoadingPosts = false;
  
  // Reset global loading flag if it exists
  if (typeof window.isLoadingAdditionalPosts !== 'undefined') {
    window.isLoadingAdditionalPosts = false;
  }
  
  // Check if posts are actually loaded
  const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
  
  // Always try to load posts, even if some are already loaded
  if (additionalPosts.length === 0 || loadAll) {
    console.log(`FORCE LOADING: ${additionalPosts.length} posts found, but forcing load anyway`);
    
    // Load posts
    if (typeof window.loadAdditionalPosts === 'function') {
      // Call with a small timeout to ensure DOM is ready
      setTimeout(() => {
        window.loadAdditionalPosts(batch, postsPerBatch, loadAll, callback);
      }, 50);
    } else {
      console.error('window.loadAdditionalPosts no está disponible');
      if (callback) callback();
    }
  } else {
    console.log(`Ya hay ${additionalPosts.length} posts adicionales cargados en el DOM`);
    if (callback) callback();
  }
  
  return true;
};
  // Add a new function to force load posts after navigation
const forceLoadPostsAfterNavigation = () => {
  console.log('Forcing load of posts after navigation');
  
  // Reset state
  additionalPostsLoaded = false;
  
  // Check if we have any additional posts loaded
  const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
  
  if (additionalPosts.length === 0) {
    console.log('No additional posts found, forcing load');
    
    // Get current filter/sort parameters
    const params = new URLSearchParams(window.location.search);
    const sortMethod = params.get('sort') || 'date';
    const sortDirection = params.get('direction') || 'desc';
    const categoryFilter = params.get('category') || 'all';
    const tagFilter = params.get('tag') || 'all';
    const searchQuery = params.get('search') || '';
    
    // If using default sort and no filters, just load first batch
    const isDefaultView = sortMethod === 'date' && sortDirection === 'desc' && 
                         categoryFilter === 'all' && tagFilter === 'all' && 
                         (!searchQuery || searchQuery.trim() === '');
    
    // Force load posts
    if (typeof window.loadAdditionalPosts === 'function') {
      window.loadAdditionalPosts(1, POSTS_PER_BATCH, !isDefaultView, () => {
        console.log('Additional posts loaded after navigation');
        
        // Set up lazy loading for default view
        if (isDefaultView) {
          setupLazyLoading();
        }
      });
      return true;
    }
  } else {
    console.log(`${additionalPosts.length} additional posts already loaded`);
    return false;
  }
};
// Fix the loadMorePosts function to use the correct implementation from archive-filters.js
// Modify the loadMorePosts function to be more reliable
const loadMorePosts = (batch = 1, postsPerBatch = POSTS_PER_BATCH, loadAll = false, callback = null) => {
  console.log(`Cargando más posts (batch ${batch}, ${postsPerBatch} posts por batch, loadAll=${loadAll})...`);
  
  // Double-check if posts are actually loaded
  const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
  if (additionalPosts.length > 0 && !loadAll) {
    console.log(`Ya hay ${additionalPosts.length} posts adicionales cargados en el DOM`);
    additionalPostsLoaded = true;
    
    // Execute callback if provided
    if (callback) {
      console.log('Ejecutando callback después de detectar posts ya cargados');
      callback();
    }
    
    return;
  }
  
  // Si ya estamos cargando posts, encolar la operación
  if (isLoadingPosts) {
    console.log('Ya se están cargando posts, encolando operación...');
    pendingOperations.push(() => loadMorePosts(batch, postsPerBatch, loadAll, callback));
    return;
  }
  
  // Marcar que estamos cargando posts
  isLoadingPosts = true;
  
  console.log(`Delegando carga de batch ${batch} a window.loadAdditionalPosts`);
  
  // Use the existing implementation in archive-filters.js
  if (typeof window.loadAdditionalPosts === 'function') {
    window.loadAdditionalPosts(batch, postsPerBatch, loadAll, () => {
      console.log('Carga de posts adicionales completada');
      isLoadingPosts = false;
      
      // If all posts were loaded, mark as complete
      if (loadAll) {
        additionalPostsLoaded = true;
      }
      
      // Execute callback if provided
      if (callback) callback();
      
      // Process any pending operations
      processPendingOperations();
    });
  } else {
    console.error('window.loadAdditionalPosts no está disponible');
    isLoadingPosts = false;
    
    // Execute callback if provided
    if (callback) callback();
  }
};

// Add a new function to load all remaining posts at once
  // Add a new function to load all remaining posts at once
// Function to load all remaining posts
const loadAllRemainingPosts = () => {
  if (additionalPostsLoaded) {
    console.log('Todos los posts ya están cargados');
    return;
  }
  
  console.log('Cargando todos los posts restantes');
  loadMorePosts(currentBatch + 1, 100, true);
};
  

// Function to add a pending operation
const addPendingOperation = (operation) => {
  pendingOperations.push(operation);
  
  // If we're not loading posts, process immediately
  if (!isLoadingPosts) {
    processPendingOperations();
  }
};

// Helper function to process pending operations
const processPendingOperations = () => {
  if (pendingOperations.length > 0) {
    console.log(`Procesando ${pendingOperations.length} operaciones pendientes`);
    
    // Execute all pending operations
    pendingOperations.forEach(operation => {
      if (typeof operation === 'function') {
        try {
          operation();
        } catch (error) {
          console.error('Error executing pending operation:', error);
        }
      }
    });
    
    // Clear pending operations
    pendingOperations = [];
  }
};

// Add a new setupLazyLoading function that properly observes the marker
// Fix the setupLazyLoading function to use the correct implementation
const setupLazyLoading = () => {
  console.log('Setting up lazy loading for additional posts');
  
  // If posts are already loaded, don't set up lazy loading
  if (additionalPostsLoaded) {
    console.log('Additional posts already loaded, skipping lazy loading setup');
    return;
  }
  
  // Get the marker element
  const additionalPostsMarker = document.getElementById('additional-posts-marker');
  
  if (!additionalPostsMarker) {
    console.warn('No additional posts marker found, skipping lazy loading setup');
    return;
  }
  
  // Make sure the marker is visible
  additionalPostsMarker.style.display = 'block';
  
  // Create the IntersectionObserver only if it's supported by the browser
  if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported, falling back to scroll event');
    // Fallback to scroll event
    window.addEventListener('scroll', () => {
      if (additionalPostsMarker && isElementInViewport(additionalPostsMarker) && !additionalPostsLoaded) {
        checkIfMorePostsNeeded();
      }
    });
    return;
  }
  
  try {
    // Create a new IntersectionObserver with more generous margins
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !additionalPostsLoaded) {
          console.log('Additional posts marker is visible, loading more posts');
          // Use the existing implementation in archive-filters.js
          if (typeof window.loadAdditionalPosts === 'function') {
            window.loadAdditionalPosts(currentBatch + 1, POSTS_PER_BATCH, false);
          } else {
            console.error('window.loadAdditionalPosts no está disponible');
          }
        }
      });
    }, {
      rootMargin: '300px', // Increased from 200px to 300px
      threshold: 0.1 // Trigger when at least 10% of the target is visible
    });
    
    // Check if observer was successfully created before using it
    if (observer && typeof observer.observe === 'function') {
      observer.observe(additionalPostsMarker);
      console.log('Lazy loading set up successfully, observing marker');
    } else {
      console.warn('Failed to create IntersectionObserver, falling back to scroll event');
      // Fallback to scroll event
      window.addEventListener('scroll', () => {
        if (additionalPostsMarker && isElementInViewport(additionalPostsMarker) && !additionalPostsLoaded) {
          checkIfMorePostsNeeded();
        }
      });
    }
  } catch (error) {
    console.error('Error setting up IntersectionObserver:', error);
    // Fallback to scroll event
    window.addEventListener('scroll', () => {
      if (additionalPostsMarker && isElementInViewport(additionalPostsMarker) && !additionalPostsLoaded) {
        checkIfMorePostsNeeded();
      }
    });
  }
};

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
  
// Function to increment the batch counter
const incrementBatch = () => {
  currentBatch++;
  console.log(`Batch incrementado a ${currentBatch}`);
};

  // Add this function to check if additional posts are loaded
  const areAdditionalPostsLoaded = () => {
    return additionalPostsLoaded;
  };

  // Add this function to set the flag when posts are loaded
  const setAdditionalPostsLoaded = () => {
    additionalPostsLoaded = true;
  };

    // Function to check if we're currently loading posts
    const isLoadingMorePosts = () => {
      return isLoadingPosts;
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

// Improve the reset function to properly reset the state
// Improved reset function
// Fix the reset function to properly clear all state
// Improved reset function to prevent duplicate loading
const reset = () => {
  console.log('🔄 COMPLETE RESET of Rendering module state 🔄');
  
  // Reset all module state
  additionalPostsLoaded = false;
  currentBatch = 1;
  isLoadingPosts = false;
  pendingOperations = [];
  
  // Reset global loading flag if it exists
  if (typeof window.isLoadingAdditionalPosts !== 'undefined') {
    window.isLoadingAdditionalPosts = false;
  }
  
  // Force check if posts are actually loaded
  const additionalPosts = document.querySelectorAll('.archive-post-item[data-additional-post="true"]');
  if (additionalPosts.length > 0) {
    console.log(`Found ${additionalPosts.length} additional posts after reset, marking as loaded`);
    additionalPostsLoaded = true;
    return; // Don't force reload if posts are already present
  } else {
    console.log('No additional posts found after reset, keeping additionalPostsLoaded as false');
    additionalPostsLoaded = false;
    
    // Only force load posts if none are found, and only do it once
    setTimeout(() => {
      if (typeof window.loadAdditionalPosts === 'function' && 
          document.querySelectorAll('.archive-post-item[data-additional-post="true"]').length === 0) {
        console.log('Forcing load of posts after reset (only if still needed)');
        window.loadAdditionalPosts(1, POSTS_PER_BATCH, false);
      }
    }, 300);
  }
};

return {
  renderPosts,
  areAdditionalPostsLoaded,
  isLoadingMorePosts,
  applyVisualFilters,
  setAdditionalPostsLoaded,
  loadMorePostsForOperation,
  incrementBatch,
  loadMorePosts,
  addPendingOperation,
  setupLazyLoading,
  checkIfMorePostsNeeded,
  loadAllRemainingPosts,
  forceLoadPostsAfterNavigation,
  reset,
  forceLoadPosts
};
})();