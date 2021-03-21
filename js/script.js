const burger = document.querySelector('.hamburger-menu');

burger.addEventListener('click', () => {
  const container = document.querySelector('.container');
  container.classList.toggle('change');
});

const scrollBtn = document.querySelector('.scroll-btn');

// scrollBtn.addEventListener('click', () => {
//   document.querySelector('html').style.scrollBehavior = 'smooth';
//   setTimeout(() => {
//     document.querySelector('html').style.scrollBehavior = 'unset';
//   }, 1000);
// });
