// MES DECLARATIONS DE VARIABLES //

let easy = document.querySelector('.easy');
let medium = document.querySelector('.medium');
let hard = document.querySelector('.hard');
let mastermind = document.querySelector('.mastermind');
let buttons = document.querySelector('.difficulty');
let easyCards = document.querySelector('.easy-cards');
let mediumCards = document.querySelector('.medium-cards');
let hardCards = document.querySelector('.hard-cards');
let mastermindCards = document.querySelector('.mastermind-cards');
let landingPage = document.querySelector('.landing-page');
let imageTable = [];


// MES FONCTIONS //



// CODE EASY //
easy.addEventListener ('click', function() {
    easyCards.classList.add('easy-cards-active')
    buttons.style.display = 'none';
})

// CODE MEDIUM //

medium.onclick = function() {
    mediumCards.classList.add('medium-cards-active')
    buttons.style.display = 'none';
}

// CODE HARD

hard.onclick = function() {
    hardCards.classList.add('hard-cards-active')
    buttons.style.display = 'none';
}

// CODE MASTERMIND //

mastermind.onclick = function() {
    mastermindCards.classList.add('mastermind-cards-active')
    buttons.style.display = 'none';
}
    
