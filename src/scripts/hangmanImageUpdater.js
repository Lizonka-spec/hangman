import { getCurrentAttempts } from './attempt-counter';

// let WrongAtteps = 0;
// const MaxWrongAtteps = 7;


   let WrongAtteps = 7;

export function updateImage() {
        let img = document.querySelector('#hangman-images');
        if (WrongAtteps >= 7) {
            img.src = 'step0.png';
        } else if (WrongAtteps >= 6) {
            img.src = 'step1.png';
        } else if (WrongAtteps >= 5) {
            img.src = 'step2.png';
        } else if (WrongAtteps >= 4) {
            img.src = 'step3.png';
        } else if (WrongAtteps >= 3) {
            img.src = 'step4.png';
        } else if (WrongAtteps >= 2) {
            img.src = 'step5.png';
        } else if (WrongAtteps >= 1) {
            img.src = 'step6.png';
        } else if (WrongAtteps >= 0) {
            img.src = 'step7.png';
        } 
        else {
            img.src = 'step4.png';
        }
        document.getElementById('attemptsCount').textContent = WrongAtteps;
    }

    document.getElementById('attemptButton').onclick = function() {
        if (WrongAtteps > 0) {
            WrongAtteps--;
            updateImage();
        }
    };

    updateImage();