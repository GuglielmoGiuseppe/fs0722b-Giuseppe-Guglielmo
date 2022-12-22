class mailSender{
    message:String;
    mail:string;

    constructor(_mail:string,_message:string){
        this.mail = _mail;
        this.message = _message;

    }
    sendTo(email,mess){

    }
}

interface Messaggio{
    email:string;
    messaggio:string;

}

var mioMessaggio = {
    email: "mario@live.it",
    messaggio: "MERDA!",
    data : new Date()
}

var MAIL_SEND = new mailSender("sadsad","message");

function inviaMessaggio(msg: {email:string,messaggio:string}){
    MAIL_SEND.sendTo(msg.email, msg.messaggio)
}
interface Messaggio{
    email:string;
    messaggioDestinatario?:string; //elementi opzionali sono accettati se sono prensenti. ma non da errore se non sono presenti
    oggetto?: string;//elementi opzionali sono accettati se sono prensenti. ma non da errore se non sono presenti
    messaggio: string;
}

interface FunzioniSommaNumeri{
    (x:number, y:number):number
}

var somma :FunzioniSommaNumeri;
somma =  function(a:number, b:number){
    return a + b;
}


interface ArrayDiStringhe{
    [index:number]:string;
}

var x : ArrayDiStringhe = ["uno","due","tre"];



//