let boolVal = true;
let boolVal2 = true;

let saldi = document.querySelector("#container-saldi");
let summer = document.querySelector("#container-summer");

const buttonSaldi = document.querySelector("#show-contentent-saldi").addEventListener("click", function(){
    boolVal = !boolVal;
    ShowContaierSaldi();
});

const buttonSummer = document.querySelector("#show-contentent-summer").addEventListener("click", function(){
    boolVal2 = !boolVal2;
    ShowWelcomeSummer();
});

function ShowContaierSaldi()
{
    if(boolVal){
        saldi.classList.replace("display-hide", "display-show");
        let text = document.querySelector("#show-contentent-saldi").innerHTML = "Nascondi sezione";
    }
    else{
        saldi.classList.replace("display-show", "display-hide");
        let text = document.querySelector("#show-contentent-saldi").innerHTML = "Monstra sezione";
    }

}

function ShowWelcomeSummer(){
    if(boolVal2){
        summer.classList.replace("display-hide", "display-show");
        let text = document.querySelector("#show-contentent-summer").innerHTML = "Nascondi sezione";
    }
    else{
        summer.classList.replace("display-show", "display-hide");
        let text = document.querySelector("#show-contentent-summer").innerHTML = "Monstra sezione";
    }
}