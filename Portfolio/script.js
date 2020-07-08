
const words = ['DEVELOPER','DESIGNER'];
let countWords = 0;
let index = 0;
let currentWord = '';
let letter = '';


(function type(){

    if(countWords === words.length){
        countWords = 0;
    }
    currentWord = words[countWords];
    letter = currentWord.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentWord.length){
        countWords++;
        index =0;
    }
    setTimeout(type,400);
}());

