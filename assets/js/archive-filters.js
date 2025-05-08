import { Filters } from './modules/filters.js';
import { Sorting } from './modules/sorting.js';
import { Rendering } from './modules/rendering.js';
import { Dropdowns } from './modules/dropdowns.js';
import { URLManager } from './modules/urlManager.js';
import { Search } from './modules/search.js';

// In the initArchiveFilters function, add:
const initArchiveFilters = () => {
  console.log('Inicializando filtros de archivo');
  const archivePage = document.querySelector('.archive-page');
  if (!archivePage) return console.log('No se encontró la página de archivo');

  const DOM = getDOMElements();
  const isFirstVisit = isFirstLoad();

  initializeDropdowns(DOM);
  initializeSearch(DOM);
  initializeEventListeners(DOM);

  // Configurar lazy loading para posts adicionales
  if (typeof Rendering !== 'undefined' && Rendering.setupLazyLoading) {
    Rendering.setupLazyLoading();
  }

  if (isFirstVisit) resetAllFilters(DOM);
  else applyURLFilters(DOM);

  // Aplicar filtros iniciales - aumentamos el tiempo para asegurar que todo esté listo
  setTimeout(() => applyFilters(DOM), 100);
};

function getDOMElements() {
  return {
    postItems: document.querySelectorAll('.archive-post-item'),
    categoryFilters: document.querySelectorAll('.category-filter'),
    tagFilters: document.querySelectorAll('.tag-filter'),
    categoryFilterLinks: document.querySelectorAll('.category-filter-link'),
    tagFilterLinks: document.querySelectorAll('.tag-filter-link'),
    sortButtons: document.querySelectorAll('.sort-button'),
    searchInput: document.getElementById('archive-search'),
    clearSearchBtn: document.getElementById('clear-search'),
    filterContainer: document.querySelector('.archive-filter-container'),
    selectedCategorySpan: document.querySelector('.selected-category'),
    selectedTagSpan: document.querySelector('.selected-tag'),
    categoryDropdownButton: document.querySelector('.categories-dropdown-container .dropdown-button'),
    categoryDropdownContent: document.querySelector('.categories-dropdown-container .dropdown-content'),
    tagDropdownButton: document.querySelector('.tags-dropdown-container .dropdown-button'),
    tagDropdownContent: document.querySelector('.tags-dropdown-container .dropdown-content'),
    activeCategoryFilter: document.querySelector('.active-category-filter'),
    activeTagFilter: document.querySelector('.active-tag-filter'),
    activeCategoryValue: document.querySelector('.active-category-filter .filter-value'),
    activeTagValue: document.querySelector('.active-tag-filter .filter-value'),
    clearCategoryFilter: document.querySelector('.clear-filter[data-filter-type="category"]'),
    clearTagFilter: document.querySelector('.clear-filter[data-filter-type="tag"]'),
    resetFiltersBtn: document.querySelector('.reset-filters-btn'),
    noResultsMessage: document.querySelector('.no-results-message'),
    noResultsResetBtn: document.querySelector('.no-results-message .reset-filters-btn'),
    mainPostsContainer: document.getElementById('main-posts-list'),
    additionalPostsMarker: document.getElementById('additional-posts-marker')
  };
}

function isFirstLoad() {
  const params = new URLSearchParams(window.location.search);
  
  // Si hay parámetros en la URL, no es primera carga
  if (params.has('category') || params.has('tag') || params.has('sort') || params.has('search') || params.has('direction')) {
    return false;
  }
  
  // Si es una recarga de página, tampoco es primera carga
  if (window.performance) {
    const navEntries = window.performance.getEntriesByType('navigation');
    if (navEntries.length > 0 && navEntries[0].type === 'reload') {
      console.log('Recarga detectada en isFirstLoad, aplicando filtros de URL');
      return false;
    }
  }
  
  return true;
}

