
window.addEventListener('load', function(){
    function load_home() { 
      document.getElementById("navbar").innerHTML='<object type="text/html" data="navbar.html" ></object>';
    }
    load_home();
  
  })


function myFunction(x) {
    x.classList.toggle("change");
}

function toggleHide(element){
    element.classList.toggle("hidden");
}
let menu = document.getElementById('hamburgermenu1');
let menuContent= document.getElementById('hamburgercontent1');

menu.addEventListener('click', function() {
    toggleHide(menuContent)
    myFunction(menu)
})
