var currentCount = document.querySelector(".count");
var original = document.querySelector(".original");
var results = document.querySelector(".results");
var text = document.querySelector(".resultsText");
var buttons = document.querySelector(".buttons");
var button = document.querySelector(".button");
var score = document.querySelector(".score");
var misato = document.querySelector(".misato");
var you = document.querySelector(".player");
var total = document.querySelector(".total");
var flavor = document.querySelector(".flavor");

// buttons.eventListener('click', function buttonClick() {
//     buttons.style.background = "#000"
//     buttons.style.color = "#fff"
// })
document.getElementById('eventButton').addEventListener('click', increment);
document.getElementById('saveButton').addEventListener('click', save);
document.getElementById('resetButton').addEventListener('click', reset);
// TODO: CLEAR BUTTON

let count = 0;
let previousRound = 0;

function increment() {
    count = count + 1;
    currentCount.textContent = count;
    console.log(count);
}
function save() {
    let newCount = Math.floor(count*2.2) // total beers
    let herScore = newCount - count; // Misato's score
    previousRound = previousRound + newCount; // round sum
    if (misato.textContent === "") {
        misato.textContent = herScore;
        you.textContent = count;
    } else {    
        misato.textContent += " - " + herScore; // Misato text
        you.textContent += " - " + count; // Your text
    }
    total.textContent = previousRound; // sum text
    results.textContent = `The two of you drank ${newCount} beers in one sitting!`;// message
    results.style.display = "block";
    original.style.display = "none"; // swap top message
    switch (true) {
        case (previousRound >= 48): 
            flavor.textContent = "Allshrigh' in tha wurl...";
            break;
        case (previousRound < 48 && previousRound >= 36):
            flavor.textContent = "[bad karaoke of Fly Me To The Moon]";
            break;
        case (previousRound < 36 && previousRound >= 24):
            flavor.textContent = "Just another day at NERV.";
            break;
        case (previousRound < 24 && previousRound >= 12): 
            flavor.textContent = "Huh? Anta baka.";
            break;
        default:
            flavor.textContent = "Pathetic.";
    }
}
function reset() {
    text.textContent = "";
    currentCount.textContent = 0;
    count = 0;
}
    
    
    // if (afterGame != `Count: ${count}`) {
    //     results.innerHTML = `<h1 id="results">Count: <span id="countElement">0</span></h1>`
    // }