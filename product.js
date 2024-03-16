const quantityInput = document.getElementById('quantityInput');
    const addToCartBtn = document.getElementById('addToCartBtn');

    addToCartBtn.addEventListener('click', addToCart);

    function addToCart() {
        const selectedQuantity = quantityInput.value;
        localStorage.setItem('selectedQuantity', selectedQuantity);
    }