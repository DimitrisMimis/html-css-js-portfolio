const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu')?.querySelector('ul');

if (burger && navMenu) {
  burger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

