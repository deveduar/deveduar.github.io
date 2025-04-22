document.addEventListener('DOMContentLoaded', function() {
  const categoryHeaders = document.querySelectorAll('.category-header');
  const currentPath = window.location.pathname;
  
  // Load previously expanded categories from localStorage
  const loadExpandedCategories = () => {
    try {
      const saved = localStorage.getItem('expandedCategories');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error loading expanded categories:', e);
      return [];
    }
  };
  
  // Save expanded categories to localStorage
  const saveExpandedCategories = (categories) => {
    try {
      localStorage.setItem('expandedCategories', JSON.stringify(categories));
    } catch (e) {
      console.error('Error saving expanded categories:', e);
    }
  };
  
  // Get expanded categories from localStorage
  let expandedCategories = loadExpandedCategories();
  
  // Apply expanded state to categories
  categoryHeaders.forEach(header => {
    const categoryItem = header.parentElement;
    const categoryName = header.querySelector('.category-name').textContent.trim();
    
    // Expand categories that were previously expanded
    if (expandedCategories.includes(categoryName)) {
      categoryItem.classList.add('category-expanded');
    }
    
    // Handle category toggle
    header.addEventListener('click', function(e) {
      const categoryName = this.querySelector('.category-name').textContent.trim();
      categoryItem.classList.toggle('category-expanded');
      
      // Update localStorage
      if (categoryItem.classList.contains('category-expanded')) {
        if (!expandedCategories.includes(categoryName)) {
          expandedCategories.push(categoryName);
        }
      } else {
        expandedCategories = expandedCategories.filter(name => name !== categoryName);
      }
      
      saveExpandedCategories(expandedCategories);
    });
  });
  
  // Prevent category collapse when clicking on links
  const categoryLinks = document.querySelectorAll('.category-posts a');
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    // Highlight active post
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active-post');
      // Expand the parent category if not already expanded
      const categoryItem = link.closest('.category-item');
      if (categoryItem) {
        const categoryName = categoryItem.querySelector('.category-name').textContent.trim();
        categoryItem.classList.add('category-expanded');
        
        // Add to expanded categories if not already there
        if (!expandedCategories.includes(categoryName)) {
          expandedCategories.push(categoryName);
          saveExpandedCategories(expandedCategories);
        }
      }
    }
  });
});