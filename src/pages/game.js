import { createOptionalsElement } from '../scripts/createOptionalsElement';
import { getRandomWord } from '../scripts/getRandomWord';
import { createAlphabetContent } from '../scripts/createAlphabetContent'

const generatorButton = document.querySelector(".generator");
const userInput = document.querySelector(".main__user-input");
let qustedWord = '';


const handleGenerateNewWord = async () => {
    userInput.innerHTML = ''
    const generatedWord = await getRandomWord();
    qustedWord = generatedWord;

    const optionalsElememt = createOptionalsElement(generatedWord.length)

    userInput.appendChild(optionalsElememt)
}

generatorButton.addEventListener('click', handleGenerateNewWord)

createAlphabetContent()