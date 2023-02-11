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

// carousel
let slideIndex = 1;
showSlides(slideIndex);
function changeSlide(n) {showSlides(slideIndex += n);}
function currentSlide(n) {showSlides(slideIndex = n);}
function showSlides(n) {
     let i;
     let slides = document.getElementsByClassName("slide-wrap");
     let dots = document.getElementsByClassName("dot-wrap");
     if (n > slides.length) {slideIndex = 1}
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
     }
     for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace("active", "");
     }
     slides[slideIndex-1].style.display = "block";
     dots[slideIndex-1].className += "active";
}
// Auto Slideshow example below, multiple here: https://www.w3schools.com/howto/howto_js_slideshow.asp
// let slideIndexAuto = 0;
// showSlidesAuto();
// function showSlidesAuto() {
//      let i;
//      let slides = document.querySelector("my-slides");
//      for (i = 0; i < slides.length; i++) {
//           slides[i].style.display = 'none';
//      }
//      slideIndex++
//      if (slideIndexAuto > slides.length) {slideIndex = 1}
//      slides[slideIndexAuto - 1].style.display = 'block';
//      setTimeout(showSlidesAuto, 2000); // change image every 2 seconds
// }