// JavaScript Document


// slider 1
	
var slideIndex = 0;
showSlides();

function showSlides() {
    var a;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (a = 0; a < slides.length; a++) {
       slides[a].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (a = 0; a < dots.length; a++) {
        dots[a].className = dots[a].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 9000);
}
	
//    slider 2	
	
var slideIndexx = 0;
showSlidess();

function showSlidess() {
    var b;
    var slidess = document.getElementsByClassName("mySlides2");
    var dotts = document.getElementsByClassName("dot2");
    for (b = 0; b < slidess.length; b++) {
       slidess[b].style.display = "none";  
    }
    slideIndexx++;
    if (slideIndexx > slidess.length) {slideIndexx = 1}    
    for (b = 0; b < dotts.length; b++) {
        dotts[b].className = dotts[b].className.replace(" activee", "");
    }
    slidess[slideIndexx-1].style.display = "block";  
    dotts[slideIndexx-1].className += " activee";
    setTimeout(showSlidess, 9000);
}
	
// slider 3 
	
	
	var slideIndexxx = 0;
showSlidesss();

function showSlidesss() {
    var c;
    var slidesss = document.getElementsByClassName("mySlides3");
    var dottts = document.getElementsByClassName("dot3");
    for (c = 0; c < slidesss.length; c++) {
       slidesss[c].style.display = "none";  
    }
    slideIndexxx++;
    if (slideIndexxx > slidesss.length) {slideIndexxx = 1}    
    for (c = 0; c < dottts.length; c++) {
        dottts[c].className = dottts[c].className.replace(" activeee", "");
    }
    slidesss[slideIndexxx-1].style.display = "block";  
    dottts[slideIndexxx-1].className += " activeee";
    setTimeout(showSlidesss, 9000);
}

	
// slider 4	
	
	var slideIndexxxx = 0;
showSlidessss();

function showSlidessss() {
    var d;
    var slidessss = document.getElementsByClassName("mySlides4");
    var dotttts = document.getElementsByClassName("dot4");
    for (d = 0; d < slidessss.length; d++) {
       slidessss[d].style.display = "none";  
    }
    slideIndexxxx++;
    if (slideIndexxxx > slidessss.length) {slideIndexxxx = 1}    
    for (d = 0; d < dotttts.length; d++) {
        dotttts[d].className = dotttts[d].className.replace(" activeeee", "");
    }
    slidessss[slideIndexxxx-1].style.display = "block";  
    dotttts[slideIndexxxx-1].className += " activeeee";
    setTimeout(showSlidessss, 9000);
}

	
// slider 5
	
	var slideIndexxxxx = 0;
showSlidesssss();

function showSlidesssss() {
    var e;
    var slidesssss = document.getElementsByClassName("mySlides5");
    var dottttts = document.getElementsByClassName("dot5");
    for (e = 0; e < slidesssss.length; e++) {
       slidesssss[e].style.display = "none";  
    }
    slideIndexxxxx++;
    if (slideIndexxxxx > slidesssss.length) {slideIndexxxxx = 1}    
    for (e = 0; e < dottttts.length; e++) {
        dottttts[e].className = dottttts[e].className.replace(" activeeeee", "");
    }
    slidesssss[slideIndexxxx-1].style.display = "block";  
    dottttts[slideIndexxxxx-1].className += " activeeeee";
    setTimeout(showSlidesssss, 9000);
}

	
	
	
	
	var slideIndexxxxxx = 0;
showSlidessssss();

function showSlidessssss() {
    var f;
    var slidessssss = document.getElementsByClassName("mySlides6");
    var dotttttts = document.getElementsByClassName("dot6");
    for (f = 0; f < slidessssss.length; f++) {
       slidessssss[f].style.display = "none";  
    }
    slideIndexxxxxx++;
    if (slideIndexxxxxx > slidessssss.length) {slideIndexxxxxx = 1}    
    for (f = 0; f < dotttttts.length; f++) {
        dotttttts[f].className = dotttttts[f].className.replace(" activeeeeee", "");
    }
    slidessssss[slideIndexxxxxx-1].style.display = "block";  
    dotttttts[slideIndexxxxxx-1].className += " activeeeeee";
    setTimeout(showSlidessssss, 9000);
}