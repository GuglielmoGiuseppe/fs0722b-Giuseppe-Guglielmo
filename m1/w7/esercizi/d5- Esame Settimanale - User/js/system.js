
class AsyncCalls {
    ajaxCall(_url, _method) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(_method, _url);
            xhr.onload = () => resolve(xhr.response);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }
}
const CONTAINER_USER = document.getElementById("container_user")
const ASYNCALLS = new AsyncCalls();

function CreateCard(name, _email, linkimg, _subtitle, _info){
    var card = document.createElement("div")
    var icon = document.createElement("img")
    var userName = document.createElement("h3");
    var subTitle = document.createElement("h6");
    var info = document.createElement("p");
    var email = document.createElement("a");

    card.className = "card m-4";
    icon.src = linkimg;
    icon.className = "text-center img-thumbnail rounded-circle img-profile mt-4 mb-4";
    userName.className = "card-title text-center mb-1";
    subTitle.className = "text-center mb-3 sub-title";
    info.className = "text-center mb-3 me-3 ms-3";
    email.href = "mailto:abc@example.com";
    email.className = "mb-4 text-center color-email";
    
    card.setAttribute('style', 'width: 18rem;')

    userName.innerText = name;
    email.innerText = _email;
    subTitle.innerText = _subtitle;
    info.innerText = _info;

    CONTAINER_USER.append(card);
    card.append(icon);
    card.append(userName);
    card.append(subTitle);
    card.append(info);
    card.append(email);

    console.log(card);

}

ASYNCALLS.ajaxCall('./json/users.json', 'get').then((response)=>{
    let res = JSON.parse(response);
    res.forEach(element => {
        CreateCard(element.username,element.email, element.profileURL , element.Title, element.Info);
    });
}); 