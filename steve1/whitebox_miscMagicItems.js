const wandLesser = [
    {roll: 1, level: 1, type: "spell, holds 10 charges."},
    {roll: 2, level: 1, type: "spell, holds 10 charges."},
    {roll: 3, level: 2, type: "spell, holds 5 charges."},
    {roll: 4, level: 2, type: "spell, holds 5 charges."},
    {roll: 5, level: 3, type: "spell, holds 2 charges."},
    {roll: 6, level: 3, type: "spell, holds 2 charges."}
];

const ringLesser = [
    {roll: 1, type: "Fire Resistance", desription: "+5 to saving throws vs. magical fire and grants immunity to normal fire."},
    {roll: 2, type: "Invisibility", desription: "Turns wearer invisible."},
    {roll: 3, type: "Mammal control", desription: "The wearer controls 1d6 mammals at a range of up to 60 feet. Control does not extend to humans or giant animals."},
    {roll: 4, type: "Poison Resistance", desription: "+5 to saving throws vs. poison."},
    {roll: 5, type: "Protection, +1", desription: "Grants bonus to armor class and saving throws."},
    {roll: 6, type: "Protection, +2", desription: "Grants bonus to armor class and saving throws."}
];

const miscItemsLesser = [
    {item: "Arrow of Direction", description: " Points the direction of whatever the owner requests. Cannot be used more than 7 times in a single week. Usable by: All Classes."},
    {item: "Bag of Holding", description: ""},
    {item: "Boots of Elvenkind", description: ""},
    {item: "Boots of Speed or Leaping (50%)", description: ""},
    {item: "Bracers of Defense, AC 6 [13]", description: ""},
    {item: "Chime of Opening", description: ""},
    {item: "Cloak of Elvenkind", description: ""},
    {item: "Cloak of Protection, +1", description: ""},
    {item: "Cursed Item", description: ""},
    {item: "Decanter of Endless Water", description: ""},
    {item: "Dust of Appearance or Disappearance (50%)", description: ""},
    {item: "Dust of Sneezing and Choking", description: ""},
    {item: "Gauntlets of Swimming and Climbing", description: ""},
    {item: "Horseshoes of Speed", description: ""},
    {item: "Luckstone (+1 to saving throws and “to-hit” rolls)", description: ""},
    {item: "Manual of Beneficial Exercise", description: ""},
    {item: "Pipes of the Sewers", description: ""},
    {item: "Rope of Climbing", description: ""},
    {item: "Rope of Entanglement", description: ""},
    {item: "Spade of Excavation", description: ""}
];

const miscItems = [
    {start: 1, end: 1, type: "Lesser Wand", action: getWandLesser},
    {start: 2, end: 2, type: "Lesser Ring", action: getRingLesser},
    {start: 3, end: 20, type: "Misc. Lesser Magical Item", action: getMiscItemLesser},
    {start: 21, end: 22, type: "Lesser Wand", action: getWandLesser},
    {start: 23, end: 23, type: "Greater Wand", action: "TBC..."},
    {start: 24, end: 25, type: "Lesser Ring", action: "TBC..."},
    {start: 26, end: 26, type: "Greater Ring", action: "TBC..."},
    {start: 27, end: 40, type: "Misc. Medium Magical Item", action: "TBC..."},
    {start: 41, end: 42, type: "Greater Wand", action: "TBC..."},
    {start: 43, end: 44, type: "Greater Ring", action: "TBC..."},
    {start: 45, end: 45, type: "Staff", action: "TBC..."},
    {start: 46, end: 60, type: "Misc. Greater Magical Item", action: "TBC..."}
];




function getMiscItem() {   
    
    console.log(`🎁 Treasure Quality: ${treasureType.quality}, Treasure Type: Misc.`);
    die_roll = roll1dx(20) + treasureType.miscModifier;

    die_roll = roll1dx(4); // FOR TESTING ONLY !!!!!

    const item = miscItems.find( i => die_roll >= i.start && die_roll <= i.end );

    if (!item) {
        console.log("No match.")
    }

    const actionValue = typeof item.action === "function" ? item.action() : item.action;
    
    console.log(`Item: ${item.type}`);
    console.log(`Action: ${actionValue}`);
};

function getWandLesser() {
    die_roll = roll1dx(6);
    const wandLesserItem = wandLesser.find( i => die_roll == i.roll );
    if (!wandLesserItem) {
        console.log("No match. Check your code!");
    }
    const wandLesserItemLevel = wandLesserItem.level;
    const actionValue = typeof wandLesserItem.action === "function" ? wandLesserItem.action() : wandLesserItem.action;
    console.log(`Type: ${wandLesserItem.type}`);
    console.log(`Spell Level: ${wandLesserItemLevel}`);
    generateRandomScrolls(1, wandLesserItemLevel, wandLesserItemLevel);
};

function getRingLesser() {
    die_roll = roll1dx(6);
    const ringLesserItem = ringLesser.find( i => die_roll == i.roll );
    if (!ringLesserItem) {
        console.log("No match.");
    }
    //const actionValue = typeof ringLesserItem.action === "function" ? ringLesserItem.action() : ringLesserItem.action;
    console.log(`Type: ${ringLesserItem.type}`);
    console.log(`Description: ${ringLesserItem.desription}`);
};

function getMiscItemLesser() {
    die_roll = roll1dx(20);
    const miscItemLesserIndex = Math.floor(Math.random() * miscItemsLesser.length);
    const miscItemLesser = miscItemsLesser[miscItemLesserIndex];
    console.log(`Item: ${miscItemLesser.item}`)
    // to be continued...
}