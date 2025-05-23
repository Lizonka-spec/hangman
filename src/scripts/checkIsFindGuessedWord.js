export const checkIsFindGuessedWord = () => {
  const generatedWord = localStorage.getItem('questWord');
  const liElements = document.querySelectorAll('li');

  const guessedWord = Array.from(liElements)
    .map((item) => item.textContent)
    .join('')
    .toLowerCase();

  console.log(guessedWord, generatedWord);

  if (generatedWord && guessedWord.match(generatedWord)) {
    return true;
  }

  return false;
};
