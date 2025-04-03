
    document.addEventListener('DOMContentLoaded', () => {
        fetch('./data/locations.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.photo-grid');
            data.forEach(item => {
                const figure = document.createElement('figure');
                figure.innerHTML = `
                    <h2>${item.title}</h2>
                    <img src="${item.image}" alt="${item.alt}" class="lazy" loading="lazy">
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button class="learn-more">Learn More</button>
                `;
                container.appendChild(figure);
            });
        });
    });
    