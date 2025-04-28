import '../styles/style.css';
import '../styles/button-start.css'

import { createModal } from "../templates/createModal";
import { toggleModalRules } from "../scripts/toggleModalRules";
import { showInstList } from '../scripts/showInstList';

const toggleModalButton = document.querySelector('.button1');
const modalContainer = document.getElementById("modal");
modalContainer.innerHTML = createModal();
const toggleButton = document.querySelector('.fa-brands.fa-instagram');
toggleButton.addEventListener("click", showInstList);




toggleModalButton.addEventListener("click", toggleModalRules)
