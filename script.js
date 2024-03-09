// ------------- Index Page --------------- 

// <!-- JavaScript For Toggle Menu -->
  var navLinks = document.getElementById('navLinks');
  function showMenu(){
    navLinks.style.right = '0'
    }
  function hideMenu() {
    navLinks.style.right = '-120px'
    }

    

//  ---- Gallary ----

let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) {slideIndex = 0}    
    if (n < 0) {slideIndex = slides.length - 1}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slides[slideIndex].style.display = 'block';  
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

showSlide(slideIndex);