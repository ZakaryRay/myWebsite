const throwDiceBtn = document.getElementById("throwDiceBtn");
const diceValue = document.getElementsByClassName("diceValue");
const diceOne = document.getElementById("numOne");
const diceTwo = document.getElementById("numtwo");
const diceThree = document.getElementById("numThree");
const diceFour = document.getElementById("numFour");
const diceFive = document.getElementById("numFive");
const diceSix = document.getElementById("numSix");

let dices = {};

throwDiceBtn.addEventListener("click", () => {
    dices = {
        diceOne: generateRandomNumberOneToSix(),
        diceTwo: generateRandomNumberOneToSix(),
        diceThree: generateRandomNumberOneToSix(),
        diceFour: generateRandomNumberOneToSix(),
        diceFive: generateRandomNumberOneToSix(),
        diceSix: generateRandomNumberOneToSix(),
    };
    displayDiceOne(generateRandomNumberOneToSix());
    console.log(dices.diceOne);
});

const displayDiceOne = (randomNum) => {
    diceOne.innerText = dices.diceOne;
};

const generateRandomNumberOneToSix = () => {
    let number = Math.floor(Math.random() * 6) + 1;
    return number;
};
