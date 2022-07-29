const currentCount = document.getElementById("countElement")
const score = document.getElementById("score")
const misato = document.getElementById("herScore")
const you = document.getElementById("yourScore")
const total = document.getElementById("total")
const original = document.getElementById("original")
const results = document.getElementById("results")
const flavor = document.getElementById("flavor")
const buttons = document.getElementsByClassName("button")

// buttons.eventListener('click', function buttonClick() {
//     buttons.style.background = "#000"
//     buttons.style.color = "#fff"
// })
let count = 0
let previousRound = 0

function increment() {
    count = count + 1;
    currentCount.innerText = count;
}

function save() {
    const newCount = Math.floor(count*2.2) // total beers
    let herScore = newCount - count; // Misato's score
    previousRound = previousRound + newCount; // round sum
    if (misato.innerText === "") {
        misato.innerText = herScore
        you.innerText = count
    } else {    
        misato.innerText += " - " + herScore; // Misato text
        you.innerText += " - " + count; // Your text
    }
    total.innerText = previousRound; // sum text
    results.innerText = `The two of you drank ${newCount} beers in one sitting!` // message
    results.style.display = "block"
    original.style.display = "none" // swap top message
    switch (true) {
        case (previousRound >= 48): 
            flavor.innerText = "Allshrigh' in tha wurl..."
            break;
        case (previousRound < 48 && previousRound >= 36):
            flavor.innerText = "[bad karaoke of Fly Me To The Moon]"
            break;
        case (previousRound < 36 && previousRound >= 24):
            flavor.innerText = "Just another day at NERV."
            break;
        case (previousRound < 24 && previousRound >= 12): 
            flavor.innerText = "Huh? Anta baka."
            break;
        default:
            flavor.innerText = "Pathetic."
    }
}

function reset() {
    results.style.display = "none"
    original.style.display = "block" // swap top message
    currentCount.textContent = 0
    count = 0
}
    
    
    // if (afterGame != `Count: ${count}`) {
    //     results.innerHTML = `<h1 id="results">Count: <span id="countElement">0</span></h1>`
    // }