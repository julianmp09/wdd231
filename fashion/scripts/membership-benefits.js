// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get all the modal buttons
    const modalButtons = document.querySelectorAll('.modal-button');
    
    // Get all modals and close buttons
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    // Loop through all modal buttons
    modalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetModal = document.querySelector(`#${e.target.getAttribute('data-target')}`);
            targetModal.classList.add('active'); // Show the modal
        });
    });

    // Loop through all close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            modal.classList.remove('active'); // Close the modal
        });
    });
});