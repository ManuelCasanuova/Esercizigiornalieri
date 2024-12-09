/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 1")

let l1= 10;
let l2= 10;

function area(){
   return (l1*l2);
   
}

let s=area()
console.log(s)

console.log("***")

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 2")


function crazySum (){
     if(l1===l2) {
       let sum=(l1+l2)*3
       console.log("Il risultato è:"+ +sum);
     } else {
        console.log("Il risultato è:" + +(l1+l2));
     }
}

crazySum()


console.log("***")

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 3")

const crazyDiff= (num)=>{
    if (num> 19) {
        return Math.abs(num -19) * 3;
    }
    return Math.abs (num-19)
}

console.log(crazyDiff(14))

console.log("******")

let n=70 ;

/*function crazyDiff() {
    let diff = Math.abs(n - 19);
    if (n > 19) {
        return diff * 3;
    }
    return diff;  
}
let h= crazyDiff();
console.log("Il risultato è:" + +h);

/*oppure:

function crazyDiff(n) {
    let diff = Math.abs(n - 19);
    if (n > 19) {
        return diff * 3;
    }
    return diff;
}

console.log(crazyDiff(37)); 
console.log(crazyDiff(10)); 
console.log(crazyDiff(19)); 
*/

console.log("***")

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 4")


function boundary(n){
    if (n>20 && n<=100||n===400){
        return (true+"il valore inserito è:"+ + n);
    } else{

    
  return ("False")
}
    

}

console.log (boundary(4000))

console.log("***")

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


console.log("Esercizio 5")

let str= "EPICODE Ciao a tutti"

function epify() {
       if (str.startsWith("EPICODE ")){
        console.log(str);
       } else {
        console.log("EPICODE " + str);
       }
}

epify()

console.log("***")

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 6")



function check3and7(num) {
    if(num>=0 && (num%3===0 || num%7===0)){
        return ("true - hai inserito "+num)
    }else 
    return "false - il numero inserito non è postivo"
}

console.log(check3and7(14))
console.log(check3and7(15))
console.log(check3and7(-7))

console.log("***")

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 7")

let str1= "Anna e Otto"

function reverseString () {
   console.log(str1.split("").reverse().join("")); 
}

reverseString ()

console.log("***")

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 8")

function upperFirst(str){
  
    if (str.length === 0){
        return "Errore"; 
    } else if (str.length!=0)
        return str
        .split(" ") 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(" ");
}

console.log(upperFirst("Ciao a tutti"))

console.log("***")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 9")

function cutString(str) {
    if (str.length<=2){
        return "Errore";    
    } else {
        return str.slice(1,-1)
    }
}

console.log(cutString("Ciao a tutti"))
console.log(cutString("Or"))
console.log(cutString("Porco cane"))

console.log("***")

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 10")



function giveMeRandom(n){
    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 11)); 
    }
    return randomNumbers;
    
}

console.log(giveMeRandom(5));

console.log("***")