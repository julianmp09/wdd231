import { loadProducts } from './loadProducts.js';
import { renderProducts } from './renderProducts.js';

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("productContainer");
    container.innerHTML = `<div class="spinner"></div>`;

    try {
        const products = await loadProducts();

        // Preload images
        const imagePromises = products.map(product => {
            return new Promise(resolve => {
                const img = new Image();
                img.src = product.image;
                img.onload = resolve;
                img.onerror = resolve;
            });
        });

        await Promise.all(imagePromises);

        // Save to localStorage
        localStorage.setItem("products", JSON.stringify(products));

        setTimeout(() => {
            renderProducts(products, container);
        }, 2000);

    } catch (error) {
        console.error("Error loading products:", error);
        container.innerHTML = `<p class="error-msg">Error loading products.</p>`;
    }
});
