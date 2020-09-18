const smoothScroll = () => {
  const links = document.querySelectorAll('.header-menu ul a');

  links.forEach((link) => link.addEventListener('click', function handleClick(e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
    });
  }));
};

export default smoothScroll;