function initializeDropdowns({ categoryDropdownButton, categoryDropdownContent, selectedCategorySpan, tagDropdownButton, tagDropdownContent, selectedTagSpan }) {
  console.log('Inicializando dropdowns...');
  if (categoryDropdownButton && categoryDropdownContent) {
    console.log('Inicializando dropdown de categorías');
    Dropdowns.initDropdown(categoryDropdownButton, categoryDropdownContent, selectedCategorySpan);
  } else {
    console.log('No se encontraron elementos para el dropdown de categorías');
  }
  
  if (tagDropdownButton && tagDropdownContent) {
    console.log('Inicializando dropdown de etiquetas');
    Dropdowns.initDropdown(tagDropdownButton, tagDropdownContent, selectedTagSpan);
  } else {
    console.log('No se encontraron elementos para el dropdown de etiquetas');
  }
}

function initializeSearch({ searchInput, clearSearchBtn }) {
  if (searchInput && clearSearchBtn) {
    console.log('Inicializando búsqueda');
    Search.initSearchInput(searchInput, clearSearchBtn);
    searchInput.addEventListener('input', () => {
      clearTimeout(searchInput.debounceTimer);
      searchInput.debounceTimer = setTimeout(() => {
        applyFilters(getDOMElements());
      }, 300);
    });
    
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyFilters(getDOMElements());
      }
    });
    
    clearSearchBtn.addEventListener('click', () => {
      applyFilters(getDOMElements());
    });
  } else {
    console.log('No se encontraron elementos para la búsqueda');
  }
}

function resetAllFilters({ searchInput, clearSearchBtn }) {
  console.log('No hay parámetros de filtro en la URL, reiniciando filtros');
  Filters.resetFilters();
  Sorting.setSortMethod('date', 'desc');
  Search.setSearchQuery('');
  
  // Limpiar el campo de búsqueda si existe
  if (searchInput) {
    searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
  }
}

function applyURLFilters({ searchInput, clearSearchBtn, sortButtons }) {
  const params = new URLSearchParams(window.location.search);
  
  // Si hay parámetros, aplicarlos - Asegurarse de decodificar correctamente los parámetros
  let categoryParam = params.get('category') || 'all';
  let tagParam = params.get('tag') || 'all';
  
  // Decodificar correctamente los parámetros para manejar espacios y caracteres especiales
  if (categoryParam !== 'all') {
    try {
      // Primero decodificar con decodeURIComponent para manejar %20
      categoryParam = decodeURIComponent(categoryParam);
      // Luego reemplazar cualquier + que pueda quedar
      categoryParam = categoryParam.replace(/\+/g, ' ');
      console.log(`Categoría decodificada de URL: "${categoryParam}"`);
    } catch (e) {
      console.warn('Error al decodificar categoría:', e);
      // Si falla, intentar solo reemplazar +
      categoryParam = categoryParam.replace(/\+/g, ' ');
    }
  }
  
  if (tagParam !== 'all') {
    try {
      // Primero decodificar con decodeURIComponent para manejar %20
      tagParam = decodeURIComponent(tagParam);
      // Luego reemplazar cualquier + que pueda quedar
      tagParam = tagParam.replace(/\+/g, ' ');
      console.log(`Tag decodificado de URL: "${tagParam}"`);
    } catch (e) {
      console.warn('Error al decodificar tag:', e);
      // Si falla, intentar solo reemplazar +
      tagParam = tagParam.replace(/\+/g, ' ');
    }
  }
  
  Filters.setCategoryFilter(categoryParam);
  Filters.setTagFilter(tagParam);
  
  // Mejorar la aplicación de parámetros de ordenación
  const sortMethod = params.get('sort') || 'date';
  const sortDirection = params.get('direction') || 'desc';
  
  console.log(`Aplicando ordenación desde URL: método=${sortMethod}, dirección=${sortDirection}`);
  Sorting.setSortMethod(sortMethod, sortDirection);
  
  // Actualizar visualmente los botones de ordenación - FORZAR ACTUALIZACIÓN
  Sorting.updateActiveSortButton(sortButtons, sortMethod, sortDirection);
  
  // Set initial search query from URL if present
  if (params.has('search')) {
    let searchQuery = params.get('search');
    try {
      searchQuery = decodeURIComponent(searchQuery);
      searchQuery = searchQuery.replace(/\+/g, ' ');
    } catch (e) {
      console.warn('Error al decodificar búsqueda:', e);
      searchQuery = searchQuery.replace(/\+/g, ' ');
    }
    
    Search.setSearchQuery(searchQuery);
    if (searchInput) {
      searchInput.value = searchQuery;
      if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    }
  } else {
    // Si no hay parámetro de búsqueda, limpiar
    Search.setSearchQuery('');
    if (searchInput) {
      searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    }
  }
}


