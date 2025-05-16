import '../styles/victoryModalWindow.css'

 export function showVictoryModal() {
    const modal = document.createElement('div');
    modal.className = 'victory-modal';

    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    document.body.appendChild(modal);
}
showVictoryModal();