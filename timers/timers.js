onload = init;

//variable metier
let zeNumber = 0;
//reference vers le timers
let zeTimer = null;
let zeButton;

function init() {

    //raccourci vers le bouton
    zeButton = document.getElementById("bt1");

    //click sur le bouton
    document.getElementById("bt1").addEventListener("click", play);
    //play();

}

function play() {
    //timer arreté
    if (zeTimer == null) {
        //on démarre le timer
        zeTimer = setInterval(action, 50);//argument en milliseconde// toute les seconde la fonction action est appelé
        //on mùanipule le libellé du bouton
        zeButton.value="Pause";
        
    } else {
        //on stoppe le timer
        clearInterval(zeTimer);
        zeButton.value="Play";
        zeTimer = null;
    }
}
function action(){
    ++zeNumber;
    document.getElementById("output").innerHTML=zeNumber;
}