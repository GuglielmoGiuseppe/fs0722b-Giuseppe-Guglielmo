interface Ipersona{
    nome:string;
    cognome:string;
    visualizzaNomeCogome():string;
}

class Persona implements Ipersona{
    nome:string;
    cognome: string;
    constructor(nome:string, cognome:string)
    {
        this.nome = nome;
        this.cognome = cognome;

    }
    visualizzaNomeCogome(){
        return this.nome + " " + this.cognome;
    }
}

//implemto una proprietà non prevista dall'interfaccia

enum Materie {
    storia,
    inforamtica,
    religione,
    html,
    css,
    javascript
}
class Studente implements Ipersona{
    nome:string;
    cognome:string;
    materie : Materie[];
    constructor(nome:string, cognome:string)
    {
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];
    }
    visualizzaNomeCogome(){
        return this.nome + " " + this.cognome;
    }

}