//color menu bar on scroll
var navbar = document.querySelector('header');

var topBar = document.querySelector('.header_top');
var imgLogo = document.querySelector('.navbar-brand');

window.onscroll = function() {
  if (window.pageYOffset > 200) {
    navbar.classList.add('is-active');
 
    imgLogo.classList.add('navbar-logo');
  
  } else {
    navbar.classList.remove('is-active');
  
    imgLogo.classList.remove('navbar-logo');
  
  }
}