const doggos = document.querySelector(".doggos");
const getText = document.querySelector(".get-text").innerHTML;
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggos(){
    const promise = fetch(DOG_URL);

    promise.then(function(response){
        const processResponse = response.json();
        return processResponse;
    }).then(function(returnResponse){
        const img = document.createElement("img");
        img.src = returnResponse.message;
        img.alt = "Dogs image from DOGGOS";
        doggos.appendChild(img);
        console.log(returnResponse);
    });
}

document.querySelector(".add-doggos").addEventListener("click", addDoggos);
