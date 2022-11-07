
var checkFigure = false;

function ApplicaNumero(button){
    let array = [];
    let simbol =  ['+', '-', '/', '*', '.' ];
    let valueIdex = button.getAttribute("data-value");
    let outputValue = document.getElementById("output-bar");
    let lastValue = outputValue.value.substr(outputValue.value.length-1);
    if((isSymbol(lastValue) && isSymbol(valueIdex))){
        return;
    }


    let docu = document.getElementById('output-bar').value += valueIdex; 
    let counter = docu;
    console.log(array);

}

function total()
{
    let numeri = document.getElementById('output-bar');
    numeri.value = eval(numeri.value);
    if(numeri.value == 'undefined')
        numeri.value = '';
    else if(numeri.value == 'NaN')
        numeri.value = '';
    else if(numeri.value == 'infinity')
        numeri.value = '';
}

function Reset()
{
    let reset = document.getElementById('output-bar');
    reset.value = '';
}

function isSymbol(input){
    if(input == "+" || input=="-" || input=="*" || input=="/" || input=="."){
        return true;
    }
}