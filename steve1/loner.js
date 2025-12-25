const oracleTable = {
    advantage: {name: "Likely / Advantage", numberOfChanceDice: 2, numberOfRiskDice: 1},
    equal: {name: "50-50 / Equal Chance", numberOfChanceDice: 1, numberOfRiskDice: 1},
    disadvantage: {name: "Unlikely / Disadvantage", numberOfChanceDice: 1, numberOfRiskDice: 2}
};

const btnOracleLikely = document.getElementById('btn-oracle-likely');
const btnOracleEqual = document.getElementById('btn-oracle-equal');
const btnOracleUnlikely = document.getElementById('btn-oracle-unlikely');
const groupBtnsOracle = document.getElementById('group-btns-oracle');
const displayOracleResult = document.getElementById('display-oracle-result');

const twistCounterMax = 3;
let twistCounter = 0;

// Dynamically Add Oracle Buttons:
Object.values(oracleTable).forEach(key => {
    const btnOracle = document.createElement('button');
    const lineBreak = document.createElement('br');
    btnOracle.classList.add('btn-oracle');
    btnOracle.innerText = key.name;

    btnOracle.dataset.numberOfChanceDice = key.numberOfChanceDice;
    btnOracle.dataset.numberOfRiskDice = key.numberOfRiskDice;

    groupBtnsOracle.appendChild(btnOracle);
    groupBtnsOracle.appendChild(lineBreak);
});


// // LISTENERS:
groupBtnsOracle.addEventListener('click', function(event) {

    if (event.target && event.target.classList.contains('btn-oracle')) {
        
        const numberOfChanceDice = event.target.dataset.numberOfChanceDice;
        const numberOfRiskDice = event.target.dataset.numberOfRiskDice;

        let numberOfChanceDiceAsNumber = numberOfChanceDice;
        let numberOfRiskDiceAsNumber = numberOfRiskDice;
        
        rollOracleDice(numberOfChanceDiceAsNumber, numberOfRiskDiceAsNumber);
    }
});

// // HELPER FUNCTIONS:
function rollxd6(numberOfDice) {
    
    let pool = [];
    
    for (let i = 0; i < numberOfDice; i++) {
        const diceResult = Math.floor(Math.random() * 6) + 1;
        pool.push(diceResult);
    }
    
    return pool;
};

function rollOracleDice(chanceNumber, riskNumber) {
    
    const poolChanceDice = rollxd6(chanceNumber);
    const poolRiskDice = rollxd6(riskNumber);
    
    sortArrayHighestToLowest(poolChanceDice);
    sortArrayHighestToLowest(poolRiskDice);
    
    const highestChanceDie = poolChanceDice.reduce((max, curr) => (curr > max ? curr : max), poolChanceDice[0]);
    const highestRiskDie = poolRiskDice.reduce((max, curr) => (curr > max ? curr : max), poolRiskDice[0]);
    
    let result = "";
    if (highestChanceDie == highestRiskDie) { // yes, but..., +1 Twist Counter!
        twistCounter ++;
        result = "Yes, but... (+1 Twist Counter!)"
    } else if (highestChanceDie > highestRiskDie) { // yes...
        if (highestChanceDie >= 4 && highestRiskDie >= 4) { // yes and...
            result = "Yes, and...";
        } else if (highestChanceDie >= 4 && highestRiskDie < 4) { // yes.
            result = "Yes.";
        } else if (highestChanceDie < 4 && highestRiskDie < 4) { // yes, but...
            result = "Yes, but...";
        }
    } else if (highestRiskDie > highestChanceDie) { // no...
        if (highestRiskDie >= 4 && highestChanceDie >= 4) { // no, and...
            result = "No, and...";
        } else if (highestRiskDie >= 4 && highestChanceDie < 4) { // no.
            result = "No.";
        } else if (highestRiskDie < 4 && highestChanceDie < 4) { // no, but...
            result = "No, but...";
        }
    };

    if (twistCounter == twistCounterMax) {
        alert("Random Event or Twist!");
        twistCounter = 0;
    }

    displayOracleResult.innerHTML = `
    Chance Dice: (${poolChanceDice}), 
    Risk Dice: (${poolRiskDice})
    <br>${result}
    <br>
    <br>(Twist Counter: ${twistCounter} of ${twistCounterMax});
    `;
};

function sortArrayHighestToLowest(array) {
    return array.sort((a, b) => b - a);
};

