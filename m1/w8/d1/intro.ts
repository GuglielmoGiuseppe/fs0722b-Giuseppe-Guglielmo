var nome:string = "ciao";

enum Direction {
    North,
    East,
    South,
    West
}

var currDir = Direction.East;

function disp_(id:number,name:string,mail?:string)
{
    console.log("ID:", id)
    console.log("ID:", name)
    if(mail != undefined)console.log("ID:", mail)
}


