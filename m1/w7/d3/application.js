SalvaIlDato = function(info_da_salvare){
    localStorage.ultimo_pensiero = info_da_salvare;
    alert("Memorizazzione effettuata")
};
recuperaIlDato = function(elemento){
    if(confirm("sostituire il contenuto atuale con l'ultimo pensiero memorizzato"))
    {
        elemento.value = localStorage.ultimo_pensiero_pensiero;
    }
};