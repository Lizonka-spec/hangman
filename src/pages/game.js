import { createOptionalsElement } from '../scripts/createOptionalsElement';
import { getRandomWord } from '../scripts/getRandomWord';
import { createAlphabetContent } from '../scripts/createAlphabetContent';
import { createAttemptCounter, decrementAttempts, resetAttempts } from '../scripts/attempt-counter'; // Импортируем функции

const generatorButton = document.querySelector(".generator");
const userInput = document.querySelector(".main__user-input");

// Создаем счетчик попыток при загрузке игры
createAttemptCounter();

const handleGenerateNewWord = async () => {
    userInput.innerHTML = '';
    resetAttempts(); // Сбрасываем количество попыток при генерации нового слова
    const generatedWord = await getRandomWord();
    const optionalsElememt = createOptionalsElement(generatedWord.length);
    userInput.appendChild(optionalsElememt);

    localStorage.setItem('questWord', generatedWord);
}

generatorButton.addEventListener('click', handleGenerateNewWord);

// Обновляем логику угадывания буквы, чтобы уменьшать количество попыток
const handleGuess = (letter) => {
     const letterLower = letter.toLowerCase();

     if (!qustedWord.includes(letterLower)) {
         decrementAttempts(); // Уменьшаем количество оставшихся попыток

         if (getCurrentAttempts() <= 0) {
             messageDiv.textContent = "You Lose :(";
         }
     } else {
         // Логика для правильного угадывания буквы...
     }
}
createAlphabetContent(handleGuess);