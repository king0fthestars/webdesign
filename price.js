const lowFi = document.getElementById("low-fi");
const lowFiSum = document.getElementById("low-fi-sum");
const highFi = document.getElementById("high-fi");
const frontend = document.getElementById("frontend");
const animations = document.getElementById("animations");
const animationsSum = document.getElementById("animations-sum");
const database = document.getElementById("database");
const hosting = document.getElementById("hosting");
const hostingSum = document.getElementById("hosting-sum");
const admin = document.getElementById("admin");
const adminSum = document.getElementById("admin-sum");
const sumAll = document.getElementById("sum-all");

document.addEventListener('DOMContentLoaded', openPopUp);

function openPopUp() {
    const popUp = document.getElementById("pop-up");
    popUp.style.display = "block";
}

function closePopUp() {
    const popUp = document.getElementById("pop-up");
    popUp.style.display = "none"
}

function updateAnimations() {
    const selectedValue = parseInt(lowFi.value);

    while (animations.options.length > 0) {
        animations.options.remove(0)
    }

    for (let i = 0; i <= selectedValue; i++) {
        const option = new Option(i, i);
        animations.add(option);
    }

    lowFiSum.innerHTML = "<h3>+ " + selectedValue * 40 + "PLN</h3>";
    highFi.innerHTML = "<h3>+ " + selectedValue * 2 * 50 + "PLN</h3>";
    frontend.innerHTML = "<h3>+ " + selectedValue * 2 * 70 + "PLN</h3>";
}

lowFi.addEventListener("change", updateAnimations);

updateAnimations();

function animationsCalc() {
    const selectedValue = parseInt(animations.value);
    animationsSum.innerHTML = "<h3>+ " + selectedValue * 70 + "PLN</h3>";
}

animations.addEventListener("change", animationsCalc);

animationsCalc();

function hostingCheck() {
    if (hosting.checked) {
        hostingSum.innerHTML = "<h3>+ 200PLN</h3>";
    }
}

function adminCheck() {
    if (admin.checked) {
        adminSum.innerHTML = "<h3>+ " + 600 * 6 + "PLN</h3>";
    }
}


function sumAllPrice() {
    const lowFiValue = parseInt(lowFi.value);
    const animationsValue = parseInt(animations.value);
    let hostCheck = 0;
    let adminCheck = 0;
    
    if (hosting.checked) {
        hostCheck = 200;
    }

    if (admin.checked) {
        adminCheck = 600 * 6;
    }

    const sum = lowFiValue * 40 + lowFiValue * 2 * 50 + lowFiValue * 2 * 70 + animationsValue * 70 + hostCheck + adminCheck;

    sumAll.innerHTML = "<h3 id='sum-all-bg'>Za cały projekt wychodzi około: " + sum + "PLN</h3>";

}