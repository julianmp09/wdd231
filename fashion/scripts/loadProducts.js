export async function loadProducts() {
    const response = await fetch("data/productData.json");
    const products = await response.json();
    return products;
}