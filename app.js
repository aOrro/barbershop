// Reviews Carousel effect

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("social-reviews");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

// Reviews Carousel effect END

// Google Location Map

function myMap() {
let mapProp= {
  center:new google.maps.LatLng(51.435400,-0.159940),
  zoom:5,
};
let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

// Google Location Map END

// Burger Menu

const navSlide = () => {
  const burger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    burger.classList.toggle('no-shadow');
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade .5s ease forwards ${index / 5 + .2}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.click();
    });
  });
}

navSlide();


//Slide Images About Section

let slideInd = 0;
autoSlide();

function autoSlide() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideInd++;
  if (slideInd > slides.length) {
    slideInd = 1
  }
  slides[slideInd-1].style.display = "block";
  setTimeout(autoSlide, 2000);
}

//Slide Images About Section END

