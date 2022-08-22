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
let timerRef = document.querySelector('stopwatch-time');  
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

// AGE CHECKER
var ageResponse = document.querySelector('ageCheckText'); 
var ageInput = document.querySelector('ageCheckerInput'); 
ageInput.addEventListener('input', checkAge); 
function checkAge() {
    var ageCheckerAge = Number(ageInput.value);
    if (ageCheckerAge < 16) {
        ageResponse.textContent = 'You can\'t drive.';
    } else if (ageCheckerAge < 18) {
        ageResponse.textContent = 'Old 2011 music reference, look at me now.';
    } else if (ageCheckerAge < 21) {
        ageResponse.textContent = 'Okay, but you can\'t drink.';
    } else if (ageCheckerAge < 25) {
        ageResponse.textContent = 'I bet you chose between cocaine and Ubering tonight.';
    } else if (ageCheckerAge < 30) {
        ageResponse.textContent = 'It never stops.';
    } else if (ageCheckerAge >= 30) {
        ageResponse.textContent = 'Live while you can.';
    } else {
        ageResponse.textContent = 'How old are you?';
        console.log(ageCheckerAge);
    }
}

// TEMP CONVERT
document.querySelector('tempInput').addEventListener('input', tempConvert)
function tempConvert() {
    let tempGiven = Number(document.querySelector('tempInput').value);
    let temp = tempGiven * 1.8 + 32
    document.querySelector('tempText').innerText = temp;
};

// MAGIC NUMBER CUBE
function differenceAlert(s, t) {
    alert(Math.max(s, t) - Math.min(s, t));
}
function division(x, y, z) {
    console.log(x / y / z);
}
function multiplication(j, k, l) {
    return j * k * l;
}
function compression(m, n, o) {
    let p = m + n;
    return p % o;
}
function wizardry(a, b, c, d) {
    let e = a * b;
    let f = c + d;
    if (e > 100) {
        console.log(e + f)
    } else if (e < 100) {
        console.log(Math.max(c, d) - Math.min(c, d));
    } else if (e === 100) {
        alert((a * b * c) % d);
    }
    console.log(a, b, c, d, e, f, (Math.max(c, d) - Math.min(c, d)))
}