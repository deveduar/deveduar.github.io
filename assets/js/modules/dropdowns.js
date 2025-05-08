// _includes/js/modules/dropdowns.js
export const Dropdowns = (() => {
  // Mantener un registro de los dropdowns inicializados
  let initializedDropdowns = [];
  // Store event handlers to properly remove them
  const eventHandlers = new Map();
  
  const initDropdown = (button, content, selectedSpan) => {
    if (!button || !content) {
      console.warn('Missing button or content for dropdown initialization');
      return;
    }
    
    // Generate a unique ID for this dropdown if it doesn't have one
    const dropdownId = button.dataset.dropdownId || `dropdown-${Math.random().toString(36).substr(2, 9)}`;
    button.dataset.dropdownId = dropdownId;
    
    // Clean up previous event handlers if this dropdown was already initialized
    if (initializedDropdowns.includes(dropdownId)) {
      console.log(`Dropdown ${dropdownId} already initialized, cleaning up...`);
      cleanupDropdownEvents(dropdownId);
    } else {
      initializedDropdowns.push(dropdownId);
    }
    
    // Create button click handler
    const handleButtonClick = (e) => {
      if (e.target === button || button.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        content.classList.toggle('show');
        console.log(`Dropdown ${dropdownId} toggled`);
      }
    };
    
    // Create outside click handler
    const handleOutsideClick = (event) => {
      if (!event.target.closest(`[data-dropdown-id="${dropdownId}"]`) && 
          !event.target.closest('.dropdown-content')) {
        content.classList.remove('show');
      }
    };
    
    // Store handlers for future cleanup
    eventHandlers.set(dropdownId, {
      button: handleButtonClick,
      document: handleOutsideClick
    });
    
    // Add event listeners
    button.addEventListener('click', handleButtonClick);
    document.addEventListener('click', handleOutsideClick);
    
    console.log(`Dropdown ${dropdownId} initialized successfully`);
  };

  // Function to clean up event handlers for a specific dropdown
  const cleanupDropdownEvents = (dropdownId) => {
    const handlers = eventHandlers.get(dropdownId);
    if (!handlers) return;
    
    const button = document.querySelector(`[data-dropdown-id="${dropdownId}"]`);
    if (button && handlers.button) {
      button.removeEventListener('click', handlers.button);
    }
    
    if (handlers.document) {
      document.removeEventListener('click', handlers.document);
    }
    
    eventHandlers.delete(dropdownId);
    console.log(`Cleaned up event handlers for dropdown ${dropdownId}`);
  };

  const updateDropdownText = (selectedSpan, filterType, currentFilter) => {
    if (!selectedSpan) return;
  
    if (currentFilter === 'all') {
      // Fix the pluralization for "category" -> "categories"
      if (filterType === 'category') {
        selectedSpan.textContent = 'All Categories';
      } else {
        selectedSpan.textContent = `All ${filterType.charAt(0).toUpperCase() + filterType.slice(1)}s`;
      }
    } else {
      // Buscar el filtro activo de forma case-insensitive
      const currentFilterLower = currentFilter.toLowerCase();
      
      // Mejorar la búsqueda para manejar espacios correctamente
      const activeFilter = Array.from(document.querySelectorAll(`.${filterType}-filter`))
        .find(el => {
          const dataValue = (el.dataset[filterType] || '').toLowerCase();
          // Comparación exacta para manejar correctamente los espacios
          return dataValue === currentFilterLower;
        });
        
      if (activeFilter) {
        selectedSpan.textContent = activeFilter.textContent.replace(/\(\d+\)/, '').trim();
      } else {
        // Si no encontramos el filtro en los dropdowns, buscar en los enlaces de filtro
        const activeFilterLink = Array.from(document.querySelectorAll(`.${filterType}-filter-link`))
          .find(el => {
            const dataValue = (el.dataset.filter || '').toLowerCase();
            return dataValue === currentFilterLower;
          });
          
        if (activeFilterLink) {
          selectedSpan.textContent = activeFilterLink.textContent.replace(/^#/, '').trim();
        } else {
          // Si no encontramos el filtro, usar el valor directamente con la primera letra en mayúscula
          const words = currentFilter.split(' ');
          const capitalizedWords = words.map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          );
          selectedSpan.textContent = capitalizedWords.join(' ');
        }
      }
    }
    
    console.log(`Dropdown text updated for ${filterType}: "${selectedSpan.textContent}"`);
  };
  
  // Method to reinitialize all dropdowns
  const reinitializeAllDropdowns = () => {
    console.log('Reinitializing all dropdowns...');
    
    // Clean up all existing event handlers
    initializedDropdowns.forEach(id => {
      cleanupDropdownEvents(id);
    });
    
    // Reset the initialized dropdowns array
    initializedDropdowns = [];
    
    // Find and initialize all dropdowns on the page
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    console.log(`Found ${dropdownButtons.length} dropdown buttons to initialize`);
    
    dropdownButtons.forEach(button => {
      const content = button.nextElementSibling;
      if (content && content.classList.contains('dropdown-content')) {
        const selectedSpan = button.querySelector('span');
        initDropdown(button, content, selectedSpan);
      }
    });
  };

  return {
    initDropdown,
    updateDropdownText,
    reinitializeAllDropdowns,
    cleanupDropdownEvents
  };
})();