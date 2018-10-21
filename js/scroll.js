
function scrollWinDown(){
    window.scrollBy({
        top: window.innerHeight,
        left: 0, 
        behavior: 'smooth'
    }
        )
}


function scrollWinUp(){
    window.scrollBy({
        top: - window.innerHeight,
        left: 0, 
        behavior: 'smooth'
    }
        )
}