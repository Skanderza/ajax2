//elements.js
onload = init;

function init(){
    zeButton = document.getElementById("bt1"); //raccourci vers le bouton
    zeButon.addEventListener("click", createDomElement); //click sur le bouton

}


function createDomElement(){
    //creer un element 'div' ++ un noeud  texte
    let zeDiv = document.createElement("div");
    //creer un attribut pour la div
    zeDiv.setAttribute("style", "background: #ff0000");
    //zeDiv.style = "background: #ff0000";

    let content = document.createTextNode("CC une nouvelle div creer dynamiquement");

    //on ajoute le texte a la div
    zeDiv.appendChild(content);
    //on ajoute a la div au container(existant)
    document.getElementById("container").appendChild(zeDiv);
}