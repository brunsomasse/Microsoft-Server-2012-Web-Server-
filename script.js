// Smooth scrolling function
function scrollToCourses() {
    document.getElementById('courses').scrollIntoView({
        behavior: 'smooth'
    });
}

// Navigation highlight on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
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

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #f4d03f !important;
        border-bottom: 2px solid #f4d03f;
        padding-bottom: 2px;
    }
    
    .course-card:nth-child(1) { animation-delay: 0.1s; }
    .course-card:nth-child(2) { animation-delay: 0.2s; }
    .course-card:nth-child(3) { animation-delay: 0.3s; }
    .course-card:nth-child(4) { animation-delay: 0.4s; }
    .course-card:nth-child(5) { animation-delay: 0.5s; }
    .course-card:nth-child(6) { animation-delay: 0.6s; }
`;
document.head.appendChild(style);

// Simple contact form validation (if you add a form later)
function validateForm() {
    // Add form validation logic here if needed
    return true;
}

// Loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('ELL Computer LAB website loaded successfully!');
});
