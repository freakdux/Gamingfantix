// function showDetails(imageName) {
//     // Save the selected image details in sessionStorage
//     sessionStorage.setItem('selectedImageName', imageName);
    
    
  
//     // Open the new page
//     window.location.href = 'details.html';
//   }
  
// //  let a = document.querySelector("#st");
// //  a.addEventListener("click",function(e){
// //    console.log(e);
// //  })
// Assuming your element has an ID 'myElement'
var myElement = document.getElementById('myElement');

// Adding a click event listener
myElement.addEventListener('click', function() {
    // Navigate to the next page
    window.location.href = 'details.html';
});
