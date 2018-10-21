var myPos = 0;

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

function scrollToPos(x){
    window.scrollTo({
        top: x,
        behavior: 'smooth'
    })
}


// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top < scrollPos){
        myPos = scrollPos + window.innerHeight
        scrollToPos(myPos)}
    if ((document.body.getBoundingClientRect()).top > scrollPos){
        myPos = scrollPos - window.innerHeight
        scrollToPos(myPos)
	// saves the new position for iteration.
    //(document.body.getBoundingClientRect()).top;
    }
})