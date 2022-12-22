class Abbigliamento {
    id:any;
    codiceprodotto:any;
    collezzione:any
    capo:any;
    modello:any;
    quantita:any;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;
    /*    */

/**/
    constructor(_id:any, _codiceprodotto:any, _collezzione:any, _capo:any, _modello:any, _quantita:any, _colore:string, _prezzoivaesclusa:number, _prezzoivainclusa:number, _disponibile:string, _saldo:number)
    {
            this.id = _id;
            this.codiceprodotto = _codiceprodotto;
            this.collezzione = _collezzione;
            this.capo = _capo;
            this.modello = _modello;
            this.quantita = _quantita;
            this.colore = _colore;
            this.prezzoivaesclusa = _prezzoivaesclusa;
            this.prezzoivainclusa = _prezzoivainclusa;
            this.disponibile = _disponibile;
            this.saldo = _saldo;
 
    }

    GetSaldoCapo(prezzo:number, saldi:number)
    {
        var value = prezzo * saldi / 100
        prezzo -= value;
        return parseFloat(prezzo.toFixed(2)).toString();
    }

    CreateDOMArticle(container:any, valueId:any, titleArticle:any, CodiceProdotto:any, Collezzione: any, ModelloID:any, quantita:any, imageSoruce:any, Colore_id:any, Prezzo_no_iva:number, Prezzo_con_Iva:number, disponibile:any, Saldi:number){
        var body = document.createElement("div");
        body.className = "col";
        container?.append(body);
        var body2 = document.createElement("div");
        body2.className = "col";
        body.append(body2);
        var bodystile = document.createElement("div");
        bodystile.className = "card";
        bodystile.setAttribute("style", "width: 18rem;");
        body2.append(bodystile);
        var img = document.createElement("img");
        img.id = "image-article";
        img.src = imageSoruce;
        bodystile.append(img);
        var cardbody = document.createElement("div");
        cardbody.className = "card-body";
        bodystile.append(cardbody);
        var h5title = document.createElement("h5");
        h5title.className = "card-title";
        h5title.id = "article-name";
        h5title.innerHTML = titleArticle;
        cardbody.append(h5title);
        var value_id = document.createElement("p");
        value_id.id = "value-id";
        value_id.innerHTML = valueId;
        cardbody.append(value_id);
        var Codice_prodotto = document.createElement("p");
        Codice_prodotto.id = "codice-prodotto";
        Codice_prodotto.innerHTML = CodiceProdotto;
        cardbody.append(Codice_prodotto);
        var collezzione_id = document.createElement("p");
        collezzione_id.id = "collezzione-value";
        collezzione_id.innerHTML = Collezzione;
        cardbody.append(collezzione_id);
        var Modello_id = document.createElement("p");
        Modello_id.id = "modello-id";
        Modello_id.innerHTML = ModelloID;
        cardbody.append(Modello_id);
        var quantita_prodotto = document.createElement("p");
        quantita_prodotto.id = "quantita-value";
        quantita_prodotto.innerHTML = quantita;
        cardbody.append(quantita_prodotto);
        var coloreProdotto = document.createElement("p");
        coloreProdotto.id = "colore-value";
        coloreProdotto.innerHTML = Colore_id;
        cardbody.append(coloreProdotto);
        var PrezzoNoIva = document.createElement("p");
        PrezzoNoIva.id = "prezzoivaesclusa-value";
        PrezzoNoIva.innerHTML = "Prezzo senza iva:" + " " + Prezzo_no_iva.toString() + "€";
        cardbody.append(PrezzoNoIva);
        var PrezzoIva = document.createElement("p");
        PrezzoIva.id = "prezzoivainclusa-value";
        PrezzoIva.innerHTML = "Prezzo Con iva" + " " + Prezzo_con_Iva.toString() + "€";
        cardbody.append(PrezzoIva);
        var disponibila = document.createElement("p");
        disponibila.id = "disponibilita-value";
        disponibila.innerHTML = disponibile;
        cardbody.append(disponibila);
        var Saldo_value = document.createElement("p");
        Saldo_value.id ="saldo-value";
        Saldo_value.innerHTML = Saldi.toString();
        cardbody.append(Saldo_value);
    }
}

const CONTAINER_ARTICLE = document.querySelector("#container-article");
console.log(CONTAINER_ARTICLE);

var sorgenteDati = fetch(`./json/Abbigliamento.json`)
.then((response) => response.json())
.then((data) => {
    var ListaArticoli = data;
    console.log(ListaArticoli);
    var classVestiti = new Abbigliamento(data.id, data.codprod, data.collezione, data.capo, data.modello, data.quantita, data.colore, data.prezzoivaesclusa, data.prezzoivainclusa, data.disponibile, data.saldo);
   
    for (let i = 0; i < ListaArticoli.length; i++) {
        classVestiti.CreateDOMArticle(CONTAINER_ARTICLE, ListaArticoli[i].id, ListaArticoli[i].capo, ListaArticoli[i].collezione, ListaArticoli[i].capo, ListaArticoli[i].modello, ListaArticoli[i].quantita,ListaArticoli[i].image, ListaArticoli[i].colore, ListaArticoli[i].prezzoivaesclusa, ListaArticoli[i].prezzoivainclusa,ListaArticoli[i].disponibile, ListaArticoli[i].saldo);
        var ListPrice = document.querySelectorAll("#prezzoivainclusa-value");
        for (let x = 0; x < ListPrice.length; x++) {
            ListPrice[x].innerHTML = "Prezzo Con iva: " + " " + classVestiti.GetSaldoCapo(ListaArticoli[x].prezzoivainclusa, ListaArticoli[x].saldo) + "€ " +  ListaArticoli[x].saldo + "%" + " di sconto!";
        }
    }
})  
