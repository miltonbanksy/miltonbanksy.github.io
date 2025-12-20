const formCharCreation0 = document.getElementById('form-char-creation-0');
const formCharCreation1b = document.getElementById('form-char-creation-1b-generate-class');
const formCharCreationChooseClass = document.getElementById('form-char-creation-choose-class');

const formCharCreationChooseStatMethod = document.getElementById('form-char-creation-choose-stat-method');
const displayCharClass = document.getElementById('display-char-class');
const displayCharStats = document.getElementById('display-char-stats');
const formCharCreationSummary = document.getElementById('form-char-creation-summary');

const classes = [
    {class: "Fighter", primary_stat: "STR"},
    {class: "Magic User", primary_stat: "INT"},
    {class: "Cleric", primary_stat: "WIS"},
];

const character = {
    level: 1,
    xp: 0,
    xp_next: 0,
    hd: 0,
    hp: 0,
    class: "Unknown", 
    stats_status: "Unknown",
    primary_stat: "Unknown",
    stats: {
        STR: {label: "STR", name: "strength", value: 0, modifier: 0},
        DEX: {label: "DEX", name: "dexterity", value: 0, modifier: 0},
        CON: {label: "CON", name: "constitution", value: 0, modifier: 0},
        INT: {label: "INT", name: "intelligence", value: 0, modifier: 0},
        WIS: {label: "WIS", name: "wisdom", value: 0, modifier: 0},
        CHA: {label: "CHA", name: "charisma", value: 0, modifier: 0}
    }
};
//character.class = "Unknown";

// (FORM) Choose Stats or Class screen:
formCharCreation0.addEventListener('change', function(event) {
    const selectedValue = event.target.value;

    if (selectedValue == "stats-first") {
        alert("Under construction...");
    } else {
        formCharCreation1b.classList.add('show-me');
    }

    this.classList.remove('show-me');
    this.classList.add('hide-me');
});

// (FORM) Choose method of generating a Class:
formCharCreation1b.addEventListener('change', function(event) {
    const selectedValue = event.target.value;

    if (selectedValue == "class-choose") {
        formCharCreationChooseClass.classList.add('show-me');
    } else {
        let character_class_index = Math.floor(Math.random() * classes.length);
        character.class = classes[character_class_index].class;
        character.primary_stat = classes[character_class_index].primary_stat;
        alert(`You're a ${character.class}. Your primary stat is ${character.primary_stat}`);
        formCharCreationChooseStatMethod.classList.add('show-me');
        
        displayCharClass.innerHTML = `Level ${character.level} ${character.class}<br>Primary Stat: ${character.primary_stat}`;
        formCharCreationSummary.classList.add('show-me');
    }

    this.classList.remove('show-me');
    this.classList.add('hide-me');
    
});

// (FORM) Choose a Class from a list:
formCharCreationChooseClass.addEventListener('change', function(event) {
    
    // Find matching class object
    const chosenClassName = event.target.value; // The character class chosen by user
    const classData = classes.find(c => c.class === chosenClassName);

    if (!classData) {
        console.error("Class not found:", chosenClassName);
        return;
    }

    character.class = classData.class;
    character.primary_stat = classData.primary_stat;

    alert(`You chose ${character.class}. Your primary stat is ${character.primary_stat}`);

    this.classList.remove('show-me');
    this.classList.add('hide-me');

    displayCharClass.innerHTML = `Level ${character.level} ${character.class}<br>Primary Stat: ${character.primary_stat}`;
    formCharCreationSummary.classList.add('show-me');
    formCharCreationChooseStatMethod.classList.add('show-me');
});

// (FORM) Choose method of generating stats:
formCharCreationChooseStatMethod.addEventListener('change', function(event) {
    const selectedValue = event.target.value;
    let dice_bag = [];
    
    // // Classic 3d6, randomly distributed.
    if (selectedValue == "stat-method-1") {
        
        for (let i = 0; i < 6; i++) {
            const roll = getSumOfArray(rollxdx(3, 6));
            dice_bag.push(roll);
        }

        const statObjects = Object.values(character.stats);
        // Simple shuffle (Use Fisher-Yates for greater randomness):
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign each stat with a value:
        statObjects.forEach(stat => {
            stat.value = dice_bag.pop();
        });

    // // Classic & Classy 3d6, distributed in favor of chosen Class.
    } else if (selectedValue == "stat-method-2") {

        // Roll 6 x 3d6:
        for (let i = 0; i < 6; i++) {
            const roll = getSumOfArray(rollxdx(3, 6));
            dice_bag.push(roll);
        }

        // Sort highest to lowest:
        dice_bag.sort((a, b) => b - a);

        // Assign highest roll to primary stat
        const primaryKey = character.primary_stat;
        character.stats[primaryKey].value = dice_bag.shift();

        // Shuffle remaining rolls:
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign remaining rolls to other stats:
        Object.keys(character.stats).forEach(statKey => {
            if (statKey !== primaryKey) {
                character.stats[statKey].value = dice_bag.pop();
            }
        });

    // // Heroic 4d6 (drop lowest), randomly distributed.
    } else if (selectedValue == "stat-method-3") {
        
        // Roll 6 heroic stats;
        for (let i = 0; i < 6; i++) {
            dice_bag.push(roll4d6DropLowest());
        }

        // Shuffle
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign randomly
        Object.values(character.stats).forEach(stat => {
            stat.value = dice_bag.pop();
        });

    // // Heroic & Classy 4d6 (drop lowest), distributed in favor of chosen Class.
    } else if (selectedValue == "stat-method-4") {

        for (let i = 0; i < 6; i++) {
            dice_bag.push(roll4d6DropLowest());
        }

        // Highest first
        dice_bag.sort((a, b) => b - a);

        // Assign best to primary stat
        const primaryKey = character.primary_stat;
        character.stats[primaryKey].value = dice_bag.shift();

        // Shuffle remainder
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign the rest
        Object.keys(character.stats).forEach(statKey => {
            if (statKey !== primaryKey) {
                character.stats[statKey].value = dice_bag.pop();
            }
        });
    
    // // Fair Standard Array [15, 14, 13, 12, 10, 8], randomly distributed.
    } else if (selectedValue == "stat-method-5") {
        
        dice_bag = [15, 14, 13, 12, 10, 8];

        // Shuffle
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign randomly
        Object.values(character.stats).forEach(stat => {
            stat.value = dice_bag.pop();
        });
    
    // // Fair & Classy Standard Array [15, 14, 13, 12, 10, 8], distributed in favor of chosen Class.
    } else if (selectedValue == "stat-method-6") {

        dice_bag = [15, 14, 13, 12, 10, 8];

        // Highest first
        dice_bag.sort((a, b) => b - a);

        // Assign best to primary stat
        const primaryKey = character.primary_stat;
        character.stats[primaryKey].value = dice_bag.shift();

        // Shuffle remainder
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign the rest
        Object.keys(character.stats).forEach(statKey => {
            if (statKey !== primaryKey) {
                character.stats[statKey].value = dice_bag.pop();
            }
        });
    }

    displayCharStats.innerHTML =
        `STR: ${character.stats.STR.value}, 
         DEX: ${character.stats.DEX.value}, 
         CON: ${character.stats.CON.value}, 
         INT: ${character.stats.INT.value}, 
         WIS: ${character.stats.WIS.value}, 
         CHA: ${character.stats.CHA.value}`;
});

