/**
 * This function receives a numerical value and converts it into Real BRL currency.
 *
 * @param {number} price the numerical value
 * @returns {string} value converted into Real BRL currency
 */
const formatPrice = (price) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

export default formatPrice;
