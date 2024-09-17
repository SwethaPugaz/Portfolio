function showCertificateModal(imageSrc) {
    var modal = document.getElementById('certificateModal');
    var modalImg = document.getElementById('certificateImage');
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeCertificateModal() {
    var modal = document.getElementById('certificateModal');
    modal.style.display = "none";
}

// Close modal when clicking outside of the image
window.onclick = function(event) {
    var modal = document.getElementById('certificateModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
