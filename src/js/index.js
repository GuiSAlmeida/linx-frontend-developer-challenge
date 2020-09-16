/* eslint-disable func-names */
import '../scss/style.scss';
import productCard from './productCard';

localStorage.setItem('page', 1);

const toggleRegisterDescription = () => {
  const button = document.getElementById('registe-toggle-description');
  button.addEventListener('click', function () {
    this.classList.toggle('toggle');
  });
};
toggleRegisterDescription();

const renderProducts = (data) => {
  const markup = data.map((product) => productCard(product)).join('');
  const element = document.getElementById('products-list');
  element.innerHTML = markup;
};

const getProducts = (page) => {
  const URL = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`;

  return fetch(URL)
    .then((data) => data.json())
    .then((dataParsed) => renderProducts(dataParsed.products));
};
getProducts(1);


const showMoreProducts = () => {
  const button = document.getElementById('button-more');
  const page = localStorage.getItem('page');

  button.addEventListener('click', () => {
    console.log(page);
  });

  // getProducts(page);
};
showMoreProducts();
