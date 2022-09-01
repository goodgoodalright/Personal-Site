var datetime = new Date();
console.log(datetime);
document.querySelector('.datetime').textContent = datetime;
function refreshTime() {
     const dt = document.querySelector('.datetime');
     const dtText = new Date().toLocaleString();
     const datetimeText = dtText.replace(", ", " - ");
     dt.textContent = datetimeText;
}
     setInterval(refreshTime, 1000);

let datetimeTwo = new Date().toDateString();
document.querySelector('.datetimeTwo').textContent = datetimeTwo;
let datetimeThree = new Date().toLocaleTimeString();
document.querySelector('.datetimeThree').textContent = datetimeThree;