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


const images = document.querySelectorAll('.lookbook-photo');

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

images.forEach(image => {
    image.addEventListener('click', function(e) {
        console.log(e.target)
        console.log(e.target.childNodes[0].src)
        modalImage.src=e.target.childNodes[0].src;
        // modalImage.src = this.src;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});