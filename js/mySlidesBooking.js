//JavaScript code for Automatic Slideshow ("Book your Ticket" Page)
//This code was heavily inspired from this w3schools article:https://www.w3schools.com/w3css/w3css_slideshow.asp


var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesBooking");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("", "");
    }
    x[slideIndex - 1].style.display = "block";
}