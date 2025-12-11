const wandLesser = [
    {roll: 1, level: 1, type: "spell, holds 10 charges."},
    {roll: 2, level: 1, type: "spell, holds 10 charges."},
    {roll: 3, level: 2, type: "spell, holds 5 charges."},
    {roll: 4, level: 2, type: "spell, holds 5 charges."},
    {roll: 5, level: 3, type: "spell, holds 2 charges."},
    {roll: 6, level: 3, type: "spell, holds 2 charges."}
];

const wandGreater = [
    {roll: 1, level: 3, type: "spell, holds 10 charges", action: "tbc..."},
    {roll: 2, level: 4, type: "spell, holds 10 charges", action: "tbc..."},
    {roll: 3, level: "none", type: "Wand of Detection (enemies)", description: "Detects enemies in a radius of 60 feet, provided that the enemies are actually thinking hostile thoughts. Always active when held, does not use charges."},    
    {roll: 4, level: "none", type: "Wand of Detection (metal)", description: "Detects large caches of metal, with a range of 20 feet. The wand's user also gets a vague sense of the metal's type. Always active when held, does not use charges."},
    {roll: 5, level: "none", type: "Wand of Detection (magic)", description: "Functions as a Detect Magic spell with a range of 20 feet. The wand's user gets a vague sense of what sort of magic is being detected. Always active when held, does not use charges."},
    {roll: 6, level: "none", type: "Wand of Detection (traps & secret doors)", description: "Detects traps and secret doors with a range of 20 feet. Always active when held, does not use charges."},
    {roll: 7, level: "none", type: "Wand of Polymorph", description: "Casts either Polymorph (self) or Polymorph (other), carries 10 charges."},
    {roll: 8, level: "none", type: "Wand of Fear", description: "Causes creatures in a cone-shaped path to flee (saving throw). There is a 60% chance that they will drop whatever they are holding. The cone extends 60 feet to a base 30 feet across. Holds 25 charges and cannot be recharged)."},
    {roll: 9, level: "none", type: "Wand of Cold", description: "Casts a cone of cold 60 feet to a base 30 feet across. Creatures in the cone take 6d6 damage (saving throw for half damage). Holds 25 charges and cannot be recharged)."},
    {roll: 10, level: "none", type: "Wand of Paralyzing", description: "Casts a cone of paralysis 60 feet to a base 30 feet across. Creatures in the cone are paralyzed for 3d6 turns. Holds 25 charges and cannot be recharged)."}
];

const ringLesser = [
    {roll: 1, type: "Fire Resistance", desription: "+5 to saving throws vs. magical fire and grants immunity to normal fire."},
    {roll: 2, type: "Invisibility", desription: "Turns wearer invisible."},
    {roll: 3, type: "Mammal control", desription: "The wearer controls 1d6 mammals at a range of up to 60 feet. Control does not extend to humans or giant animals."},
    {roll: 4, type: "Poison Resistance", desription: "+5 to saving throws vs. poison."},
    {roll: 5, type: "Protection, +1", desription: "Grants bonus to armor class and saving throws."},
    {roll: 6, type: "Protection, +2", desription: "Grants bonus to armor class and saving throws."}
];

const ringGreater = [
    {roll: 1, type: "Human Control", description: "Allows the wearer to cast Charm Person once per day and maintain the charm on up to 3 individuals at a time."},
    {roll: 2, type: "Three Wishes", description: "Grants the wearer 3 wishes; outrageous wishes backfire."},
    {roll: 3, type: "Regeneration", description: "The wearer regenerates 1 HP/round and thus cannot die unless the ring is removed or the body burned."},
    {roll: 4, type: "Djinn Summoning", description: "The wearer of this ring can summon a djinn."},
    {roll: 5, type: "Shooting Stars", description: "Once per day, this ring can summon 1d6 flaming meteors from the depths of space. Each meteor can target a separate enemy and deals 3d6 damage. If used indoors or underground, the meteors will strike whatever is directly above the target."},
    {roll: 6, type: "X-ray Vision", description: "The wearer has x-ray vision at a range of 40 feet. The maximum distance through which the character can see through solid rock is just over 10 feet, though solid metals (other than lead) is 1 foot, and through lead is 1 inch."},
    {roll: 7, type: "Telekinesis", description: "The wearer can mentally lift and move up to 200 pounds of weight at a range of 120 feet."},
    {roll: 8, type: "Spell Turning", description: "Any spell (other than from a wand, etc.) directly aimed at the wearer of this ring is partially reflected back at the caster. Roll a d100 to determine how much of the spell’s power bounces back; the exact determination of what happens is up to the Referee."},
    {roll: 9, type: "Spell Storing (Magic-user)", description: "The ring contains 1d6 Magic-user spells. Roll 1d6 for each spell to determine their spell levels. The wearer (if a Magic-user) can cast these spells as if they were his own memorized and prepared spells. Once the spell is cast, it cannot be cast a second time until the caster rests for 8 hours."},
    {roll: 10, type: "Spell Storing (Cleric)", description: "The ring contains 1d6 Cleric spells. Roll 1d6 for each spell to determine their spell levels (re-roll a 6). The wearer (if a Cleric) can cast these spells as if they were his own memorized and prepared spells. Once the spell is cast, it cannot be cast a second time until the caster rests for 8 hours."}
];

