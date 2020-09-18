import getProducts from './getProducts';
import renderProducts from './renderProducts';

const showMoreProducts = () => {
  const button = document.getElementById('button-more');

  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const oldProducts = JSON.parse(localStorage.getItem('products'));

    let page = parseInt(localStorage.getItem('page'), 10);
    page += 1;
    localStorage.setItem('page', page);

    const newProducts = await getProducts(page);
    const allProducts = [...oldProducts, ...newProducts];
    renderProducts(allProducts);
    localStorage.setItem('products', JSON.stringify(allProducts));
  });
};

export default showMoreProducts;
