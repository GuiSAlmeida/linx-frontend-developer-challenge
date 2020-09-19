import '../scss/style.scss';
import toggleRegisterDescription from './toggleRegisterDescription';
import getProducts from './getProducts';
import renderProducts from './renderProducts';
import showMoreProducts from './showMoreProducts';
import shareFormValidate from './shareFormValidate';
import registerFormValidate from './registerFormValidate';
import smoothScroll from './smoothScroll';
import renderLoading from './renderLoading';

const initialize = async () => {
  toggleRegisterDescription();
  registerFormValidate();
  shareFormValidate();
  smoothScroll();
  renderLoading();

  localStorage.setItem('page', 1);

  const products = await getProducts(1);
  renderProducts(products);
  localStorage.setItem('products', JSON.stringify(products));

  showMoreProducts();
};
initialize();
