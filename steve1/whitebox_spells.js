const spellsCleric = [
    {name: "Cure Light Wounds or Cause Light Wounds", level: 1, range: "Touch", duration: "Instant", description: "Cures 1d6+1 HP / Causes 1d6+1 HP."},
    {name: "Detect Chaos or Detect Law", level: 1, range: "120ft", duration: "1 hour", description: "Detect Chaotic creatures and evil enchantments, intentions, thoughs, auras. / Detect Lawful..."},
    {name: "Detect Magic", level: 1, range: "60ft", duration: "20 mins", description: "The caster perceives in places, people, or things, the presence of magical spells or enchantments. magical items or secretly placed charms may be discovered with this spell."},
    {name: "Light or Dark", level: 1, range: "120ft", duration: "2 hours", description: "Produces a light as bright as a torch with a radius of 20ft around a person or object."},
    {name: "Protection from Chaos or Protection from Law", level: 1, range: "Caster only", duration: "2 hours", description: "Creates a ward around the caster that blocks attacks from magical monsters (like invisible stalkers, elementals, and demons. Other attackers suffer a -1 penalty to hit, and the caster gains +1 on saving throws."},
    {name: "Purify or Putrefy Food & Drink", level: 1, range: "Close / Touch", duration: "Instant", description: "Removes spoilage and poisons from enough food and water for up to a dozen people."},
    {name: "Bless or Curse", level: 2, range: "Target Character", duration: "1 hour", description: "The recipient of this spell cannot be in combat when it is cast. Bless: the recipient gets a +1 bonus to all attack rolls and, if the target is not a Player Character, improved overall morale. / Curse: the recipient suffers a -1 penalty to all attack rolls and, if the target is not a Player Character, decreased morale."},
    {name: "Find Traps", level: 2, range: "30ft", duration: "Instant", description: "Reveals both magical and non-magical traps."},
    {name: "Hold Person", level: 2, range: "180ft", duration: "90 mins", description: "The caster targets either 1d4 persons (with the same parameters as Charm Person; saving throw applies) or a single creature who must make their save at a -2 penalty."},
    {name: "Speak with Animals", level: 2, range: "30ft", duration: "1 hour", description: "The caster can speak with animals within range. The animals might assist him, and they will not attack him or his party (unless he says something particularly offensive)."},
    {name: "Cure or Cause Disease", level: 3, range: "", duration: "", description: ""},
    {name: "Light or Dark, Continual", level: 3, range: "120ft", duration: "Permanent (until dispelled)", description: "Light, Continual: produces a light as bright as a torch with a radius of 20 feet around a person or object. / Dark, Continual: causes night-time darkness in an area with a 20 foot radius."},
    {name: "Locate Object", level: 3, range: "90ft", duration: "1 min/level", description: "Directs the caster (as the crow flies) toward an object the caster describes. The caster must have seen the object or an object of its general type: staris, gold, etc."},
    {name: "Remove Curse", level: 3, range: "Close / Touch", duration: "Instant", description: "Removes one curse from a person or object."},
    {name: "Cure or Cause Serious Wounds", level: 4, range: "Touch", duration: "Instant", description: "Cure: The caster cures 3d6+3 HP. / Cause: The caster causes 3d6+3 damage."},
    {name: "Neutralize Poison", level: 4, range: "Ref's discretion", duration: "10 mins", description: "Counteracts poison, but does not bring the dead back to life."},
    {name: "Protection from Chaos or Law, 10ft radius", level: 4, range: "10ft radius around caster", duration: "2 hours", description: "As a Protection from Chaos, 10ft. radius spell, it has the same effect as Protection from Chaos—except that its effect covers an area rather than an individual. / As a Protection from Law, 10 ft. radius spell, it has the same effect as Protection from Law—except that its effect covers an area rather than an individual."},
    {name: "Speak with Plants", level: 4, range: "30ft", duration: "1 hour", description: "The caster can speak to and understand the replies of plants. Plants will obey his commands as far as they are able (e.g. twisting or bending aside to ease his passage, etc.)."},
    {name: "Sticks to Snakes", level: 4, range: "120ft", duration: "1 hour", description: "The caster may turn as many as 2d8 normal sticks into snakes, each one having a 50% chance of being venomous. The snakes follow his commands, but turn back into sticks at the end of the spell (or when killed)."},
    {name: "Commune", level: 5, range: "Caster", duration: "3 questions", description: "Higher powers grant answers to three questions the caster poses. Higher powers don’t like being constantly interrogated by mere mortals, so the spell should be limited to one casting per week. The Referee may rule that a caster may cast a double strength Commune spell composed of six questions once per year."},
    {name: "Create Food & Drink", level: 5, range: "Close", duration: "Instant", description: "This spell creates a one-day supply of simple food and drinking water for 24 humans (or horses, which drink the same amount as a man for game purposes)."},
    {name: "Dispel Chaos or Dispel Law", level: 5, range: "30ft", duration: "10 minutes", description: "Dispel Chaos: The spell is similar to the arcane spell Dispel Magic, but works against items, spells, or agents of Chaos. However, unlike Dispel Magic, this spell also functions against chaotic sendings, possibly including dreams or supernatural hunting-beasts. // Dispel Law: As a Dispel Law spell, the spell works exactly like Dispel Chaos, except that it will dispel Law."},
    {name: "Insect Plague", level: 5, range: "480ft", duration: "1 day", description: "This spell only works outdoors. A storm of insects gathers, and goes wherever the caster directs. The cloud is approximately 400 square feet (20 × 20 feet, with roughly corresponding height). Any creature with fewer than 2 HD exposed to the cloud of insects will flee in terror (no saving throw)."},
    {name: "Quest", level: 5, range: "30ft", duration: "Until completed", description: "If the victim fails his saving throw, the caster may set a task for him. If a Magic-user casts this spell the victim will die if he ignores the Quest altogether. If a Cleric casts this spell the victim’s failure to obey will result in a curse to be determined by the Referee."},
    {name: "Raise Dead", level: 5, range: "Line of Sight", duration: "See description", description: "Raise Dead allows the Cleric to raise a corpse from the dead, provided it has not been dead too long. The normal time limit is 4 days, but for every caster level higher than 8th, the time limit extends another 4 days. Characters with low constitution might not survive the ordeal; and even for those with a strong constitution, a period of two weeks is required before they can function normally. This spell only functions on races that can be used for Player Characters (i.e., “human-like”)."}
    //{name: "", level: 1, range: "", duration: "", description: ""}
];

