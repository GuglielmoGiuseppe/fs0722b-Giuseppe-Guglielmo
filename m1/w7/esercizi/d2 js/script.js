const BTN_PRIMO = document.querySelector("#primo")
const BTN_PRECEDENTE= document.querySelector("#precedente")
const BTN_SUCCESSIVO = document.querySelector("#successivo")
const BTN_ULTIMO = document.querySelector("#Ultimo")

/*PROPRIETà TABELLA*/
const TBODY = document.querySelector("tbody");
const TBODY_COUNT_GRID = document.querySelector("tbody").childElementCount;
console.log(TBODY_COUNT_GRID);
var MAX_ROW = 5;
var MAX_GRID = 4;


/*BOTTONI FUNZIONI*/
BTN_PRIMO.addEventListener("click", ()=> {
    console.log(this);
})

BTN_PRECEDENTE.addEventListener("click", ()=> {
    console.log(this);
})
BTN_SUCCESSIVO.addEventListener("click", ()=> {
    console.log(this);
})

BTN_ULTIMO.addEventListener("click", ()=> {
    console.log(this);
})


var list = [
    {id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A'},
    {id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A'},
    {id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A'},
    {id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A'},
    {id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A'},
    {id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A'},
    {id: 7, nome: 'Gianno', cognome: 'Bianchi', classe: 'A'},
    {id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A'},]

class Paginazione{
    items =[];
    pageSize = 5;
    constructor(_items, _pageSize)
    {
        this.items = _items;
        this.pageSize = _pageSize;
    }

    MostraNomeInTabella(){
        var pgSize = this.pageSize;
        var arrayTr = [];
        var arrayTd = [];
        for (let x = 0; x < MAX_ROW; x++) {
            var row = document.createElement("tr");
            TBODY.appendChild(row);
            for (let i = 0; i < MAX_GRID; i++) {
                let grid = document.createElement("td");
                row.appendChild(grid);
                row.cells[i].innerHTML = list[2].id-1;
            }
            console.log(row.cells)
        }
    }
}




var _paginazione = new Paginazione(list, MAX_GRID);
_paginazione.MostraNomeInTabella();

function lista(){
    console.log("lista: "+ _paginazione.items[1].id);
}

lista();