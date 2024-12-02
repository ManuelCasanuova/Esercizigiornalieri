/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* SCRIVI QUI LA TUA RISPOSTA

I Datatype sono le tipologie di valori che possono essere visualizzati ed utilizzati nel linguaggio JS.

/*  1 Stringa -> Valore composto dal singolo carattere o da una sequenza di caratteri. Esempio:*/

let stringa= "Questa è una stringa";
console.log(stringa);

/*  2 Numeri -> Valore numerico, può essere un numero intero o decimale. Esempio::*/

let numero= 10;
let numero_1= 70;
let numero_2= 15;
let numero_3= "<- Questo numero è decimale"
console.log(numero*numero_1/numero_2+" "+numero_3);


/*  3 Booleani -> Valore Boolean, a differenza dei numeri su base 10 (decimali), si basano sui numeri binari (0 e 1). A 0 verrà assegnato il valore False (0), mentre ad 1 verrà assegnato il valore True (1)
Esempio:*/

let boole= true;
console.log(boole);
let boole_1= false;
console.log(boole_1);
console.log(boole && boole_1);

/*se boole_1 fosse "true":*/

boole_1= true;
console.log(boole && boole_1);

/*  4 Null -> Valore indicato precedentemente in una variabile, ma che è stato "nascosto" intenzionalmente. Esempio: */

let saluti= "Ciao";
saluti=null;
console.log(saluti);  /*nella console verrà visualizzato null*/


/*  5 Undefined -> Valore non assegnato ad una variavile, che quindi risulterà non definita da un valore. Esempio:*/

let saluti_1;
console.log(saluti_1); /*nella console verrà visualizzato undefinited*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let myName= "Manuel";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero_4= 12;
let numero_5= 20;
let numero_6= numero_4 + numero_5;
console.log(numero_6);

/* oppure*/


console.log(numero_4 + numero_5);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x=12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName= "Manuel";
console.log(myName);
myName= "Casanuova";
console.log(myName);

const ilMioNome= "Manuel";
console.log(ilMioNome);

/*
ilMioNome="Casanuova";
console.log("Casanuova") 

const ilMioNome è una variabile "costante" che non permette di essere variata da valori inseriti successivamente, infatti da console riceverò un messaggio:
D1.js:90 Uncaught TypeError: Assignment to constant variable.
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log((numero_4+numero_5)-x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/



/* SCRIVI QUI LA TUA RISPOSTA */

let name1="john";
let name2="John";
let c= name1==name2;
console.log(c);
let d= name2.toLowerCase();
console.log(name1===d);