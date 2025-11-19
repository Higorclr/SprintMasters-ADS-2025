document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar');
  const searchButton = document.querySelector('.header-actions .search-icon');

  function redirectToSearch() {
    localStorage.setItem('sprintSearch', searchBar.value);
    window.location.href = 'produtos.html';
  }

  if(searchButton) searchButton.addEventListener('click', redirectToSearch);
  
  if(searchBar) {
    searchBar.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        redirectToSearch();
      }
    });
  }
});