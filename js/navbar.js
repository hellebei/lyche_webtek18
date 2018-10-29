
window.addEventListener('load', function(){
    function load_home() { 
      document.getElementById("navbar_imported").innerHTML='<object id = "importNav" type="text/html" data="navbar.html" ></object>';
    }
    load_home();
  
  })

document.getElementById("navbar").innerHTML = 
`
    
<nav class="navmain" id="fixed-nav">

<a href="#"><img id = "lyche-logo" src="img/logo.png" alt="Logo for Lyche"></a>

<div id="session-status">
    <a class = "changelangNO" href="/no">NO</a>
    <a class = "line" href=""> | </a>
    <a class="changelangEN" href="/en">EN</a>
</div>

<a href="https://www.samfundet.no/"> <img id="samflogo"src="img/samf_logo.png" alt="Logo samf"> </a>

</div>
</nav>
`

const injectedNavbar = document.getElementById("fixed-nav");
console.log(injectedNavbar);
const hamburgermenu = document.createElement("div");
for (let i = 0; i < 3; i++){
    const bar = document.createElement("div");
    let classname = "bar"+ (i+1);
    bar.setAttribute("class", classname);   
}

const hamburgercontent = document.createElement("div");
const 


<div id="hamburgercontent" class="hidden">
    <ul>
        <li><a href="#" class="item_menu">hjem</a></li>
        <li><a href="#" class="item_menu">meny</a></li>
        <li><a href="#" class="item_menu">om</a></li>
        <li><a href="#" class="item_menu">kontakt</a></li>
        <li><a href="#" class="item_menu">reservasjon</a></li>
        <li><a href="#" class="item_menu">info</a></li>
    </ul>