// все элементы с товарами
const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

products.forEach(product => {
  const decButton = product.querySelector('.product__quantity-control_dec');
  const incButton = product.querySelector('.product__quantity-control_inc');
  const quantityValue = product.querySelector('.product__quantity-value');
  const addButton = product.querySelector('.product__add');

  // увеличение количества
  incButton.addEventListener('click', () => {
    quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
  });

  // уменьшение количества (не меньше 1)
  decButton.addEventListener('click', () => {
    const current = parseInt(quantityValue.textContent);
    if (current > 1) {
      quantityValue.textContent = current - 1;
    }
  });

  // добавление в корзину
  addButton.addEventListener('click', () => {
    const id = product.dataset.id;
    const imageSrc = product.querySelector('.product__image').src;
    const count = parseInt(quantityValue.textContent);

    // провяю, есть ли товар уже в корзине
    const existing = cart.querySelector(`.cart__product[data-id="${id}"]`);

    if (existing) {
      const currentCount = parseInt(existing.querySelector('.cart__product-count').textContent);
      existing.querySelector('.cart__product-count').textContent = currentCount + count;
    } else {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart__product');
      cartItem.dataset.id = id;

      cartItem.innerHTML = `
        <img class="cart__product-image" src="${imageSrc}">
        <div class="cart__product-count">${count}</div>
      `;

      cart.appendChild(cartItem);
    }
  });
});
