// Burger Menu

const navSlide = () => {
  const burger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    {passive: true};
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
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        burger.click();
        link.style.animation = "";
      });
    });
  });
}

navSlide();


//Slide Images About Section

let slideInd = 0;

const autoSlide = () => {
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
  setTimeout(autoSlide, 3000);
}

autoSlide();

//Slide Images About Section END

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
  let slides = document.getElementsByClassName("review-block");
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
  let shopLocation = {lat: 51.435400, lng: -0.159940}
  let mapInfo = {
    center: new google.maps.LatLng(shopLocation),
    zoom: 15,
  };
  let map = new google.maps.Map(document.getElementById('googleMap'),mapInfo);
  let marker = new google.maps.Marker({
      position: shopLocation,
      map: map,
  });
}

const lazyLoadMap = (apiKey) => {
  if (apiKey) {
    let options = {
      rootMargin: '200px',
      threshold: 0,
    }

    let map = document.getElementById('googleMap');
    let apiKey = 'AIzaSyDJ69QaDC8N3m3pM3sF5-wZhan1j4GeUIo';

    let observer = new IntersectionObserver(
      function(entries, self) {
        let isIntersecting = typeof entries[0].isIntersecting === 'boolean' ? entries[0].isIntersecting : entries[0].intersectionRatio > 0;
        if (isIntersecting) {
          let mapsReady = document.createElement('script');
          mapsReady.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=myMap';
          document.body.appendChild(mapsReady);
          self.unobserve(map);
        }
      },
      options
    )
    observer.observe(map)
  }
}

lazyLoadMap('AIzaSyDJ69QaDC8N3m3pM3sF5-wZhan1j4GeUIo');

// Google Location Map END
