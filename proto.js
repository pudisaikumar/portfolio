// Toggle Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth"
    });
}

// "Learn More" Button Scroll to About Section
document.getElementById('learn-more').addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    window.scrollTo({
        top: aboutSection.offsetTop - 50,
        behavior: 'smooth'
    });
});

// Contact Form Submission Handling
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation and alert
    if (name && email && message) {
        alert`(Thanks for reaching out, ${name}! We'll respond via email at ${email}.)`;
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});