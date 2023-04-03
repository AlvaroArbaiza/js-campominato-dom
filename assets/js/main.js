/*
Consegna:
    - Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
    - In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
    - La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
    - Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

// Creo una variabile per selezionare il div #griglia
const griglia = document.querySelector( `#griglia`);

// Definisco la variabile per il select ("difficolta")
let difficoltA = document.getElementById("difficolta");

// Definisco la variabile per il Button PLAY
let play = document.getElementById("play");

// Funzione per creare elemento( div class="box" ) con i numeri all'interno( testo )
function creoDiv( elemento, classe, testo ) {

    // Creo l'elemento div
    const div = document.createElement(elemento);

    // Aggiungo del testo
    div.innerText = testo
    
    // Aggiungo a div la classe "box"
    div.classList.add(classe);

    return div;
}

// Aggiungo una funzione al click di PLAY
play.addEventListener( `click`, function(){
    
    // Invocazione gioco al Play
    playButton()
})

/* ---------------------- Funzioni Custom ---------------------- */
function playButton(){
    
    // Aggiungo questo spazio di default
    griglia.innerHTML = ""
    
    // Definisco la variabile per il valore del select("difficolta")
    let valueDifficoltA = difficoltA.value;
    
    console.log(valueDifficoltA)
    
    // Creo le condizioni
    if ( valueDifficoltA == "easy" ) {
        
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

    } else if ( valueDifficoltA == "medium" ) {
    
        for ( let i = 1; i <= 81; i++ ) {
        
            let scatola = creoDiv( `div`, `box_medium`, i )
        
            // Evento al click che cambia di colore i box dentro la griglia
            scatola.addEventListener( `click`, function () {
        
                this.classList.toggle("selected");
                console.log(`selected`)
            })
        
            griglia.append(scatola)
        }
    } else if ( valueDifficoltA == "hard" ) {
    
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
}

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