function direction(){
    var st = window.pageXOffset || document.documentElement.scrollTop; 
    if(st > lastScrollTop){
        //Down
        var number = window.innerHeight + window.pageXOffset;
    }
    else{
        //Up
        var number = window.innerHeight - window.pageXOffset;
    }
    lastScrollTop = st <= 0 ? 0 : st; 
    return number
}

window.addEventListener("scroll", function(){
    var last_known_scroll_position = window.scrollY; 
    console.log("scrollY: ", window.scrollY)
    console.log("PageYOffset: ", window.pageYOffset)
    var numb = direction(); 
    if(last_known_scroll_position < 60 && last_known_scroll_position > 10){
        window.webkitRequestAnimationFrame(function(){
            window.scrollTo({
                top: numb,
                behavior: "smooth"
            })
        })
    }
    if(last_known_scroll_position>800 && last_known_scroll_position <900){
        window.webkitRequestAnimationFrame(function(){
            window.scrollTo({
                top: numb, 
                behavior: "smooth"
            })
        })
    }
})