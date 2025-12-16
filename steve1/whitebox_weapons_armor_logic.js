function getWeaponArmor() {
            let weaponTypeIndex = 0;
            let weaponType = "";
            let weaponDescription = "";
            let weaponAbilityIndex = "";
            let weaponAbility = "";
            let mod = 0;
            let weaponSpellCasting = "";
            let weaponCommunication = "";
            
            die_roll = roll1dx(8) + treasureType.modifier; // Roll 1d8 + Quality mod
            die_roll = 1; // FOR TESTING ONLY !!!!!!!!!!!

            if ( die_roll == 1 ) {
                let curseMod = "";
                die_roll = roll1dx(2);
                // Using ternary operator for either/or...
                const message = (die_roll == 1) ? "Armor" : "Shield";
                die_roll = roll1dx(6);
                if (die_roll == 1 || die_roll == 2 || die_roll == 3) {
                    curseMod = "-1 penalty to weapon or armor";
                } else if (die_roll == 4) {
                    curseMod = "-2 penalty to weapon or armor";
                } else if (die_roll == 5) {
                    curseMod = "-3 penalty to weapon or armor";
                } else {
                    curseMod = "Attracts Missiles and grants those missiles a +1 'to-hit' bonus.";
                }
                console.log(`Cursed ${message}`);
                displayTreasureDescription.innerHTML = `<b>💀 Cursed ${message}, ${curseMod}💀</b>`;

            } else if ( die_roll == 2 ) {
                weaponTypeIndex = Math.floor(Math.random() * magicMissileWeapons.length);
                weaponType = magicMissileWeapons[weaponTypeIndex];
                mod = "+1"
                let quantitySum = 0;
                let displayType = weaponType.type;

                if (typeof weaponType.action === "function") {
                    const rolls = weaponType.action();  // call the function
                    quantitySum = rolls.reduce((a, b) => a + b, 0 );
                    
                    if (quantitySum === 1 && displayType.endsWith("s")) {
                        displayType = displayType.slice(0, -1);
                    }
                } else {
                    quantitySum = weaponType.action;    // use the string or number
                }
                displayTreasureDescription.innerHTML = `<b>${quantitySum} Magic ${displayType} ${mod} to hit</b>`;

            } else if ( die_roll == 3 ) {
                // Magic Shield +1
                displayTreasureDescription.innerHTML = "<b>Magic Shield +1</b>";

            } else if ( die_roll == 4 || die_roll == 5 || die_roll == 6 ) {
                // Magic Melee Weapon +1
                weaponTypeIndex = Math.floor(Math.random() * magicMeleeWeapons.length);
                weaponType = magicMeleeWeapons[weaponTypeIndex].type;
                mod = "+1"
                console.log(`${weaponType} ${mod}`);
                displayTreasureDescription.innerHTML = `<b>Magic ${weaponType} ${mod}</b>`;

            } else if ( die_roll == 7 || die_roll == 8 ) {
                // Magic Armor +1
                displayTreasureDescription.innerHTML = "<b>Magic Armor +1</b>";

            } else if ( die_roll == 9 ) {
                // Cursed Weapon
                die_roll = roll1dx(6);
                if (die_roll == 1 || die_roll == 2 || die_roll == 3) {
                    curseMod = "-1 (Choose weapon or armor)";
                } else if (die_roll == 4) {
                    curseMod = "-2 (Choose weapon or armor)";
                } else if (die_roll == 5) {
                    curseMod = "-3 (Choose weapon or armor)";
                } else {
                    curseMod = "Attracts Missiles and grants those missiles a +1 'to-hit' bonus.";
                }
                console.log(`Cursed Weapon`);
                displayTreasureDescription.innerHTML = `<b>💀 Cursed Weapon ${curseMod}💀</b>`;
            }  else if ( die_roll == 10 ) {
                // Magic Missile Weapon(s) +2
                weaponTypeIndex = Math.floor(Math.random() * magicMissileWeapons.length);
                weaponType = magicMissileWeapons[weaponTypeIndex].type;
                mod = "+2"
                console.log(`${weaponType} ${mod}`);
                displayTreasureDescription.innerHTML = `<b>${weaponType} ${mod}</b>`;
            } else if ( die_roll == 11 ) {
                // Magic Shield +2
                displayTreasureDescription.innerHTML = "<b>Magic Shield +2</b>";
            } else if ( die_roll == 12 ) {
                // Magic Melee Weapon +2
                weaponTypeIndex = Math.floor(Math.random() * magicMeleeWeapons.length);
                weaponType = magicMeleeWeapons[weaponTypeIndex].type;
                mod = "+2"
                console.log(`${weaponType} ${mod}`);
                displayTreasureDescription.innerHTML = `<b>${weaponType} ${mod}`;
            } else if ( die_roll == 13 ) {
                // Magic Armor +2
                displayTreasureDescription.innerHTML = "<b>Magic Armor +2</b>";
            } else if ( die_roll == 14 ) {
                // Magic Melee Weapon +1 (plus Minor Ability)
                weaponTypeIndex = Math.floor(Math.random() * magicMeleeWeapons.length);
                weaponType = magicMeleeWeapons[weaponTypeIndex].type;
                mod = "+1"
                weaponAbilityIndex = Math.floor(Math.random() * minorAbilitiesForMeleeWeapons.length);
                weaponAbility = minorAbilitiesForMeleeWeapons[weaponAbilityIndex];
                console.log(`${weaponType} ${mod}, ${weaponAbility.type}`);
                displayTreasureDescription.innerHTML = `<b>${weaponType} ${mod}</b><br>${weaponAbility.type}`;
            }  else if ( die_roll == 15 ) {
                // Magic Missile Weapon(s) +3
                weaponTypeIndex = Math.floor(Math.random() * magicMissileWeapons.length);
                weaponType = magicMissileWeapons[weaponTypeIndex].type;
                mod = "+3"
                console.log(`${weaponType} ${mod}`);
                displayTreasureDescription.innerHTML = `<b>${weaponType} ${mod}</b>`;
            } else if ( die_roll == 16 ) {
                // Magic Melee Weapon +3
                weaponTypeIndex = Math.floor(Math.random() * magicMeleeWeapons.length);
                weaponType = magicMeleeWeapons[weaponTypeIndex].type;
                mod = "+3"
                console.log(`${weaponType} ${mod}`);
                displayTreasureDescription.innerHTML = `<b>${weaponType}, ${mod}`;
            } else if ( die_roll == 17 ) {
                // Magic Shield +3
                displayTreasureDescription.innerHTML = "<b>Magic Shield +3</b>";
            } else if ( die_roll == 18 ) {
                // Magic Armor +3
                displayTreasureDescription.innerHTML = "<b>Magic Armor +3</b>";
            } else if ( die_roll == 19 ) {
                // Unusual Weapon or roll again
                weaponTypeIndex = Math.floor(Math.random() * magicUnusualWeapons.length);
                weaponType = magicUnusualWeapons[weaponTypeIndex].type;
                weaponDescription = magicUnusualWeapons[weaponTypeIndex].description;

                //weaponType = "Intelligent Weapon" // !!!! TESTING ONLY DELETE THIS !!!
                
                if (weaponType == "Intelligent Weapon") {
                    mod = Math.floor(Math.random() * 3) +1;
                    die_roll = roll1dx(100);
                    if (die_roll <= 10) {
                        weaponSpellCasting = "This weapon can cast a spell once per day.";
                    } else {
                        weaponSpellCasting = "This weapon has no spellcasting ability.";
                    }

                    die_roll = roll1dx(100);
                    if (die_roll <= 25) {
                        weaponCommunication = "It is able to communicate audibly with its bearer.";
                    } else {
                        weaponCommunication = "It is able to communicate with its bearer, but not audibly.";
                    }
                    displayTreasureDescription.innerHTML = `<b>${weaponType}</b> +${mod} to hit<br>${weaponSpellCasting}<br>${weaponCommunication}`;
                } else {
                    displayTreasureDescription.innerHTML = `<b>${weaponType}</b><br>${weaponDescription}`;
                }
            } else if ( die_roll == 20 ) {
                // Unusual Armor or roll again
                weaponTypeIndex = Math.floor(Math.random() * magicUnusualArmor.length);
                weaponType = magicUnusualArmor[weaponTypeIndex].type;
                weaponDescription = magicUnusualArmor[weaponTypeIndex].description; 
                displayTreasureDescription.innerHTML = `<b>${weaponType}</b><br>${weaponDescription}</b>`;
            };            
        };