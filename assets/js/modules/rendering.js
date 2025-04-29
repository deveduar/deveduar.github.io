// _includes/js/modules/rendering.js
export const Rendering = (() => {
  const renderPosts = (sortedPosts) => {
    const postItems = document.querySelectorAll('.archive-post-item');
    const noResultsMessage = document.querySelector('.no-results-message');
    const postsContainer = document.querySelector('.archive-posts-list');
    
    // Hide all posts first
    postItems.forEach(item => item.style.display = 'none');
    
    // Show no results message if needed
    if (sortedPosts.length === 0) {
      if (noResultsMessage) noResultsMessage.style.display = 'block';
      return;
    } else {
      if (noResultsMessage) noResultsMessage.style.display = 'none';
    }
    
    // Reorder posts in the DOM and show them
    if (postsContainer) {
      sortedPosts.forEach(post => {
        post.style.display = 'block';
        postsContainer.appendChild(post); // This reorders the DOM elements
      });
    }
  };

  return {
    renderPosts
  };
})();