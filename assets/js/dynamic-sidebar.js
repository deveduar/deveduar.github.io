/**
 * dynamic-sidebar.js - Solución unificada para mantener la sidebar con Turbolinks
 */

// Variable global para almacenar el estado de la sidebar
window.sidebarState = window.sidebarState || {
  content: null,
  isInitialized: false,
  activeLink: null,
  expandedCategories: [],
  scrollPosition: 0,
  isPageReload: false
};

// Función para mostrar indicador de carga
function showLoadingIndicator() {
  let loadingIndicator = document.getElementById('sidebar-loading-indicator');
  
  if (!loadingIndicator) {
    loadingIndicator = document.createElement('div');
    loadingIndicator.id = 'sidebar-loading-indicator';
    loadingIndicator.className = 'sidebar-loading';
    loadingIndicator.innerHTML = '<div class="loading-spinner"></div><span>Loading categories...</span>';
    
    const sidebarContent = document.querySelector('.sidebar-content');
    if (sidebarContent) {
      // Insertar antes de la lista de categorías
      const categoriesList = document.getElementById('dynamic-sidebar-categories');
      if (categoriesList) {
        sidebarContent.insertBefore(loadingIndicator, categoriesList);
      } else {
        sidebarContent.appendChild(loadingIndicator);
      }
    }
  }
  
  loadingIndicator.style.display = 'flex';
  loadingIndicator.style.visibility = 'visible';
  loadingIndicator.style.opacity = '1';
}

// Función para ocultar indicador de carga
function hideLoadingIndicator() {
  const loadingIndicator = document.getElementById('sidebar-loading-indicator');
  if (loadingIndicator) {
    loadingIndicator.style.display = 'none';
    loadingIndicator.style.visibility = 'hidden';
    loadingIndicator.style.opacity = '0';
  }
  
  // También ocultar la barra de progreso de Turbolinks
  const progressBar = document.querySelector('.turbolinks-progress-bar');
  if (progressBar) {
    progressBar.style.visibility = 'hidden';
    progressBar.style.opacity = '0';
    progressBar.style.display = 'none';
  }
  
  // También ocultar la barra de progreso de Turbo
  const turboProgressBar = document.querySelector('.turbo-progress-bar');
  if (turboProgressBar) {
    turboProgressBar.style.visibility = 'hidden';
    turboProgressBar.style.opacity = '0';
    turboProgressBar.style.display = 'none';
  }
}

// Función para hacer visible la sidebar
function makeSidebarVisible() {
  // Asegurarse de que la sidebar y sus elementos sean visibles
  const sidebarContainer = document.getElementById('dynamic-sidebar-categories');
  const sidebarContent = document.querySelector('.sidebar-content');
  const sidebarWrapper = document.querySelector('.sidebar-wrapper');
  const sidebar = document.querySelector('.sidebar');
  
  // Hacer visible el contenedor de categorías
  if (sidebarContainer) {
    sidebarContainer.style.display = 'block';
    sidebarContainer.style.visibility = 'visible';
    sidebarContainer.style.opacity = '1';
  }
  
  // Hacer visible el contenido de la sidebar
  if (sidebarContent) {
    sidebarContent.style.display = 'block';
    sidebarContent.style.visibility = 'visible';
    sidebarContent.style.opacity = '1';
  }
  
  // Hacer visible el wrapper de la sidebar
  if (sidebarWrapper) {
    sidebarWrapper.style.display = 'block';
    sidebarWrapper.style.visibility = 'visible';
    sidebarWrapper.style.opacity = '1';
  }
  
  // Hacer visible la sidebar principal
  if (sidebar) {
    sidebar.style.display = 'block';
    sidebar.style.visibility = 'visible';
    sidebar.style.opacity = '1';
  }
  
  // Ocultar cualquier indicador de carga
  hideLoadingIndicator();
}

