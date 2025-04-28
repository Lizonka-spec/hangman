import '../styles/wordGenerator.css'

export async function getRandomWord() {
        try {
            const response = await fetch('https://random-word-api.herokuapp.com/word');
            
            if(!response.ok){
                throw new Error("we couldn't find the word");
            }
            
            const data = await response.json();
            return data[0];
        } catch (error) {
            console.log(error.message);   
        }
}