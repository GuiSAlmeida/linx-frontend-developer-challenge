/* eslint-disable func-names */
const toggleRegisterDescription = () => {
  const button = document.getElementById('registe-toggle-description');
  button.addEventListener('click', function () {
    this.classList.toggle('toggle');
  });
};

export default toggleRegisterDescription;
