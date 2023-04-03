/*
Consegna:
    - L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    - Ogni cella ha un numero progressivo, da 1 a 100.
    - Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    - Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus :
    - Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
        - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
        - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
        - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Bonus extra :
    - Aggiungere la versione dark mode
*/

// Creo una variabile per selezionare il div #griglia
const griglia = document.querySelector( `#griglia`);

// Funzione per creare elemento div="box"
function creoDiv( elemento, classe, testo ) {

    // Creo l'elemento div
    const div = document.createElement(elemento);

    // Aggiungo del testo
    div.innerText = testo
    
    // Aggiungo a div la classe .box
    div.classList.add(classe);

    return div;
}

// Definisco la variabile per il button Play
let play = document.getElementById("play");

// Aggiungo una funziona al click
play.addEventListener( `click`, function() {
    
    // Aggiungo questo spazio di default
    griglia.innerHTML = ""
    
    // Definisco la variabile per select
    let difficoltA = document.getElementById("difficolta").value;
    
    console.log(difficoltA)
    
    // Creo le condizioni
    if ( difficoltA == "easy" ) {
        
        // Creo un ciclo per generare una serie sequenziale di numeri da 1 a 100
        for ( let i = 1; i <= 100; i++ ) {
        
            let scatola = creoDiv( `div`, `box_easy`, i )
        
            // Evento al click che cambia di colore i box dentro la griglia
            scatola.addEventListener( `click`, function () {
        
                this.classList.toggle("selected");
                console.log(`selected`)
            })
        
            griglia.append(scatola)
        }

    } else if ( difficoltA == "medium" ) {
    
        for ( let i = 1; i <= 81; i++ ) {
        
            let scatola = creoDiv( `div`, `box_medium`, i )
        
            // Evento al click che cambia di colore i box dentro la griglia
            scatola.addEventListener( `click`, function () {
        
                this.classList.toggle("selected");
                console.log(`selected`)
            })
        
            griglia.append(scatola)
        }
    } else if ( difficoltA == "hard" ) {
    
        for ( let i = 1; i <= 49; i++ ) {
        
            let scatola = creoDiv( `div`, `box_hardcore`, i )
        
            // Evento al click che cambia di colore i box dentro la griglia
            scatola.addEventListener( `click`, function () {
        
                this.classList.toggle("selected");
                console.log(`selected`)
            })
        
            griglia.append(scatola)
        }
    }
})

/* DARK MODE */
// Seleziono l'elemento root
const root = document.querySelector(`:root`);

let darkMode = false;

// Creiamo la funzione che al click cambierà i valore all'interno di :root
function myFunction() {
    root.style.setProperty(`--bgWhite`, `black`);
    root.style.setProperty(`--bgMain`, `black`);
    root.style.setProperty(`--bgPlay`, `black`);
    root.style.setProperty(`--colorBlack`, `white`);
    root.style.setProperty(`--borderColor`, `white`);
    root.style.setProperty(`--bgBox`, `white`);
    root.style.setProperty(`--bgBoxSelected`, `red`);
}

// Targhettizziamo l'elemento darkMode e aggiungiamo un evento al click
document.getElementById(`darkMode`).addEventListener( `click`, function() {

    // Creiamo una serie di condizioni per la quale ogni volta verra attivato e non
    if (!darkMode) {
        
        myFunction()
        darkMode = true;
    } else {
        root.style.setProperty(`--bgWhite`, `white`);
        root.style.setProperty(`--bgMain`, `whitesmoke`);
        root.style.setProperty(`--bgPlay`, `greenyellow`);
        root.style.setProperty(`--colorBlack`, `black`);
        root.style.setProperty(`--borderColor`, `black`);
        root.style.setProperty(`--bgBox`, `springgreen`);
        root.style.setProperty(`--bgBoxSelected`, `darkorange`);
        darkMode = false;
    }
})