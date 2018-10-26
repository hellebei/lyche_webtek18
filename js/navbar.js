function myFunction(x) {
    x.classList.toggle("change");
}

function toggleHide(element){
    element.classList.toggle("hidden");
}
let menu = document.getElementById("hamburgermenu");
let menuContent= document.getElementById("hamburgercontent");

menu.addEventListener('click', function() {
    toggleHide(menuContent)
    myFunction(menu)
})
/*
let navmain = document.getElementsByClassName("navmain1");
*/
document.getElementById("navbar").innerHTML = 
`
    
<nav class="navmain">
<div id="hamburgermenu">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
</div>

<a href="#"><img id = "lyche-logo" src="img/logo.png" alt="Logo for Lyche"></a>

<a href="https://www.samfundet.no/"> <img id="samflogo"src="img/samf_logo.png" alt="Logo samf"> </a>

<div id="hamburgercontent" class="hidden">
    <ul>
        <li><a href="#" class="item_menu">hjem</a></li>
        <li><a href="#" class="item_menu">meny</a></li>
        <li><a href="#" class="item_menu">om</a></li>
        <li><a href="#" class="item_menu">kontakt</a></li>
        <li><a href="#" class="item_menu">reservasjon</a></li>
        <li><a href="#" class="item_menu">info</a></li>
    </ul>
</div>
</nav>

`