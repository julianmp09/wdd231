document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("productContainer");

    // Mostrar spinner mientras se carga el contenido
    container.innerHTML = `<div class="spinner"></div>`;

    try {
        // Cambiar la ruta para apuntar a la carpeta 'data'
        const response = await fetch("data/productData.json");
        const products = await response.json();

        // Cargar imágenes antes de mostrar los productos
        const imagePromises = products.map(product => {
            return new Promise(resolve => {
                const img = new Image();
                img.src = product.image;
                img.onload = resolve;
                img.onerror = resolve; // Evita bloqueo si la imagen no carga
            });
        });

        // Esperar a que todas las imágenes se carguen
        await Promise.all(imagePromises);

        // Simular un retraso adicional para el spinner (ej. 2 segundos)
        setTimeout(() => {
            container.innerHTML = `
                <div class="divCardContainer">
                    ${products.map(product => `
                        <article class="divCard">
                            <figure>
                                <img src="${product.image}" alt="${product.description}" loading="lazy" />
                                <figcaption>${product.title}</figcaption>
                            </figure>
                            <p class="p-card">${product.description}</p>
                            <p class="p-card">${product.price}</p>
                            <button class="boton-card">Buy</button>
                        </article>
                    `).join("")}
                </div>
            `;
        }, 2000); // El spinner se mostrará por 2 segundos adicionales antes de mostrar los productos.

    } catch (error) {
        console.error("Error al cargar los productos:", error);
        container.innerHTML = `<p class="error-msg">Error al cargar los productos.</p>`;
    }
});
