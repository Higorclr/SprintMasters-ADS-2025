document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar');
  const searchButton = document.querySelector('.header-actions .search-icon');

  function redirectToSearch() {
    localStorage.setItem('sprintSearch', searchBar.value);
    window.location.href = 'produtos.html';
  }

  if(searchButton) searchButton.addEventListener('click', redirectToSearch);
  if(searchBar) searchBar.addEventListener('keyup', (e) => { if (e.key === 'Enter') redirectToSearch(); });

  const chatBtn = document.querySelector('.chat-widget');
  const chatModal = document.getElementById('chat-modal');
  if(chatBtn && chatModal) {
      chatBtn.addEventListener('click', () => chatModal.classList.add('show'));
      chatModal.addEventListener('click', (e) => {
          if (e.target === chatModal || e.target.classList.contains('modal-close')) {
              chatModal.classList.remove('show');
          }
      });
  }
});
