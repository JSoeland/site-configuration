// Get the modal element
var imgmodal = document.getElementById("myModal");

// Get the image that opens the modal
var img = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeModalBtn");

// When the user clicks on the image, open the modal
img.onclick = function() {
    imgmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    imgmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == imgmodal) {
        imgmodal.style.display = "none";
    }
}