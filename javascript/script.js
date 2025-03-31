const throwDiceBtn = document.getElementById("throwDiceBtn");
const diceValue = document.getElementsByClassName("diceValue");

throwDiceBtn.addEventListener("click", () => {
    displayDices();
});

const displayDices = () => {
    let diceValue = document.querySelectorAll(".dice .diceValue");

    diceValue.forEach((dice, index) => {
        dice.innerText = generateRandomNumberOneToSix();
    });
};

const generateRandomNumberOneToSix = () => {
    let number = Math.floor(Math.random() * 6) + 1;
    return number;
};
