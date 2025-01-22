document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelector('.carousel-indicators');
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Create indicators dynamically
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (i === 0) indicator.classList.add('active');
        indicators.appendChild(indicator);

        indicator.addEventListener('click', () => {
            goToSlide(i);
        });
    }

    const allIndicators = document.querySelectorAll('.carousel-indicator');

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        allIndicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentIndex);
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function showPreviousSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Auto-slide every 3 seconds
    let autoSlide = setInterval(showNextSlide, 3000);

    // Pause on hover
    carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
    carouselContainer.addEventListener('mouseleave', () => autoSlide = setInterval(showNextSlide, 3000));

    // Navigation buttons
    const nextBtn = document.querySelector('.carousel-next');
    const prevBtn = document.querySelector('.carousel-prev');

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', showNextSlide);
        prevBtn.addEventListener('click', showPreviousSlide);
    }
});

// Floating button functionality
const floatingBtn = document.querySelector('.floating-btn');

floatingBtn.addEventListener('click', () => {
    window.location.href = '#events'; // Navigate to the events section
});

document.getElementById("emailLink").addEventListener("click", function(e) {
    e.preventDefault(); // Prevents the default action (navigation)
    window.location.href = "mailto:contact@college.com"; // Opens the default email client with the specified email address
});

ScrollReveal({ 
    reset: true, //this is for the resting the animation when we scrolled down
    distance: '60px',
    duration:  2500,
    delay: 400
});

ScrollReveal().reveal('.container h1' , { delay: 500 ,origin: 'top'});
ScrollReveal().reveal('.container p' , { delay: 600 ,origin: 'right'});
ScrollReveal().reveal('.events-heading ' , { delay: 500 ,origin: 'left'});
ScrollReveal().reveal('.slider ' , { delay: 600 ,origin: 'bottom'});
ScrollReveal().reveal('.exp_btn ' , { delay: 700 });
ScrollReveal().reveal('.stat_bars1 ' , { delay: 500 ,origin: 'left'});
ScrollReveal().reveal('.stat_bars2 ' , { delay: 600 ,origin: 'left'});
ScrollReveal().reveal('.stat_bars3 ' , { delay: 700 ,origin: 'left'});
ScrollReveal().reveal('.stats p ' , { delay: 500 ,origin: 'left'});


// countdown part 

const targetDate = new Date("2025-02-27T08:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "Time's up!";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to set the countdown immediately



// this is for the animated video section

// const section = document.querySelector('section.vid')
// const vid = section.querySelector('video')

// vid.pause()

// const scroll = () => {
//     const distance = window.scrollY - section.offsetTop
//     const total = section.clientHeight - window.innerHeight

//     let percentage = distance/total
//     percentage = Math.max(0, percentage)
//     percentage = Math.min(percentage, 1)

//     if(vid.duration > 0){
//         vid.currentTime = vid.duration * percentage
//     }
// }

// scroll()
// window.addEventListener("scroll",scroll)

// refer this for queries 
// https://www.youtube.com/watch?v=L1eu737bu70

const container = document.querySelector('.animation-container');

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const duration = 1 + Math.random() * 2;
  
  particle.style.left = `${x}%`;
  particle.style.top = `${y}%`;
  particle.style.animation = `float ${duration}s ease-in-out infinite`;
  
  container.appendChild(particle);
  
  setTimeout(() => {
    container.removeChild(particle);
  }, duration * 1000);
}

setInterval(createParticle, 500);

// Navbar scroll behavior
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav-bar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Team page scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const committeeSections = document.querySelectorAll('.committee-section');
    const memberCards = document.querySelectorAll('.member-card');
    
    // Set initial card indices for staggered animations
    memberCards.forEach((card, index) => {
        card.style.setProperty('--card-index', index % 2);
    });

    // Intersection Observer for committee sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    committeeSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuButton.classList.toggle('active');
        });
    }
});