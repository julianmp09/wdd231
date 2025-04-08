export function renderProducts(products, container) {
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
}