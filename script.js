// Single-page scrolling navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.scroll-section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Scroll to section
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Update active nav link based on scroll position
window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200; // Offset for header
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === currentSection) {
            link.classList.add('active');
        }
    });
});

// Keyboard navigation (arrow keys)
document.addEventListener('keydown', (e) => {
    const sectionIds = ['profile', 'projects', 'works', 'awards', 'materials'];
    let currentIndex = -1;
    
    navLinks.forEach((link, index) => {
        if (link.classList.contains('active')) {
            currentIndex = index;
        }
    });
    
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, navLinks.length - 1);
        navLinks[nextIndex].click();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        navLinks[prevIndex].click();
    }
});

// Set initial active state
window.addEventListener('load', () => {
    console.log('🚀 Portfolio loaded - Explore my narrative design work');
    console.log('💡 TIP: Use arrow keys (↑ ↓ ← →) to navigate between sections!');
});

// Smooth animations for cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-space');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
