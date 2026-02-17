export function getBurger() {
  const menu = document.body.querySelector('.burger-menu');
  const button = document.body.querySelector('.burger-menu__btn', '.burger-menu__lines');
  const links = document.body.querySelectorAll('.nav__list-link');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.forEach(link => link.addEventListener('click', () => toggleMenu()));

  function toggleMenu() {
    menu.classList.toggle('burger-menu--active');

    if (menu.classList.contains('burger-menu--active')) {
      menu.style.overflow = "hidden";
      // document.body.style.overflow = "visible";

    } else {
      menu.style.overflow = "visible";
      // document.body.style.overflow = "hidden";
    }
  }
}