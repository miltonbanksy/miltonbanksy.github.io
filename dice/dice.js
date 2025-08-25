let dieImage = document.getElementById('dice_image');
let h1_dice_roller = document.getElementById('h1_dice_roller');
const die_faces = {
    "die_face_1":{
        "image": "die_classic_1.png",
        "value": 1
    },
    "die_face_2":{
        "image": "die_classic_2.png",
        "value": 2
    },
    "die_face_3":{
        "image": "die_classic_3.png",
        "value": 3
    },
    "die_face_4":{
        "image": "die_classic_4.png",
        "value": 4
    },
    "die_face_5":{
        "image": "die_classic_5.png",
        "value": 5
    },
    "die_face_6":{
        "image": "die_classic_6.png",
        "value": 6
    }
};

function rollD6(){
    h1_dice_roller.innerHTML = "Rolling...";
    dieImage.src = "die_classic_0.png";
    dieImage.classList.add('spinner');
    setTimeout(getRandomFace, 2000);
    setTimeout(stopSpin, 2000);
}
    
function getRandomFace(){
    const dieKeys = Object.keys(die_faces);
    const randomDieIndex = Math.floor(Math.random() * dieKeys.length);
    const randomDieKey = dieKeys[randomDieIndex];
    dieImage.src = die_faces[randomDieKey]["image"];
}

function stopSpin(){
    dieImage.classList.remove('spinner');
    h1_dice_roller.innerHTML = "Dice Roller";
}


dieImage.addEventListener('click', rollD6);


