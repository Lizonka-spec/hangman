import { createModalContent } from './createModal';

export function showLoseModal() {
  const modal = document.getElementById('modal');

  modal.style.display = 'flex';

  createModalContent(`
        <p class="modal-text">You lose:(</p>
        <button id="restartGame">TRY AGAIN</button>    
`);

  const restartButton = document.getElementById('restartGame');

  restartButton.addEventListener('click', () => {
    modal.style.display = 'none';
    location.reload();
  });
}
