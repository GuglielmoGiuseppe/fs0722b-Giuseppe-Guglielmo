"use strict";
exports.__esModule = true;
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento() {
    }
    /*
        constructor(_id:number, _codiceprodotto:number, _collezzione:string, _capo:string, _modello:number, _quantita:number
        , _colore:string, _prezzoivaesclusa:number, _prezzoivainclusa:number, _disponibile:string, _saldo:number){
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
    */
    Abbigliamento.prototype.CreateDOMArticle = function (container, titleArticle) {
        var body = document.createElement("div");
        body.className = "col";
        container === null || container === void 0 ? void 0 : container.append(body);
        var body2 = document.createElement("div");
        body2.className = "col";
        body.append(body2);
        var bodystile = document.createElement("div");
        bodystile.className = "card";
        bodystile.setAttribute("style", "width: 18rem;");
        body2.append(bodystile);
        var img = document.createElement("img");
        img.id = "image-article";
        img.src = "";
        bodystile.append(img);
        var cardbody = document.createElement("div");
        cardbody.className = "card-body";
        bodystile.append(cardbody);
        var h5title = document.createElement("h5");
        h5title.className = "card-title";
        h5title.id = "article-name";
        h5title.innerHTML = titleArticle;
        cardbody.append(h5title);
    };
    return Abbigliamento;
}());
exports["default"] = Abbigliamento;
/*
var sorgenteDati = fetch(`./json/Abbigliamento.json`)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    CreateDOMArticle(data.capo)
});
*/