function initializeEventListeners(DOM) {
  initFilterListeners(DOM.categoryFilters, 'category', DOM.categoryDropdownContent);
  initFilterListeners(DOM.tagFilters, 'tag', DOM.tagDropdownContent);
  initLinkListeners(DOM.categoryFilterLinks, 'category');
  initLinkListeners(DOM.tagFilterLinks, 'tag');
  initSortButtons(DOM.sortButtons);
  initClearFilters(DOM);
  initNoResultsReset(DOM);
}

function initFilterListeners(filters, type, dropdownContent) {
  filters.forEach(filter => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Asegurarse de que el valor del filtro se obtenga correctamente, incluso con espacios
      const value = filter.dataset[type].toLowerCase(); // Ensure lowercase for consistency
      const currentValue = Filters.getCurrentFilters()[`current${capitalize(type)}Filter`];

      // Cerrar dropdown si está abierto
      if (dropdownContent && dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }

      // Si es el mismo filtro, no hacer nada más
      if (value === currentValue) return;

      console.log(`Aplicando filtro de ${type}: "${value}"`);
      Filters[`set${capitalize(type)}Filter`](value);
      applyFilters(getDOMElements());
    });
  });
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function initLinkListeners(links, type) {
  links?.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Asegurarse de que el valor del filtro se obtenga correctamente
      const value = link.dataset.filter.toLowerCase();
      const currentValue = Filters.getCurrentFilters()[`current${capitalize(type)}Filter`].toLowerCase();
      
      // Si es el mismo filtro, no hacer nada más
      if (value === currentValue) return;
      
      console.log(`Aplicando filtro de ${type} desde enlace: "${value}"`);
      Filters[`set${capitalize(type)}Filter`](value);
      applyFilters(getDOMElements());
    });
  });
}

function initSortButtons(buttons) {
  buttons.forEach(button => {
    const newButton = button.cloneNode(true);
    if (button.parentNode) {
      button.parentNode.replaceChild(newButton, button);
    }

    newButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Click en botón de ordenación');
      
      const sortMethod = newButton.dataset.sort;
      const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
      
      console.log(`Botón clickeado: ${sortMethod}, Estado actual: ${currentSortMethod}, ${currentSortDirection}`);
      
      // Si clickeamos el mismo método de ordenación, invertir la dirección
      if (sortMethod === currentSortMethod) {
        const newDirection = currentSortDirection === 'desc' ? 'asc' : 'desc';
        console.log(`Cambiando dirección a: ${newDirection}`);
        Sorting.setSortMethod(sortMethod, newDirection);
      } else {
        // Nuevo método de ordenación, usar la dirección predeterminada del botón
        const direction = newButton.dataset.direction || 'desc';
        console.log(`Cambiando método a: ${sortMethod}, dirección: ${direction}`);
        Sorting.setSortMethod(sortMethod, direction);
      }
      
      applyFilters(getDOMElements());
    });
  });
}

