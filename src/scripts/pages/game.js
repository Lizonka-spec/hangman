import { createOptionalsElement } from '../createOptionalsElement';
import { getRandomWord } from '../getRandomWord';
import { createAlphabetContent } from '../createAlphabetContent';
import { createAttemptCounter, resetAttempts } from '../attemptCounter';
import { findAllIndexes } from '../insertCorrectLetters';

import '../../styles/wordGenerator.css';
import '../../styles/adaptive.css'

const generatorButton = document.querySelector('.generator');
const userInput = document.querySelector('.main__user-input');

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

document.addEventListener('DOMContentLoaded', handleGenerateNewWord);
generatorButton.addEventListener('click', handleGenerateNewWord);

createAlphabetContent();
findAllIndexes();
