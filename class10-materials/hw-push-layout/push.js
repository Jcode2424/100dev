
// Fourth Section Slider

const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const items = document.querySelectorAll('.slider .slider-item');

let index = 0;
const itemsPerView = 1;
const totalItems = items.length;

for (let i = 0; i < itemsPerView; i++) {
    slider.appendChild(items[i].cloneNode(true));
    slider.insertBefore(items[totalItems - 1 - i].cloneNode(true), slider.firstChild);
}

let currentIndex = itemsPerView;
slider.style.transform = `translateX(-${currentIndex * 100}%)`;

function moveTo(index) {
    slider.style.transition = 'transform 0.3s ease-in-out';
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

nextBtn.addEventListener('click', () => {
    moveTo(currentIndex + itemsPerView);

    slider.addEventListener('transitionend', () => {
        if (currentIndex >= totalItems + itemsPerView) {
            slider.style.transition = 'none';
            currentIndex = itemsPerView;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, { once: true });
});

prevBtn.addEventListener('click', () => {
    moveTo(currentIndex - itemsPerView);

    slider.addEventListener('transitionend', () => {
        if (currentIndex < itemsPerView) {
            slider.style.transition = 'none';
            currentIndex = totalItems;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, { once: true });
});


//Seventh Section Slider
const slider_r = document.querySelector('.slider-r');
const prevBtn_r = document.getElementById('prev-r');
const nextBtn_r= document.getElementById('next-r');
const items_r = document.querySelectorAll('.slider-r li');

const totalItems_r = items_r.length;

slider_r.appendChild(items_r[0].cloneNode(true));
slider_r.insertBefore(items_r[totalItems_r - 1].cloneNode(true), slider_r.firstChild);

let currentIndex_r = 1;
slider_r.style.transform = `translateX(-${currentIndex_r * 100}%)`;

function moveTo_r(index_r) {
    slider_r.style.transition = 'transform 0.3s ease-in-out';
    slider_r.style.transform = `translateX(-${index_r * 100}%)`;
    currentIndex_r = index_r;
}

nextBtn_r.addEventListener('click', () => {
    moveTo_r(currentIndex_r + 1);

    slider_r.addEventListener('transitionend', () => {
        if (currentIndex_r >= totalItems_r + 1) {
            slider_r.style.transition = 'none';
            currentIndex_r = 1;
            slider_r.style.transform = `translateX(-${currentIndex_r * 100}%)`;
        }
    }, { once: true });
});

prevBtn_r.addEventListener('click', () => {
    moveTo_r(currentIndex_r - 1);

    slider_r.addEventListener('transitionend', () => {
        if (currentIndex_r <= 0) {
            slider_r.style.transition = 'none';
            currentIndex_r = totalItems_r;
            slider_r.style.transform = `translateX(-${currentIndex_r * 100}%)`;
        }
    }, { once: true });
});