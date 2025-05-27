export function showGameWin() {
    const modal = document.getElementById('gameWinModal');
    modal.style.display = 'flex';        
    createModalContent(`        
        <p class="modal-text">You Win!</p>
        <button id="restartGame">TRY AGAIN</button>
    `);

}
        


export function showModal() {

    const liElements = document.querySelectorAll('li'); 
    const guessedWord = Array.from(liElements).map(item => item.textContent).join('');

    const originalWord = localStorage.getItem('questWord'); 

    if (originalWord && guessedWord === originalWord) {

        showGameWin();
    } 
}

 