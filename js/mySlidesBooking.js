//JavaScript code for Automatic Slideshow ("Book your Ticket" Page)
//This code was heavily inspired from this w3schools article: https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 0;
carousel();

function carousel()
{
  var i;
  var x = document.getElementsByClassName("mySlidesBooking");
  for (i = 0; i < x.length; i++)
  {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 4000); 
}
