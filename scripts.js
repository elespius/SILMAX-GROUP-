// Form validation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            validateForm();
        });
    }
    
    // Example animation
    const header = document.querySelector('header');
    header.style.opacity = 0;
    fadeIn(header, 2); // Fade in over 2 seconds
});

// Validate form fields
function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value) {
        alert('Please enter your name');
        name.focus();
        return false;
    }

    if (!email.value) {
        alert('Please enter your email');
        email.focus();
        return false;
    }

    if (!message.value) {
        alert('Please enter your message');
        message.focus();
        return false;
    }

    // Submit the form if all fields are valid
    alert('Form submitted successfully!');
    document.getElementById('contact-form').submit();
}

// Simple fade-in animation function
function fadeIn(element, duration) {
    let opacity = 0;
    const interval = 50;
    const increment = interval / (duration * 1000);

    const fade = setInterval(() => {
        opacity += increment;
        if (opacity >= 1) {
            opacity = 1;
            clearInterval(fade);
        }
        element.style.opacity = opacity;
    }, interval);
}
