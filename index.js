const imgBtnJoy = document.getElementById('flex-box1');
const imgBtnSteve = document.getElementById('flex-box2');



// FUNCTIONS:

function openPageJoy(){
    window.open("../joy1/joy1.html", "_self");
}

function openPageSteve(){
    window.open('../steve1/steve1.html', '_self');
}
// LISTENERS:
imgBtnJoy.addEventListener('click', openPageJoy);
imgBtnSteve.addEventListener('click', openPageSteve);