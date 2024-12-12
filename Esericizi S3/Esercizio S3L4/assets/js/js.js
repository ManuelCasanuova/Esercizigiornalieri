

function creaTabelloneTombola() {
    const tabellone = document.querySelector("#tabellone");

    for (let i = 1; i <= 76; i++) {
        const cella = document.createElement("div"); // Creazione di una cella
        cella.classList.add("cella"); // Aggiunta della classe "cella" per lo stile
        cella.innerText = i; // Imposta il numero della cella
        tabellone.appendChild(cella); // Aggiunge la cella al tabellone
    }
}

let numeriEstratti = [];

function estrazioneNumeri() {
    const estrazione = document.querySelector("#tasto");

    estrazione.addEventListener('click', () => {
        // Verifica se tutti i numeri sono stati estratti
        if (numeriEstratti.length >= 76) {
            alert("Tutti i numeri sono stati estratti!");
            return;
        }
        // Genera un numero casuale non ripetuto
        let numero;
        do {
            numero = Math.floor(Math.random() * 76) + 1; // Numero casuale tra 1 e 76
        } while (numeriEstratti.includes(numero));

        numeriEstratti.push(numero); // Salva il numero estratto

        accendiCella(numero); // Accendi la cella corrispondente
        mostraNumeroEstratto(numero); // Mostra il numero estratto
    });
}

function accendiCella(numero) {
    const celle = document.querySelectorAll(".cella"); // Seleziona tutte le celle
    celle.forEach(cella => {
        if (parseInt(cella.textContent) === numero) {
            cella.classList.add("estratto"); // Aggiungi una classe per accendere la cella
        }
    });
}

function mostraNumeroEstratto(numero) {
    const estrattoDiv = document.querySelector("#numeroEstratto");
    estrattoDiv.textContent = `Numero Estratto: ${numero}`;
}

// Inizializza il tabellone e il pulsante
document.addEventListener("DOMContentLoaded", () => {
    creaTabelloneTombola();

    // Aggiungi un contenitore per il numero estratto
    const estrattoDiv = document.createElement("div");
    estrattoDiv.id = "numeroEstratto";
    estrattoDiv.style.marginTop = "20px";
    estrattoDiv.style.fontSize = "20px";
    document.body.appendChild(estrattoDiv);

    // Collega la funzione di estrazione al pulsante
    estrazioneNumeri();
});


