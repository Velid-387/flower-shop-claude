// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
            
            // Collect form data
            const formData = new FormData(contactForm);
            
            // Send data to PHP script
            fetch('server/send-email.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
                
                // Show response message
                if (data.success) {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = data.message;
                    contactForm.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formStatus.style.display = 'none';
                    }, 5000);
                } else {
                    formStatus.className = 'form-status error';
                    formStatus.textContent = data.message || 'An error occurred. Please try again.';
                }
            })
            .catch(error => {
                // Handle network errors
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Network error. Please try again later.';
                console.error('Error:', error);
            });
        });
    }
});