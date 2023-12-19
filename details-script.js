// Retrieve the selected image details from sessionStorage
var imageName = sessionStorage.getItem('selectedImageName');
var imageDescription = sessionStorage.getItem('selectedImageDescription');

// Display the selected image details
document.getElementById('imageName').innerText = imageName;
document.getElementById('imageDescription').innerText = imageDescription;

// Display the selected image
var imageDisplay = document.getElementById('imageDisplay');
imageDisplay.src = imageName.toLowerCase().replace(/\s+/g, '') + '.jpg'; // Assuming image filenames are in lowercase with no spaces
imageDisplay.alt = imageName;