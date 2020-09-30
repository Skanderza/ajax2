        // starter.js

        //console.log("Hey");

        //On écoute le chargement 
        //Avec un attribut évènmentiel ou avec la methode addEventListener()
        //onload = init();
        addEventListener("load", init);


        function init(evt){

            console.log(evt.target)
            document.getElementById("output").innerHTML = "Hey!!";


        //INLINE functions/Anonymous Functions

        let maFonction = function(){
            console.log("Hey from an inline function");
        };
        //Invocation de la fonction
        maFonction();
        }


        //On déclare un objet
        var clientModel = {
            //Attribut (ou propriété) séparé par une virgule
            nom: "Bob",
            scoreFid: 100,

        // Methode
        afficher : function(){
            console.log("Nom ==> " + this.nom + " score ==> " + this.scoreFid);
        },
        addPoints : function(points){
            this.score += points;
        }
        }; //object end

        //On affiche les donnees (l'état de l'objet(objet state))
        clientModel.afficher();
        //On donne 10 points a Bob
        clientModel.addPoints(10);





        // Déclaration simple
        var monTableau = [];
        // Ecriture gentiment 'méprisée' par certains. Javascript déclare qu'il 'préfère' la déclaration à base de crochets
        // var monTableau = new Array(); 

        // Déclaration avec éléments
        var listeVilles = ["Paris", "Nice", "Le Caire"];
        var notesEtudiant = [15, 12, 11.2, 14.5, 9];


        // Affichage d'élément
        console.log(listeVilles[0]); // Paris
        console.log(listeVilles[4]); // Elément inexistant !

        // Modification d'un élément
        listeVilles[0] = "Los Angeles";
        console.log(listeVilles[0]); // Los Angeles

        // Lecture de chaque élément avec une boucle classique
        for(let i = 0; i < listeVilles.length; i++){
            console.log(listeVilles[i]);
        }

        for(let i = 0; i < notesEtudiant.length; i++){
            console.log(notesEtudiant[i]);
        }















