// Project1
let btnCheck = document.querySelector(".check");
let result = document.querySelector(".result");

let lettersDiv = document.querySelector(".letters");
let wordsDiv = document.querySelector(".words");
let sentencesDiv = document.querySelector(".sentences");
let numbersDiv = document.querySelector(".numbers");

let spanLetters = document.querySelector('.letters span');
let spanWords = document.querySelector('.words span');
let spanSentences = document.querySelector('.sentences span');
let spanNumbers = document.querySelector('.numbers span');

btnCheck.addEventListener("click", function (e) {
    let text = document.querySelector("textarea").value;
    if (text == "") return;
        

    let countLetters = 0;
    let countWords = 1;
    let countSentences = 0;
    let countNumbers = 0;


    let textArr = text.split('');

    // Letters,Words,Sentences,Numbers
    let symbols = ['?', ':', ".", "!"];
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let forWordsArr = [',', ' '];
    let forSentencesArr = ['?', '!', '.', "\n"];
    for (let i = 0; i < textArr.length; i++) {
        if (!symbols.includes(textArr[i]) && !numbers.includes(textArr[i])) countLetters++;
        if (forWordsArr.includes(textArr[i])) countWords++;

        if (forSentencesArr.includes(textArr[i])) countSentences++;

        if (numbers.includes(textArr[i])) countNumbers++
    }
    spanLetters.innerText = countLetters;
    spanWords.innerText = countWords;
    spanSentences.innerText = countSentences;
    spanNumbers.innerText = countNumbers;
});


// Generate background 
const generateBtn = document.querySelector(".generateBtn");
const body = document.querySelector("body");
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

generateBtn.addEventListener("click", () => {
    body.style.background = getRandomColor();
});