/*//Cartella Giocatore


let numeriCartella = []; // Array per tracciare i numeri già estratti

function creaCartella() {
    const cartella = document.querySelector("#cartella");

    for (let i = 1; i <= 24; i++) {
        const cellaCartella = document.createElement("div"); // Creazione di una cella
        cellaCartella.classList.add("cellaCartella"); // Aggiunta della classe "cellaCartella" per lo stile
        cellaCartella.innerText = estrazioneNumeriCartella(); // Imposta il numero della cella
        cartella.appendChild(cellaCartella); // Aggiunge la cella alla cartella
    }
}

function estrazioneNumeriCartella() {
    let numero;
    // Estrai un numero casuale tra 1 e 76 che non è stato estratto prima
    do {
        numero = Math.floor(Math.random() * 76) + 1;
    } while (numeriCartella.includes(numero));

    numeriCartella.push(numero); // Aggiungi il numero all'array dei numeri estratti
    return numero; // Restituisce il numero estratto
}

function accendiCellaCartella(numero) {
    const celleCartella = document.querySelectorAll(".cellaCartella"); // Seleziona tutte le celle della cartella
    celleCartella.forEach(cellaCartella => {
        if (parseInt(cellaCartella.textContent) === numero) {
            cellaCartella.classList.add("estrattoCartella"); // Aggiungi una classe per accendere la casella
        }
    });
}

creaCartella();


/*let numeriEstratti = []; // Array per tracciare i numeri già estratti

// Funzione per creare il tabellone
function creaTabelloneTombola() {
    const tabellone = document.querySelector("#tabellone");

    for (let i = 1; i <= 76; i++) {
        const cella = document.createElement("div"); // Creazione di una cella
        cella.classList.add("cella"); // Aggiunta della classe "cella" per lo stile
        cella.innerText = i; // Imposta il numero della cella
        tabellone.appendChild(cella); // Aggiunge la cella al tabellone
    }
}

// Funzione per estrarre numeri casuali
function estrazioneNumeri() {
    const estrazione = document.querySelector("#tasto");

    estrazione.addEventListener('click', () => {
        // Verifica se tutti i numeri sono stati estratti
        if (numeriEstratti.length >= 76) {
            alert("Tutti i numeri sono stati estratti!");
            return;
        }

        // Genera un numero casuale non ripetuto
        let numero;
        do {
            numero = Math.floor(Math.random() * 76) + 1; // Numero casuale tra 1 e 76
        } while (numeriEstratti.includes(numero));

        numeriEstratti.push(numero); // Salva il numero estratto

        accendiCella(numero); // Accendi la cella corrispondente nel tabellone
        accendiCellaCartella(numero); // Accendi la cella corrispondente nella cartella
        mostraNumeroEstratto(numero); // Mostra il numero estratto
    });
}

// Funzione per accendere la cella del tabellone
function accendiCella(numero) {
    const celle = document.querySelectorAll(".cella"); // Seleziona tutte le celle del tabellone
    celle.forEach(cella => {
        if (parseInt(cella.textContent) === numero) {
            cella.classList.add("estratto"); // Aggiungi una classe per accendere la cella
        }
    });
}

// Funzione per accendere la cella della cartella
function accendiCellaCartella(numero) {
    const celleCartella = document.querySelectorAll(".cellaCartella"); // Seleziona tutte le celle della cartella
    celleCartella.forEach(cellaCartella => {
        if (parseInt(cellaCartella.textContent) === numero) {
            cellaCartella.classList.add("estrattoCartella"); // Aggiungi una classe per accendere la casella
        }
    });
}

// Funzione per visualizzare il numero estratto
function mostraNumeroEstratto(numero) {
    const estrattoDiv = document.querySelector("#numeroEstratto");
    estrattoDiv.textContent = `Numero Estratto: ${numero}`;
}

// Funzione per creare la cartella del giocatore
let numeriCartella = []; // Array per tracciare i numeri già estratti nella cartella

function creaCartella() {
    const cartella = document.querySelector("#cartella");

    for (let i = 1; i <= 24; i++) {
        const cellaCartella = document.createElement("div"); // Creazione di una cella
        cellaCartella.classList.add("cellaCartella"); // Aggiunta della classe "cellaCartella" per lo stile
        cellaCartella.innerText = estrazioneNumeriCartella(); // Imposta il numero della cella
        cartella.appendChild(cellaCartella); // Aggiunge la cella alla cartella
    }
}

// Funzione per estrarre numeri casuali per la cartella
function estrazioneNumeriCartella() {
    let numero;
    do {
        numero = Math.floor(Math.random() * 76) + 1;
    } while (numeriCartella.includes(numero)); // Evita numeri duplicati

    numeriCartella.push(numero); // Aggiungi il numero all'array dei numeri estratti
    return numero; // Restituisce il numero estratto
}

// Inizializza il tabellone e la cartella
document.addEventListener("DOMContentLoaded", () => {
    creaTabelloneTombola(); // Crea il tabellone
    creaCartella(); // Crea la cartella

    // Aggiungi un contenitore per il numero estratto
    const estrattoDiv = document.createElement("div");
    estrattoDiv.id = "numeroEstratto";
    estrattoDiv.style.marginTop = "20px";
    estrattoDiv.style.fontSize = "20px";
    document.body.appendChild(estrattoDiv);

    // Collega la funzione di estrazione al pulsante
    estrazioneNumeri();
});*/







