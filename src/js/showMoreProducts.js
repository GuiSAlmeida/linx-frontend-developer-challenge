import getProducts from './getProducts';
import renderProducts from './renderProducts';
import renderLoading from './renderLoading';

/**
 * This function makes another call to api
 * according to the value of the page and renders in the body of the html.
 */
const showMoreProducts = () => {
  const button = document.getElementById('button-more');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    renderLoading();

    const oldProducts = JSON.parse(localStorage.getItem('products'));

    let page = parseInt(localStorage.getItem('page'), 10);
    page += 1;
    localStorage.setItem('page', page);

    getProducts(page)
      .then(({ products: newProducts }) => {
        const allProducts = [...oldProducts, ...newProducts];
        renderProducts(allProducts);
        localStorage.setItem('products', JSON.stringify(allProducts));
      });
  });
};

export default showMoreProducts;
