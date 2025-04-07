// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just show an alert
        alert('Thank you for your message! This is a demo form.');
        contactForm.reset();
    });
}

// Add scroll-based navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme === 'light');

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme === 'light');
    });

    function updateIcon(isLight) {
        icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    }
}); 