const magicalWeaponsAndArmor = [
    {roll: 1, modifier: 0, type: "Cursed Armor or Shield", other: "none"},
    {roll: 2, modifier: 1, type: "Missile Weapon(s)", other: "none"},
    {roll: 3, modifier: 1, type: "+1 Shield", other: "none"},
    {roll: 4, modifier: 1, type: "+1 Melee Weapon", other: "none"},
    {roll: 5, modifier: 1, type: "+1 Melee Weapon", other: "none"},
    {roll: 6, modifier: 1, type: "+1 Melee Weapon", other: "none"},
    {roll: 7, modifier: 1, type: "+1 Armor", other: "none"},
    {roll: 8, modifier: 1, type: "+1 Armor", other: "none"},
    {roll: 9, modifier: 0, type: "Cursed Weapon", other: "none"},
    {roll: 10, modifier: 2, type: "+2 Missile Weapon(s)", other: "none"},
    {roll: 11, modifier: 2, type: "+2 Shield", other: "none"},
    {roll: 12, modifier: 2, type: "+2 Melee Weapon", other: "none"},
    {roll: 13, modifier: 2, type: "+2 Armor", other: "none"},
    {roll: 14, modifier: 1, type: "+1 Melee Weapon with Minor Ability", other: "Minor Ability"},
    {roll: 15, modifier: 3, type: "+3 Missile Weapon(s)", other: "none"},
    {roll: 16, modifier: 3, type: "+3 Melee Weapon", other: "none"},
    {roll: 17, modifier: 3, type: "+3 Shield", other: "none"},
    {roll: 18, modifier: 3, type: "+3 Armor", other: "none"},
    {roll: 19, modifier: 0, type: "Unusual Weapon (optional) or Re-roll", other: "none"},
    {roll: 20, modifier: 0, type: "Unusual Armor (optional) or Re-roll", other: "none"}
];

const cursedArmorWeaponsShields = [
    {roll: 1, modifier: -1, type: "-1 Weapon or Armor"},
    {roll: 2, modifier: -1, type: "-1 Weapon or Armor"},
    {roll: 3, modifier: -1, type: "-1 Weapon or Armor"},
    {roll: 4, modifier: -2, type: "-2 Weapon or Armor"},
    {roll: 5, modifier: -3, type: "-3 Weapon or Armor"},
    {roll: 6, modifier: 0, type: "Attracts missiles - Grants a +1 to-hit bonus to attack on such missiles."}
];

const minorAbilitiesForMeleeWeapons = [
    {roll: 1, type: "Additional damage (+1)"},
    {roll: 2, type: "Additional damage (+1)"},
    {roll: 3, type: "Additional damage (+1)"},
    {roll: 4, type: "Additional damage (+1)"},
    {roll: 5, type: "Sheds light, 15 ft. radius"},
    {roll: 6, type: "Sheds light, 30 ft. radius"}
]

const magicMeleeWeapons = [
    {roll: 1, type: "Axe, battle"},
    {roll: 2, type: "Axe, hand"},
    {roll: 3, type: "Dagger"},
    {roll: 4, type: "Lance"},
    {roll: 5, type: "Mace, heavy"},
    {roll: 6, type: "Mace, light"},
    {roll: 7, type: "Spear"},
    {roll: 8, type: "Staff"},
    {roll: 9, type: "Sword, long"},
    {roll: 10, type: "Sword, short"},
    {roll: 11, type: "Sword, two-handed"},
    {roll: 12, type: "War Hammer"}
];

const magicMissileWeapons = [
    {roll: 1, type: "2d6 Arrows"},
    {roll: 2, type: "2d6 Arrows"},
    {roll: 3, type: "2d6 Arrows"},
    {roll: 4, type: "2d6 Arrows"},
    {roll: 5, type: "2d6 Arrows"},
    {roll: 6, type: "2d6 Arrows"},
    {roll: 7, type: "2d6 Arrows"},
    {roll: 8, type: "2d6 Arrows"},
    {roll: 9, type: "1d10 Stones"},
    {roll: 10, type: "1d10 Stones"},
    {roll: 11, type: "Spear"},
    {roll: 12, type: "2d4 Darts"},
    {roll: 13, type: "2d4 Darts"},
    {roll: 14, type: "2d4 Darts"},
    {roll: 15, type: "2d4 Darts"},
    {roll: 16, type: "2d6 Bolts, crossbow"},
    {roll: 17, type: "2d6 Bolts, crossbow"},
    {roll: 18, type: "2d6 Bolts, crossbow"},
    {roll: 19, type: "2d6 Bolts, crossbow"},
    {roll: 20, type: "2d6 Bolts, crossbow"},
];

const magicUnusualWeapons = [
    {roll: 1, type: "+1 Blunt weapon that destroys undead", description: "Blunt weapons are the mace, sling, staff, and war hammer. Lesser undead types (fewer than 4 HD) don't get a saving throw; more powerful ones do."},
    {roll: 2, type: "+1 Thrown weapon that returns to hand", description: "These weapons are the hand axe, spear, and war hammer."},
    {roll: 3, type: "+1 Weapon, grants 1 additional attack/day", description: "None"},
    {roll: 4, type: "+1, +2 vs. particular type of foe", description: "Examples include dragons, giants, orcs, lycanthropes, undead, etc."},
    {roll: 5, type: "+1, +4 vs. particular type of foe", description: "Examples include dragons, giants, orcs, lycanthropes, undead, etc."},
    {roll: 6, type: "+2, +3 vs. particular type of foe", description: "Examples include dragons, giants, orcs, lycanthropes, undead, etc."},
    {roll: 7, type: "Weapon Flames", description: "Additional 1d6 fire damage: roll 1d4-1 for “to-hit” bonus."},
    {roll: 8, type: "Weapon Freezes", description: "Additional 1d6 cold damage: roll 1d4-1 for “to-hit” bonus."},
    {roll: 9, type: "Dancing Weapon", description: "Fights in the air after 3 rounds, as a +1d3 weapon."},
    {roll: 10, type: "Intelligent Weapon", description: "Roll 1d3 for to-hit bonus. There is a 10% chance that such a weapon may have the ability to cast a spell once per day. Such swords generally can communicate with their bearers, and often (25% chance) can speak audibly."},
];

const magicUnusualArmor = [
    {roll: 1, type: "Armor of Arrow Deflection", description: "+2 against missile fire."},
    {roll: 2, type: "Demonic Armor", description: "Possessed by a spirit or demon, with effects to be determined by the Referee."},
    {roll: 3, type: "Ethereal Armor", description: "+3 plate mail that also allows the wearer to become insubstantial and incorporeal 50 times, after which it reverts to normal +3 platemail. In ethereal form, the wearer cannot be hit and cannot attack (unless the opponent is also ethereal)."},
    {roll: 4, type: "Fiery Armor", description: "+1 armor that is surrounded by flames. These flames deal 1d6 damage to melee attackers."},
];

const miscItems = [
    {start: 1, end: 1, type: "Lesser Wand"},
    {start: 2, end: 2, type: "Lesser Ring"},
    {start: 3, end: 20, type: "Misc. Lesser Magical Item"},
    // to be continued...
]