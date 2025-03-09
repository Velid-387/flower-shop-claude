// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
            
            // Scroll to the target section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Scroll to top button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonialCards = document.querySelectorAll('.testimonial-card');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const containerTop = testimonialsContainer.offsetTop;
  const containerHeight = testimonialsContainer.offsetHeight;

  testimonialCards.forEach((card, index) => {
    const cardTop = card.offsetTop;
    const cardHeight = card.offsetHeight;

    if (scrollPosition + window.innerHeight > containerTop + cardTop && scrollPosition < containerTop + cardTop + cardHeight) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
});