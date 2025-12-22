const navbar = document.querySelector('.custom-navbar');
const myCarousel = document.getElementById('homeCarousel');

/**
 * 1. Set Navbar Mode
 * This function forces the navbar to Dark Mode (white text) 
 * unless specifically told otherwise.
 */
function applyNavbarTheme() {
    const activeSlide = document.querySelector('.carousel-item.active');
    
    // If you want it white by default, we apply dark-mode
    // We only switch to light-mode if the slide explicitly has 'carousel-light'
    if (activeSlide && activeSlide.classList.contains('carousel-light')) {
        navbar.classList.add('navbar-light-mode');
        navbar.classList.remove('navbar-dark-mode');
    } else {
        navbar.classList.add('navbar-dark-mode');
        navbar.classList.remove('navbar-light-mode');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', applyNavbarTheme);

/**
 * 2. Handle Scroll Logic
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        // If your scrolled navbar has a white background, 
        // you usually want dark text (light-mode)
        // navbar.classList.add('navbar-light-mode'); 
    } else {
        navbar.classList.remove('navbar-scrolled');
        applyNavbarTheme(); // Reset to white text when back at top
    }
});

/**
 * 3. Gallery Modal Logic
 */
const galleryModal = document.getElementById('galleryModal');
if (galleryModal) {
    const modalImage = document.getElementById('modalImage');
    galleryModal.addEventListener('show.bs.modal', function (event) {
        const triggerElement = event.relatedTarget;
        const imageSrc = triggerElement.querySelector('img').src;
        modalImage.src = imageSrc;
    });
}