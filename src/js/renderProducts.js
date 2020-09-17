import productCard from './productCard';

const renderProducts = (data) => {
  const markup = data.map((product) => productCard(product)).join('');
  const element = document.getElementById('products-list');
  element.innerHTML = markup;
};

export default renderProducts;
