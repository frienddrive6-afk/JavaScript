let header = document.querySelector('.header');
let menu = document.querySelector('.menu');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 100) {
        header.classList.add('header--active');
        menu.classList.add('menu--active');
    } else {
        header.classList.remove('header--active');
        menu.classList.remove('menu--active');
    }
});
