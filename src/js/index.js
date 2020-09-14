/* eslint-disable func-names */
import '../scss/style.scss';

const toggleRegisterdescription = () => {
  const button = document.getElementById('registe-toggle-description');
  button.addEventListener('click', function () {
    this.classList.toggle('toggle');
  });
};

toggleRegisterdescription();
