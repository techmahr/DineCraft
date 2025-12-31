// 1. Navbar Logic
const navbar = document.querySelector('.custom-navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// 2. Carousel Logic 
const galleryItems = document.querySelectorAll('.gallery-item img');
const carouselInner = document.getElementById('carouselInner');
const galleryModal = document.getElementById('galleryModal');

if (carouselInner && galleryItems.length > 0) {
    galleryItems.forEach((img, index) => {
        const isActive = index === 0 ? 'active' : '';
        const carouselItem = `
            <div class="carousel-item ${isActive}">
                <img src="${img.src}" class="d-block w-100 rounded shadow-lg" alt="${img.alt}">
            </div>
        `;
        carouselInner.insertAdjacentHTML('beforeend', carouselItem);
    });
}

if (galleryModal) {
    galleryModal.addEventListener('show.bs.modal', function (event) {
        const triggerElement = event.relatedTarget;
        const allItems = Array.from(document.querySelectorAll('.gallery-item'));
        const index = allItems.indexOf(triggerElement);
        
        // Ensure Bootstrap is loaded
        if (typeof bootstrap !== 'undefined') {
            const carousel = bootstrap.Carousel.getOrCreateInstance('#galleryCarousel');
            carousel.to(index);
        }
    });
}

// 3. Loader Logic 
const spinnerWrapperEl = document.querySelector('.loader-wrapper');
if (spinnerWrapperEl) {
    window.addEventListener('load', () => {
        spinnerWrapperEl.style.opacity = '0';
        setTimeout(() => {
            spinnerWrapperEl.style.display = 'none';
        }, 400); 
    });
}

// Initialize AOS Animation
AOS.init({
  // Global settings:
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});