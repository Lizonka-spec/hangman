import { getRandomWord } from '../scripts/getRandomWord';

const generatorButton = document.querySelector(".generator");
const wordElement = document.querySelector(".wordElement");

generatorButton.addEventListener("click", async function() {
    const generatedWord = await getRandomWord();
    wordElement.textContent = generatedWord;
});