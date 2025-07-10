/* $(document).ready(function() {
    if (Modernizr.mq('screen and (max-width: 800px)')){
        $('.size').text('small');
    }
}); */
const sizeText = document.querySelector('.size');
function updateSizeLabel(e) {
    if (e.matches) {
        sizeText.textContent = 'small';
    } else {
        sizeText.textContent = 'large';
    }
}

// Create the media query
const mediaQuery = window.matchMedia ('(max-width: 800px)');

// Initial check
updateSizeLabel(mediaQuery);

// add Live event listener
mediaQuery.addEventListener('change', updateSizeLabel);


// if (window.matchMedia('(max-width: 800px)').matches) {
//     document.querySelector('.size').textContent = 'small';
// } else {
//     document.querySelector('.size').textContent = 'large';
// }