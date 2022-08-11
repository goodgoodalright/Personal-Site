// sticky nav on scroll
window.onscroll = function() {scroll()};
var navbar = document.getElementById('nav');
var sticky = navbar.offsetTop;
function scroll() {
     if(window.scrollY >= sticky) {
          navbar.classList.add('sticky');
     } else {
          navbar.classList.remove('sticky');
     }
};