import '../styles/victoryModalWindow.css';
import { createAttemptCounter } from './attempt-counter';

export function onWordGyuessed () {
  if(createAttemptCounter > 0) {
    showModal('vy otgadali slovo');
  } else {
    showModal('u vas zakochikis popytki');
  }
}

onWordGyuessed();