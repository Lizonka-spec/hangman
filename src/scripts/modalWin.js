const modalContent = document.querySelector('.modal-content');

export const createModalContent = (content) => {
    modalContent.innerHTML = content;
}

export function showGameWin() {
    const modal = document.getElementById('gameWinModal');
    modal.style.display = 'flex';
}



export function showWinModal(generatedWordLength) {  
    const liElements = document.querySelectorAll('ul li');
    const allLettersGuessed = Array.from(liElements).every(li => li.textContent !== '_');

    if (AllLettersGuessed & Array.from(liElements).length === generatedWordLength) {
            modalWin.classList.add('open');
            createModalContent(`
                <p class="modal-text">You Win(</p>
                <button id="restartGame">TRY AGAIN</button>    
            `)       
    }
}









