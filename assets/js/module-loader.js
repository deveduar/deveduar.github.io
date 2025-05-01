/**
 * Module Loader
 * Utility for dynamically loading ES6 modules in the correct order
 */
(function() {
    // Store loaded modules to prevent duplicate loading
    window.loadedModules = window.loadedModules || {};
    
    /**
     * Load a set of modules and then a main script that depends on them
     * @param {Array} moduleScripts - Array of module paths to load
     * @param {String} mainScript - Path to the main script that depends on the modules
     * @param {Function} initFunction - Name of the initialization function to call
     */
    window.loadModules = function(moduleScripts, mainScript, initFunction) {
      // Check if main script is already loaded
      if (document.querySelector(`script[src*="${mainScript.split('/').pop()}"]`)) {
        console.log(`${mainScript} already loaded`);
        return;
      }
      
      console.log(`Loading modules for ${mainScript}`);
      
      // Filter out already loaded modules
      const modulesToLoad = moduleScripts.filter(src => !window.loadedModules[src]);
      
      // If all modules are already loaded, just load the main script
      if (modulesToLoad.length === 0) {
        loadMainScript();
        return;
      }
      
      // Load all required modules first
      Promise.all(modulesToLoad.map(src => {
        return new Promise((resolve, reject) => {
          // Skip if already loaded
          if (window.loadedModules[src]) {
            resolve();
            return;
          }
          
          const script = document.createElement('script');
          script.type = 'module';
          script.src = src;
          script.onload = function() {
            window.loadedModules[src] = true;
            resolve();
          };
          script.onerror = function(e) {
            console.error(`Error loading module: ${src}`, e);
            reject(e);
          };
          document.body.appendChild(script);
        });
      }))
      .then(loadMainScript)
      .catch(error => {
        console.error('Error loading modules:', error);
      });
      
      // Function to load the main script after modules are loaded
      function loadMainScript() {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = mainScript;
        script.onload = function() {
          console.log(`${mainScript} loaded successfully`);
          // Call initialization function if provided
          if (initFunction && typeof window[initFunction] === 'function') {
            setTimeout(() => window[initFunction](), 100);
          }
        };
        script.onerror = function(e) {
          console.error(`Error loading main script: ${mainScript}`, e);
        };
        document.body.appendChild(script);
      }
    };
    
    /**
     * Check if we're on a specific page and load modules if needed
     * @param {String} selector - CSS selector to check if we're on the right page
     * @param {Array} modules - Array of module paths to load
     * @param {String} mainScript - Path to the main script
     * @param {String} initFunction - Name of the initialization function
     */
    window.loadModulesForPage = function(selector, modules, mainScript, initFunction) {
      if (document.querySelector(selector)) {
        window.loadModules(modules, mainScript, initFunction);
      }
    };
  })();