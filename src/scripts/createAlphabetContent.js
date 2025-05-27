import '../styles/alphabetContent.css'
// import {showModal} from './modalWin.js'


import { setWriteLetterIntoLi } from './insertCorrectLetters.js';

let alphabet = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
let letters = alphabet.split(", ");

function clearUsedBox(sectionAlphabet) {
    const usedBox = document.querySelector(".used-box");
    if (!usedBox) {
        console.error("Не найден элемент с классом '.used-box'!");
        return;
    }
    usedBox.innerHTML = "";
    const alphabetButtons = sectionAlphabet.querySelectorAll(".alphabet-button");
    alphabetButtons.forEach(button => {
        button.removeAttribute('disabled');
    });
}

export function createAlphabetContent() {
    const sectionAlphabet = document.querySelector(".main__alphabet");
    if (!sectionAlphabet) {
        console.error("Не найден элемент с классом '.main__alphabet'!");
        return;
    }
    const generatorButton = document.querySelector(".generator");

    generatorButton?.addEventListener('click', () => clearUsedBox(sectionAlphabet))


    for (const letter of letters) {
        const button = document.createElement("button");
        button.textContent = letter.trim();
        button.classList.add("alphabet-button");
        sectionAlphabet.appendChild(button);

        button.addEventListener('click', function createUsedBoxContent() {
            const buttonLetter = this.textContent;
            const generatedWord = localStorage.getItem('questWord');
            handleGuess(generatedWord, buttonLetter, this); 
            this.setAttribute('disabled', '')
        });
    }
}

export function handleGuess(generatedWord, buttonLetter, button) {
    const usedBox = document.querySelector(".used-box");
    if (!usedBox) {
        console.error("Не найден элемент с классом '.used-box'!");
        return;
    }
    if (typeof generatedWord === 'string' && typeof buttonLetter === 'string') {
        if (!generatedWord.toLowerCase().includes(buttonLetter.toLowerCase())) {
            console.log(true);
            const usedLetter = document.createElement("p");
            usedLetter.textContent = buttonLetter;

            usedBox.appendChild(usedLetter);
        } else {
            setWriteLetterIntoLi(buttonLetter, generatedWord);
        }     
    } else {
        console.warn("generatedWord or buttonLetter is not a string or is null.");
    }


// showModal();
}
