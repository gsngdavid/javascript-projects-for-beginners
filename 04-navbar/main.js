const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

function toggleLinks() {
    links.classList.toggle('show-links');
}

navToggle.addEventListener('click', toggleLinks);