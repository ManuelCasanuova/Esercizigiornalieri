/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 1");

let x=29;
let y=17;

if (x>y) {
      console.log("Il numero inserito in 'x' è più grande")
}

else{
  console.log("Il numero inserito in 'y' è più grande")
}


console.log("******");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 2");



if(x!=5){
  console.log("il numero fornito è diverso da 5")
}

else{
  console.log("il numero fornito è uguale a 5")
} /*else si sarebbe potuto ometter*/

console.log("******");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 3");

if (x%5==0){
  console.log("il numero fornito è divisibile per 5")
}

else{
  console.log("il numero fornito non è divisibile per 5")
}

console.log("******");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 4");

let p=5;
let j=3;

if (p==8 || j==8){
   console.log("uno o più numeri forniti sono uguali ad 8")
}
else if ((p + j === 8) || (p - j === 8) || (j - p === 8)) {
  console.log("La somma dei numeri è 8.");
}
else if (p - j ===8){
  console.log("La differenza dei numeri è 8 ")
}
else if (j - p ===8){
  console.log("La differenza dei numeri è 8 ")
}

console.log("******");



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 5");

let totalShoppingCart= 49


if (totalShoppingCart>=50){
  console.log("Hai diritto alla spedizione gratuita!")
}
else if (totalShoppingCart+=10){
  console.log("Al prezzo dei prodotti saranno sommati €10 per la spedizione!")
  console.log(totalShoppingCart)
}

console.log("******");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 6");

totalShoppingCart= 49/1.25;

if (totalShoppingCart>=50){
  console.log(totalShoppingCart)
  console.log("Hai diritto alla spedizione gratuita!")
  
}
else if (totalShoppingCart+=10){
  console.log(totalShoppingCart)
  console.log("Al prezzo dei prodotti saranno sommati €10 per la spedizione!")
 
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


console.log("Esercizio 7");

let a=9;
let b=29;
let c=19;

let minore;
let medio;
let maggiore;

if((a>=b)&&(a>=c)){
    maggiore=a;
    if(b>=c){
      medio=b;
      minore=c;
    }
    else{
      medio=c;
      minore=b;
    }
  }

else if((b>=a)&&(b>=c)){
  maggiore=b;
    if(a>=c){
      medio=a;
      minore=c;
    }

    else{
      medio=c;
      minore=a;
    }
}

else if((c>=a)&&(c>=b)){
  maggiore=c;
    if(b>=a){
      medio=b;
      minore=a;
    }
    else{
      medio=a;
      minore=b;
    }
  }

  console.log(minore,medio,maggiore);

  console.log("******");

 
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/



/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 8");

let parola="ciao";

console.log(typeof a);
console.log(typeof parola);


console.log("******");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 9");

let _9=2000

if (_9%2==0){
  console.log("il numero inserito è pari")
}
else{
  console.log("il numero è dispari")
}

console.log(_9%2);

console.log("******");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 10");

let val = 5
  if ((val < 10)&&(val>5)) {
      console.log("Meno di 10");
    } else if ((val <= 5)||(val!=5)) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

console.log("******");

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/



const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 11");

me.city= "toronto";

console.log(me);


console.log("******");

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*console.log("Esercizio 12");

me.splice (1,1);

console.log(me);*/


console.log("******");

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*console.log("Esercizio 13")

me.splice (2,[css])

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 14")

const myArr=[];

myArr.push(1,2,3,4,5,6,7,8,9,10);

console.log(myArr);

console.log("******");

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 15")

myArr.splice(9,1,100)

console.log(myArr);

console.log("******");