function initClearFilters({ clearCategoryFilter, clearTagFilter, resetFiltersBtn, searchInput, clearSearchBtn }) {
  clearCategoryFilter?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (Filters.getCurrentFilters().currentCategoryFilter === 'all') return;
    
    Filters.setCategoryFilter('all');
    applyFilters(getDOMElements());
  });
  
  clearTagFilter?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (Filters.getCurrentFilters().currentTagFilter === 'all') return;
    
    Filters.setTagFilter('all');
    applyFilters(getDOMElements());
  });

  resetFiltersBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    
    const { currentCategoryFilter, currentTagFilter } = Filters.getCurrentFilters();
    const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
    const currentSearchQuery = Search.getCurrentSearchQuery();
    
    if (currentCategoryFilter === 'all' && currentTagFilter === 'all' && 
        currentSortMethod === 'date' && currentSortDirection === 'desc' && 
        !currentSearchQuery) return;
    
    Search.resetSearch(searchInput, clearSearchBtn);
    Filters.resetFilters();
    Sorting.setSortMethod('date', 'desc');
    applyFilters(getDOMElements());
  });
}

function initNoResultsReset({ noResultsResetBtn, searchInput, clearSearchBtn }) {
  noResultsResetBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    
    Search.resetSearch(searchInput, clearSearchBtn);
    Filters.resetFilters();
    Sorting.setSortMethod('date', 'desc');
    applyFilters(getDOMElements());
  });
}

