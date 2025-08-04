// Select all the images in the lookbook
const images = document.querySelectorAll('.lookbook-photo img');

// Get the modal and modal content
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Loop through all the images and add a click event listener
images.forEach(image => {
  image.addEventListener('click', function () {
    // Set the modal image source to the clicked image's source
    modalImage.src = this.src;
    // Show the modal by adding the 'show' class
    modal.classList.add('show');
  });
});

// When the user clicks the close button, close the modal
closeModal.addEventListener('click', function () {
  modal.classList.remove('show');
});

// Optional: Close the modal if the user clicks anywhere outside the modal image
modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});
