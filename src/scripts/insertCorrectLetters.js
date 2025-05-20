import { showWinModal } from './modalWin.js';

export function findAllIndexes(generatedWord, buttonLetter) {
    if (typeof generatedWord !== 'string' || typeof buttonLetter !== 'string') {
        console.warn("findAllIndexes: generatedWord or buttonLetter is not a string or is null.");
        return []; 
    }

    const indexes = [];
    const lowerGeneratedWord = generatedWord.toLowerCase();
    const lowerButtonLetter = buttonLetter.toLowerCase();
    let pos = lowerGeneratedWord.indexOf(lowerButtonLetter);

    while (pos !== -1) {
        indexes.push(pos);
        pos = lowerGeneratedWord.indexOf(lowerButtonLetter, pos + 1);
    }

    return indexes;
}

export function setWriteLetterIntoLi(buttonLetter, generatedWord) {
    const liElements = document.querySelectorAll('ul li');

    const indexesToChange = findAllIndexes(generatedWord, buttonLetter);
    console.log('indexesToChange = ', indexesToChange)

    indexesToChange.forEach(index => {
        if (index >= 0 && index < liElements.length) {
            console.log('indexLetter = ', index)
            liElements[index].textContent = buttonLetter;
        }
    });
        showWinModal()
}


