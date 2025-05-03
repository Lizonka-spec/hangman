let WrongAtteps = 0;
const MaxWrongAtteps = 7;
const hangmanImage = document.querySelector('#hangman-images');
const messageDiv = document.querySelector('.header-content > p');


function updateHangmanImage() {
    if (WrongAtteps <= MaxWrongAtteps) {
        hangmanImage.src = `../../public/img/hangmansbody.png/step${WrongAtteps - 1}.jpg`;
    }
}


export function addWrongAtteps() {
    WrongAtteps++;
    updateHangmanImage(); 
    if (WrongAtteps === MaxWrongAtteps) {
        hangmanImage.src = `../../public/img/hangmansbody.png/step${WrongAtteps - 1}.jpg`; 
        messageDiv.textContent = "You Lose!";
   
    }
}


    if (!qustedWord.includes(selectedLetter)) {
        addWrongAtteps(); 
    } else {
    
    }
    
