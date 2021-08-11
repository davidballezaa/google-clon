const header = document.querySelector('header');
const sidebar = document.querySelector('.header__menu-mobile');
const overlay = document.querySelector('.overlay');
const hamburguer = document.querySelector('.nav__hamburguer');

function toggler(){
    header.classList.toggle('header--open');
    sidebar.classList.toggle('header__menu-mobile--open');
    overlay.classList.toggle('overlay--open');
}

function remover(){
    header.classList.remove('header--open');
    sidebar.classList.remove('header__menu-mobile--open');
    overlay.classList.remove('overlay--open');
}

hamburguer.addEventListener("click", toggler);
overlay.addEventListener("click", remover);