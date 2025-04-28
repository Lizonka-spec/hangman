export const createModal = () => {
    return `
    <div class="fullrules">
        <span class="close" id="close">&times; close</span>
        <p class="textrules">
            Виселица - игра, в которой вам нужно угадывать различные слова на заданные темы. 
             <br>  <h4> Ход игры:</h4>
               <br> 1) Вы генерируете слово
               <br> 2) Получаете количество букв 
               <br> 3) Угадываете слово по буквам 
                 <br> 4) Если ошибётесь 7 раз-проиграете
        </p>
    </div>
    `
}