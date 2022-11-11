const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

var sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

var random = Math.floor(Math.random() * 21)
console.log(random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

var me = {
  name: 'Giuseppe',
  surname: 'Guglielmo',
  age: '26',
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato, un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = [];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

var numberskill = ['C# - UNITY', 'HTML', 'CSS' ,'JAVASCRIPT'];

function addSkills(){
  me.skills = numberskill;
  return console.log(me.skills);
}

addSkills();

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

// Funzioni

function removeLastElementArray(){
  numberskill.pop();
  console.log(numberskill);
}
removeLastElementArray();

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice(){
  let random = Math.floor(Math.random()* 5)
  return random;
}
dice();
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(numero1,numero2){
  if(numero1 > numero2) return console.log(`il numero piu alto tra ${numero1} e ${numero2} è: `+ numero1 );
  else return console.log(`il numero piu alto tra ${numero1} e ${numero2} e: `+ numero2 );
}
whoIsBigger(2,16);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(stringa){
  let Array = stringa.split(" ");
  console.log(Array);
}

splitMe('I love coding');
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(stringa, bool){
  lastParola = stringa.length-1;
  if(bool) return console.log(stringa.slice(1));
  else return console.log(stringa.slice(0, lastParola));
}
deleteOne('vedi come ballo, balla lando', false);
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(stringa){

  /*  */
  let ArrayNum =  ['0', '1', '2', '3', '4' , '5', '6', '7', '8','9'];
  let ArrayString = [];
  for (let i = 0; i < stringa.length; i++) {
    ArrayString.push(stringa[i]);
      for (let x = 0; x < ArrayNum.length; x++) {
          if(stringa[i] == ArrayNum[x]){
            console.log(stringa.replace(ArrayNum[x], ''));
          }
      }
  }


  /*  stringa = ArrayString.toString();
  console.log( stringa.split(',').join(''));*/


}
onlyLetters('I have 4 dogs');
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function checkEmail(email) {
  var Simboli = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!Simboli.test(email)) {
      console.log('Please provide a valid email address');
      email.focus;
      return false;
  }
}
checkEmail('Giuseppe.guglelmo@gmail.com');
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/


function whatDayIsIt(){
  let date = new Date();
  console.log('oggi è giorno: '+ date.getDate());
  return date.getDate()

}
whatDayIsIt();
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numero){
  let oggetto = {};
  let array = [];

  for (let i = 0; i <= numero; i++) {
    array.push(dice());
  }
  oggetto.values = array;
  oggetto.sun = eval(array.join('+'))
  console.log(oggetto);
}
rollTheDices(5);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(){
  let Data = new Date();
  let GiornoMioCompleanno = 30;
  let MeseMioCompleanno = 7;

  if(GiornoMioCompleanno == Data.getDate() && MeseMioCompleanno == Data.getMonth()+1)
    return console.log(true);
  else
    return  console.log(false);
}
isTodayMyBirthday();
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

var listaOggetto = {
      nome: 'Aldo',
      destinazione: 'Pizzo calabro, Skylab via Washington',
}

function deleteProp(object,stringa){
  delete object[stringa]
  return console.log(object);
}
deleteProp(listaOggetto, 'destinazione');

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(){
  let ListMovies = movies;
  let moviesDate = [];
  
  for(let i = 0; i < ListMovies.length; i++){
    moviesDate.push(ListMovies[i].Year);
  }
  moviesDate.sort();
  console.log('Il film piu recente trovato nel archivio è: ' + ListMovies[ListMovies.length-1].Year + ' Titolo del film: ' + ListMovies[ListMovies.length-1].Title);
}

newestMovie();

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(){
  console.log('Film totali presenti nell\'archivio: ' +  movies.length)
  return movies.length;
}
countMovies();

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(){
  let ListMovies = movies;
  let moviesDate = [];
  
  for(let i = 0; i < ListMovies.length; i++){
    moviesDate.push(ListMovies[i].Year);
  }
  console.log(moviesDate);

  return moviesDate;
}

onlyTheYears();

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
  const onlyInLastMillennium = function(){
    let result = []
    for(i = 0; i < movies.length; i++)
    {
        if(parseInt(movies[i].Year) < 2000)
        result.push(movies[i]);
    }
    return result;
  } 
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

  function sumAllTheYears(){
    let ArrayYears = [];
    let calc = 0;
    for (let i = 0; i < movies.length; i++) {
      ArrayYears.push(movies[i].Year);
    }
    calc = ArrayYears = eval(ArrayYears.join('+'));
    console.log(calc);
    return calc;
  }
  sumAllTheYears();

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(nomeFilm){
  let NameMovies = [];
  let filtro;
  for (let i = 0; i < movies.length; i++) {
    NameMovies.push(movies[i].Title);
  }
  filtro = NameMovies.filter(s => s.includes(nomeFilm));
  console.log('lista dei film trovati: '+ filtro);
  return filtro;
}
searchByTitle('Avengers');

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/




function searchAndDivide(stringa){
  var listaFilm = {};
  let NameMovies = [];
  let filtro;
  for (let i = 0; i < movies.length; i++) {
    NameMovies.push(movies[i].Title);
  }
  filtro = NameMovies.filter(s => s.includes(stringa));
  listaFilm.match = filtro;
  console.log(listaFilm);
}
searchAndDivide('Avengers');

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(numero){

  for (let i = 0; i < movies.length; i++) {
      if(i == numero)
      {
        movies.splice(numero, 1)
        console.log(movies);
      }
  }
  return movies;
}

removeIndex(5);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function SelectContaier(){
  let id = document.querySelector('#container')
  return id;
}
SelectContaier();
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function SelectTags(){
  let tag = document.getElementsByTagName('td')
  return tag;
}
SelectTags();
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function selecttdDocument(){
  let td = SelectTags();
  for (let i = 0; i < td.length; i++) {
      console.log(td[i].textContent)
  }
}
selecttdDocument();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function AddColorBackground(){
  let td = document.getElementsByTagName('a')
  for (let i = 0; i < td.length; i++) {
    td[i].style.color = 'red';
  }
}
AddColorBackground();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addId(){
  let id = document.querySelector('ul')
  id.setAttribute('id', 'myList')
  console.log(id);
  return id;
}
addId();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function ClearList(){
  let list = document.querySelectorAll('#myList > li')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = '';
  }

  return list;
}
ClearList();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClasses(){
  let classes = document.querySelectorAll('tr')
  for (let add of classes) {
      add.setAttribute('class', 'test')
  }

  return classes;
}
addClasses();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****
*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

