import "../styles/CreateOptionalsElement.css"

export function createOptionalsElement(wordLength){
    if(wordLength.length < 1) return;

    const ulElement = document.createElement("ul");
    const optionArray = new Array(wordLength)

    for(let i = 0; i <optionArray.length; i++ ){
        const liElement = document.createElement("li");
        liElement.textContent = "__";
        ulElement.appendChild(liElement);
        ulElement.classList.add("UserInput-List");
    }

    return ulElement;
}