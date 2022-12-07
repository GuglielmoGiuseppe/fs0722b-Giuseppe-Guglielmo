const FORM_STRING_VALUE = document.getElementById("input-list"); 
const BUTTON = document.getElementById("button-add");
const CONTAINER_LIST = document.querySelector("#container-list");
var Index = 1;
var ContainerSave = [];


BUTTON.addEventListener("click",function(){
    if(FORM_STRING_VALUE.value != "")
        {

             CreationElement(CONTAINER_LIST,FORM_STRING_VALUE.value);
             ContainerSave.push(FORM_STRING_VALUE.value);
             save(ContainerSave);
             FORM_STRING_VALUE.value = "";
             console.log(ContainerSave);
        }
        else{
            return;
    }
});


function CreationElement(conteiner, value)
{
    var createBox = document.createElement("div");
    createBox.classList.add('Cell');
    conteiner.append(createBox);
    createBox.innerHTML = `\n<div><h3 class="m-1">${value}</h3></div>\n` + `\n<div class="me-2"><div class="button-x"></div></div>\n`;
    const button =  createBox.querySelector(".button-x")
    button.addEventListener("click", function(){
        var valueSave = value;
        console.log("asdas");
        deleteData(valueSave);
        createBox.remove();
    })
    console.log(button);
}

//////////////
////STORAGE SYSTEM
/////////////////

window.addEventListener("load", check);

function save(value){
    localStorage.setItem('Task', JSON.stringify(value));
}
function deleteData(valueKey){
    for(var i in ContainerSave){
        if(ContainerSave[i]==valueKey){
            ContainerSave.splice(i,1);
            break;
        }
    }
    console.log(ContainerSave);
    save(ContainerSave);
}

/** */
function check(valueKey){
    if(localStorage.getItem('Task',valueKey)){
        console.log("ciao");
         var list = localStorage.getItem('Task');
         ContainerSave = JSON.parse(list);
        console.log(ContainerSave);
        for (let y = 0; y < ContainerSave.length; y++) {

            CreationElement(CONTAINER_LIST,ContainerSave[y]);
        }

    }

}