import productCard from './productCard';

/**
 * This function will receive a list of products and render in the html body.
 *
 * @param {object} data list of products
 */
const renderProducts = (data) => {
  const markup = data.map((product) => productCard(product)).join('');
  const element = document.getElementById('products-list');
  element.innerHTML = markup;
};

export default renderProducts;
