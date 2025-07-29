let currentSlide = 0;
const slides = ['slider-1', 'slider-2', 'slider-3', 'slider-4', 'slider-5', 'slider-6'];

const sliderContainer = document.querySelector('.slider-container');

const changeSlide = (direction) => {
    sliderContainer.classList.remove(slides[currentSlide]);
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    sliderContainer.classList.add(slides[currentSlide]);
}

document.querySelector('.left-arrow').addEventListener('click', () => changeSlide(-1));
document.querySelector('.right-arrow').addEventListener('click', () => changeSlide(1));

sliderContainer.classList.add(slides[currentSlide]);