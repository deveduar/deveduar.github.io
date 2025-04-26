// Table of Contents functionality
function initTableOfContents() {
  // Get all headings in the post content
  const postContent = document.querySelector('.post-content');
  if (!postContent) return;
  
  // Get the main title (first H1)
  const mainTitle = postContent.querySelector('h1[data-main-title="true"]') || postContent.querySelector('h1');
  
  // Select headings but exclude "Tabla de Contenidos" heading
  const headings = Array.from(postContent.querySelectorAll('h2, h3')).filter(heading => {
    // Skip any heading with text "Tabla de Contenidos"
    return heading.textContent.trim() !== "Tabla de Contenidos";
  });
  
  if (headings.length === 0 && !mainTitle) {
    document.querySelectorAll('.table-of-contents').forEach(function(toc) {
      toc.style.display = 'none';
    });
    return;
  }
  
  // Process all TOC lists on the page
  const tocLists = document.querySelectorAll('.toc-list');
  if (tocLists.length === 0) return;
  
  // First, ensure all headings have IDs
  if (mainTitle && !mainTitle.id) {
    mainTitle.id = 'post-title';
  }
  
  headings.forEach(function(heading) {
    if (!heading.id) {
      const headingText = heading.textContent.trim();
      const headingId = headingText
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      
      heading.id = headingId;
    }
  });
  
  // Pre-process headings to identify which h2s have h3 children
  const h2WithChildren = new Map();
  let currentH2 = null;
  
  headings.forEach(function(heading) {
    if (heading.tagName.toLowerCase() === 'h2') {
      currentH2 = heading;
      h2WithChildren.set(currentH2, false);
    } else if (heading.tagName.toLowerCase() === 'h3' && currentH2) {
      h2WithChildren.set(currentH2, true);
    }
  });
  
  // Then populate all TOC lists
  tocLists.forEach(function(tocList) {
    // Clear any existing content
    tocList.innerHTML = '';
    
    // First, add the main title as the first item in the TOC
    if (mainTitle) {
      const listItem = document.createElement('li');
      listItem.className = 'toc-list-item';
      
      const link = document.createElement('a');
      link.href = '#' + mainTitle.id;
      link.textContent = mainTitle.textContent;
      link.className = 'toc-link';
      
      listItem.appendChild(link);
      tocList.appendChild(listItem);
    }
    
    let currentH2Item = null;
    let currentH2List = null;
    currentH2 = null;
    
    headings.forEach(function(heading) {
      const headingText = heading.textContent.trim();
      
      // Handle hierarchy (h2 vs h3)
      if (heading.tagName.toLowerCase() === 'h2') {
        currentH2 = heading;
        
        // Create list item
        const listItem = document.createElement('li');
        listItem.className = 'toc-list-item';
        
        // Check if this h2 has h3 children
        if (h2WithChildren.get(heading)) {
          // Create details element for collapsible section
          const details = document.createElement('details');
          details.className = 'toc-details';
          details.open = true; // Open by default
          
          // Create summary element (the clickable header)
          const summary = document.createElement('summary');
          summary.className = 'toc-summary';
          
          // Create link inside summary
          const link = document.createElement('a');
          link.href = '#' + heading.id;
          link.textContent = headingText;
          link.className = 'toc-link';
          
          // Add click handler to prevent details toggle when clicking the link
          link.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the details from toggling
          });
          
          summary.appendChild(link);
          details.appendChild(summary);
          
          // Create a nested list for h3s
          currentH2List = document.createElement('ul');
          currentH2List.className = 'toc-sublist';
          details.appendChild(currentH2List);
          
          listItem.appendChild(details);
        } else {
          // Simple link for h2 without children
          const link = document.createElement('a');
          link.href = '#' + heading.id;
          link.textContent = headingText;
          link.className = 'toc-link';
          listItem.appendChild(link);
        }
        
        tocList.appendChild(listItem);
        currentH2Item = listItem;
        
      } else if (heading.tagName.toLowerCase() === 'h3' && currentH2List) {
        // Create h3 list item
        const listItem = document.createElement('li');
        listItem.className = 'toc-list-item';
        
        // Create link
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = headingText;
        link.className = 'toc-link';
        
        listItem.appendChild(link);
        currentH2List.appendChild(listItem);
      } else {
        // If there's an h3 without a preceding h2, add it directly to the main list
        const listItem = document.createElement('li');
        listItem.className = 'toc-list-item';
        
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = headingText;
        link.className = 'toc-link';
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
      }
    });
    
    // Hide TOC if empty
    if (tocList.children.length === 0) {
      const tocContainer = tocList.closest('.table-of-contents');
      if (tocContainer) {
        tocContainer.style.display = 'none';
      }
    }
  });
    
    // Add click event to scroll smoothly for all TOC links
    document.querySelectorAll('.toc-link').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
          });
          
          // Update URL hash without scrolling
          history.pushState(null, null, '#' + targetId);
          
          // If on mobile, hide the TOC after clicking
          const mobileToc = document.querySelector('.mobile-toc');
          if (mobileToc && window.innerWidth <= 768) {
            mobileToc.style.display = 'none';
            const toggleButton = document.getElementById('toggle-toc');
            if (toggleButton) {
              toggleButton.textContent = 'Mostrar Tabla de Contenidos';
            }
          }
        }
      });
    });
    
    // Initialize collapse/expand all functionality
    initCollapseExpandAll();
    
    // Initialize mobile TOC toggle
    initMobileTocToggle();
  }
  
  // Function to initialize collapse/expand all functionality
  function initCollapseExpandAll() {
    document.querySelectorAll('.toc-collapse-all').forEach(function(button) {
      // Remove existing listeners
      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);
      
      // Set initial state
      let isExpanded = true;
      newButton.classList.add('expanded');
      
      // Add click handler
      newButton.addEventListener('click', function() {
        isExpanded = !isExpanded;
        this.classList.toggle('expanded', isExpanded);
        
        // Toggle all details elements
        document.querySelectorAll('.toc-details').forEach(function(details) {
          details.open = isExpanded;
        });
      });
    });
  }
  
  // Separate function to initialize mobile TOC toggle
  function initMobileTocToggle() {
    const toggleTocButton = document.getElementById('toggle-toc');
    if (!toggleTocButton) return;
    
    // Remove any existing event listeners by cloning and replacing the button
    const newToggleButton = toggleTocButton.cloneNode(true);
    toggleTocButton.parentNode.replaceChild(newToggleButton, toggleTocButton);
    
    // Add the event listener to the new button
    newToggleButton.addEventListener('click', function() {
      const mobileToc = document.querySelector('.mobile-toc');
      if (!mobileToc) return;
      
      // Get current display state
      const computedStyle = window.getComputedStyle(mobileToc);
      const isHidden = computedStyle.display === 'none';
      
      // Toggle display
      mobileToc.style.display = isHidden ? 'block' : 'none';
      this.textContent = isHidden ? 'Ocultar Tabla de Contenidos' : 'Mostrar Tabla de Contenidos';
    });
    
    // Set initial state
    const mobileToc = document.querySelector('.mobile-toc');
    if (mobileToc) {
      mobileToc.style.display = 'none';
      newToggleButton.textContent = 'Mostrar Tabla de Contenidos';
    }
  }
  
  // Run on initial page load
  document.addEventListener('DOMContentLoaded', function() {
    initTableOfContents();
  });
  
  // Make compatible with InstantClick
  if (typeof InstantClick !== 'undefined') {
    InstantClick.on('change', function() {
      initTableOfContents();
    });
  }