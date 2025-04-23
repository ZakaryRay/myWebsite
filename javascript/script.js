const throwDiceBtn = document.getElementById("throwDiceBtn");
const diceValue = document.getElementsByClassName("diceValue");

throwDiceBtn.addEventListener("click", () => {
    displayDicesAndVerifyIfChecked();
});

const displayDicesAndVerifyIfChecked = () => {
    const diceValue = document.querySelectorAll(".dice .diceValue");

    let dice = diceValue.forEach((dice) => {
        dice.innerText = generateRandomNumberOneToSix();
        return dice.innerText;
    });

    const checkBoxes = document.querySelectorAll(".dice input");

    checkBoxes.forEach((box, index) => {
        if (box.checked) {
            console.log(`box number ${index + 1} checked : `);
        }
    });
};

const generateRandomNumberOneToSix = () => {
    let number = Math.floor(Math.random() * 6) + 1;
    return number;
};
