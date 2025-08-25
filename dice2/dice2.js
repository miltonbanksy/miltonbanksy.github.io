let numberOfDice = document.getElementById('input_number_of_dice');
let btnRoll = document.getElementById('btn_roll');
let diceContainer = document.getElementById('dice_container');
let h1_dice_roller = document.getElementById('h1_dice_roller');

const die_faces = {
    1: "die_classic_1.png",
    2: "die_classic_2.png",
    3: "die_classic_3.png",
    4: "die_classic_4.png",
    5: "die_classic_5.png",
    6: "die_classic_6.png"
};

// Roll all dice
function rollDice(){
    let inputAsNumber = Number(numberOfDice.value);
    diceContainer.innerHTML = ""; // clear old dice
    
    let diceImages = []; // keep track of all dice
    
    for (let i = 0; i < inputAsNumber; i++){
        let newDieImg = document.createElement('img');
        newDieImg.src = "die_classic_0.png"; // placeholder before rolling
        newDieImg.height = 100;
        newDieImg.width = 100;
        newDieImg.classList.add('spinner'); // start spinning
        diceContainer.appendChild(newDieImg);
        diceImages.push(newDieImg);
    }
    
    h1_dice_roller.innerHTML = "Rolling...";

    setTimeout(() => {
        diceImages.forEach(die => {
            let roll = Math.floor(Math.random() * 6) + 1; // random 1–6
            die.src = die_faces[roll]; // set correct image
            die.classList.remove('spinner');
        });
        h1_dice_roller.innerHTML = "Dice Roller";
    }, 2000);
}

btnRoll.addEventListener('click', rollDice);
