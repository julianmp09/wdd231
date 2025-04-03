document.addEventListener('DOMContentLoaded', () => {
    const visitMessage = document.getElementById('visit-message');
    const lastVisitKey = 'last-visit';
    const currentVisit = Date.now();

    // Retrieve the last visit from localStorage
    const lastVisit = localStorage.getItem(lastVisitKey);

    if (!lastVisit) {
        // First-time visit
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const msInDay = 24 * 60 * 60 * 1000;
        const daysBetween = Math.floor((currentVisit - parseInt(lastVisit, 10)) / msInDay);

        if (daysBetween < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    }

    // Update the last visit in localStorage
    localStorage.setItem(lastVisitKey, currentVisit);
});