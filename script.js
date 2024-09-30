const photoContainer = document.getElementById('photoContainer');
const totalImages = 290;

for (let i=1; i<=totalImages; i++) {
    const img = document.createElement('img');
    img.className = 'photo';
    img.src = `Clear_Photo_Album/photo${i}.jpg`;
    img.alt = `Photo Description`;
    img.onclick = function () {
        displayModal(img.src, img.alt);
    };
    photoContainer.appendChild(img);
}

const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImage");

function displayModal(src, alt) {
    modal.style.display = "block";
    modalImg.src = src;
    modalImg.alt = alt;
}
const closeButton = document.querySelector(".close-button");

closeButton.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}