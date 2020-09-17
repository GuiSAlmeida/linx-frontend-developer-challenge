import '../scss/style.scss';
import toggleRegisterDescription from './toggleRegisterDescription';
import getProducts from './getProducts';
import renderProducts from './renderProducts';
import showMoreProducts from './showMoreProducts';

const initialize = async () => {
  toggleRegisterDescription();

  localStorage.setItem('page', 1);

  const products = await getProducts(1);
  renderProducts(products);
  localStorage.setItem('products', JSON.stringify(products));

  showMoreProducts();
};
initialize();
