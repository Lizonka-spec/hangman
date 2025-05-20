const modalContent = document.querySelector('.modal-content');

export const createModalContent = (content) => {
    modalContent.innerHTML = content;
}

export function showGameWin() {
    const modal = document.getElementById('gameWinModal');
    modal.style.display = 'flex';
}

export function showWinModal() {
    const liElements = document.querySelectorAll('ul li');
    // Проверяем, есть ли элементы li вообще
    if (liElements.length === 0) {
        console.warn("Нет элементов <li> для проверки победы.");
        return; // Выходим из функции, если нет элементов
    }

    // Проверяем, все ли элементы li содержат не черточки
    const allLettersGuessed = Array.from(liElements).every(li => li.textContent !== '_');

    if (allLettersGuessed) {
        showGameWin(); // Показываем модальное окно победы
    }
}




