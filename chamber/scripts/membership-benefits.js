document.addEventListener("DOMContentLoaded", function () {
    const modalButtons = document.querySelectorAll(".modal-button");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-modal");

    modalButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modalId = this.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "block";
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", function (event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});