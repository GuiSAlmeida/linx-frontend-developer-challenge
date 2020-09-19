import formatPrice from './utils/formatPrice';

/**
 * This function create a markup to render the component product card in the body of html.
 *
 * @param {object} product that will be rendered
 */
const productCard = (product) => `
  <div class="product-card">
    <img src=${product.image} alt=${product.name} class="product-image">
    <div class="product-content">
      <p class="product-title">${product.name}</p>
      <p class="product-description">${product.description}</p>
      <p class="product-oldprice">De: ${formatPrice(product.oldPrice)}</p>
      <p class="product-price">Por: ${formatPrice(product.price)}</p>
      <p class="product-installment">ou ${product.installments.count}x de ${formatPrice(product.installments.value)}</p>
      <button class="button">Comprar</button>
    </div>
  </div>
`;

export default productCard;
