const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const main = document.getElementById('main');
const color = document.getElementById('color');

btn.addEventListener("click", function() {
    let index = randomNumber();
    main.style.backgroundColor = colors[index];
    color.textContent = colors[index];
});


function randomNumber() {
    return Math.floor(Math.random() * colors.length);
}