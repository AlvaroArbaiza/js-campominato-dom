/*
Consegna:
    - Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
    - In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
    - La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
    - Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

/* --------------------------- Variabili --------------------------- */
// Creo una variabile per selezionare il div #griglia
const griglia = document.querySelector( `#griglia`);

// Creo una variabile per selezionare l'elemento root
const root = document.querySelector(`:root`);

// Definisco la variabile per il select ("difficolta")
let difficoltA = document.getElementById("difficolta");

// Definisco la variabile per il Button PLAY
let play = document.getElementById("play");

// Seleziono lo span "time"
let tempo = document.getElementById("time");

// Variabile contatore
let count = 0;

/* --------------------------- Funzioni --------------------------- */
// Funzione per creare elemento( div class="box" ) con i numeri all'interno( testo )
function creoDiv( elemento, classe ) {

    // Creo l'elemento div
    const div = document.createElement(elemento);
    
    // Aggiungo a div la classe "box"
    div.classList.add(classe);

    return div;
}

// Aggiungo una funzione al click di PLAY
play.addEventListener( `click`, function(){

    // Invocazione gioco al Play
    playButton()
})

// Funzione per il numero di celle in base al value di ("difficoltA")
function widthCelle(cellePerRiga) {
    root.style.setProperty( `--widthBox`, ( Math.sqrt(cellePerRiga) ) );
}

/* ---------------------- Funzioni Custom ---------------------- */
function playButton(){
    
    // Ripristino count a 0
    count = 0;

    // Contatore di default
    tempo.innerHTML = count;

    // Al click faccio partire il contatore
    let myInterval = setInterval( contatore, 1000);

    // Aggiungo questo innerHTML per avere uno spazio vuoto di default
    griglia.innerHTML = "";
    
    // Definisco la variabile per il valore del select("difficolta")
    let valueDifficoltA = parseInt(difficoltA.value);
    
    // Settiamo una variabile true/false
    let inGame = false;

    // Creazione variabile per assegnare un punteggio
    let score = 0;

    // Invoco la funzione per cambiare il numero di celle per riga
    widthCelle(valueDifficoltA);

    // Invoco la funzione con il valore della difficoltà(difficoltA) come parametro
    let bombe = generoBombe(valueDifficoltA);
            
    // Creo un ciclo per generare una serie sequenziale di numeri da 1 a 100
    for ( let i = 1; i <= valueDifficoltA; i++ ) {
    
        let scatola = creoDiv( `div`, `box` );
        
        griglia.append(scatola);

        // Evento al click che cambia di colore i box dentro la griglia
        scatola.addEventListener( `click`, function () {
            
            // Se sono in gioco..
            if (!inGame) {

                // Se ( i ) non è incluso in bombe aggiungo la classe selected altrimenti selected-bomb
                if ( !bombe.includes(i) ){
    
                    // Se (i) non è presente pusho selected
                    this.classList.add("selected")
                    this.innerHTML=
                    `<img src="./assets/img/flower png.png" alt="">`;

                    // Ogni volta che l'utente non clicckerà su di una bomba acccumulerà 1 punto
                    score++;
                } else {
    
                    // Altrimenti aggiungo la classe selected-bomb quando clicco su di una bomba
                    this.classList.add("selected-bomb");
                    this.innerHTML=
                    `<i class="fa-solid fa-bomb fa-shake fa-2xl" style="color: #000000;"></i>`;
                    
                    // Quando la bomba è stata clickata inseriamo un testo con il punteggio
                    griglia.innerHTML+=
                    `
                    <div id="gameOver">
                    <h4>Hai perso!</h4>
                    <h5>Il tuo punteggio è di: ${score} punti</h5>
                    </div>
                    `
                   
                    clearInterval(myInterval);
                    
                    count = 0;

                    inGame = false;
                }
            } 
        })
    
    }
}

/* -------- Generazione Bombe -------- */

// Genero la funzione che verrà invocata con ( let bombe = generoBombe(valueDifficoltA) )
function generoBombe(paramDifficoltA){

    // Creo un array vuoto
    let array = [];    

    // Ciclo while per creare un numero predefinito di bombe dentro l'array
    while ( array.length < 16 ) {

        // Variabile che evoca la funzione ( numRand( max, min) )
        let bomb = numRand( paramDifficoltA, 1 );

        // Se nell'array non c'è il valore ( bomb )
        if (!array.includes(bomb)) {
        
            // Viene pushato ( bomb )
            array.push(bomb)
        }
    }

    // Return sull'array cosi quando invoco la funzione ottengo i valori generati da essa
    return array;
}

// Funzione per la creazione di un numero Random 
function numRand( max, min) {
    return Math.floor( (Math.random() * max) + min );
}

/* ---- DARK MODE ---- */

let darkMode = false;

// Creiamo la funzione che al click cambierà i valore all'interno di :root
function changeTheme() {
    root.style.setProperty(`--bgWhite`, `#000000`);
    root.style.setProperty(`--bgMain`, `#000000`);
    root.style.setProperty(`--bgPlay`, `#000000`);
    root.style.setProperty(`--colorBlack`, `#fff`);
    root.style.setProperty(`--borderColor`, `#fff`);
    root.style.setProperty(`--bgBox`, `#fff`);
}

// Targhettizziamo l'elemento darkMode e aggiungiamo un evento al click
document.getElementById(`darkMode`).addEventListener( `click`, function() {

    // Creiamo una serie di condizioni per la quale ogni volta verra attivato e non
    if (!darkMode) {
        
        changeTheme()
        darkMode = true;
    } else {
        root.style.setProperty(`--bgWhite`, `#fff`);
        root.style.setProperty(`--bgMain`, `#fff`);
        root.style.setProperty(`--bgPlay`, `greenyellow`);
        root.style.setProperty(`--colorBlack`, `#000000`);
        root.style.setProperty(`--borderColor`, `#bbb`);
        root.style.setProperty(`--bgBox`, `#ccc`);
        darkMode = false;
    }
})

// Funzione per contare il tempo
function contatore(){

    count++

    tempo.innerHTML = count;
}