/* MODAL*/
document.addEventListener("DOMContentLoaded", function() {
    const modalButton = document.querySelectorAll(".modal-button");
    const modalImg = document.querySelector(".modal-img");
    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));

    modalButton.forEach(button => {
        button.addEventListener("click", function(e) {
            const src = e.target.closest(".thumbnail").querySelector(".image").getAttribute("src");
            modalImg.src = src;
            myModal.show();
        });
    });
});
