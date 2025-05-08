export const createModal = () => {
    return `
    <div class="fullrules">
        <span class="close" id="close">&times; close</span>
        <p class="textrules">
            Hangman is a game in which you need to guess words on given topics. 
                <br> <h4> Game progress:</h4>
                <br> 1) You generate a word
                <br> 2) You get the number of letters
                <br> 3) Guess the word by letters
                <br> 4) If you make a mistake 7 times, you lose
        </p>
    </div>
    `
}