window.initSidebar = function() {
  console.log('Inicializando sidebar...');
  
  // Mostrar indicador de carga inmediatamente
  showLoadingIndicator();
  
  // Obtener el contenedor de la sidebar
  const sidebarContainer = document.getElementById('dynamic-sidebar-categories');
  if (!sidebarContainer) {
    console.error('No se encontró el contenedor de la sidebar');
    hideLoadingIndicator();
    return;
  }
  
  // Si ya está inicializada y el contenedor tiene contenido, no hacer nada
  const needsInitialization =
    !window.sidebarState.isInitialized || 
    !sidebarContainer.innerHTML || 
    sidebarContainer.innerHTML.trim() === '';

  if (!needsInitialization) {
    console.log('Sidebar ya inicializada y presente en el DOM, saltando inicialización');
    hideLoadingIndicator();
    makeSidebarVisible();
    initSidebarComponents();
    return;
  }
  
  // Limpiar cualquier timeout existente
  if (window.sidebarLoadingTimeout) {
    clearTimeout(window.sidebarLoadingTimeout);
  }
  
  // Establecer un timeout para evitar carga infinita
  window.sidebarLoadingTimeout = setTimeout(() => {
    console.log('Timeout de carga activado');
    
    // Si después del timeout la sidebar sigue sin inicializarse o está vacía
    if (!window.sidebarState.isInitialized || 
        !sidebarContainer.innerHTML || 
        sidebarContainer.innerHTML.trim() === '') {
      
      console.log('Forzando recarga de sidebar después de timeout');
      
      // Intentar cargar desde caché local
      const cachedData = localStorage.getItem('sidebarData');
      if (cachedData) {
        console.log('Restaurando sidebar desde caché local después de timeout');
        sidebarContainer.innerHTML = cachedData;
        window.sidebarState.content = cachedData;
        window.sidebarState.isInitialized = true;
        
        hideLoadingIndicator();
        makeSidebarVisible();
        initSidebarComponents();
      } else {
        // Si no hay caché, intentar una última vez con fetch
        fetchSidebarData();
      }
    } else {
      hideLoadingIndicator();
    }
  }, 3000); // Reducido a 3 segundos
  
  // Intentar usar caché primero para mostrar algo inmediatamente
  const cachedData = localStorage.getItem('sidebarData');
  const cachedTimestamp = localStorage.getItem('sidebarDataTimestamp');
  const isCacheValid = cachedData && cachedTimestamp && 
                      (Date.now() - parseInt(cachedTimestamp) < 24 * 60 * 60 * 1000);
  
  if (isCacheValid) {
    console.log('Usando datos de sidebar en caché mientras se actualiza');
    sidebarContainer.innerHTML = cachedData;
    
    // Inicializar componentes con la caché
    initSidebarComponents();
    
    // Hacer visible la sidebar inmediatamente
    makeSidebarVisible();
    
    // Marcar como inicializada
    window.sidebarState.content = cachedData;
    window.sidebarState.isInitialized = true;
  }
  
  // Siempre hacer fetch para actualizar datos
  fetchSidebarData();
};

// Función para hacer fetch de datos de sidebar
function fetchSidebarData() {
  const sidebarContainer = document.getElementById('dynamic-sidebar-categories');
  if (!sidebarContainer) {
    console.error('No se encontró el contenedor de la sidebar');
    hideLoadingIndicator();
    return;
  }
  
  // URL para obtener los datos
  const url = '/posts.json';
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener datos de sidebar');
      }
      return response.json();
    })
    .then(data => {
      // Procesar datos y generar HTML
      const sidebarHTML = generateSidebarHTML(data);
      
      // Actualizar el contenedor solo si está vacío o si los datos son diferentes
      if (!sidebarContainer.innerHTML || 
          sidebarContainer.innerHTML.trim() === '' || 
          sidebarContainer.innerHTML !== sidebarHTML) {
        sidebarContainer.innerHTML = sidebarHTML;
      }
      
      // Guardar en caché local
      localStorage.setItem('sidebarData', sidebarHTML);
      localStorage.setItem('sidebarDataTimestamp', Date.now().toString());
      
      // Guardar estado en memoria
      window.sidebarState.content = sidebarHTML;
      window.sidebarState.isInitialized = true;
      
      // Ocultar indicador de carga
      hideLoadingIndicator();
      
      // Inicializar componentes
      initSidebarComponents();
      
      // Asegurarse de que la sidebar sea visible
      makeSidebarVisible();
    })
    .catch(error => {
      console.error('Error:', error);
      
      // Si hay un error pero tenemos contenido en caché, no mostrar error
      if (sidebarContainer.innerHTML && sidebarContainer.innerHTML.trim() !== '') {
        hideLoadingIndicator();
        return;
      }
      
      sidebarContainer.innerHTML = '<p class="sidebar-error">Error al cargar la sidebar. <a href="javascript:void(0)" onclick="window.initSidebar()">Reintentar</a></p>';
      hideLoadingIndicator();
    });
}

