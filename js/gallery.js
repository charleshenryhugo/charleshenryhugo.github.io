// /js/gallery.js
// Activate the image gallery
// respond appropriately to the click on thumb-image click
function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            // Set clicked image as display image, col 2
            let galleryImage = document.querySelector("#gallery-photo > img");
            galleryImage.setAttribute("src", thumbnail.dataset.largeVersion);
            galleryImage.setAttribute("alt", thumbnail.alt);

            // Change which image is current, col 1
            let currentClass = "current"
            document.querySelector(`.${currentClass}`).classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);
            // Update image info, col 3
            let galleryTitle       = document.querySelector("#gallery-info > .title");
            let galleryDescription = document.querySelector("#gallery-info > .description");
            
            galleryTitle.innerHTML       = thumbnail.dataset.title;
            galleryDescription.innerHTML = thumbnail.dataset.description;
        });
    });
}