function applyFilters(DOM) {
  console.log('Aplicando filtros...');
  if (window.isProcessing) return;
  window.isProcessing = true;

  if (DOM.filterContainer) DOM.filterContainer.classList.add('loading');

  setTimeout(() => {
    const { currentCategoryFilter, currentTagFilter } = Filters.getCurrentFilters();
    const { currentSortMethod, currentSortDirection } = Sorting.getCurrentSort();
    const currentSearchQuery = Search.getCurrentSearchQuery();

    console.log(`Aplicando filtros con: categoría="${currentCategoryFilter}", tag="${currentTagFilter}", ordenación=${currentSortMethod}, dirección=${currentSortDirection}, búsqueda="${currentSearchQuery}"`);

    // Obtener todos los posts del contenedor unificado
    const allPostItems = Array.from(DOM.mainPostsContainer?.querySelectorAll('.archive-post-item') || []);
    
    const originalPosts = allPostItems.filter(p => p.dataset.originalPost === 'true');
    const additionalPosts = allPostItems.filter(p => p.dataset.additionalPost === 'true');
    
    console.log(`Aplicando filtros a ${allPostItems.length} posts (${originalPosts.length} originales, ${additionalPosts.length} adicionales)`);

    // Filtrar por taxonomía - Mejorar manejo de espacios y caracteres especiales
    const filteredByTaxonomy = allPostItems.filter(item => {
      // Convertir a minúsculas para comparación case-insensitive
      const categoryFilterLower = currentCategoryFilter.toLowerCase();
      const tagFilterLower = currentTagFilter.toLowerCase();
      
      // Obtener categorías y tags del post
      const postCategories = (item.dataset.categories || '').toLowerCase();
      const postTags = (item.dataset.tags || '').toLowerCase();
      
      // Debug para ver qué valores estamos comparando
      if (categoryFilterLower !== 'all' || tagFilterLower !== 'all') {
        console.log(`Comparando: 
          Post: ${item.querySelector('.post-link')?.textContent || 'Sin título'}
          Categorías del post: "${postCategories}"
          Filtro de categoría: "${categoryFilterLower}"
          Tags del post: "${postTags}"
          Filtro de tag: "${tagFilterLower}"
          Es post adicional: ${item.dataset.additionalPost === 'true'}`);
      }
      
      // Verificar si coincide con el filtro de categoría
      let matchesCategory = categoryFilterLower === 'all';
      if (!matchesCategory) {
        // Para manejar categorías con espacios o caracteres especiales
        if (categoryFilterLower.includes(' ') || categoryFilterLower.includes('/')) {
          // Método 1: Buscar la categoría exacta en el string completo
          const regex = new RegExp(`\\b${escapeRegExp(categoryFilterLower)}\\b`, 'i');
          const matchRegex = regex.test(postCategories);
          
          // Método 2: Verificar si está en el array de categorías
          let matchArray = false;
          try {
            // Intentar obtener el array de categorías del debug data
            if (item.dataset.categoriesDebug) {
              const categoriesArray = JSON.parse(item.dataset.categoriesDebug);
              matchArray = categoriesArray.some(cat => cat.toLowerCase() === categoryFilterLower);
            }
          } catch (e) {
            console.warn('Error al parsear categorías debug:', e);
          }
          
          // Método 3: Dividir por espacios y buscar coincidencia exacta
          const categoriesArray = postCategories.split(' ').filter(Boolean);
          const matchSplit = categoriesArray.some(cat => cat === categoryFilterLower);
          
          // Combinar resultados
          matchesCategory = matchRegex || matchArray || matchSplit;
          
          if (matchesCategory) {
            console.log(`Coincidencia de categoría encontrada para "${categoryFilterLower}" en post "${item.querySelector('.post-link')?.textContent || 'Sin título'}" - Regex: ${matchRegex}, Array: ${matchArray}, Split: ${matchSplit}`);
          }
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
          // Método 1: Buscar el tag exacto en el string completo
          const regex = new RegExp(`\\b${escapeRegExp(tagFilterLower)}\\b`, 'i');
          const matchRegex = regex.test(postTags);
          
          // Método 2: Verificar si está en el array de tags
          let matchArray = false;
          try {
            // Intentar obtener el array de tags del debug data
            if (item.dataset.tagsDebug) {
              const tagsArray = JSON.parse(item.dataset.tagsDebug);
              matchArray = tagsArray.some(tag => tag.toLowerCase() === tagFilterLower);
            }
          } catch (e) {
            console.warn('Error al parsear tags debug:', e);
          }
          
          // Método 3: Dividir por espacios y buscar coincidencia exacta
          const tagsArray = postTags.split(' ').filter(Boolean);
          const matchSplit = tagsArray.some(tag => tag === tagFilterLower);
          
          // Combinar resultados
          matchesTag = matchRegex || matchArray || matchSplit;
          
          if (matchesTag) {
            console.log(`Coincidencia de tag encontrada para "${tagFilterLower}" en post "${item.querySelector('.post-link')?.textContent || 'Sin título'}" - Regex: ${matchRegex}, Array: ${matchArray}, Split: ${matchSplit}`);
          }
        } else {
          // Para tags simples, dividir y buscar coincidencia exacta
          const tagsArray = postTags.split(' ').filter(Boolean);
          matchesTag = tagsArray.includes(tagFilterLower);
        }
      }
      
      return matchesCategory && matchesTag;
    });

    // Filtrar por búsqueda
    const filteredPosts = Search.filterPostsBySearch(filteredByTaxonomy, currentSearchQuery);
    
    // Ordenar posts
    console.log(`Ordenando ${filteredPosts.length} posts por ${currentSortMethod} en dirección ${currentSortDirection}`);
    const sortedPosts = Sorting.sortPosts(filteredPosts, currentSortMethod, currentSortDirection);

    console.log(`Después de filtrar: ${filteredPosts.length} posts, después de ordenar: ${sortedPosts.length} posts`);

    // Renderizar posts
    Rendering.renderPosts(sortedPosts);

    // Actualizaciones visuales
    Filters.updateActiveFiltersDisplay(
      DOM.activeCategoryFilter, 
      DOM.activeTagFilter, 
      DOM.activeCategoryValue, 
      DOM.activeTagValue, 
      currentCategoryFilter, 
      currentTagFilter
    );

    Dropdowns.updateDropdownText(DOM.selectedCategorySpan, 'category', currentCategoryFilter);
    Dropdowns.updateDropdownText(DOM.selectedTagSpan, 'tag', currentTagFilter);

    Sorting.updateActiveSortButton(DOM.sortButtons, currentSortMethod, currentSortDirection);

    URLManager.updateURL(currentCategoryFilter, currentTagFilter, currentSortMethod, currentSortDirection, currentSearchQuery);

    if (DOM.filterContainer) DOM.filterContainer.classList.remove('loading');
    window.isProcessing = false;
  }, 10);
}