// Modify the initSidebarComponents function to prioritize scroll restoration
function initSidebarComponents() {
  // Apply scroll position first before any other operations
  const scrollPos = window.sidebarState.scrollPosition;
  if (scrollPos && scrollPos > 0) {
    const sidebarContent = document.querySelector('.sidebar-content');
    if (sidebarContent) {
      sidebarContent.style.scrollBehavior = 'auto';
      sidebarContent.scrollTop = scrollPos;
    }
  }
  
  // Then initialize events
  initSidebarEvents();
  
  // Update active link
  updateActiveLink();
  
  // Restore expanded categories
  restoreExpandedCategoriesState();
  
  // No need to call restoreSidebarScroll again since we already did it
}

// Función para generar HTML de la sidebar a partir de datos JSON
// Función para generar HTML de la sidebar a partir de datos JSON
function generateSidebarHTML(data) {
  let html = '';
  
  // Iterar sobre categorías
  data.categories.forEach(category => {
    html += `
      <div class="category-item" data-category="${category.name}">
        <div class="category-header">
          <span class="category-icon">${category.icon || '📁'}</span>
          <span class="category-title category-name">${category.name}</span>
          <span class="category-toggle"></span>
        </div>
        <div class="category-posts" data-turbo-permanent>`;
    
    // Iterar sobre posts en cada categoría
    category.posts.forEach(post => {
      html += `<li><a href="${post.url}" class="sidebar-post-link" data-turbo-action="replace" data-turbo-preserve-scroll="true">${post.title}</a></li>`;
    });
    
    html += `
        </div>
      </div>`;
  });
  
  return html;
}

// Update the initSidebarEvents function to use Turbo attributes
function initSidebarEvents() {
  // Agregar eventos a los encabezados de categoría
  document.querySelectorAll('.category-header').forEach(header => {
    // Eliminar evento anterior si existe
    header.removeEventListener('click', toggleCategory);
    
    // Agregar nuevo evento
    header.addEventListener('click', toggleCategory);
  });
  
  // Añadir evento de scroll a la sidebar
  const sidebarContent = document.querySelector('.sidebar-content');
  if (sidebarContent) {
    sidebarContent.removeEventListener('scroll', saveSidebarScroll);
    sidebarContent.addEventListener('scroll', saveSidebarScroll);
  }
  
  // Añadir eventos a los enlaces para preservar scroll
  document.querySelectorAll('.sidebar-post-link').forEach(link => {
    // Asegurarse de que tengan el atributo para preservar scroll con Turbo
    link.setAttribute('data-turbo-preserve-scroll', 'true');
    link.setAttribute('data-turbo-action', 'replace');
    
    // Mantener compatibilidad con Turbolinks
    link.setAttribute('data-turbolinks-persist-scroll', 'true');
    link.setAttribute('data-turbolinks-action', 'replace');
    
    // Eliminar eventos anteriores para evitar duplicados
    link.removeEventListener('click', handleSidebarLinkClick);
    link.addEventListener('click', handleSidebarLinkClick);
  });
}




function toggleCategory(e) {
    // Prevenir propagación para evitar conflictos
    e.preventDefault();
    e.stopPropagation();
    
    const categoryItem = this.closest('.category-item');
    if (categoryItem) {
      categoryItem.classList.toggle('category-expanded');
      
      // Guardar estado de categorías expandidas
      saveExpandedCategoriesState();
      
      // Guardar posición de scroll también
      saveSidebarScroll();
    }
    
    return false;
}

// Guardar estado de categorías expandidas
function saveExpandedCategoriesState() {
  const expandedCategories = [];
  document.querySelectorAll('.category-item.category-expanded').forEach(item => {
    const category = item.getAttribute('data-category');
    if (category) {
      expandedCategories.push(category);
    }
  });
  
  window.sidebarState.expandedCategories = expandedCategories;
  
  // Guardar en localStorage Y sessionStorage para mayor seguridad
  try {
    const expandedJSON = JSON.stringify(expandedCategories);
    localStorage.setItem('expandedCategories', expandedJSON);
    sessionStorage.setItem('expandedCategories', expandedJSON);
  } catch (e) {
    console.warn('No se pudo guardar categorías expandidas en storage:', e);
  }
}

