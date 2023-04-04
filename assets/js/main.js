/*Consegna:
- Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
- Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

// Creo un array vuoto in cui mi andrà a mettere i numeri generati randomicamente (mi è comodo per fare un confronto con le risposte)
let numsRandom = [];

// do una variabile al pulstante "comincia"
let start = document.getElementById("start")

// scrivo la funzione che mi genera i numeri random al click del pulsante "comincia"
start.addEventListener ('click', function(){

    // richiamo l'array vuoto all'inizio del click del button comincia
    numsRandom = [];

    // faccio si che il tasto start non sia più visualizzato
    start.style.display = "none"

    // Genero 5 numeri random da 1 a 100 e li pusho nell'array "numsRandom"
    // creo un ciclo for per ripetere l'operazione 5 volte
    for (let i = 0; i < 5; i++) {
        // creo un numero random da 1 a 100
        let numRandom = Math.floor((Math.random() * 100) + 1);
        // lo pusho nell'array "numsRandom []""
        numsRandom.push(numRandom);
    }

    // li stampo nel html selezionando l'id:
    // creo un ciclo for per ripetere la stampa 5 volte
    for (let i = 0 ; i < numsRandom.length; i++) {
        // seleziono il div tramite l'id in cui andrò a stampare, (i + 1) perchè i parte da 0 e noi dobbiamo scrivere un 1 come primo numero nell'id.
        // quindi mi selezionerà in sequenza #num-random1, #num-random2, ecc.
        let numberRandom = document.getElementById("num-random" + (i + 1) );
        // lo stampo nell'html prendendo l'elemento dall'array (i = 0) primo numero nell'array, (i = 1) secondo numero nell'array, ecc
        numberRandom.innerHTML = numsRandom[i];
    }

    // do una variabile al contenitore dei 5 numeri generati randomicamente (#game)
    let game = document.getElementById("game");
    // lo metto in display flex al click del button start
    game.style.display = "flex";

    // do una variabile al contenitore in cui dovrò mettere i 5 numeri che ricordo (#question)
    let question = document.getElementById("question");

    // do un timer di 5000 millisecondi (5 secondi) 
    setTimeout(gameOn, 5000);
    // creo una funzione che scatterà alla fine del tempo impostato
    function gameOn(){
        // al termine mi farà tornare il div #game in display:"none"
        game.style.display = "none";
        // al termine mi farà apparire il div #question in display:"flex"
        question.style.display = "flex";
    }
})

// Creo un array vuoto in cui mi andrò a mettere i numeri che ho scritto come risposta (mi è comodo per fare un confronto con i numeri generati randomicamente)
let risNumber = [];

// do una variabile al pulstante "risultato"
let result = document.getElementById("result")

// scrivo la funzione che mi aggiunga i numeri che ho scritto in un array e li confronti con i numeri random al click del pulsante "risultato"
result.addEventListener ('click', function(){

    // faccio si che il tasto result sparisca
    result.style.display = "none";

    // richiamo l'array vuoto all'inizio del click del button risultato
    risNumber = [];

    // creo un ciclo che ripeta l'operazione di push nell'array risNumber []
    for (let i = 0; i < 5; i++){
        // do una variabile che prenda i valori dai div #ris-1, #ris-2, ecc
        let numRis = parseInt (document.getElementById ('ris-' + (i + 1)).value);
        // li pusho nell'array risNumber
        risNumber.push(numRis)
    }

    // creo un array vuoto per memorizzare i numeri ricordati
    let numRemember = []

    // scrivo un ciclo che mi controlli gli elementi dei due array
    for (var i = 0; i < numsRandom.length; i++) {
        // scrivo una condizione per farmi restituire il risultato nella soluzione
        if (risNumber.includes(numsRandom[i])) {
            
            // pusho i numeri ricordati nell'array per sapere quanti ne ho ricordati
            numRemember.push(risNumber)
            
            // seleziono <ul> #solution nel quale scrivere i numeri 
            let solution = document.getElementById("solution")
            // scrivo nel html <li> "numeri che mi sono ricordato/dimenticato"
            solution.innerHTML += `<li>Ti sei ricordato del numero ${numsRandom[i]}</li>`;
        }   else {
            solution.innerHTML += `<li>Ti sei dimenticato del numero ${numsRandom[i]}</li>`;
        }
        // creo una variabile che sia la lunghezza dell'array dei numeri ricordati
        let numRicordati = numRemember.length;
        // vado a selezionare il div #final-resultt in cui stampare
        let finalResult = document.getElementById("final-result")
        // stampo il risultato finale
        finalResult.innerHTML = `Ti sei ricordato ${numRicordati} numeri su 5.`

        // creo la variabile per il tasto restart
        let restart = document.getElementById("restart")
        // faccio si che il tasto restart venga visualizzato dopo che siamo a conoscenza del risultato
        restart.style.display = "flex"
    }
})

// do nuovamente la variabile al tasto restart (poichè fuori dalla funzione precedente)
let restart = document.getElementById("restart")

// aggiungo una funzione per l'evento al click del pulsante restart
restart.addEventListener("click", function() {
    // ricarica pagina
    location.reload();
  });