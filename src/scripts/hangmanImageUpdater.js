

// let WrongAtteps = 0;
// const MaxWrongAtteps = 7;


// let WrongAtteps = 7;

// export function updateImage() {
//         let img = document.querySelector('#hangman-images');
//         if (WrongAtteps >= 7) {
//             img.src = 'step0.png';
//         } else if (WrongAtteps >= 6) {
//             img.src = 'step1.jpg';
//         } else if (WrongAtteps >= 5) {
//             img.src = 'step2.jpg';
//         } else if (WrongAtteps >= 4) {
//             img.src = 'step3.jpg';
//         } else if (WrongAtteps >= 3) {
//             img.src = 'step4.jpg';
//         } else if (WrongAtteps >= 2) {
//             img.src = 'step5.jpg';
//         } else if (WrongAtteps >= 1) {
//             img.src = 'step6.jpg';
//         }
//         else {
//             img.src = 'step7.jpg';
//         }
//         document.querySelector('#attemptsCount').textContent = WrongAtteps;
//     }

//     document.querySelector('attemptButton').onclick = function() {
//         if (WrongAtteps > 0) {
//             WrongAtteps--;
//             updateImage();
//         }
//     };

//     updateImage();




















let WrongAtteps = 7;

export function updateImage() {
    let img = document.querySelector('#hangman-images');
    let imagePath = ''; // Переменная для хранения пути к изображению

    switch (WrongAtteps) {
        case 7: imagePath = 'step0.jpg'; break;
        case 6: imagePath = 'step1.jpg'; break;
        case 5: imagePath = 'step2.jpg'; break;
        case 4: imagePath = 'step3.jpg'; break;
        case 3: imagePath = 'step4.jpg'; break;
        case 2: imagePath = 'step5.jpg'; break;
        case 1: imagePath = 'step6.jpg'; break;
        default: imagePath = 'step7.jpg'; // Для WrongAtteps <= 0
    }

    img.src = imagePath;
    document.querySelector('#attemptsCount').textContent = WrongAtteps;
}

// Обработчик клика только один раз
document.querySelector('#attemptButton').onclick = function() {
    if (WrongAtteps > 0) {
        WrongAtteps--;
        updateImage();
    }
};

updateImage();

