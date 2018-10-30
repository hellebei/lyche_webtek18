/*window.addEventListener('load', function(){
    function load_home() { 
      document.getElementById("navbar_imported").innerHTML='<object id = "importNav" type="text/html" data="navbar.html" ></object>';
    }
    load_home();
  
  })

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
})*/

`
<nav class="navmain" id="fixed-nav">

    <a href="#"><img id = "lyche-logo" src="img/logo.png" alt="Logo for Lyche"></a>

    <div id="session-status">
        <a class = "changelangNO" href="/no">NO</a>
        <a class = "line" href=""> | </a>
        <a class="changelangEN" href="/en">EN</a>
    </div>

    <a href="https://www.samfundet.no/"> <img id="samflogo"src="img/samf_logo.png" alt="Logo samf"> </a>

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
hamburgercontent.setAttribute("id", "hamburgercontent")
hamburgercontent.setAttribute("class", "hidden");

const ulContent = document.createElement("ul");

const names = ["Home", "Menu", "About", "Contact", "Reservation", "Information"];

for (let i=0; i < names.length; i++){
    const li = document.createElement("li");
    const a = document.createElement("a")
    a.setAttribute("class", "item_menu");
    let liName = document.createTextNode(names[i].toLowerCase());  
    a.setAttribute("href", liName+".html")
    a.appendChild(liName)
    li.appendChild(a)
    ulContent.appendChild(li)
}

hamburgercontent.appendChild(ulContent);
ulContent.style.listStyleType = "none";
injectedNavbar.appendChild(hamburgermenu)
