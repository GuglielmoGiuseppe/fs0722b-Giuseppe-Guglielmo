/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.

*/

/* SCRIVI QUI LA TUA RISPOSTA */

  var numero1 = 10;
  var numero2 = 6;

  if(numero1 > numero2)
    console.log(numero1 +' è maggiore di ' + numero2)
  else
  console.log(numero1 +' è minore di ' + numero2)



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log( 8 != 5 )


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var NumInt = 8;
var NumInt2 = 16;
NumInt2 -= NumInt;

if(NumInt2 == NumInt)
  console.log(NumInt2)


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 57;
let Bonus = 50;
let priceSpedition= 10;
let BonusBlackFridey = 20;
let calculatePrice;
if(totalShoppingCart >= Bonus)
  console.log('hai superato i 50 euro di spesa, hai diritto alla spedizione AGGRATIS');
else
  {
    console.log('non hai diritto a nulla, per te sono 10 euro di spedizione');
  }



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

calculatePrice = totalShoppingCart * BonusBlackFridey /100;
totalShoppingCart -= calculatePrice;

console.log( 'con il 20% di sconto paghi solo: ' + totalShoppingCart);

if(totalShoppingCart >= Bonus)
  console.log('hai superato i 50 euro di spesa, hai diritto alla spedizione AGGRATIS');
else
  {
    console.log('non hai diritto a nulla, per te sono 10 euro di spedizione');
  }


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var Arr = [53, 12, 65];

// utilizzando un ciclo for, vado a stabilire all'interno di un array quali numeri sono piu grandi tra di loro. in questo modo viene stampato direttamente
// i numeri dal piu grande al piu piccolo. se invece, si vuole stabilire dal piu piccolo al piu grande, allora basta cambiare la ">" in "< " nella condizione if (Arr[i] > Arr[j]) 

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] > Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }

console.log(Arr);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var valoreInt = 5;

if(typeof valoreInt)
  console.log(valoreInt +' è un numero ' )
else
  console.log(valoreInt +' non è un numero ')


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    
  var numero = 10;
  var result = numero % 2 == 0;

  if(result)
    console.log('Pari')
  else
    console.log('dispari')



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

    let val = 7;

    if(val < 5)
      {
        console.log('Meno di 5')
      }
    else if(val < 10){
      console.log('Meno di 10')
    }
    else
    {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('è stato rimosso la proprietà:' + me.lastName) 
delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log('è stata rimossa la skills:' + me.skills[2]) 
delete me.skills[2];

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let contenitoreDiNumeri = [];

contenitoreDiNumeri.push(1);
contenitoreDiNumeri.push(2);
contenitoreDiNumeri.push(3);
contenitoreDiNumeri.push(4);
contenitoreDiNumeri.push(5);
contenitoreDiNumeri.push(6);
contenitoreDiNumeri.push(7);
contenitoreDiNumeri.push(8);
contenitoreDiNumeri.push(9);
contenitoreDiNumeri.push(10);

console.log(contenitoreDiNumeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

contenitoreDiNumeri[9] = 100;
console.log(contenitoreDiNumeri);

