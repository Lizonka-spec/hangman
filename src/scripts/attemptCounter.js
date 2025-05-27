import { createModalContent } from './createModal.js';
import { getRandomWord } from './getRandomWord.js';
import { updateImage } from './hangmanImageUpdater.js';
// import {showModal} from './modalWin.js'




let maxAttempts = 7;
let currentAttempts = maxAttempts;
const modalLose = document.querySelector('.modal');
const gameOverModal = document.getElementById('gameOverModal');
const headerContent = document.querySelector(".header-content")

export function createAttemptCounter() {
    const counterDiv = document.createElement('div');
    counterDiv.id = 'attempt-counter';
    headerContent.appendChild(counterDiv);
}

export function updateAttemptCounter() {
    const counterDiv = document.getElementById('attempt-counter');
    if (counterDiv) {
        counterDiv.textContent = `Number of attempts: ${currentAttempts}`;
    }
}

export function decrementAttempts() {
    if (currentAttempts > 0) {
        currentAttempts--;
        updateAttemptCounter();
        updateImage(currentAttempts);
    }
}

export function resetAttempts() {
    currentAttempts = maxAttempts;
    updateAttemptCounter();
}

export function getCurrentAttempts() {
    return currentAttempts;
}

getRandomWord(); 

export function checkLetterInWord(letter) {
    const generatedWord = localStorage.getItem('questWord');

    if (!generatedWord) {
        console.error("Загаданное слово не найдено в localStorage.");
        return false;
    }

    return generatedWord.toLowerCase().includes(letter.toLowerCase());
}

let guessedLetters = new Set(); 

const handleGuess = (letter) => {
    guessedLetters.add(letter);
    
    if (checkLetterInWord(letter)) {
        console.log(`Буква "${letter}" есть в слове!`);
    // showModal();

    } else {
        console.log(`Буква "${letter}" отсутствует в слове.`);
        decrementAttempts();
        
        if (getCurrentAttempts() <= 0) {
            modalLose.classList.add('open');
            createModalContent(`
                <p class="modal-text">You lose:(</p>
                <button id="restartGame">TRY AGAIN</button>    
            `)

            const restartButton = document.getElementById('restartGame');

            restartButton.addEventListener('click',() => {
                gameOverModal.style.display = 'none';
                location.reload(); 
            });
        }
    }
};

createAttemptCounter();

document.addEventListener('DOMContentLoaded', () => {
    const letterButtons = document.querySelectorAll('.alphabet-button');
    
    if (letterButtons.length === 0) {
        console.error("Нет кнопок с классом '.alphabet-button'.");
    } else {
        letterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const letter = button.textContent.trim().toUpperCase(); 
                handleGuess(letter); 
            });
        });
    }
});