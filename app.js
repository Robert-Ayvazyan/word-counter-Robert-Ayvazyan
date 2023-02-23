// Project1
let btnCheck = document.querySelector(".check");
let result = document.querySelector(".result");

let lettersDiv = document.querySelector(".letters");
let wordsDiv = document.querySelector(".words");
let sentencesDiv = document.querySelector(".sentences");
let numbersDiv = document.querySelector(".numbers");


let spanLetters =document.querySelector('.letters span');
let spanWords=document.querySelector('.words span');
let spanSentences =document.querySelector('.sentences span');
let spanNumbers =document.querySelector('.numbers span');

btnCheck.addEventListener("click", function (e) {
  let text = document.querySelector("textarea").value;

  let itemsArr = text.split("");
  let wordsArr = text.split(" ");
  let sentencesArr = text.split(".");

  let countLetters = 0;
  let countWords = 1;
  let countSentences = 0;
  let countNumbers = 0;

  if (text == "") {
    return;
  }

  let regexpLetters = /[a-zA-Z]/g;
  let regexpNumbers = /[0-9]/g;

  for (let i = 0; i < wordsArr.length; i++) {}
  for (let i = 0; i < itemsArr.length; i++) {
    wordsArr[0].trimStart();
    wordsArr[wordsArr.length - 1].trimEnd();

    if (itemsArr[i] == " " || itemsArr[i] == ":") {
      countWords++;
    }
    if (itemsArr[i] == "\n" || itemsArr[i] == ".") {
      countSentences++;
    }
  }

  let lettersArr = text.match(regexpLetters);

  if (lettersArr != null) countLetters = lettersArr.length;

  let numbersArr = text.match(regexpNumbers);
  if (numbersArr != null) countNumbers = numbersArr.length; //

  spanLetters.innerText = countLetters;

  spanWords.innerText = countWords;

  spanSentences.innerText = countSentences;

  spanNumbers.innerText = countNumbers;
   
});




// Generate background 
const generateBtn = document.querySelector(".generateBtn");
const body = document.querySelector("body");
let colors = [
  "lightyellow",
  "aquamarine",
  "palegreen",
  "darkcyan",
  'lightpink',
  'lightsteelblue',
  'lightred'
];

generateBtn.addEventListener("click", () => {
  let indexColor = random(0, colors.length);
  body.style.background = colors[indexColor];
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}