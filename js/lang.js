/* For this functions we had help from the learing assistants to set up the use of session storage*/
// Because it uses session storage, the language transfer between pages does not work if one just opens it in browsers as files and not as a web-page on a server.


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