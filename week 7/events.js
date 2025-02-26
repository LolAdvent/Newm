const h1ref= document.querySelector("h1");
const nameRef = document.querySelector("#name");
const sizeRef = document.querySelector("#size");
function changeH1Style() {
    if (h1ref.style.backgroundColor !== "red"){
        h1ref.style.backgroundColor = "red";

    } else {
        h1ref.style.backgroundColor = "white"
    }
}


function changeH1Color(e) {
    h1ref.style.color= e.target.value;

}



function changeH1Size(e){
    const fontSize = Number(e.target.value);
    if (fontSize >=){
        h1ref.style.fontSize= fontSize  + "px";
    } else{
        e.target.value = 8;
        h1ref.style.fontSize = "8px"
    }
}

h1ref.onclick= changeH1Style

nameRef.onchange=changeH1Color

sizeRef.oninput = changeH1Size