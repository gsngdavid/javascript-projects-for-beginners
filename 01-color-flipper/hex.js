const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const main = document.getElementById('main');
const color = document.getElementById('color');

btn.addEventListener("click", function() {
    let randomHex = "#";
    for(let i = 0; i < 6; i++) {
        randomHex += hex[randomNumber()]
    }
    main.style.backgroundColor = randomHex;
    color.textContent = randomHex;
});


function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}