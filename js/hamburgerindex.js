function myFunction(x) {
    x.classList.toggle("change");
}

function toggleHide(element){
    element.classList.toggle("hidden");
}
let menu = document.getElementById("hamburgermenu1");
let menuContent= document.getElementById("hamburgercontent1");

menu.addEventListener('click', function() {
    toggleHide(menuContent)
    myFunction(menu)
})

document.addEventListener('scroll', function(){
    console.log("in scroll eventlistenr")
    const content = document.getElementById("hamburgercontent1");
    if (content.getAttribute("class")!="hidden"){
        console.log("in scroll if")
        toggleHide(menuContent)
        myFunction(menu)
    }
})