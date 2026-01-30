// Post preview hover functionality
(function () {
  // Cache object to store fetched content
  const contentCache = {};

  // Create the preview popup element
  function createPreviewPopup() {
    // First, remove any existing popups to prevent duplicates
    const existingPopups = document.querySelectorAll('.post-preview-popup');
    existingPopups.forEach(popup => {
      popup.parentNode.removeChild(popup);
    });

    const popup = document.createElement('div');
    popup.className = 'post-preview-popup';
    popup.innerHTML = `
      <div class="preview-content"></div>
      <div class="preview-tags"></div>
    `;

    // Allow interacting with the popup
    popup.addEventListener('mouseenter', () => {
      clearTimeout(popup.hideTimeout);
    });

    popup.addEventListener('mouseleave', () => {
      popup.hideTimeout = setTimeout(() => {
        popup.classList.remove('visible');
      }, 300);
    });

    document.body.appendChild(popup);
    return popup;
  }

  // Fetch post content
  async function fetchPostContent(url) {
    if (contentCache[url]) {
      return contentCache[url];
    }

    try {
      const response = await fetch(url);
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const content = doc.querySelector('.post-content.e-content')?.innerHTML || 'No preview available.';

      contentCache[url] = content;
      return content;
    } catch (error) {
      console.error('Error fetching post content:', error);
      return 'Failed to load preview.';
    }
  }

  // Initialize the preview functionality
  function initPostPreview() {
    console.log('Initializing post preview functionality (AJAX version)');
    const popup = createPreviewPopup();
    const postLinks = document.querySelectorAll('.home-post-item .post-link');

    // Remove any existing event listeners (if possible)
    postLinks.forEach(link => {
      const newLink = link.cloneNode(true);
      if (link.parentNode) {
        link.parentNode.replaceChild(newLink, link);
      }
    });

    // Add new event listeners
    document.querySelectorAll('.home-post-item .post-link').forEach(link => {
      // Get post data
      const postItem = link.closest('.home-post-item');
      const postUrl = link.getAttribute('href');

      // Get tags
      const tags = [];
      const tagElements = postItem.querySelectorAll('.related-tag');
      tagElements.forEach(tag => {
        tags.push(tag.textContent);
      });

      // Mouse enter event
      link.addEventListener('mouseenter', async function (e) {
        clearTimeout(popup.hideTimeout);

        // Show loading state or cached content
        const contentContainer = popup.querySelector('.preview-content');

        if (contentCache[postUrl]) {
          contentContainer.innerHTML = contentCache[postUrl];
        } else {
          contentContainer.innerHTML = '<div style="text-align:center; padding: 20px; color: #666;">Cargando vista previa...</div>';
          // Fetch content
          const content = await fetchPostContent(postUrl);
          // Only update if we are still hovering (simple check)
          if (popup.classList.contains('visible')) {
            contentContainer.innerHTML = content;
          }
        }

        // Set tags
        const tagsContainer = popup.querySelector('.preview-tags');
        tagsContainer.innerHTML = '';
        if (tags.length > 0) {
          tags.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.className = 'preview-tag';
            tagEl.textContent = tag;
            tagsContainer.appendChild(tagEl);
          });
        } else {
          tagsContainer.style.display = 'none';
        }

        // Position the popup
        const rect = link.getBoundingClientRect();

        // First make the popup visible but off-screen to calculate its height
        popup.style.top = '-9999px';
        popup.style.left = '-9999px';
        popup.classList.add('visible');

        // Get actual popup height after content is set
        const popupHeight = popup.offsetHeight;

        // Position above or below depending on available space
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;

        if (spaceBelow >= popupHeight || spaceBelow > spaceAbove) {
          // Position below
          popup.style.top = `${rect.bottom + window.scrollY + 10}px`;
        } else {
          // Position above, directly adjacent to the link
          popup.style.top = `${rect.top + window.scrollY - popupHeight - 5}px`;
        }

        // Center horizontally relative to the link
        const leftPosition = rect.left + window.scrollX;
        popup.style.left = `${leftPosition}px`;

        // Show the popup
        popup.classList.add('visible');
      });

      // Mouse leave event
      link.addEventListener('mouseleave', function () {
        popup.hideTimeout = setTimeout(() => {
          popup.classList.remove('visible');
        }, 300);
      });
    });

    // Hide popup when clicking elsewhere
    document.addEventListener('click', function (e) {
      if (!popup.contains(e.target)) {
        popup.classList.remove('visible');
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPostPreview);
  } else {
    initPostPreview();
  }

  // Support for Turbo
  if (typeof Turbo !== 'undefined' || 'Turbo' in window) {
    document.addEventListener('turbo:load', function () {
      console.log('Turbo load - initializing post preview');
      initPostPreview();
    });

    document.addEventListener('turbo:render', function () {
      console.log('Turbo render - initializing post preview');
      // Use a small delay to ensure the DOM is fully updated
      setTimeout(initPostPreview, 100);
    });
  }

  // Make function available globally
  window.PostPreview = { init: initPostPreview };
})();