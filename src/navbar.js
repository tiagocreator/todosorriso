'use strict';

const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar-link');
const navbarToggler = document.querySelector('.nav-toggle-btn');
const headerBottom = document.querySelector('.header-bottom');
const backToTopBtn = document.querySelector('.back-to-top');

const toggleNavbar = () => {
  navbar.classList.toggle('active');
  navbarToggler.classList.toggle('active');
};

const closeNavbar = () => {
  navbar.classList.remove('active');
  navbarToggler.classList.remove('active');
};

navbarToggler.addEventListener('click', toggleNavbar);
navbarLinks.forEach((link) => link.addEventListener('click', closeNavbar));

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    headerBottom.classList.add('active');
    if (backToTopBtn) {
      backToTopBtn.classList.add('active');
    }
  } else {
    headerBottom.classList.remove('active');
    if (backToTopBtn) {
      backToTopBtn.classList.remove('active');
    }
  }
});
