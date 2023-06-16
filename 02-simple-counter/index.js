let counterElement = document.getElementById('counter');
let decrementBtn = document.getElementById('decrement');
let incrementBtn = document.getElementById('increment');
let resetBtn = document.getElementById('reset');

let counter = 0;

counterElement.textContent = counter;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
resetBtn.addEventListener('click', reset);


function increment() {
    counterElement.textContent = ++counter;
    colorCounterElement(counterElement, counter);
}

function decrement() {
    counterElement.textContent = --counter;
    colorCounterElement(counterElement, counter);
}

function reset() {
    counter = 0;
    counterElement.textContent = counter;
    colorCounterElement(counterElement, counter);
}

function colorCounterElement(element, counter) {
    if(counter > 0) {
        element.style.color = '#2ecc71';
    }
    else if(counter < 0) {
        element.style.color = 'red';
    }
    else {
        element.style.color = '#000';
    }
}