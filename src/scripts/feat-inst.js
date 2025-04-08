

const toggleButton = document.querySelector('.fa-brands.fa-instagram');
const nicknameList = document.getElementById('nicknameList');

export const featinst = () =>{

toggleButton.addEventListener('click', function() {

  if (nicknameList.style.display === 'none') {
    nicknameList.style.display = 'block';
  } else {

    nicknameList.style.display = 'none';
  }
});
}
nicknameList.style.display = 'none';

