async function getProduct(productId) {
    const apiUrl =  `https://fakestoreapi.com/products/${productId}`;

    const response = await fetch(apiUrl)
    const data = await response.json()
    return data

   
}

module.exports = getProduct;
