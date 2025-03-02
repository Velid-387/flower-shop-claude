// Animation control
document.addEventListener('DOMContentLoaded', function() {
    // Initial animation check
    setTimeout(function() {
        checkAnimations();
    }, 100);
    
    // Check animations on scroll
    window.addEventListener('scroll', checkAnimations);
    
    function checkAnimations() {
        const animateItems = document.querySelectorAll('.animate-item');
        
        animateItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const triggerPoint = windowHeight * 0.8;
            
            if (itemPosition < triggerPoint) {
                item.classList.add('animated');
            }
        });
        
        const productCards = document.querySelectorAll('.product-card');
        if (isInViewport(document.querySelector('.products-grid'))) {
            productCards.forEach(card => {
                card.classList.add('animated');
            });
        }
    }
    
    // Helper function to check if element is in viewport
    function isInViewport(element) {
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
});