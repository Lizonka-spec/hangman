import { createOptionalsElement } from '../scripts/createOptionalsElement';
import { getRandomWord } from '../scripts/getRandomWord';
import { createAlphabetContent } from '../scripts/createAlphabetContent';
import { createAttemptCounter, decrementAttempts, getCurrentAttempts, resetAttempts } from '../scripts/attempt-counter';

import{ showGameOver }  from '../scripts/modalLose';

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
    const attemps = getCurrentAttempts();
    

    if (!qustedWord.includes(letterLower)) {
        decrementAttempts();

        if (attemps <= 0) {
            // Показываем модальное окно проигрыша
            showGameOver();
        }
    }
}

createAlphabetContent(handleGuess);