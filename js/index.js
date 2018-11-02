
function changemenu(x) {
    x.classList.toggle("change");
}

function toggleHide(element){
    element.classList.toggle("hidden");
}

const menuindex = document.querySelector(".menuindex");

if(menuindex !=  null) {
    const hamburgermenuIndex = document.getElementById("hamburgermenuIndex");
    const hamburgercontentIndex= document.getElementById("hamburgercontentIndex");
    hamburgermenuIndex.addEventListener("click", function() {
        console.log("click");
        toggleHide(hamburgercontentIndex)
        changemenu(hamburgermenuIndex)
    })
    
   
   document.addEventListener('scroll', function (){
        console.log("in scroll eventlistener");
        const content = document.getElementById("hamburgercontentIndex");
        if (content.getAttribute("class")!="hidden"){
            console.log("in scroll if")
            toggleHide(hamburgercontentIndex)
            changemenu(hamburgermenuIndex)
        }
    })
}

const layer = document.querySelector(".layer");
const nav = document.querySelector("#navbar");
nav.style.display = "none";

// make the navbar sticky in index
document.addEventListener("scroll", stick);

function stick(){
    const distance = layer.offsetHeight - nav.offsetHeight;
    console.log(distance+ " ' " + window.scrollY)
    if(distance <= window.scrollY) {
        console.log("fest deg")
        nav.style.position = "fixed";
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

