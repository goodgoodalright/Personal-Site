// footer show on scroll
footer = document.getElementById('footer');
const scrollUp = function() {
    var y = window.scrollY;
    if (y >= 1200) {
        footer.style.display = 'block';
        footer.style.position = 'fixed';
    } else {
        footer.style.display = 'none';
        footer.style.position = 'relative';
    }
}
window.addEventListener('scroll', scrollUp);

// Table of Contents
function openContents() {
    document.getElementById("contents").style.width = "400px";
    document.getElementById("contents").style.padding = "1rem";
    document.getElementById("main").style.marginRight = "2rem";
    console.log('opened');
}
function closeContents() {
    document.getElementById("contents").style.width = "0";
    document.getElementById("contents").style.padding = "0";
    document.getElementById("main").style.marginRight = "0";
    console.log('closed')
}

// STOPWATCH - https://www.foolishdeveloper.com/2021/10/simple-stopwatch-using-javascript.html
let [ms, sec, min, hrs] = [0,0,0,0];
let timerRef = document.getElementById('stopwatch-time');  
let int = null;
// split time between Number(timer.substring(0, 2)), (3, 5), (6, 8), (9, 11)
document.getElementById('start-stopwatch').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
    console.log('start');
});
document.getElementById('stop-stopwatch').addEventListener('click', () => {
    clearInterval(int);
    console.log('pause');
});
document.getElementById('reset-stopwatch').addEventListener('click', () => {
    clearInterval(int);
    [ms, sec, min, hrs] = [0,0,0,0]
    timerRef.innerHTML = "00:00:00:000"
    console.log('reset');
});
function displayTimer() {
    ms += 10;
    if (ms == 1000) {
        ms = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hrs++;
            }
        }
    }
    let hhSW = hrs < 10 ? '0' + hrs : hrs;
    let mmSW = min < 10 ? '0' + min : min;
    let ssSW = sec < 10 ? '0' + sec : sec;
    let mcsSW = ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms;
    timerRef.innerHTML = `${hhSW}:${mmSW}:${ssSW}:${mcsSW}`;
}

// CLOCK
function showTime() {
    var dateClock = new Date();
    var hhCL = dateClock.getHours();
    var mmCL = dateClock.getMinutes();
    var ssCL = dateClock.getSeconds();
    // var session = 'AM';
    // can set if (h == 0) h = 12 && if (h > 12) { h = h-12, session = 'PM'}
    hhCL = (hhCL < 10) ? '0' + hhCL : hhCL;
    mmCL = (mmCL < 10) ? '0' + mmCL : mmCL;
    ssCL = (ssCL < 10) ? '0' + ssCL : ssCL;
    var timeClock = hhCL + ":" + mmCL + ":" + ssCL
    document.getElementById('clock-display').innerText = timeClock;
    document.getElementById('clock-display').textContent = timeClock;
    setTimeout(showTime, 1000);
}
showTime();

// CALCULATOR 
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};
function inputDigit(digit) {
    const {displayValue, waitingForSecondOperand} = calculator;
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculator);
}
function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.'
        calculator.waitingForSecondOperand = false;
        return;
    }
    //fix: avoids a decimal being added to firstOperand after clicking operator
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}
function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator} = calculator;
    // ParseFloat converts a string (dV) to a floating-point number
    const inputValue = parseFloat(displayValue);
    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }
    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculateOperands(firstOperand, inputValue, operator);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
}
function calculateOperands(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    } 
    if (operator === '=') {
        return secondOperand;
    }
}
function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}
function updateResult() {
    const calcResult = document.querySelector('.calc-result');
    calcResult.value = calculator.displayValue;
}
updateResult();

const calculatorKeys = document.querySelector('.calc-btn');
calculatorKeys.addEventListener('click', (event) => { // access the clicked element
    const {target} = event;
    const {value} = target;
    if (!target.matches('button')) {return}
    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(value);
            break;
        case '.':
            inputDecimal(value);
            break;
        case 'calc-clear':
            resetCalculator();
            break;
        default:
            if (Number.isInteger(parseFloat(value))) {
                inputDigit(value);
            }
    }
    updateResult();
})




// let contentTable = document.getElementById('contents')
// let projContain = document.getElementsByClassName('project-container')
// let project = document.getElementsByClassName('project')
// function updateCT(arr) {
//     let list = [...arr];
//     do {
        
//         list.shift()
//     } while (list.length > 0)
// }
// console.log(project);
// console.log(projContain);
// updateCT(project);

// Table Update Functionality
// https://www.htmlgoodies.com/html5/updating-html-table-content-using-javascript/

// document.addEventListener("DOMContentLoaded", () => {
//     let table = document.querySelector('contents')
//     table.getCellTextAt = function(rowIndex, colIndex) {
//         return this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") + ':eq(' + colIndex + ')').text(); 
//     };
//     table.getCellContentsAt = function(rowIndex, colIndex) {
//         return this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") + ':eq(' + colIndex + ')').html(); 
//     };
//     table.setCellContentsAt = function(rowIndex, colIndex, newContents) {
//         this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") + ':eq(' + colIndex + ')').html('').append(newContents);
//     };
//     table.setCellTextAt = function(rowIndex, colIndex, newText) {
//         this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") + ':eq(' + colIndex + ')').text(newText);
//     };
//     table.findAndReplace = function(search, replace, options) {
//     //set default options
//     var first                  = false,
//         exact                  = false,
//         caseSensitive          = false,
//         replaceMatchedTextOnly = false;
//     //override option defaults
//     if (options) {
//         if (options['first']) first = !!options['first'];
//         if (options['exact']) exact = !!options['exact'];
//         if (options['caseSensitive']) 
//         caseSensitive = !!options['caseSensitive'];
//         if (options['replaceMatchedTextOnly']) 
//         replaceMatchedTextOnly = !!options['replaceMatchedTextOnly'];
//     }
//     var matches;
//     if (exact) {
//         if (!caseSensitive) {
//         matches = $("td").filter(function() {
//             return $(this).text().trim().toLowerCase() == search.toLowerCase();
//         });  
//         }
//         else {
//         //escape single quotes
//         matches = $("td:contains('" + search.replace(/'/g,'\$1') + "')");
//         }
//     }
//     else {
//         matches = $("td").filter(function() {
//             var match = $(this).text().trim();
//             if (!caseSensitive) {
//             search = search.toLowerCase();
//             match  = match.toLowerCase();
//             }
//             return match.indexOf(search) != -1;
//         });
//     }
//     if (first) matches = matches.first();
//     if (replaceMatchedTextOnly) replace = matches.text().replace(search, replace);

//     matches.text(replace);

//     return matches;
//     };
// end Table Update Functionality; wrapped in DOMContentLoaded listener
// });