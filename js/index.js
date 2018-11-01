
function changemenu(x) {
    x.classList.toggle("change");
}

function toggleHide(element){
    element.classList.toggle("hidden");
}

const menuIndex = document.getElementById("hamburgermenuIndex");
const menuContentIndex= document.getElementById("hamburgercontentIndex");

menu1.addEventListener("click", function() {
    console.log("click menuIndex");
    toggleHide(menuContentIndex);
    changemenu(menuIndex);
})

document.addEventListener("scroll", function(){
    console.log("in scroll eventlistenr")
    //const content = document.getElementById("hamburgercontent1");
    if (menuContent1.getAttribute("class")!="hidden"){
        console.log("in scroll if")
        toggleHide(menuContent1)
        changemenu(menu1)
    }
})

const navmain1 = document.querySelector("#navmain1");

if(navmain1 !=  null) {
    const menu1 = document.getElementById("hamburgermenu1");
    const menuContent1= document.getElementById("hamburgercontent1");
    menu1.addEventListener('click', function() {
        console.log("click");
        toggleHide(menuContent1)
        myFunction(menu1)
    })
    /*
    menuContent1.addEventListener("scroll", function(){
        console.log("in scroll eventlistener");
        if (content.getAttribute("class")!="hidden"){
            console.log("in scroll if")
            toggleHide(menuContent)
            myFunction(menu)
        }
    })*/
    
   /* 
   document.addEventListener('scroll', function (){
        console.log("in scroll eventlistener");
        const content = document.getElementById("hamburgercontent1");
        if (content.getAttribute("class")!="hidden"){
            console.log("in scroll if")
            toggleHide(menuContent)
            myFunction(menu)
        }
    })*/
}

// make the navbar sticky in index
document.addEventListener("scroll", stick);

function stick(){
    const layer = document.querySelector(".layer");
    const nav = document.querySelector("#navbar");
    const distance = layer.offsetHeight - nav.offsetHeight;
   /*console.log(distance+ " ' " + window.scrollY)*/
    if(distance <= window.scrollY) {
        console.log("fest deg")
        nav.style.position = "fixed";
        nav.style.display = "block";

    } else {
        nav.style.display = "none";
    }
}

