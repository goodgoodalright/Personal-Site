var img = document.querySelector(".img");
var results = document.querySelector(".results");
var count = document.querySelector(".count");
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

let previous = 0; // next round
let pScore = 0; // player's score

function increment() {
    pScore = pScore + 1;
    count.textContent = pScore;
}

function save() {
    let round = Math.floor(Number(count.textContent) * 2.2); // beers per round
    let mScore = Number(round) - Number(pScore); // Misato's score
    previous = previous + round; // round sum
    total.textContent = previous; // sum text
    text.textContent = `The two of you drank ${round} beers in one sitting!`; // message

    if (misato.textContent === "") {
        misato.textContent = mScore;
        you.textContent = pScore;
    } else {    
        misato.textContent += " - " + mScore; // Misato text
        you.textContent += " - " + pScore; // Your text
    }
    switch (true) {
        case (previous >= 48): 
            flavor.textContent = "Allshrigh' in tha wurl...";
            break;
        case (previous < 48 && previous >= 36):
            flavor.textContent = "[bad karaoke of Fly Me To The Moon]";
            break;
        case (previous < 36 && previous >= 24):
            flavor.textContent = "Just another day at NERV.";
            break;
        case (previous < 24 && previous >= 12): 
            flavor.textContent = "Huh? Anta baka.";
            break;
        default:
            flavor.textContent = "Pathetic.";
    }
    pScore = 0;
    round = 0;
    count.textContent = '0';
}
function reset() {
    text.textContent = "";
    mScore = 0;
    pScore = 0;
    round = 0;
    count.textContent = 0;
}
    
    
    // if (afterGame != `Count: ${count}`) {
    //     results.innerHTML = `<h1 id="results">Count: <span id="countElement">0</span></h1>`
    // }