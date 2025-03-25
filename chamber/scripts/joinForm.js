document.addEventListener('DOMContentLoaded', () => {
    // Set the timestamp field with the current date and time
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }
});
