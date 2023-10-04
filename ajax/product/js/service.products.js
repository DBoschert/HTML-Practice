const url = "http://localhost:2222/api/products";

// Get all products
const productList = () => {
    return $.getJSON(`${url}`);
}

// Get product
const productById = (id) => {
    return $.getJSON(`${url}/${id}`);
}