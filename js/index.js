
function changemenu(x) {
    x.classList.toggle("change");
}

function toggleHide(element) {
    element.classList.toggle("hidden");
}

const menuindex = document.querySelector(".menuindex");

if (menuindex !=  null) {
    const hamburgermenuIndex = document.getElementById("hamburgermenuIndex");
    const hamburgercontentIndex= document.getElementById("hamburgercontentIndex");
    hamburgermenuIndex.addEventListener("click", function() {
        toggleHide(hamburgercontentIndex)
        changemenu(hamburgermenuIndex)
    })
    
   
   document.addEventListener('scroll', function () {
        const content = document.getElementById("hamburgercontentIndex");
        if (content.getAttribute("class")!="hidden") {
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
    let distance = layer.offsetHeight - nav.offsetHeight;
    if(distance <= window.scrollY) {
        nav.style.position = "fixed";
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}


