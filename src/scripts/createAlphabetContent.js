import '../styles/alphabetContent.css'

let alphabet = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"
let letters = alphabet.split(", ")

export function createAlphabetContent() {
    for (const letter of letters) {
        const button = document.createElement("button");
        button.textContent = letter.trim();
        button.classList.add("alphabet-button")
        const sectionAlphabet = document.querySelector(".main__alphabet");
        sectionAlphabet.appendChild(button)
    }
}