const spellsMage = [
    {name: "Charm Person", level: 1, range: "120ft", duration: "Until dispelled", description: "This spell affects living bipeds of human size or smaller, such as goblins or dryads. If the spell succeeds (saving throw allowed), the unfortunate creature falls under the caster’s influence."},
    {name: "Detect Magic", level: 1, range: "60ft", duration: "20 mins", description: "The caster perceives in places, people, or things, the presence of magical spells or enchantments. magical items or secretly placed charms may be discovered with this spell."},
    {name: "Hold Portal", level: 1, range: "Ref's discretion", duration: roll2d6(), description: "This spell magically holds a door or gate in position for the spell's duration (or until dispelled). Creatures with magic resistance can shatter the spell without much effort."},
    {name: "Light", level: 1, range: "120ft", duration: "1 hour + 10 mins per level", description: "Light: As a Light spell, the caster targets a person or object which then produces a light about as bright as a torch with a radius of 20 feet. // Dark: As a Dark spell, the caster instead causes night-time darkness to fall upon the area with a radius of 20 feet."},
    {name: "Protection from Chaos or Law", level: 1, range: "10ft radius around caster", duration: "2 hours", description: "Protection from Chaos: As a Protection from Chaos, 10ft. radius spell, it has the same effect as Protection from Chaos — exceptthat its effect covers an area rather than an individual. / Protection from Law: As a Protection from Law, 10 ft. radius spell, it has the same effect as Protection from Law — except that its effect covers an area rather than an individual."},
    {name: "Read Languages", level: 1, range: "Reading distance", duration: "1 or 2 readings", description: "This spell allows the caster to read directions, instructions, and similar notations that are written in unfamiliar or even unknown languages. It is especially useful for treasure maps."},
    {name: "Read Magic", level: 1, range: "Caster only", duration: "2 scrolls or other writings", description: "This spell allows the caster to read magical writings on items and scrolls. Magical writing cannot be read without the use of this spell."},
    {name: "Sleep", level: 1, range: "240ft", duration: "Ref's discretion", description: "This spell puts creatures into an enchanted slumber (no saving throw is permitted). It can affect a number of creatures based on their hit dice. Less than 1 to 1 HD: 2d6+3, 1+ to 2+ HD: 2d6, 3 to 4+ HD: 1d6."},
    {name: "Detect Chaos", level: 2, range: "", duration: "", description: ""},
    {name: "Detect Invisibility", level: 2, range: "", duration: "", description: ""},
    {name: "Detect Thoughts (ESP)", level: 2, range: "", duration: "", description: ""},
    {name: "Invisibility", level: 2, range: "", duration: "", description: ""},
    {name: "Knock", level: 2, range: "", duration: "", description: ""},
    {name: "Levitate", level: 2, range: "", duration: "", description: ""},
    {name: "Light, Continual", level: 2, range: "", duration: "", description: ""},
    {name: "Locate Object", level: 2, range: "", duration: "", description: ""},
    {name: "Phantasmal Force", level: 2, range: "", duration: "", description: ""},
    {name: "Web", level: 2, range: "", duration: "", description: ""},
    {name: "Wizard Lock", level: 2, range: "", duration: "", description: ""},
    {name: "Alter Time", level: 3, range: "", duration: "", description: ""},
    {name: "Crystal Ball", level: 3, range: "", duration: "", description: ""},
    {name: "Darkvision", level: 3, range: "", duration: "", description: ""},
    {name: "Dispel Magic", level: 3, range: "", duration: "", description: ""},
    {name: "Fireball", level: 3, range: "", duration: "", description: ""},
    {name: "Fly", level: 3, range: "", duration: "", description: ""},
    {name: "Hold Person", level: 3, range: "", duration: "", description: ""},
    {name: "Invisibility, 10ft radius", level: 3, range: "", duration: "", description: ""},
    {name: "Lightning Bolt", level: 3, range: "", duration: "", description: ""},
    {name: "Protection from Chaos, 10ft radius", level: 3, range: "", duration: "", description: ""},
    {name: "Protection from Normal Missiles", level: 3, range: "", duration: "", description: ""},
    {name: "Water Breathing", level: 3, range: "", duration: "", description: ""},
    {name: "Charm Monster", level: 4, range: "", duration: "", description: ""},
    {name: "Confusion", level: 4, range: "", duration: "", description: ""},
    {name: "Dimension Portal", level: 4, range: "", duration: "", description: ""},
    {name: "Hallucinatory Terrain", level: 4, range: "", duration: "", description: ""},
    {name: "Massmorph", level: 4, range: "", duration: "", description: ""},
    {name: "Plant Growth", level: 4, range: "", duration: "", description: ""},
    {name: "Polymorph", level: 4, range: "", duration: "", description: ""},
    {name: "Remove Curse", level: 4, range: "", duration: "", description: ""},
    {name: "Wall of Fire or Ice", level: 4, range: "", duration: "", description: ""},
    {name: "Wizard Eye", level: 4, range: "", duration: "", description: ""},
    {name: "Animal Growth", level: 5, range: "", duration: "", description: ""},
    {name: "Animate Dead", level: 5, range: "", duration: "", description: ""},
    {name: "Cloudkill", level: 5, range: "", duration: "", description: ""},
    {name: "Conjure Elemental", level: 5, range: "", duration: "", description: ""},
    {name: "Contact Other Plane", level: 5, range: "", duration: "", description: ""},
    {name: "Feeblemind", level: 5, range: "", duration: "", description: ""},
    {name: "Hold Monster", level: 5, range: "", duration: "", description: ""},
    {name: "Magic Jar", level: 5, range: "", duration: "", description: ""},
    {name: "Passwall", level: 5, range: "", duration: "", description: ""},
    {name: "Telekinesis", level: 5, range: "", duration: "", description: ""},
    {name: "Teleport", level: 5, range: "", duration: "", description: ""},
    {name: "Transform Rock-Mud", level: 5, range: "", duration: "", description: ""},
    {name: "Wall of Stone or Iron", level: 5, range: "", duration: "", description: ""},
    {name: "Anti-Magic Shell", level: 6, range: "", duration: "", description: ""},
    {name: "Control Weather", level: 6, range: "", duration: "", description: ""},
    {name: "Death Spell", level: 6, range: "", duration: "", description: ""},
    {name: "Disintegrate", level: 6, range: "", duration: "", description: ""},
    {name: "Invisible Stalker", level: 6, range: "", duration: "", description: ""},
    {name: "Move Earth", level: 6, range: "", duration: "", description: ""},
    {name: "Move Water", level: 6, range: "", duration: "", description: ""},
    {name: "Project Image", level: 6, range: "", duration: "", description: ""},
    {name: "Quest", level: 6, range: "", duration: "", description: ""},
    {name: "Reincarnation", level: 6, range: "", duration: "", description: ""},
    {name: "Stone to Flesh", level: 6, range: "", duration: "", description: ""}
];

function roll2d6() {
    const array2d6 = [];
    for ( i = 0; i <= 2; i++ ) {
        let die = Math.floor(Math.random() * 6) +1;
        array2d6.push(die);
    }
    return sumArray(array2d6);
};

function sumArray(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

//Magic User Spell List L1
// Charm Person
// Detect Magic
// Hold Portal
// Light
// Protection from Chaos
// Read Languages
// Read Magic
// Sleep