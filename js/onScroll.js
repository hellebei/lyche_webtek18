let scrollPos = 0;
let page = 1; 
let dir = "none";

function scrollWinDown(){
    window.scrollBy({
        top: document.body.getBoundingClientRect().top + window.innerHeight,
        left: 0, 
        behavior: 'smooth'
    }
        )
        page ++; 
    setTimeout(function(){}, 4000)
    scrollPos = document.body.getBoundingClientRect().top;
    
}

function scrollWinUp(){
    window.scrollBy({
        top: document.body.getBoundingClientRect().top - window.innerHeight,
        left: 0, 
        behavior: 'smooth'
    }
        )
        page --; 
    setTimeout(function(){}, 4000)
    scrollPos = document.body.getBoundingClientRect().top;
    
}

function scrollToPos(x){
    window.scrollTo({
        top: x,
        behavior: 'smooth'
    })
}



// adding scroll event
window.addEventListener('scroll', function(){
    //setTimeout(function(){console.log("Timeout")}, 20000000)
// detects new state and compares it with the new one
console.log("b cient: " + (document.body.getBoundingClientRect()).top)
console.log("scrollpos: " + scrollPos)
if ((document.body.getBoundingClientRect()).top > scrollPos+20){
    console.log("IN UP")
    scrollWinUp(); 
    }
else if((document.body.getBoundingClientRect()).top < scrollPos-20) {
    console.log("IN DOWN")
    scrollWinDown(); 
    }
    
    
    // saves the new position for iteration.
});