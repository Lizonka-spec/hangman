import '../styles/style-rules.css';

export const toggleModalRules = () => {
    const closeBtn = document.getElementById('close');
    
    const modal = document.getElementById('modal');
    
    modal.classList.toggle("open")
    closeBtn.addEventListener('click', toggleModalRules)  
}