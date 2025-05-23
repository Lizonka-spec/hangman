import { createOptionalsElement } from '../createOptionalsElement';
import { getRandomWord } from '../getRandomWord';
import { createAlphabetContent } from '../createAlphabetContent';
import { createAttemptCounter, decrementAttempts, getCurrentAttempts, resetAttempts } from '../attemptCounter';
import { findAllIndexes } from '../insertCorrectLetters';

import '../../styles/wordGenerator.css'

const generatorButton = document.querySelector(".generator");
const userInput = document.querySelector(".main__user-input");

createAttemptCounter();

const handleGenerateNewWord = async () => {
    userInput.innerHTML = '';
    resetAttempts();
    const generatedWord = await getRandomWord();
    const optionalsElememt = createOptionalsElement(generatedWord.length);
    userInput.appendChild(optionalsElememt);

    localStorage.setItem('questWord', generatedWord);
    console.log(generatedWord);
};


generatorButton.addEventListener('click', handleGenerateNewWord);

const handleGuess = (letter) => {
    const letterLower = letter.toLowerCase();
    const attemps = getCurrentAttempts();
    

    if (!qustedWord.includes(letterLower)) {
        decrementAttempts();

        if (attemps <= 0) {
            showGameOver();
        }
    }
}

createAlphabetContent(handleGuess);
findAllIndexes();