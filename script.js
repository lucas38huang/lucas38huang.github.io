// D&D Character Sheet Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const pages = document.querySelectorAll('.page');

    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            updateActiveTab(this);
        });
    });

    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            // Scroll to top when changing pages
            window.scrollTo(0, 0);
        }
    }

    function updateActiveTab(activeTab) {
        navTabs.forEach(tab => tab.classList.remove('active'));
        activeTab.classList.add('active');
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const currentActive = document.querySelector('.nav-tab.active');
        const currentIndex = Array.from(navTabs).indexOf(currentActive);
        
        if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && currentIndex < navTabs.length - 1) {
            navTabs[currentIndex + 1].click();
        } else if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && currentIndex > 0) {
            navTabs[currentIndex - 1].click();
        }
    });

    // Button click handlers
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent.trim();
            if (text === 'DOWNLOAD NOW') {
                alert('📜 Resume download would be triggered here');
            } else if (text === 'VIEW SAMPLES') {
                alert('🎲 Portfolio samples would open here');
            } else {
                alert('🌐 ' + text + ' link would open here');
            }
        });
    });

    console.log('📜 Welcome to your Character Sheet');
    console.log('💡 TIP: Use arrow keys (← →) to navigate between pages!');
});
