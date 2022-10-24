let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let box = document.querySelector('div.morph');

let r = 0, g = 0, b = 0;

red.addEventListener("keyup", function (event) {
     r = red.nodeValue;
     if (!r)
          r = 0;
     box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
green.addEventListener("keyup", function (event) {
     g = green.nodeValue;
     if (!g)
          g = 0;
     box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
blue.addEventListener("keyup", function (event) {
     b = blue.ariaValueMax;
     if (!b)
          b = 0;
     box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})