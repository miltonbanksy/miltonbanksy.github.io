const imgBtnJoy = document.getElementById('flex-box1');
const imgBtnSteve = document.getElementById('flex-box2');
const imgBtnBlog = document.getElementById('flex-box3');


// FUNCTIONS:

function openPageJoy(){
    window.open("../joy1/joy1.html", "_self");
}

function openPageSteve(){
    //window.open('../steve1/steve1.html', '_self'); DEFAULT
    window.open('../steve1/steve1_menu.html', '_self'); // TRIAL menu
}

function openPageBlog(){
    window.open('../stevejoyblog/sj_blog.html', '_self');
}


// LISTENERS:
imgBtnJoy.addEventListener('click', openPageJoy);
imgBtnSteve.addEventListener('click', openPageSteve);
imgBtnBlog.addEventListener('click', openPageBlog);