let slideIndex = 1;
showSlides(slideIndex);

function plusindex(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slide = document.getElementsByClassName('mySlides');

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

let time = 5000;
autoslide()


function autoslide() {
  let slide = document.getElementsByClassName('mySlides');
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








