var slideIndex = 1;
showSlides(slideIndex);

function plusindex(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slide = document.getElementsByClassName('mySlides');

  if (n > slide.length) {
    slideIndex = 1
  };
  if (n < 1) {
    slideIindex = slide.length
  };
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndex - 1].style.display = "block";

}

var time = 5000;
autoslide()

var timer;
function autoslide() {
  var slide = document.getElementsByClassName('mySlides');
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  if (slideIndex > slide.length) {
    slideIndex = 1
  };
  slide[slideIndex - 1].style.display = "block";
  slideIndex++;
  setTimeout(autoslide, time);
}

function plusindex(n){
  showSlides(slideIndex +=n);
  clearTimeout(timer);
  timer = setTimeout(autoslide,time);
}


/*
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
*/
/*
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
*/
/*
function showSlides(index) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
*/




