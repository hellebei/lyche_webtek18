const navbar = document.querySelector("#navbar");
//Navbar html file
navbar.innerHTML = 
`

<nav class="navmain" id="fixed-nav">
    
    <div id="hamburgermenu">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
    </div>
    
    <div id="hamburgercontent" class="hidden">
        <ul>
            <li><a href="index.html" class="item_menu">hjem</a></li>
            <li><a href="meny.html" class="item_menu">meny</a></li>
            <li><a href="about.html" class="item_menu">om</a></li>
            <li><a href="reservation.html" class="item_menu">reservasjon</a></li>
            <li><a href="contact.html" class="item_menu">kontakt</a></li></ul>
    </div>

    <a href="#"><img id="lychelogo" src="img/logo.png" alt="Logo for Lyche"></a>

    <div id="session-status">
        <a class="changelangNO" href="/no">NO</a>
        <a class="line" href="none"> | </a>
        <a class="changelangEN" href="/en">EN</a>
    </div>

    <a href="https://www.samfundet.no/"> <img id="samflogo"src="img/samf_logo.png" alt="Logo samf"> </a>

</nav>

`
function changemenu(x) {
    x.classList.toggle("change");
}

function toggleHide(element){
    element.classList.toggle("hidden");
}

let menu = document.getElementById("hamburgermenu");
let menuContent= document.getElementById("hamburgercontent");

menu.addEventListener('click', function() {
    console.log("click");
    toggleHide(menuContent);
    changemenu(menu);
})


