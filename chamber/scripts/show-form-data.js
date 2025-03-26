document.addEventListener("DOMContentLoaded", () => {
    // Function to obtain URL parameters
    const getQueryParams= () => {
        const params = new URLSearchParams(window.location.search);
        return {
            firstName: params.get("first-name"),
            lastName: params.get("last-name"),
            email: params.get("email"),
            phone: params.get("phone"),
            company: params.get("company"),
            membership: params.get("membership"),
            timestamp: params.get("timestamp"),
        };
    }

    // Obtain form data
    const formData = getQueryParams();

    // Insert the values in the page
    document.getElementById("user-name").textContent = formData.firstName || "Guest";
    document.getElementById("first-name").textContent = formData.firstName || "Not provided";
    document.getElementById("last-name").textContent = formData.lastName || "Not provided";
    document.getElementById("email").textContent = formData.email || "Not provided";
    document.getElementById("phone").textContent = formData.phone || "Not provided";
    document.getElementById("company").textContent = formData.company || "Not provided";
    document.getElementById("membership").textContent = formData.membership || "Not provided";
    document.getElementById("timestamp").textContent = formData.timestamp
        ? new Date(formData.timestamp).toLocaleString()
        : "Not recorded";
});
