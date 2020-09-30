


//Event click sur le bouton
//document.getElementById("bt-check").onclick= check; c'est la mem chose que ci dessous
document.getElementById("bt-check").addEventListener("click", check);

//---------------------------------
function check(){
    //Au moinder souci, ça passe à false
    let validationFinal = true;

    //Nettoyage des champs
    document.getElementById("err-user").innerHTML = "";
    document.getElementById("err-pass").innerHTML = "";
    document.getElementById("err-size").innerHTML = "";
    document.getElementById("err-topping").innerHTML = "";
    document.getElementById("err-payment").innerHTML = "";

//------------------------------
//valid user
if(document.getElementById("user").nodeValue.length < 10 || document.getElementById("user").nodeValue.length > 20  ){
    document.getElementById("err-user").innerHTML = "Min: 10 -Max: 20 !";
    validationFinal = false;
}

//bouton radio
//on pointe le composant
var size =  document.getElementsByName("size");
var tailleOk = false;
//on parcous tout les bouton radion boucle for
for(let i = 0 ; i<size.length; i++){
    //on attrape le bouton avec if
    if(size[i].checked === true) tailleOk = true;
}
if(!tailleOk){
    document.getElementById("err-size").innerHTML = "SVP saisissez une taille !";
    validationFinale = false;
}
//--------------------------
//valid pass
if(document.getElementById("pass").value.length < 5 || document.getElementById("pass").value.length > 10  ){
    document.getElementById("err-pass").innerHTML = "Ecrire 5 et 10 caractère !";
    validationFinal = false;
}
//--------------------------
//valid size
let size = document.getElementsByName("size");//returns NodeList !
let tailleOk = false;
//on les parsours pour verifier si ils sont checked
for(let i=0; i< size.length; i++){
    if(size[i].checked === true) tailleOk = true;
}
if(!tailleOk){
    document.getElementById("err-size").innerHTML= "SVP saisissez une taille !";
    validationFinal =false;
}
//--------------------------
//valid toppings
let toppings = document.getElementsByName("topping[]");
let toppingsCount = 0;
for(let i=0; i< toppings.length; i++){
    if(toppings[i].checked === true) ++toppingsCount ;
}
if(!toppingsCount<3){
    document.getElementById("err-topping").innerHTML= "SVP au moins 3 ingredients!";
    validationFinal =false;
}


//--------------------------
//valid payment
//en 2 instructions
let laListe = document.getElementsByName("payment").options;
console.log(laListe);
var optionSelectionnee = document.getElementById("payment").selectedIndex;
console.log(optionSelectionnee);
var optionPaiement = laListe[optionSelectionnee].value;
if(!optionPaiement === -1){
    document.getElementById("err-payment").innerHTML= "SVP saississez une moyen de paiement !";
    validationFinal =false;

}

//En 1 instruction
 var optionPaiement = document.getElementById("payment").options[document.getElementById("payment").selectedIndex].value;

 //Validation finale
 if(validationFinal) document.getElementById("zePizzaForm").submit();









}