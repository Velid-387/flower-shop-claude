// Get all product images
const productImages = document.querySelectorAll(".product-img");

// Array of titles
const titles = [
  "Huzur Mostar",
  "Svježe cvijeće za sve prilike",
  "Predivni buketi za sve generacije",
  "Bidermajeri za vjenčanja",
];
const h1Element = document.querySelector("#home h1");

let titleIndex = 0;
let charIndex = 0;
let typing = true;

// Animation control
document.addEventListener("DOMContentLoaded", function () {
  // Initial animation check
  setTimeout(function () {
    checkAnimations();
  }, 100);

  // Check animations on scroll
  window.addEventListener("scroll", checkAnimations);

  function checkAnimations() {
    const animateItems = document.querySelectorAll(".animate-item");

    animateItems.forEach((item) => {
      const itemPosition = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.8;

      if (itemPosition < triggerPoint) {
        item.classList.add("animated");
      }
    });

    const productCards = document.querySelectorAll(".product-card");
    if (isInViewport(document.querySelector(".products-grid"))) {
      productCards.forEach((card) => {
        card.classList.add("animated");
      });
    }
  }

  // Helper function to check if element is in viewport
  function isInViewport(element) {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
});

// Add event listener to each image
productImages.forEach((image) => {
  image.addEventListener("click", () => {
    // Add a temporary class to override the :hover pseudo-class
    image.classList.add("clicked");
    // Remove the temporary class after a short delay
    setTimeout(() => {
      image.classList.remove("clicked");
    }, 100);
    // Toggle the 'enlarged' class on the image
    image.classList.toggle("enlarged");
  });
});

function loadInitialTitle() {
  h1Element.textContent = titles[titleIndex];
  charIndex = titles[titleIndex].length;
  setTimeout(animateTypewriter, 5000); // start animation after 5 seconds
}

function animateTypewriter() {
  if (typing) {
    if (charIndex < titles[titleIndex].length) {
      // do nothing, already loaded
    } else {
      typing = false;
      setTimeout(deleteTitle, 0); // start deleting
    }
  }
}

function deleteTitle() {
  if (charIndex > 0) {
    h1Element.textContent = titles[titleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteTitle, 100); // add a 100ms delay between character deletions
  } else {
    titleIndex = (titleIndex + 1) % titles.length;
    charIndex = 0;
    typing = true;
    loadNextTitle();
  }
}

function loadNextTitle() {
  h1Element.textContent = "";
  for (let i = 0; i <= charIndex; i++) {
    h1Element.textContent += titles[titleIndex][i];
  }
  charIndex++;
  if (charIndex < titles[titleIndex].length) {
    setTimeout(loadNextTitle, 50); // add a 50ms delay between character additions
  } else {
    setTimeout(animateTypewriter, 5000); // start animation after 5 seconds
  }
}

loadInitialTitle();
