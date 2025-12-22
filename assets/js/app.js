const navbar = document.querySelector('.custom-navbar');
const myCarousel = document.getElementById('homeCarousel');

// Handle Scroll Logic
 
window.addEventListener('scroll', () => {
    // Optimization: Use 20-50px to trigger the change
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Handle Carousel Slide Logic
 
if (myCarousel) {
    myCarousel.addEventListener('slide.bs.carousel', event => {
        const nextSlide = event.relatedTarget; 
        
        // Check the class of the incoming slide
        if (nextSlide.classList.contains('carousel-light')) {
            navbar.classList.add('navbar-light-mode');
            navbar.classList.remove('navbar-dark-mode');
        } else {
            // Default to dark mode (white text) for dark images
            navbar.classList.add('navbar-dark-mode');
            navbar.classList.remove('navbar-light-mode');
        }
    });
}

// Codes for gallery 

const galleryModal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');

galleryModal.addEventListener('show.bs.modal', function (event) {
  // The element (gallery-item) that triggered the modal
  const triggerElement = event.relatedTarget;
  // Get the image source from the child img tag
  const imageSrc = triggerElement.querySelector('img').src;
  // Update the modal image source
  modalImage.src = imageSrc;
});