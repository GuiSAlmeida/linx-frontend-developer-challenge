import '../scss/style.scss';
import toggleRegisterDescription from './toggleRegisterDescription';
import getProducts from './getProducts';
import renderProducts from './renderProducts';
import showMoreProducts from './showMoreProducts';
import shareFormValidate from './shareFormValidate';
import registerFormValidate from './registerFormValidate';
import smoothScroll from './smoothScroll';
import renderLoading from './renderLoading';

localStorage.setItem('page', 1);

toggleRegisterDescription();
registerFormValidate();
shareFormValidate();
smoothScroll();
renderLoading();
showMoreProducts();

getProducts(1)
  .then(({ products }) => {
    renderProducts(products);
    localStorage.setItem('products', JSON.stringify(products));
  });