const miscItemsLesser = [
    {item: "Arrow of Direction", description: " Points the direction of whatever the owner requests. Cannot be used more than 7 times in a single week. Usable by: All Classes."},
    {item: "Bag of Holding", description: "The inside of this bag is larger than the outside. The inside dimensions are roughly 10 x 5 x 3 feet, but the bag can carry up to 1,000 pounds of weight. If it is not empty, the bag weighs 50 pounds, no matter how much weight it actually contains. Usable by: All Classes."},
    {item: "Boots of Elvenkind", description: "The wearer moves with complete silence. Usable by: All Classes."},
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
    {start: 23, end: 23, type: "Greater Wand", action: getWandGreater},
    {start: 24, end: 25, type: "Lesser Ring", action: getRingLesser},
    {start: 26, end: 26, type: "Greater Ring", action: getRingGreater},
    {start: 27, end: 40, type: "Misc. Medium Magical Item", action: "TBC..."},
    {start: 41, end: 42, type: "Greater Wand", action: "TBC..."},
    {start: 43, end: 44, type: "Greater Ring", action: getRingGreater},
    {start: 45, end: 45, type: "Staff", action: "TBC..."},
    {start: 46, end: 60, type: "Misc. Greater Magical Item", action: "TBC..."}
];




function getMiscItem() {   
    
    console.log(`🎁 Treasure Quality: ${treasureType.quality}, Treasure Type: Misc.`);
    die_roll = roll1dx(20) + treasureType.miscModifier;

    //die_roll = 23; // FOR TESTING ONLY !!!!! DELETE THIS.

    const item = miscItems.find( i => die_roll >= i.start && die_roll <= i.end );

    if (!item) {
        console.log("No match.")
    }

    const actionValue = typeof item.action === "function" ? item.action() : item.action;
    
    console.log(`Item: ${item.type}`);
    console.log(`Description: ${item.description}`);
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

function getWandGreater() {
    die_roll = roll1dx(10);  // TESTING ONLY !!!!! DEFAULT die_roll = roll1dx(10)
    const wandGreaterItem = wandGreater.find( i => die_roll == i.roll );
    if (!wandGreaterItem) {
        console.log("No match. Check your code!");
    }

    console.log(`Type (test): ${wandGreaterItem.type}`);

    if (wandGreaterItem.roll <= 4) {
        generateRandomScrolls(1, wandGreaterItem.level, wandGreaterItem.level);
    } else {
        console.log(wandGreaterItem.type);
        console.log(wandGreaterItem.description);
    }
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

function getRingGreater() {
    die_roll = roll1dx(10);
    const ringGreaterItemIndex = Math.floor(Math.random() * ringGreater.length);
    const ringGreaterItem = ringGreater[ringGreaterItemIndex];
    console.log(`Type: ${ringGreaterItem.type}`);
    console.log(`Description: ${ringGreaterItem.description}`);
};

function getMiscItemLesser() {
    die_roll = roll1dx(20);
    const miscItemLesserIndex = Math.floor(Math.random() * miscItemsLesser.length);
    const miscItemLesser = miscItemsLesser[miscItemLesserIndex];
    console.log(`Item: ${miscItemLesser.item}`);
    console.log(`Item: ${miscItemLesser.description}`);
};

