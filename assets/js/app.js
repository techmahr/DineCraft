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
 
// if (myCarousel) {
//     myCarousel.addEventListener('slide.bs.carousel', event => {
//         const nextSlide = event.relatedTarget; 
        
//         // Check the class of the incoming slide
//         if (nextSlide.classList.contains('carousel-light')) {
//             navbar.classList.add('navbar-light-mode');
//             navbar.classList.remove('navbar-dark-mode');
//         } else {
//             // Default to dark mode (white text) for dark images
//             navbar.classList.add('navbar-dark-mode');
//             navbar.classList.remove('navbar-light-mode');
//         }
//     });
// }

// Codes for gallery 

// const galleryModal = document.getElementById('galleryModal');
// const modalImage = document.getElementById('modalImage');

// galleryModal.addEventListener('show.bs.modal', function (event) {
//   // The element (gallery-item) that triggered the modal
//   const triggerElement = event.relatedTarget;
//   // Get the image source from the child img tag
//   const imageSrc = triggerElement.querySelector('img').src;
//   // Update the modal image source
//   modalImage.src = imageSrc;
// });


const galleryModal = document.getElementById('galleryModal');
const carouselInner = document.getElementById('carouselInner');
const galleryItems = document.querySelectorAll('.gallery-item img');

// 1. Populate the Carousel once when the page loads
galleryItems.forEach((img, index) => {
    const isActive = index === 0 ? 'active' : '';
    const carouselItem = `
        <div class="carousel-item ${isActive}">
            <img src="${img.src}" class="d-block w-100 rounded shadow-lg" alt="${img.alt}">
        </div>
    `;
    carouselInner.insertAdjacentHTML('beforeend', carouselItem);
});

// 2. Handle opening the modal at the correct image
galleryModal.addEventListener('show.bs.modal', function (event) {
    const triggerElement = event.relatedTarget; // The .gallery-item clicked
    const allItems = Array.from(document.querySelectorAll('.gallery-item'));
    const index = allItems.indexOf(triggerElement); // Find the index of clicked image
    
    // Initialize or get the Bootstrap carousel instance
    const carousel = bootstrap.Carousel.getOrCreateInstance('#galleryCarousel');
    carousel.to(index); // Move carousel to the clicked index
});