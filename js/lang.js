/* For this functions we had help from the learing assistants to set up the use of session storage*/


const setLang = (lang) => {
    sessionStorage.setItem('lang', lang)
}

const getLang = () => {
    return sessionStorage.getItem('lang')
}

if (! (getLang()==="en" || getLang()==="no")){
    setLang("no")
}

const lang = getLang()
if (lang === "en"){
    changeLangtoEn()
}

function changeLangtoEn(){
    document.getElementById("no").style.display = "none"
    document.getElementById("en").style.display = "inherit"
    setLang("en")
}

function changeLangtoNo(){
    document.getElementById("en").style.display = "none"
    document.getElementById("no").style.display = "inherit"
    setLang("no")
}