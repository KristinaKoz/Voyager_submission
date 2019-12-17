//JavaScript code for Main Automatic Slideshow ("Home Page")
//This code was heavily inspired from this w3schools article: https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 0;
carouselSlides();

function carouselSlides() {
    var i;
    var slides = document.getElementsByClassName("favorite-attractions");
    var points = document.getElementsByClassName("point");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    points[slideIndex - 1].className += " active";
    setTimeout(carouselSlides, 3000); // Change image every 3 seconds
}
