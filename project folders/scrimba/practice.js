// listen for user click to render error msg
// "Something went wrong, please try again"
// p with #error
function purchase() {
    document.getElementById("error").textContent = 'Something went wrong, please try again'
}

// add(), subtract(), divide(), multiply()
// call each function on correct button click
let num1, num2
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2
let sum = document.getElementById("sum")

function add() {
    let added = num1 + num2
    sum.textContent = added
}
function subtract() {
    let subtracted = num1 - num2
    sum.textContent = subtracted
}
function divide() {
    let divided = num1 / num2
    sum.textContent = divided
}
function multiply() {
    let multiplied = num1 * num2
    sum.textContent = multiplied
}