// Main JavaScript functionality
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const navLinks = document.getElementById("navLinks");

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Close mobile menu if open
      navLinks.classList.remove("active");

      // Scroll to the target section
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// Scroll to top button
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonialCards = document.querySelectorAll(".testimonial-card");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const containerTop = testimonialsContainer.offsetTop;
  const containerHeight = testimonialsContainer.offsetHeight;

  testimonialCards.forEach((card, index) => {
    const cardTop = card.offsetTop;
    const cardHeight = card.offsetHeight;

    if (
      scrollPosition + window.innerHeight > containerTop + cardTop &&
      scrollPosition < containerTop + cardTop + cardHeight
    ) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
});

// get all links in the nav-links container
const links = document.querySelectorAll('.nav-links a');

// add event listener to each link
links.forEach((link) => {
  link.addEventListener('click', () => {
    // remove selected class from all links
    links.forEach((l) => l.classList.remove('selected'));
    // add selected class to the clicked link
    link.classList.add('selected');
  });
});

// add event listener to the window to highlight the link on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  links.forEach((link) => {
    const sectionId = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);
    if (section && section.offsetTop <= scrollPosition + window.innerHeight / 2 && section.offsetTop + section.offsetHeight > scrollPosition) {
      // remove selected class from all links
      links.forEach((l) => l.classList.remove('selected'));
      // add selected class to the current link
      link.classList.add('selected');
    }
  });
});