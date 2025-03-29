const throwDiceBtn = document.getElementById("throwDiceBtn");
const diceValue = document.getElementsByClassName("diceValue");

throwDiceBtn.addEventListener("click", () => {
    displayDiceOne(generateRandomNumberOneToSix());
});

const displayDiceOne = (randomNum) => {
    diceNumOne.innerText = randomNum;
};

const generateRandomNumberOneToSix = () => {
    let number = Math.floor(Math.random() * 6) + 1;
    return number;
};
