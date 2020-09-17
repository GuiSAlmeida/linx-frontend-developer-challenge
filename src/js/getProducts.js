const getProducts = (page) => {
  const URL = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`;
  return fetch(URL)
    .then((data) => data.json())
    .then(({ products }) => products);
};

export default getProducts;
