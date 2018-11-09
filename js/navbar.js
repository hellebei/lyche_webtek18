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
            <li><a href="index.html" class="item_menu">home</a></li>
            <li><a href="meny.html" class="item_menu">menu</a></li>
            <li><a href="about.html" class="item_menu">about</a></li>
            <li><a href="reservation.html" class="item_menu">reservation</a></li>
            <li><a href="contact.html" class="item_menu">contact</a></li></ul>
    </div>

    <a href="index.html"><img id="lychelogo" src="img/logo.png" alt="Logo for Lyche"></a>

    <div id="session-status">
        <a class="changelangNO" href="javascript:changeLangtoNo();"">NO</a>
        <a class="line" href="javascript:;"> | </a>
        <a class="changelangEN" href="javascript:changeLangtoEn();">EN</a>
    </div>

    <a href="https://www.samfundet.no/"> <img id="samflogo"src="img/samf_logo_hvit.png" alt="Logo samf"> </a>

</nav>

`
function changemenu(x) {
    x.classList.toggle("change");
}

function toggleHide(element){
    element.classList.toggle("hidden");
}

const menu = document.getElementById("hamburgermenu");
const menuContent= document.getElementById("hamburgercontent");

menu.addEventListener('click', function() {
    toggleHide(menuContent);
    changemenu(menu);
})

document.addEventListener('scroll', function (){
    if (menuContent.getAttribute("class")!="hidden"){
        toggleHide(menuContent);
        changemenu(menu);
    }
})


