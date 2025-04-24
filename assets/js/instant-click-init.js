// Inicialización centralizada de InstantClick
(function() {
  // Verificar si InstantClick ya está inicializado
  if (typeof InstantClick !== 'undefined' && !window.instantClickInitialized) {
    // Configurar opciones globales de InstantClick aquí si es necesario
    
    // Inicializar InstantClick
    InstantClick.init();
    
    // Marcar como inicializado para evitar inicializaciones múltiples
    window.instantClickInitialized = true;
    
    console.log('InstantClick initialized centrally');
  }
})();