const diceFaces = ["fate_minus.png", "fate_plus.png", "fate_nil.png"]
    const dice1 = document.getElementById("dice_img1");
    const dice2 = document.getElementById("dice_img2");
    const dice3 = document.getElementById("dice_img3");
    const dice4 = document.getElementById("dice_img4");
    
    const diceImages = [dice1, dice2, dice3, dice4];

    function XrollFateDice() {
      diceImages.forEach((image) => {
        let diceFacesIndex = Math.floor(Math.random() * diceFaces.length);
        let randomDice = diceFaces[diceFacesIndex];
        image.src = randomDice;
      }); 
        
    }

    function rollFateDice() {
      diceImages.forEach((image) => {
        const interval = setInterval(() => {
          const index = Math.floor(Math.random() * diceFaces.length);
          image.src = diceFaces[index];
        }, 80);

        setTimeout(() => {
          clearInterval(interval);
          const finalIndex = Math.floor(Math.random() * diceFaces.length);
          image.src = diceFaces[finalIndex];
        },1000);
      });
    }