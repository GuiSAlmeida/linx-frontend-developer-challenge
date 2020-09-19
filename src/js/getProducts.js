/**
 * This function makes the request for the api.
 *
 * @param {number} page valeu of page endpoint
 * @returns {Promise} response api
 */
const getProducts = (page) => {
  const URL = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`;
  return fetch(URL)
    .then((data) => data.json());
};

export default getProducts;
