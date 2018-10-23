var scrollPos = 0;
var dir = "none";

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
if ((document.body.getBoundingClientRect()).top > scrollPos){
        dir = 'UP';}
    else if((document.body.getBoundingClientRect()).top < scrollPos) {
        dir = 'DOWN';}
    
if (dir === "UP"){
        console.log("IN UP")
        scrollWinUp(); 
        dir = "none"
    }
else if(dir === "DOWN"){
        console.log("IN DOWN")
        scrollWinDown(); 
        dir = "none"
    }
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
});