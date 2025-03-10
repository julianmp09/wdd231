document.addEventListener('DOMContentLoaded', () => {
    // Set the last modified date
    const lastModifiedElement = document.getElementById('last-modification');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // Set the current year in the copyright notice
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.copyright-year');
    if (copyrightElement) {
        copyrightElement.textContent = currentYear;
    }
});