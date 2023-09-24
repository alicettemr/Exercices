"use strict"

let tueur= "Jason";
let vieTueur= 100;
let caracteristique=["nerd", "sportif", "blond", "bg", "timide"];
let prenom=["Maxime", "Jules", "Axel", "Adrien", "Marie"];

function prenomRandom(){
    return prenom[Math.floor(Math.random()*prenom.length)];

}

function attaque(){
    return Math.random()< 0.5;
}
function dgtMourir(){
    return Math.random()< 0.3;
}
function mourir(){
    return Math.random()< 0.2;
}

function tueurAttaque(){
    let esquive=Math.random()<0.5;
    if(esquive){
        return -10; // ici, si le survivant esquive= +10 de dgt
    }
    else{
        let mourir=Math.random()<0.3;
        if (mourir){
            return -15
        }
    }
}
function tourDeJeu() {  //je me suis aidé de chatgpt pour ce morceau de code... cependant je ne comprends pas pourquoi celui-ci ne marche pas alors qu'en y réfléchissant après avoir regardé il me semble bon
    let survivant = {
        prenom: prenomRandom(),
        caracteristique: caracteristique[Math.floor(Math.random() * caracteristique.length)],
    }

  if (survivant.vie <= 0) {
        console.log("${survivant.prenom} a succombé...")
    } else {
        console.log("(${survivant.prenom}) a survécu!");
    }
}
 // je n'arrive pas à trouver comment afficher les actions qui ce sont passé à la fin de chaque tour

 if(vieTueur<=0){
    console.log("Le tueur est mort!")
 }
 else{
    console.log("Jason a gagné la partie et a tué tout les survivants...")
 }
