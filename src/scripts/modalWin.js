const modalContent = document.querySelector('.modal-content');


export const createModalWin = (content) => {
    modalContent.innerHTML = content;
}


 export function showGameWin() {
    const modal = document.querySelector('#gameWinModal');
    modal.style.display = 'flex';
}











