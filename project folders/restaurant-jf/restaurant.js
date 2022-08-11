// sticky nav on scroll
var navbar = document.querySelector('.nav');
var sticky = navbar.offsetTop;
window.onscroll = function() {
     if(window.scrollY >= sticky) {
          navbar.classList.add('.sticky');
     } else {
          navbar.classList.remove('.sticky');
     }
};