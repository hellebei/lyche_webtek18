
if(currentLang = "en"){
    changeLangtoEn()
}
if(currentLang = "no"){
    changeLangtoNo()
}


function changeLangtoEn(){
    document.getElementById("no").style.display = "none"
    document.getElementById("en").style.display = "inherit"
    let currentLang = "en"
}

function changeLangtoNo(){
    document.getElementById("en").style.display = "none"
    document.getElementById("no").style.display = "inherit"
    let currentLang = "no"
}