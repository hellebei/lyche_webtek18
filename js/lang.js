const setLang = (lang) => {
    sessionStorage.setItem('lang', lang)
}

const getLang = () => {
    return sessionStorage.getItem('lang')
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