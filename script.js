// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        navLinks.classList.remove('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the data to a server
        console.log({ name, email, phone, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Add animation when scrolling
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    const elements = document.querySelectorAll('.service-card, .hours-info, .contact-info, .contact-form, .about-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements with hidden state
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .hours-info, .contact-info, .contact-form, .about-content');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    // Trigger the initial reveal
    revealOnScroll();
});

// Highlight current page in navigation
function setActiveNav() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === 'index.html' && linkPage === 'index.html') {
            // Skip highlighting home link when on home page
        } else if (currentPage.includes(linkPage) || 
                  (currentPage === 'index.html' && linkPage === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    // ... rest of your existing code ...
});

// Video Gallery Functionality
function initVideoGallery() {
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const playButton = container.querySelector('.play-button');
        
        container.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playButton.style.display = 'none';
            } else {
                video.pause();
                playButton.style.display = 'block';
            }
        });
        
        video.addEventListener('play', () => {
            playButton.style.display = 'none';
        });
        
        video.addEventListener('pause', () => {
            playButton.style.display = 'block';
        });
    });
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.video-gallery')) {
        initVideoGallery();
    }
    // ... rest of your existing code ...
});