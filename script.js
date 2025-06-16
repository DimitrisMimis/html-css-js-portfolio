const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu').querySelector('ul');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// // // Optional: Close menu on link click
// // document.querySelectorAll('.nav-links a').forEach(link => {
// //   link.addEventListener('click', () => {
// //     navMenu.classList.remove('show');
// //   });
// // });
