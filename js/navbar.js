
function includeHTML(htmlname){
    //her skal vi ydeligvis kunne bruke en greie fra w3schools
}

function myFunction(x) {
    x.classList.toggle("change");
}

function toggleHide(element){
    element.classList.toggle("hidden");
}
let menu = document.getElementById('hamburgermenu');
let menuContent= document.getElementById('hamburgercontent');

menu.addEventListener('click', function() {
    toggleHide(menuContent)
    myFunction(menu)
})
