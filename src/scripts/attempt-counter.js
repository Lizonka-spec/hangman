
import { getRandomWord } from './getRandomWord';

async function showWord() {
    const word = await getRandomWord();
    console.log('Сгенерированное слово:', word);
}

showWord();