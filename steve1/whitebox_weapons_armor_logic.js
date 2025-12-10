function getWeaponArmor() {
            let weaponTypeIndex = 0;
            let weaponType = "";
            let weaponDescription = "";
            let weaponAbilityIndex = "";
            let weaponAbility = "";
            //let weaponSubType = "";
            let mod = 0;
            
            console.log(`🏹 Treasure Quality: ${treasureType.quality}, Treasure Type: Magical Weapon or Armor`);
            die_roll = roll1dx(8) + treasureType.modifier; // Roll 1d8 + Quality mod
            //console.log(`1d8 + mod = ${die_roll}`);

            //die_roll = 20; // FOR TESTING ONLY !!!!!!!!!!!

            if ( die_roll == 1 ) {
                die_roll = roll1dx(2);
                // Using ternary operator for either/or...
                const message = (die_roll == 1) ? "Armor" : "Shield";
                console.log(`Cursed ${message}`);
            } else if ( die_roll == 2 ) {
                // Magic Missile Weapon(s)
                weaponTypeIndex = Math.floor(Math.random() * magicMissileWeapons.length);
                weaponType = magicMissileWeapons[weaponTypeIndex].type;
                mod = "+1"
                console.log(`${weaponType} ${mod}`);
            } else if ( die_roll == 3 ) {
                // Magic Shield +1
                console.log("Shield +1");
            } else if ( die_roll == 4 || die_roll == 5 || die_roll == 6 ) {
                // Magic Melee Weapon
                weaponTypeIndex = Math.floor(Math.random() * magicMissileWeapons.length);
                weaponType = magicMissileWeapons[weaponTypeIndex].type;
                mod = "+1"
                console.log(`${weaponType} ${mod}`);
            } else if ( die_roll == 7 || die_roll == 8 ) {
                // Magic Armor +1
                console.log("Armor +1");
            } else if ( die_roll == 9 ) {
                console.log(`Cursed Weapon`);
            }  else if ( die_roll == 10 ) {
                // Magic Missile Weapon(s)
                weaponTypeIndex = Math.floor(Math.random() * magicMissileWeapons.length);
                weaponType = magicMissileWeapons[weaponTypeIndex].type;
                mod = "+2"
                console.log(`${weaponType} ${mod}`);
            } else if ( die_roll == 11 ) {
                // Magic Shield +2
                console.log("Shield +2");
            } else if ( die_roll == 12 ) {
                // Magic Melee Weapon +2
                weaponTypeIndex = Math.floor(Math.random() * magicMeleeWeapons.length);
                weaponType = magicMeleeWeapons[weaponTypeIndex].type;
                mod = "+2"
                console.log(`${weaponType} ${mod}`);
            } else if ( die_roll == 13 ) {
                // Magic Armor +2
                console.log("Armor +2");
            } else if ( die_roll == 14 ) {
                // Magic Melee Weapon +1 (plus Minor Ability)
                weaponTypeIndex = Math.floor(Math.random() * magicMeleeWeapons.length);
                weaponType = magicMeleeWeapons[weaponTypeIndex].type;
                mod = "+1"
                weaponAbilityIndex = Math.floor(Math.random() * minorAbilitiesForMeleeWeapons.length);
                weaponAbility = minorAbilitiesForMeleeWeapons[weaponAbilityIndex];
                console.log(`${weaponType} ${mod}, ${weaponAbility.type}`);
            }  else if ( die_roll == 15 ) {
                // Magic Missile Weapon(s) +3
                weaponTypeIndex = Math.floor(Math.random() * magicMissileWeapons.length);
                weaponType = magicMissileWeapons[weaponTypeIndex].type;
                mod = "+3"
                console.log(`${weaponType} ${mod}`);
            } else if ( die_roll == 16 ) {
                // Magic Melee Weapon +3
                weaponTypeIndex = Math.floor(Math.random() * magicMeleeWeapons.length);
                weaponType = magicMeleeWeapons[weaponTypeIndex].type;
                mod = "+3"
                console.log(`${weaponType} ${mod}`);
            } else if ( die_roll == 17 ) {
                // Magic Shield +3
                console.log("Shield +3");
            } else if ( die_roll == 18 ) {
                // Magic Armor +3
                console.log("Armor +3");
            } else if ( die_roll == 19 ) {
                // Unusual Weapon or roll again
                weaponTypeIndex = Math.floor(Math.random() * magicUnusualWeapons.length);
                weaponType = magicUnusualWeapons[weaponTypeIndex].type;
                weaponDescription = magicUnusualWeapons[weaponTypeIndex].description;
                console.log(`Unusual Weapon: ${weaponType}, Description: ${weaponDescription}`);
            } else if ( die_roll == 20 ) {
                // Unusual Armor or roll again
                weaponTypeIndex = Math.floor(Math.random() * magicUnusualArmor.length);
                weaponType = magicUnusualArmor[weaponTypeIndex].type;
                weaponDescription = magicUnusualArmor[weaponTypeIndex].description;
                console.log(`Unusual Armor: ${weaponType}, Description: ${weaponDescription}`);
            }

            /*
            let weaponOrArmor = magicalWeaponsAndArmor.find(
                item => die_roll == item.roll)?.type || "No match...";
            console.log(weaponOrArmor);
            */
        };