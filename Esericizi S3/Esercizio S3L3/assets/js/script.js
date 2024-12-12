let listaValori = [];  

function aggiungiValore() {
   let inputValore = document.querySelector('#inputValore').value;
        if (inputValore.trim() !== '') {
        listaValori.push(inputValore);
        resettaInput();
        aggiornaLista();
    } else {
        alert('Per favore, inserisci un valore.');
    }
}

function resettaInput() {
    
    document.querySelector('#inputValore').value = '';
}

function aggiornaLista() {
   
    let listaNode = document.querySelector('#lista');
    listaNode.innerHTML = '';
    let ol = document.createElement('ol');

    listaValori.forEach((valore, i) => {
        let li = document.createElement('li');
        li.textContent = valore;  
        let btnRimuovi = document.createElement('button');
        btnRimuovi.textContent = 'X';
        btnRimuovi.classList.add('remove-button');
        btnRimuovi.onclick = function() {
            rimuoviValore(i);
        };
        li.appendChild(btnRimuovi);

        ol.appendChild(li);
    });

    listaNode.appendChild(ol);
}

function rimuoviValore(indice) {
    
    listaValori.splice(indice, 1);
    aggiornaLista();
}




















