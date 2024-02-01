document.getElementById('hard').addEventListener('click', function() {
    let hardUl = document.getElementById('hard-ul');
    hardUl.classList.toggle('expanded');
});

document.getElementById('soft').addEventListener('click', function() {
    let softText = document.getElementById('soft-text');
    softText.classList.toggle('expanded');
});

document.getElementById('top-projects').addEventListener('click', function() {
    let projectsUl = document.getElementById('ul-projects');
    projectsUl.classList.toggle('expanded');
});

function flipCard(card) {
    const flipCardFront = card.querySelector('.front-card');
    const flipCardBack = card.querySelector('.back-card');
    flipCardFront.classList.add('flipped');
    flipCardBack.classList.add('flipped');
}

function unflipCard(card) {
    const flipCardBack = card.querySelector('.back-card');
    const flipCardFront = card.querySelector('.front-card');
    flipCardBack.classList.remove('flipped');
    flipCardFront.classList.remove('flipped');
}

let state = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slider');
    const allSlides = document.querySelectorAll('.slide').length;
console.log(state, allSlides, slides, direction);
    state = (state + direction + allSlides) % allSlides;

    const transValue = -state * 100 + '%';
    slides.style.transform = 'translateX(' + transValue + ')';

    
}