// Función auxiliar para escapar caracteres especiales en expresiones regulares
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}



window.loadAdditionalPosts = function() {
  console.log('Cargando posts adicionales...');
  const mainPostsContainer = document.getElementById('main-posts-list');
  const additionalPostsMarker = document.getElementById('additional-posts-marker');
  const loadingIndicator = document.getElementById('posts-loading-indicator');
  
  if (!mainPostsContainer || !additionalPostsMarker) {
    console.error('No se encontraron los elementos necesarios para cargar posts adicionales');
    return;
  }
  
  // Mostrar indicador de carga si existe
  if (loadingIndicator) loadingIndicator.style.display = 'block';
  
  // Verificar si ya hay posts adicionales cargados
  const existingAdditionalPosts = mainPostsContainer.querySelectorAll('.archive-post-item[data-additional-post="true"]');
  if (existingAdditionalPosts.length > 0) {
    console.log(`Los posts adicionales ya están cargados (${existingAdditionalPosts.length} posts)`);
    
    // Ocultar indicador de carga
    if (loadingIndicator) loadingIndicator.style.display = 'none';
    
    // Notificar al módulo de renderizado
    if (typeof Rendering !== 'undefined' && Rendering.setAdditionalPostsLoaded) {
      Rendering.setAdditionalPostsLoaded();
    }
    
    // Aplicar filtros actuales
    setTimeout(() => {
      if (typeof window.applyFilters === 'function') {
        window.applyFilters(getDOMElements());
      }
    }, 50);
    
    return;
  }
  
  // Insertar indicador de carga antes del marcador
  const loadingElement = document.createElement('div');
  loadingElement.className = 'loading-indicator';
  loadingElement.textContent = 'Cargando posts adicionales...';
  mainPostsContainer.insertBefore(loadingElement, additionalPostsMarker);
  
  // Recopilar URLs de posts ya mostrados para evitar duplicados
  const existingPostUrls = new Set();
  const existingPosts = mainPostsContainer.querySelectorAll('.archive-post-item[data-original-post="true"]');
  existingPosts.forEach(post => {
    const url = post.dataset.url || '';
    if (url) {
      existingPostUrls.add(url);
    }
  });
  
  console.log(`Detectados ${existingPostUrls.size} posts existentes para evitar duplicados`);
  
  // Intentar recuperar de sessionStorage primero
  try {
    const savedPosts = sessionStorage.getItem('additionalPosts');
    const timestamp = sessionStorage.getItem('additionalPostsTimestamp');
    const now = Date.now();
    const maxAge = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
    
    // Verificar si los posts guardados son recientes (menos de 24 horas)
    if (savedPosts && timestamp && (now - parseInt(timestamp)) < maxAge) {
      // Crear un elemento temporal para analizar el HTML guardado
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = savedPosts;
      
      // Filtrar posts duplicados
      const nonDuplicatePosts = Array.from(tempDiv.children).filter(post => {
        const link = post.querySelector('.post-link');
        return link && link.getAttribute('href') && !existingPostUrls.has(link.getAttribute('href'));
      });
      
      if (nonDuplicatePosts.length > 0) {
        // Eliminar el indicador de carga
        if (loadingElement && loadingElement.parentNode) {
          loadingElement.parentNode.removeChild(loadingElement);
        }
        
        // Añadir solo los posts no duplicados antes del marcador
        nonDuplicatePosts.forEach(post => {
          mainPostsContainer.insertBefore(post.cloneNode(true), additionalPostsMarker);
        });
        
        console.log(`Posts adicionales restaurados desde sessionStorage (${nonDuplicatePosts.length} posts no duplicados)`);
        
        // Ocultar indicador de carga
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        
        // Notificar al módulo de renderizado
        if (typeof Rendering !== 'undefined' && Rendering.setAdditionalPostsLoaded) {
          Rendering.setAdditionalPostsLoaded();
        }
        
        // Añadir event listeners a los nuevos enlaces
        const newCategoryLinks = mainPostsContainer.querySelectorAll('.archive-post-item[data-additional-post="true"] .category-filter-link');
        const newTagLinks = mainPostsContainer.querySelectorAll('.archive-post-item[data-additional-post="true"] .tag-filter-link');
        
        initLinkListeners(newCategoryLinks, 'category');
        initLinkListeners(newTagLinks, 'tag');
        
        // Aplicar filtros actuales
        setTimeout(() => {
          if (typeof window.applyFilters === 'function') {
            window.applyFilters(getDOMElements());
          }
        }, 50);
        
        return;
      } else {
        console.log('Todos los posts en sessionStorage son duplicados, cargando desde el servidor');
      }
    }
  } catch (e) {
    console.warn('Error al recuperar posts adicionales de sessionStorage:', e);
  }
  
  // Si no hay posts en sessionStorage o todos son duplicados, cargar desde el servidor
  console.log('Realizando fetch a /posts.json');
  fetch('/posts.json')
    .then(response => {
      console.log('Respuesta recibida:', response.status, response.statusText);
      if (!response.ok) {
        throw new Error(`Error al cargar posts adicionales: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(`Datos recibidos: ${data.posts ? data.posts.length : 0} posts`);
      
      if (!data || !data.posts || !Array.isArray(data.posts)) {
        throw new Error('Formato de datos inválido');
      }
      
      // Filtrar posts para eliminar duplicados
      const nonDuplicatePosts = data.posts.filter(post => !existingPostUrls.has(post.url));
      console.log(`Filtrando duplicados: ${data.posts.length} posts totales, ${nonDuplicatePosts.length} posts únicos`);
      
      // Eliminar el indicador de carga
      if (loadingElement && loadingElement.parentNode) {
        loadingElement.parentNode.removeChild(loadingElement);
      }
      
// Crear elementos HTML para cada post no duplicado
// Crear elementos HTML para cada post no duplicado
const postsHTML = nonDuplicatePosts.map(post => {
  // Asegurarse de que las categorías y tags sean arrays
  const categories = Array.isArray(post.categories) ? post.categories : [];
  const tags = Array.isArray(post.tags) ? post.tags : [];
  
  // Formatear la fecha correctamente para que coincida con el formato de Liquid
  let formattedDate = post.date || '';
  let displayDate = post.date_formatted || '';
  
  // Si tenemos una fecha pero no está en formato ISO, intentar convertirla
  if (formattedDate && !formattedDate.includes('T')) {
    try {
      // Convertir a formato ISO similar al que usa Liquid
      const dateObj = new Date(formattedDate);
      if (!isNaN(dateObj)) {
        formattedDate = dateObj.toISOString();
        // Si no tenemos date_formatted, crear uno con el mismo formato que Liquid
        if (!displayDate) {
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          displayDate = `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
        }
      }
    } catch (e) {
      console.warn('Error al formatear la fecha:', e);
    }
  }
  
  // IMPORTANTE: Cambiar cómo formateamos las categorías y tags para que coincidan exactamente con el formato de Liquid
  // En lugar de unir con espacios, vamos a usar el mismo formato que Jekyll
  const categoriesData = categories.map(cat => cat.toLowerCase()).join(' ');
  const tagsData = tags.map(tag => tag.toLowerCase()).join(' ');
  
  // Añadir atributos data adicionales para debugging
  const categoriesDebug = JSON.stringify(categories);
  const tagsDebug = JSON.stringify(tags);
  
  return `
    <div class="archive-post-item" 
         data-title="${post.title || ''}" 
         data-date="${formattedDate}" 
         data-categories="${categoriesData}" 
         data-tags="${tagsData}"
         data-categories-debug="${categoriesDebug.replace(/"/g, '&quot;')}"
         data-tags-debug="${tagsDebug.replace(/"/g, '&quot;')}"
         data-url="${post.url || ''}"
         data-additional-post="true">
      <div class="post-meta">
      <span> generado2</span>

        <span class="post-date" data-date="${formattedDate}">${displayDate}</span>
        <a class="post-link" href="${post.url || '#'}">${post.title || 'Sin título'}</a>
        
        <div class="post-taxonomies">
          ${categories.length > 0 ? `
            <div class="post-categories">
              ${categories.map(cat => 
                `<a href="javascript:void(0);" class="category-badge category-filter-link" data-filter="${cat.toLowerCase()}">${cat}</a>`
              ).join(' ')}
            </div>
          ` : ''}
          
          ${tags.length > 0 ? `
            <div class="post-tags">
              ${tags.map(tag => 
                `<a href="javascript:void(0);" class="tag-badge tag-filter-link" data-filter="${tag.toLowerCase()}">#${tag}</a>`
              ).join(' ')}
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}).join('');
      
      // Insertar los posts antes del marcador
      additionalPostsMarker.insertAdjacentHTML('beforebegin', postsHTML);
      console.log(`${nonDuplicatePosts.length} posts adicionales cargados y añadidos al DOM`);
      
      // Ocultar indicador de carga
      if (loadingIndicator) loadingIndicator.style.display = 'none';
      
      // Guardar en sessionStorage para futuras navegaciones
      try {
        sessionStorage.setItem('additionalPosts', postsHTML);
        sessionStorage.setItem('additionalPostsTimestamp', Date.now().toString());
      } catch (e) {
        console.warn('No se pudieron guardar los posts adicionales en sessionStorage:', e);
      }
      
      // Notificar al módulo de renderizado
      if (typeof Rendering !== 'undefined' && Rendering.setAdditionalPostsLoaded) {
        Rendering.setAdditionalPostsLoaded();
      }
      
      // Añadir event listeners a los nuevos enlaces de filtro
      const newCategoryLinks = mainPostsContainer.querySelectorAll('.archive-post-item[data-additional-post="true"] .category-filter-link');
      const newTagLinks = mainPostsContainer.querySelectorAll('.archive-post-item[data-additional-post="true"] .tag-filter-link');
      
      initLinkListeners(newCategoryLinks, 'category');
      initLinkListeners(newTagLinks, 'tag');
      
      // Aplicar filtros actuales
      setTimeout(() => {
        if (typeof window.applyFilters === 'function') {
          window.applyFilters(getDOMElements());
        }
      }, 50);
    })
    .catch(error => {
      console.error('Error al cargar posts adicionales:', error);
      
      // Eliminar el indicador de carga
      if (loadingElement && loadingElement.parentNode) {
        loadingElement.parentNode.removeChild(loadingElement);
      }
      
      // Insertar mensaje de error antes del marcador
      const errorHTML = '<div class="error-message">Error al cargar posts adicionales. <button class="retry-button">Reintentar</button></div>';
      additionalPostsMarker.insertAdjacentHTML('beforebegin', errorHTML);
      
      // Ocultar indicador de carga
      if (loadingIndicator) loadingIndicator.style.display = 'none';
      
      // Añadir event listener al botón de reintentar
      const retryButton = mainPostsContainer.querySelector('.error-message .retry-button');
      if (retryButton) {
        retryButton.addEventListener('click', () => {
          // Eliminar el mensaje de error
          const errorMessage = mainPostsContainer.querySelector('.error-message');
          if (errorMessage && errorMessage.parentNode) {
            errorMessage.parentNode.removeChild(errorMessage);
          }
          
          window.loadAdditionalPosts();
        });
      }
    });
};


// Exportar la función para que pueda ser llamada desde fuera
window.initArchiveFilters = initArchiveFilters;
window.applyFilters = () => applyFilters(getDOMElements());
export { initArchiveFilters };