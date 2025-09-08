let dictHistory = [];

function rollDice(numDice, sizeDice) {
    let numberOfDice = numDice !== undefined ? numDice : document.getElementById('inputNumberOfDice').value || 1;
    let sizeOfDice = sizeDice !== undefined ? sizeDice : document.getElementById('inputSizeOfDice').value;

    numberOfDice = parseInt(numberOfDice);
    sizeOfDice = parseInt(sizeOfDice);

    let dicePool = [];

    for (let i = 0; i < numberOfDice; i++) {
        let resultOfXDX = Math.floor(Math.random() * sizeOfDice) + 1;
        dicePool.push(resultOfXDX);
    }

    let dicePoolSum = dicePool.reduce((acc, val) => acc + val, 0);

    // Create new history entry:
    let newHistoryEntry = {
      throw: `${numberOfDice}d${sizeOfDice}`,
      numberOfDice: numberOfDice,
      sizeOfDice: sizeOfDice,
      results: dicePool,
      total: dicePoolSum
    };

    // Add to history at the front
    dictHistory.unshift(newHistoryEntry);

    // Build history display
    let historyHtml = "";
    dictHistory.forEach((entry, index) => {
      historyHtml += `
        <button onclick="reroll(${entry.numberOfDice}, ${entry.sizeOfDice})">
          ${entry.throw}
        </button>
        <span>
         ${entry.results.join(", ")} 
          (Total: ${entry.total})
        </span><br><br>`;
    });
    
    document.getElementById("displayHistory").innerHTML = historyHtml;
  }

  function reroll(numDice, sizeDice) {
    rollDice(numDice, sizeDice);
}