
// PROJECT CODE START

/* 

To do: 
 - make button/form responsive to user activity: play a sound
 - make a button to start / pause / stop / loop base music

*/

const yuh = document.querySelector('#yuh');
const turnItUP = document.querySelector('#turnItUp');
const youGotGot = document.querySelector('#youGotGot');
const letsGo = document.querySelector('#letsGo');
const hot = document.querySelector('#hot');
const dominos = document.querySelector('#dominos');
const laugh = document.querySelector('#laugh');
const intro = document.querySelector('#activateYuh');
const papaButton = document.querySelector('.papaButton');
const modal = document.querySelector('.modal');

function introSound(){
    document.querySelector('#introSound').play();
}

function yuhSound(){
   document.querySelector('#yuhAudio').play();
}

function turnItUpSounds(){
 document.querySelector('#turnItUpAudio').play();
}

function youGotGotSound(){
 document.querySelector('#youGotGotAudio').play();
}

function letsGoSound(){
    document.querySelector('#letsGoAudio').play();
}

function hotSound(){
  document.querySelector('#hotAudio').play();
}

function dominosSound(){
    document.querySelector('#dominosAudio').play();
}

function leonLaugh(){
    document.querySelector('#laughAudio').play();
}

function modalPopOut(){
  modal.classList.add('toggle');
  document.querySelector('#gtfo').play();
}

papaButton.addEventListener('click', modalPopOut)
intro.addEventListener('click', introSound)
yuh.addEventListener('click', yuhSound);
turnItUP.addEventListener('click', turnItUpSounds);
youGotGot.addEventListener('click', youGotGotSound);
letsGo.addEventListener('click', letsGoSound);
hot.addEventListener('click', hotSound);
dominos.addEventListener('click', dominosSound);
laugh.addEventListener('click', leonLaugh)