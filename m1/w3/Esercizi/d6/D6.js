/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..

 

*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*const area = function(l1, l2){
    return l1 * l2;
}

const areaResult = area(3,4);
console.log(areaResult); */

function areaRettangolo(l1, l2){
    return l1 * l2;
}

let area = areaRettangolo(4,6);
console.log(area);


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function(n1,n2){
    if(n1===n2){
        return(n1+n2)*3;
    }
    else{
        return n1+n2;
    }
}

console.log(crazySum(45,45))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function(n1){
    if(n1 > 19){
        return Math.abs(n1-19)*3;
    }
    else{
        return Math.abs(n1-19);
    }
}

function crazyDiff2(n){
    if(n > 19){return 3* (n-19);}
    else{
        return n > 19;
    }
}


console.log(crazyDiff2(152));
console.log(crazyDiff(12));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function(n){

    if(n >= 20 && n <= 100){
        return true;
    }
    else if(n === 400){
        return true;
    }
    else
        return false;

}

console.log(boundary(15))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function(strig){
    let title = 'EPICODE';
    if(strig === title ){
        return strig;
    }
    else{
        return title;
    }
}

console.log(epify('APPLE'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function(n){
    let mult = 3;
    let mult2 = 7;
    if(n  % mult == 0)
    {
        return console.log('questo numero: ' + n + 'è un muliplo di: ' + mult)
    }
       
    else if(n  % mult2 == 0) {
        return console.log('questo numero: ' + n + 'è un muliplo di: ' + mult2)
    }
    else
    return console.log('questo numero non è multiplo di 3 o 7')
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function(string){
    return string.split("").reverse().join("");
}

console.log(reverseString('Giuseppe'));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function(string){
    var splitStr = string.toLowerCase().split(' ');

    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 

}

console.log(upperFirst('Aldo! ci hai fatto scendere giù un mese prima?'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function(string){
    let text = string.substring(1,string.length)
    console.log(text)
}

console.log(cutString('Giuseppe'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


