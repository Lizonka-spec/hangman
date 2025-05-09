const elementImage = document.querySelector('#hangman-images'); 


 export function updateImage(attempts) {
  let imageName = 'step';

  switch (attempts) {
    case 7:
      imageName += '0';
      break;
    case 6:
      imageName += '1';
      break;
    case 5:
      imageName += '2';
      break;
    case 4:
      imageName += '3';
      break;
    case 3:
      imageName += '4';
      break;
    case 2:
      imageName += '5';
      break;
    case 1:
      imageName += '6';
      break;
    case 0:
      imageName += '7';
      break;
    default:
      
  }

  elementImage.src = `/img/${imageName}.jpg`; 
}

















// let WrongAttempts = 7;

// export function updateImage() {
//     const img = document.querySelector('#hangman-images');
//     const attemptsCount = document.querySelector('#attemptsCount');

//     if (!img || !attemptsCount) {
//         console.warn('Element(s) not found: #hangman-images or #attemptsCount');
//         return;
//     }

//     let imagePath = '';

//     switch (WrongAttempts) {
//         case 7: imagePath = '../../public/img/step0.jpg'; break;
//         case 6: imagePath = '../../public/img/step1.jpg'; break;
//         case 5: imagePath = '../../public/img/step2.jpg'; break;
//         case 4: imagePath = '../../public/img/step3.jpg'; break;
//         case 3: imagePath = '../../public/img/step4.jpg'; break;
//         case 2: imagePath = '../../public/img/step5.jpg'; break;
//         case 1: imagePath = '../../public/img/step6.jpg'; break;
//         default: imagePath = '../../public/img/step7.jpg';
//     }

//     img.src = imagePath;
//     attemptsCount.textContent = WrongAttempts;
// }