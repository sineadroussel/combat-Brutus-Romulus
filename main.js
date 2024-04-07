/*
console.log("Hello world !")

var animal = "cat"
let age = 16
let division =2

if(age != 0) {
   console.log(age/division) 
    }


var personnag1 = "Jean"
let argent = 30
var produit = " sachet de billes"
let produit1 = 15
let quantite = 3
let achat = 1


function substraction (argent, produit) {
return argent - produit
}

substraction (argent, produit1)

function subs (quantite, achat) {
    return quantite - achat
}

subs (quantite, achat)

if (argent - produit1) {
    console.log (argent-produit)
}

if (quantite - achat) { 
    console.log (quantite-achat)
}

console.log (personnag1 + " a acheter " +  achat +  produit)
console.log ("il restera " + 2 + produit) 

 
let personnage2= {
    name: "Jean"
}
console.log(personnage2.name)
//Jean

let perso = {
    name: "Brutus"
let pointdevie = 5
}


let personnage = {
    name: "Romulus"
     

}

*/


class guerrier {


    constructor(attack, precision, vie) {
        this.attack = attack;
        this.precision = precision;
        this.vie = vie
        
        
    }

    getAttackRomulus() {
       if (Romulus.precision > Math.random()) {
            Brutus.vie = Brutus.vie - Romulus.attack

        console.log("Romulus à réussit son attaque")
       } else {

        console.log('Romulus rate son attaque')
       }
       }

       getAttackBrutus() {

        if (Brutus.precision > Math.random()){
            Romulus.vie = Romulus.vie - Brutus.attack
            console.log ("Brutus à réussit son attaque")
        } else {

            console.log('Brutus rate son attaque')
           }
        }


}



let Romulus = new guerrier (1, 0.5, 5)
let Brutus = new guerrier (1, 0.6, 5)

while (Romulus.vie >0 && Brutus.vie >0) {
    Romulus.getAttackRomulus()
    console.log  ('Romulus vie :', Romulus.vie)

    Brutus.getAttackBrutus()
    console.log ('Brutus vie:', Brutus.vie)

    if (Romulus.vie == 0) {
        console.log ("Brutus à gagné")
    }

    if (Brutus.vie == 0) {
        console.log ("Romulus à gagné")
    }

}





   