// Restaurar estado de categorías expandidas
function restoreExpandedCategoriesState() {
  // Intentar cargar desde sessionStorage primero (más reciente)
  let expandedCategories = [];
  let loaded = false;
  
  try {
    // Primero intentar desde sessionStorage (más reciente)
    const savedSession = sessionStorage.getItem('expandedCategories');
    if (savedSession) {
      expandedCategories = JSON.parse(savedSession);
      loaded = true;
    } 
    // Si no hay en sessionStorage, intentar localStorage
    else {
      const savedLocal = localStorage.getItem('expandedCategories');
      if (savedLocal) {
        expandedCategories = JSON.parse(savedLocal);
        loaded = true;
      }
    }
  } catch (e) {
    console.warn('Error al leer categorías expandidas de storage:', e);
  }
  
  // Si se cargaron categorías, aplicarlas
  if (loaded && expandedCategories.length > 0) {
    window.sidebarState.expandedCategories = expandedCategories;
    
    // Aplicar a los elementos del DOM
    expandedCategories.forEach(category => {
      const items = document.querySelectorAll(`.category-item[data-category="${category}"]`);
      items.forEach(item => {
        if (item) {
          item.classList.add('category-expanded');
        }
      });
    });
    
    return true;
  }
  
  return false;
}

// Función para guardar posición de scroll
function saveSidebarScroll() {
  const sidebarContent = document.querySelector('.sidebar-content');
  if (!sidebarContent) return;
  
  const scrollPos = sidebarContent.scrollTop;
  
  // Guardar en sessionStorage
  try {
    sessionStorage.setItem('sidebarScrollPos', scrollPos.toString());
  } catch (e) {
    console.warn('No se pudo guardar posición de sidebar en sessionStorage:', e);
  }
  
  // Guardar en estado global
  window.sidebarState.scrollPosition = scrollPos;
}


// Update the handleSidebarLinkClick function for Turbo
function handleSidebarLinkClick(e) {
  // Add transition class to prevent flickering
  document.documentElement.classList.add('turbo-transition');
  document.documentElement.classList.add('turbolinks-transition'); // For backward compatibility
  
  // Mark this link as active immediately for visual feedback
  document.querySelectorAll('.sidebar-post-link').forEach(link => {
    link.classList.remove('active-post');
  });
  this.classList.add('active-post');
  
  // Verificar si es el enlace activo
  const currentPath = window.location.pathname;
  const linkPath = this.getAttribute('href');
  const isSamePage = (currentPath === linkPath);
  
  // Si es el mismo enlace activo, prevenir navegación
  if (isSamePage && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
    e.preventDefault();
    return false;
  }
  
  // IMPORTANTE: Forzar a Turbo a tratar todos los enlaces como nuevos
  this.setAttribute('data-turbo-action', 'replace');
  this.setAttribute('data-turbolinks-action', 'replace'); // For backward compatibility
  
  // Guardar posición de scroll al hacer clic en un enlace
  saveSidebarScroll();
  
  // Activar preservación de scroll en el gestor de Turbolinks/Turbo
  if (window.turbolinksScrollManager) {
    window.turbolinksScrollManager.save();
    window.turbolinksScrollManager.enable();
  }
}

// Función para actualizar el enlace activo
function updateActiveLink() {
  const currentPath = window.location.pathname;
  
  // Quitar clase activa de todos los enlaces primero
  document.querySelectorAll('.sidebar-post-link').forEach(link => {
    link.classList.remove('active-post');
  });
  
  // Normalizar la ruta actual (eliminar trailing slash si existe)
  const normalizedCurrentPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
  
  // Buscar coincidencia exacta
  let activeLink = null;
  document.querySelectorAll('.sidebar-post-link').forEach(link => {
    const href = link.getAttribute('href');
    const normalizedHref = href && href.endsWith('/') ? href.slice(0, -1) : href;
    
    if (normalizedHref === normalizedCurrentPath) {
      activeLink = link;
      link.classList.add('active-post');
      
      // Expandir la categoría que contiene el enlace activo
      const categoryItem = link.closest('.category-item');
      if (categoryItem) {
        categoryItem.classList.add('category-expanded');
      }
    }
  });
  
  // Si no se encontró coincidencia exacta, buscar coincidencia parcial
  if (!activeLink) {
    document.querySelectorAll('.sidebar-post-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.length > 1 && normalizedCurrentPath.includes(href)) {
        link.classList.add('active-post');
        
        // Expandir la categoría que contiene el enlace activo
        const categoryItem = link.closest('.category-item');
        if (categoryItem) {
          categoryItem.classList.add('category-expanded');
        }
      }
    });
  }
  
  // Guardar estado de categorías expandidas
  saveExpandedCategoriesState();
  
  // Guardar el enlace activo en el estado global
  if (activeLink) {
    window.sidebarState.activeLink = activeLink.getAttribute('href');
  } else {
    window.sidebarState.activeLink = null;
  }
}


