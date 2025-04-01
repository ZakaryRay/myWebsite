const throwDiceBtn = document.getElementById("throwDiceBtn");

throwDiceBtn.addEventListener("click", () => {
    displayDices();
    verifyIfCheckBoxAreChecked();
});

const generateRandomNumberOneToSix = () => {
    let number = Math.floor(Math.random() * 6) + 1;
    return number;
};
let diceValue = document.querySelectorAll(".dice .diceValue");

const displayDices = () => {
    diceValue.forEach((dice, index) => {
        dice.innerText = generateRandomNumberOneToSix();
    });
};

const checkBox = document.querySelectorAll(".dice input");

checkBox.forEach((box, index) => {
    box.addEventListener("change", () => {
        if (box.checked) {
            console.log(`Box number ${index + 1} is checked`);
        } else {
            console.log(`Box number ${index + 1} is not checked`);
        }
    });
});

const verifyIfCheckBoxAreChecked = () => {
    checkBox.forEach((box) => box.dispatchEvent(new Event("change")));
};
