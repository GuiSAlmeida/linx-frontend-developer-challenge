/**
 * This function applies the effect of hiding or showing the description paragraph on mobile.
 */
const toggleRegisterDescription = () => {
  const button = document.getElementById('registe-toggle-description');
  button.addEventListener('click', function handleClick() {
    this.classList.toggle('toggle');
  });
};

export default toggleRegisterDescription;