if (typeof Turbo !== 'undefined') {

  // Antes de la visita - guardar estado
  document.addEventListener('turbo:before-visit', (event) => {
    // Guardar estado actual
    saveSidebarScroll();
    saveExpandedCategoriesState();
    
    // Guardar la URL de destino para comparar después
    window.sidebarState.lastVisitedUrl = event.detail.url;
    
    // Añadir clase de transición
    document.documentElement.classList.add('turbo-transition');
    
    // Guardar posición de scroll exacta
    const sidebarContent = document.querySelector('.sidebar-content');
    if (sidebarContent) {
      const scrollPos = sidebarContent.scrollTop;
      window.sidebarState.scrollPosition = scrollPos;
      sessionStorage.setItem('sidebarScrollPos', scrollPos.toString());
      
      // Añadir atributos de datos para preservar
      sidebarContent.setAttribute('data-scroll-preserved', 'true');
      sidebarContent.setAttribute('data-scroll-position', scrollPos);
    }
  });



  // Add CSS class for Turbo transitions
// Add CSS class for Turbo transitions
// document.addEventListener('DOMContentLoaded', () => {
//   // Add CSS for Turbo transitions
//   const style = document.createElement('style');
//   style.textContent = `
//     .turbo-transition .site-content,
//     .turbolinks-transition .site-content {
//       opacity: 0.7;
//       transition: opacity 0.2s ease;
//     }
    
//     .turbo-progress-bar {
//       background-color: #4CAF50;
//       height: 3px;
//     }
    
//     .sidebar-content {
//       transition: opacity 0.15s ease-in;
//     }
    
//     /* Prevent scroll flash */
//     .turbo-visit .sidebar-content,
//     .turbolinks-visit .sidebar-content {
//       opacity: 0;
//     }
//   `;
//   document.head.appendChild(style);
// });

// Modify the turbo:before-render event to preserve the sidebar completely
document.addEventListener('turbo:before-render', (event) => {
  // Preserve the sidebar element if possible
  const sidebarContainer = document.getElementById('dynamic-sidebar-categories');
  const sidebarContent = document.querySelector('.sidebar-content');
  
  if (sidebarContainer && window.sidebarState.isInitialized) {
    const newBody = event.detail.newBody;
    const newSidebarContainer = newBody.querySelector('#dynamic-sidebar-categories');
    const newSidebarContent = newBody.querySelector('.sidebar-content');
    
    // Clone current sidebar state to preserve everything including scroll
    if (newSidebarContainer && sidebarContainer) {
      newSidebarContainer.parentNode.replaceChild(
        sidebarContainer.cloneNode(true),
        newSidebarContainer
      );
    }
    
    // Also preserve the entire sidebar-content element to maintain scroll
    if (newSidebarContent && sidebarContent) {
      // Store the scroll position as a data attribute
      const scrollPos = window.sidebarState.scrollPosition;
      newSidebarContent.setAttribute('data-scroll-position', scrollPos);
      newSidebarContent.setAttribute('data-scroll-preserved', 'true');
    }
  }
});
  
// Modify the turbo:render event to apply scroll position immediately
document.addEventListener('turbo:render', () => {
  // Clear any existing loading timeout
  if (window.sidebarLoadingTimeout) {
    clearTimeout(window.sidebarLoadingTimeout);
  }
  
  // Hide loading indicator immediately
  hideLoadingIndicator();
  
  // Apply scroll position immediately before any other operations
  const sidebarContent = document.querySelector('.sidebar-content');
  if (sidebarContent) {
    // Get the scroll position from various sources
    let scrollPos = window.sidebarState.scrollPosition;
    
    if (!scrollPos) {
      const savedScrollPos = sessionStorage.getItem('sidebarScrollPos');
      if (savedScrollPos) {
        scrollPos = parseInt(savedScrollPos, 10);
      }
    }
    
    if (scrollPos && scrollPos > 0) {
      // Apply scroll immediately without animations
      sidebarContent.style.scrollBehavior = 'auto';
      sidebarContent.scrollTop = scrollPos;
    }
  }
  
  // Initialize components after scroll is applied
  requestAnimationFrame(() => {
    initSidebarComponents();
    document.documentElement.classList.remove('turbo-transition');
  });
});
  
  // Después de cargar - actualizar sidebar
  document.addEventListener('turbo:load', () => {
    // Limpiar timeouts y ocultar indicadores
    if (window.sidebarLoadingTimeout) {
      clearTimeout(window.sidebarLoadingTimeout);
    }
    hideLoadingIndicator();
    
    const sidebarContainer = document.getElementById('dynamic-sidebar-categories');
    
    // Si la sidebar no está inicializada o está vacía, restaurarla
    if (sidebarContainer && (!sidebarContainer.innerHTML.trim() || !window.sidebarState.isInitialized)) {
      console.log('[Sidebar] Restaurando desde estado al navegar con Turbo');
      if (window.sidebarState.content) {
        sidebarContainer.innerHTML = window.sidebarState.content;
        makeSidebarVisible();
        initSidebarComponents();
      } else {
        window.initSidebar();
      }
    } else {
      console.log('[Sidebar] Sidebar persistente con Turbo');
      makeSidebarVisible(); // Asegurar que la sidebar sea visible
      
      // Forzar actualización del enlace activo
      updateActiveLink();
      
      // Restaurar scroll si es necesario
      const sidebarContent = document.querySelector('.sidebar-content');
      if (sidebarContent && window.sidebarState.scrollPosition > 0) {
        sidebarContent.style.scrollBehavior = 'auto';
        sidebarContent.scrollTop = window.sidebarState.scrollPosition;
        
        // Restaurar comportamiento de scroll suave después
        setTimeout(() => {
          sidebarContent.style.scrollBehavior = '';
        }, 100);
      }
    }
    
    // Quitar clase de transición
    document.documentElement.classList.remove('turbo-transition');
  });

    // Handle Turbo errors
    document.addEventListener('turbo:visit-error', () => {
      // Hide loading indicator on error
      hideLoadingIndicator();
      
      // Clear any existing loading timeout
      if (window.sidebarLoadingTimeout) {
        clearTimeout(window.sidebarLoadingTimeout);
      }
      
      // Try to initialize sidebar if needed
      const sidebarContainer = document.getElementById('dynamic-sidebar-categories');
      if (sidebarContainer && (!sidebarContainer.innerHTML.trim() || !window.sidebarState.isInitialized)) {
        if (window.sidebarState.content) {
          sidebarContainer.innerHTML = window.sidebarState.content;
          makeSidebarVisible();
          initSidebarComponents();
        } else {
          window.initSidebar();
        }
      }
    });

    // Add a fallback initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // If neither Turbo nor Turbolinks have initialized the sidebar after a short delay,
  // initialize it manually
  setTimeout(() => {
    const sidebarContainer = document.getElementById('dynamic-sidebar-categories');
    if (sidebarContainer && (!sidebarContainer.innerHTML.trim() || !window.sidebarState.isInitialized)) {
      console.log('[Sidebar] Inicialización fallback en DOMContentLoaded');
      window.initSidebar();
    }
  }, 500);
});

document.addEventListener('click', function(e) {
  // Verificar si es un enlace a un post
  const target = e.target.closest('a');
  if (!target) return;
  
  // Ignorar enlaces que no son a posts o que ya tienen manejadores específicos
  if (target.classList.contains('sidebar-post-link') || 
      target.classList.contains('category-filter-link') || 
      target.classList.contains('tag-filter-link') ||
      !target.getAttribute('href') ||
      target.getAttribute('href').startsWith('javascript:') ||
      target.getAttribute('href').startsWith('#')) {
    return;
  }
  
  // Verificar si es un enlace interno a un post
  const href = target.getAttribute('href');
  if (href && (href.includes('/posts/') || href.includes('/blog/') || href.match(/\/\d{4}\/\d{2}\/\d{2}\//))) {
    // Añadir atributos para Turbo
    target.setAttribute('data-turbo-action', 'replace');
    target.setAttribute('data-turbo-preserve-scroll', 'true');
    
    // Guardar estado actual para que la sidebar pueda actualizarse correctamente
    saveSidebarScroll();
    saveExpandedCategoriesState();
    
    // Añadir clase de transición
    document.documentElement.classList.add('turbo-transition');
  }
});
}
