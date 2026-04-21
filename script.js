// SPA Navigation Logic
function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Update button states
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-section') === sectionId) {
            button.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const sections = ['profile', 'projects', 'works', 'awards', 'materials'];
    const currentSection = document.querySelector('.section.active')?.id;
    const currentIndex = sections.indexOf(currentSection);
    
    if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % sections.length;
        navigateTo(sections[nextIndex]);
    } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        navigateTo(sections[prevIndex]);
    }
});

// Add scroll animation on load
window.addEventListener('load', () => {
    console.log('🎮 ARCADE PORTFOLIO LOADED');
    console.log('💡 TIP: Use arrow keys (← →) to navigate between sections!');
});

// Smooth page transition on anchor clicks
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        navigateTo(targetId);
    }
});

// Observer for fade-in animations on scroll
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

// Observe cards for animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-retro');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
