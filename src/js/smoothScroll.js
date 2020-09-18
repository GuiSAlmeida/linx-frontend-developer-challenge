const smoothScroll = () => {
  const links = document.querySelectorAll('.header-menu ul a');

  links.forEach((link) => link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
    });
  }));
};

export default smoothScroll;
