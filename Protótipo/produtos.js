document.addEventListener('DOMContentLoaded', () => {
  const filterCategory = document.getElementById('filter-category');
  const filterPrice = document.getElementById('filter-price');
  const searchBar = document.getElementById('search-bar');
  const searchButton = document.querySelector('.header-actions .search-icon'); 
  const productCards = document.querySelectorAll('.product-grid .product-card');

  function filterProducts() {
    if (!filterCategory) return; 
    const categoryValue = filterCategory.value;
    const priceValue = filterPrice.value;
    const searchValue = searchBar.value.toLowerCase();

    productCards.forEach(card => {
      const cardCategory = card.dataset.category || 'all';
      const cardPrice = parseFloat(card.dataset.price) || 0;
      const cardText = (card.querySelector('h3').textContent + ' ' + card.querySelector('p').textContent).toLowerCase();
      
      const categoryMatch = (categoryValue === 'all') || (categoryValue === cardCategory);
      let priceMatch = false;
      if (priceValue === 'all') priceMatch = true;
      else if (priceValue === 'low') priceMatch = cardPrice <= 500;
      else if (priceValue === 'mid') priceMatch = cardPrice > 500 && cardPrice <= 1000;
      else if (priceValue === 'high') priceMatch = cardPrice > 1000;
      
      const searchMatch = (searchValue === '') || cardText.includes(searchValue);
      card.style.display = (categoryMatch && priceMatch && searchMatch) ? 'flex' : 'none';
    });
  }

  if(filterCategory) filterCategory.addEventListener('change', filterProducts);
  if(filterPrice) filterPrice.addEventListener('change', filterProducts);
  if(searchButton) searchButton.addEventListener('click', filterProducts);
  if(searchBar) searchBar.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterProducts(); });

  const savedSearch = localStorage.getItem('sprintSearch');
  if (savedSearch && searchBar) {
    searchBar.value = savedSearch;
    filterProducts();
    localStorage.removeItem('sprintSearch');
  }

  const modal = document.getElementById('purchase-modal');
  if (modal) {
    const closeModalBtn = document.querySelector('.modal-close');
    const continueShoppingBtn = document.querySelector('.modal-btn-close');
    const modalImg = document.getElementById('modal-product-image');
    const modalTitle = document.getElementById('modal-product-title');
    const modalPrice = document.getElementById('modal-product-price');
    const buyButtons = document.querySelectorAll('.product-grid .btn-buy');

    buyButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const card = e.target.closest('.product-card');
        modalTitle.textContent = card.querySelector('h3').textContent;
        modalPrice.textContent = card.querySelector('.product-price').textContent;
        modalImg.src = card.querySelector('img').src;
        modal.classList.add('show');
      });
    });

    const closeModal = () => modal.classList.remove('show');
    closeModalBtn.addEventListener('click', closeModal);
    continueShoppingBtn.addEventListener('click', (e) => { e.preventDefault(); closeModal(); });
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  }
});
