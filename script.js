// Smooth scroll navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Navigation link click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Scroll to section
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Update active nav link based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Offset for header
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });

    // Keyboard navigation (arrow keys)
    document.addEventListener('keydown', (e) => {
        const sectionIds = ['profile', 'experience', 'projects', 'materials', 'achievements'];
        const currentActive = document.querySelector('.nav-link.active');
        const currentIndex = Array.from(navLinks).indexOf(currentActive);
        
        if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && currentIndex < navLinks.length - 1) {
            navLinks[currentIndex + 1].click();
        } else if ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && currentIndex > 0) {
            navLinks[currentIndex - 1].click();
        }
    });

    // Button handlers
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.getAttribute('data-action');
            const text = this.textContent.trim();
            
            if (action === 'view-resume') {
                window.open('https://drive.google.com/file/d/1ZGkOtBNQvpkaJscaAnTDnvtwsoZmcPFr/view?usp=drive_link', '_blank');
            } else if (action === 'view-portfolio') {
                window.open('https://drive.google.com/drive/folders/1DF7yms-Ka1txa9r6dF0TY3yAU977nmkQ?usp=drive_link', '_blank');
            } else if (text.includes('GitHub')) {
                alert('GitHub link would open here');
            } else if (text.includes('LinkedIn')) {
                alert('LinkedIn link would open here');
            } else if (text.includes('Email')) {
                alert('Email would open here');
            } else {
                alert(text + ' link would open here');
            }
        });
    });

    console.log('🎲 Welcome to Lucas Huang\'s Portfolio!');
    console.log('✨ 💡 TIP: Use arrow keys (↑ ↓) to navigate through the chapters!');
    console.log('🐉 🎭 May your creative journey be legendary!');
});
