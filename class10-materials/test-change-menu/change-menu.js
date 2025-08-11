// JavaScript to show/hide categories
function showCategory(categoryId) {
    // Hide all categories
    const allCategories = document.querySelectorAll('.category-images');
    allCategories.forEach(category => category.style.display = 'none');
    
    // Show the selected category
    const selectedCategory = document.getElementById(categoryId);
    selectedCategory.style.display = 'block';
}
