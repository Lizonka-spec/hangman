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