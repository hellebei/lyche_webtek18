var scrollPos = 0;
var dir = "none";

function scrollWinDown(){
    window.scrollBy({
        top: window.innerHeight,
        left: 0, 
        behavior: 'smooth'
    }
        )
    setTimeout(function(){console.log("Timeout")}, 4000)
    scrollPos = document.body.getBoundingClientRect().top;
    
}

function scrollWinUp(){
    window.scrollBy({
        top: - window.innerHeight,
        left: 0, 
        behavior: 'smooth'
    }
        )
    setTimeout(function(){console.log("Timeout")}, 4000)
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
// detects new state and compares it with the new one
console.log((document.body.getBoundingClientRect()).top)
console.log(scrollPos)
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
    setTimeout(function(){console.log("Timeout")}, 4000)
    // saves the new position for iteration.
});