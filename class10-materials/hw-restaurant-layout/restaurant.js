// function showCategory(categoryId) {
//     const allCategories = document.querySelectorAll('.category-images');
//     allCategories.forEach(category => {
//         category.style.display = 'none';
//     });

//     const selectedCategory = document.getElementById(categoryId);
//     selectedCategory.style.display = 'block';
// }

// document.addEventListener('DOMContentLoaded', function (){
//     const categoryButtons = document.querySelectorAll('.category-btn');
//     const categoryImages = document.querySelectorAll('.category-images');

//     categoryButtons[0].classList.add('active');
//     categoryImages[0].computedStyleMap.display = 'block';

//     categoryButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const category = button.getAttribute('data-category');

//             categoryImages.forEach(images => {
//                 images.computedStyleMap.display = 'none';
//             });

//             const SelectedCategory = document.querySelector(`.${category}`);
//             SelectedCategory.computedStyleMap.display = 'block';
//         })
//     })
// })

function showCategory(categoryId) {

    const allCategories = document.querySelectorAll('.category-images');
    allCategories.forEach(category => {
        category.style.display = 'none';
    });

    const selectedCategory = document.getElementById(categoryId);
    selectedCategory.style.display = 'block';
}

window.onload = function () {
    showCategory('category1');
};

//dropdown opens when clicked

document.querySelector(".dropbtn").addEventListener("click", function() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});