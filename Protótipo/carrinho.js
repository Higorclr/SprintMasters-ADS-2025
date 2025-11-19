let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
function renderCart() {
    const cartContent = document.getElementById('cartContent');
    const headerCartCount = document.getElementById('headerCartCount');
    const itemCount = document.getElementById('itemCount');
            
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h2>Seu carrinho está vazio</h2>
                <p>Adicione produtos ao carrinho para continuar comprando</p>
                <a href="produtos.html" class="btn-shop">Explorar Produtos</a>
            </div>
        `;
        headerCartCount.textContent = '0';
        itemCount.textContent = '0 itens no carrinho';
        return;
    }
            
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    headerCartCount.textContent = totalItems;
    itemCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'} no carrinho`;
            
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 500 ? 0 : 29.90;
    const total = subtotal + shipping;
            
    cartContent.innerHTML = `
        <div class="cart-layout">
            <div class="cart-items">
                ${cart.map((item, index) => `
                    <div class="cart-item">
                        <div class="item-image">
                            <img src="/placeholder.svg?height=120&width=120" alt="${item.name}">
                        </div>
                        <div class="item-details">
                            <div class="item-category">Periféricos</div>
                            <div class="item-name">${item.name}</div>
                            <div class="item-specs">Switch: Cherry MX Red | Layout: ABNT2</div>
                            <div class="item-actions">
                                <div class="quantity-controls">
                                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                                    <span class="quantity-value">${item.quantity}</span>
                                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                                </div>
                                <button class="btn-remove" onclick="removeItem(${index})">Remover</button>
                            </div>
                        </div>
                        <div class="item-price-section">
                            <div class="item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
                            <div class="item-unit-price">R$ ${item.price.toFixed(2)} cada</div>
                        </div>
                    </div>
                `).join('')}
            </div>
                    
            <div class="order-summary">
                <h2 class="summary-title">Resumo do Pedido</h2>
                        
                <div class="summary-row">
                    <span class="summary-label">Subtotal (${totalItems} ${totalItems === 1 ? 'item' : 'itens'})</span>
                    <span class="summary-value">R$ ${subtotal.toFixed(2)}</span>
                </div>
                        
                <div class="summary-row">
                    <span class="summary-label">Frete</span>
                    <span class="summary-value">${shipping === 0 ? 'GRÁTIS' : 'R$ ' + shipping.toFixed(2)}</span>
                </div>
                        
                <div class="discount-code">
                    <input type="text" placeholder="Código de desconto" id="discountCode">
                    <button class="btn-apply" onclick="applyDiscount()">Aplicar Cupom</button>
                </div>
                        
                <div class="summary-row">
                    <span class="summary-label">Total</span>
                    <span class="summary-total">R$ ${total.toFixed(2)}</span>
                </div>
                        
                <button class="btn-checkout" onclick="goToCheckout()">Finalizar Compra</button>
                <a href="produtos.html" class="continue-shopping">← Continuar Comprando</a>
                        
                <div class="security-badges">
                    <span class="security-badge">🔒 Compra Segura</span>
                    <span class="security-badge">📦 Entrega Rápida</span>
                </div>
            </div>
        </div>
    `;
}
        
function updateQuantity(index, delta) {
    cart[index].quantity = Math.max(1, cart[index].quantity + delta);
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartCount', cart.reduce((sum, item) => sum + item.quantity, 0));
    renderCart();
}
        
function removeItem(index) {
    if (confirm('Deseja remover este item do carrinho?')) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartCount', cart.reduce((sum, item) => sum + item.quantity, 0));
        renderCart();
    }
}
        
function applyDiscount() {
    const code = document.getElementById('discountCode').value.toUpperCase();
            
    if (code === 'CORSAIR10') {
        alert('Cupom aplicado! 10% de desconto');
    } else if (code === 'PRIMEIRACOMPRA') {
        alert('Cupom aplicado! 15% de desconto na primeira compra');
    } else if (code) {
        alert('Cupom inválido. Tente novamente.');
    }
}
        
function goToCheckout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    window.location.href = 'checkout.html';
}
        
// Initial render
renderCart();