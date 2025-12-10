const oddTreasurePotions = [
    { start: 1, end: 3, value: "Animal Control"},
    { start: 4, end: 6, value: "Clairaudience"},
    { start: 7, end: 9, value: "Clairvoyance"},
    { start: 10, end: 12, value: "Diminution"},
    { start: 13, end: 15, value: "Dragon Control"},
    { start: 16, end: 18, value: "Ethereality"},
    { start: 19, end: 21, value: "Fire Resistance"},
    { start: 22, end: 24, value: "Flying"},
    { start: 25, end: 27, value: "Gaseous Form"},
    { start: 28, end: 30, value: "Giant Strength"},
    { start: 31, end: 33, value: "Growth"},
    { start: 34, end: 36, value: "Heroism"},
    { start: 37, end: 39, value: "Invisibility"},
    { start: 40, end: 42, value: "Invulnerability"},
    { start: 43, end: 45, value: "Levitation"},
    { start: 46, end: 48, value: "Plant Control"},
    { start: 49, end: 55, value: "Poison"},
    { start: 56, end: 58, value: "Slipperiness"},
    { start: 59, end: 61, value: "Treasure Finding"},
    { start: 62, end: 64, value: "Undead Control"},
    { start: 65, end: 75, value: "Extra Healing"},
    { start: 76, end: 100, value: "Healing"}
];

const protectionFrom = [
  "Demons",
  "Drowning",
  "Elementals",
  "Lycanthropes",
  "Magic",
  "Metal",
  "Poison",
  "Undead"
];

function getPotion() {
            let listPotions = [];
            console.log(`🍷 Treasure Quality: ${treasureType.quality}, Treasure Type: Potion`);
            // Get the number of potion table rolls, based on the pre-defined Quality...
            let numberOfPotionRolls = treasureType.potion_rolls;

            for ( rolls = 1; rolls <= numberOfPotionRolls; rolls++ ) {
                die_roll = roll1dx(100);
                let potion = oddTreasurePotions.find(
                    item => die_roll >= item.start && die_roll <= item.end
                )?.value || "No Match. Check your code!";
                listPotions.push(potion);
            }

            listPotions.forEach(potion => {
                console.log(`Potion of ${potion}`);
            });
        };