import { createOptionalsElement } from '../scripts/createOptionalsElement';
import { getRandomWord } from '../scripts/getRandomWord';
import { createAlphabetContent } from '../scripts/createAlphabetContent';
import { createAttemptCounter, decrementAttempts, resetAttempts } from '../scripts/attempt-counter';
import {showVictoryModal} from '../scripts/victoryModalWindow'; 



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
}


generatorButton.addEventListener('click', handleGenerateNewWord);

const handleGuess = (letter) => {
    const letterLower = letter.toLowerCase();

    if (!qustedWord.includes(letterLower)) {
        decrementAttempts();

        if (getCurrentAttempts() <= 0) {
            messageDiv.textContent = "You Lose :(";
        }
    } 
}
createAlphabetContent(handleGuess);

