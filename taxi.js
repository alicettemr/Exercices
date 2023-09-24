"use strict"
let prenom= "John";
let santeMentale = 10;
let feuRouge = 0; 
let musique=["Anissa-Wejdene", "Les prélis-Columbine", "The Master's call-Marty Robins", "Formula-Labrinth", "7 days- BigaRanx"]
let radio;

function radioMusic(){ //function radioMusic() -> j'avais mis ça au début mais ça n'a pas marché... je me demande si c'est pas à cause du Math.random du dessous
    let radio = Math.floor(Math.random() * 5);
    
    return radio
}

while (santeMentale > 0 && feuRouge < 30){
    //radio=musique[random()];
    radio=musique[radioMusic()];
    console.log("il y a"+radio+ "a la radio")
    if(radio == "Anissa-Wejdene") { // si la radio met la musique Anissa de Wejdene = santé mentale de john -1
        santeMentale--
    }

}
 if(santeMentale<=0){
    console.log("John est mort... Anissa de Wejdene a eu sa fin")
 }
 else{
    console.log("John est bien rentré a la casa! gg à lui")
 }
