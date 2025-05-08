import '../styles/alphabetContent.css'

let alphabet = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"
let letters = alphabet.split(", ")
const usedBox = document.querySelector(".used-box");

export function createAlphabetContent() {
    for (const letter of letters) {
        const button = document.createElement("button");
        button.textContent = letter.trim();
        button.classList.add("alphabet-button")
        const sectionAlphabet = document.querySelector(".main__alphabet");
        sectionAlphabet.appendChild(button)

        const generatorButton = document.querySelector(".generator");
        generatorButton.addEventListener('click', function CleanseUsedBox() {
            usedBox.innerHTML = "";
        })

        button.addEventListener('click', function createUsedBoxContent() {
            const buttonLetter = button.textContent;
            const generatedWord = localStorage.getItem('questWord');
            // if (generatedWord.includes(buttonLetter)){
            const usedLetter = document.createElement("p")
            usedLetter.textContent = buttonLetter
            const usedBox = document.querySelector(".used-box");
            usedBox.appendChild(usedLetter)
            // }
            button.setAttribute('disabled', '')
        })
    }
}