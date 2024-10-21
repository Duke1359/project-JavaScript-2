// Variables and data types
let cart = [];
let products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
];

// Display products dynamically
function displayProducts() {
    const productsList = document.getElementById('products-list');
    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <p>${product.name} - #${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsList.appendChild(productDiv);
    });
}

// Control flow statement to add product to cart
function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} added to cart!`);
    }
}

// Display cart using loop
document.getElementById('show-cart').addEventListener('click', () => {
    const cartDisplay = document.getElementById('cart-display');
    cartDisplay.innerHTML = ''; // Clear previous content

    if (cart.length === 0) {
        cartDisplay.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let cartTotal = 0;
    cart.forEach(item => {
        cartTotal += item.price;
        cartDisplay.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    });

    // Asynchronous feature (simulate checkout process)
    checkout(cartTotal).then(message => {
        cartDisplay.innerHTML += `<p>Total: $${cartTotal}</p>`;
        cartDisplay.innerHTML += `<p>${message}</p>`;
    });
});

// Async/await function simulating checkout
async function checkout(total) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Order placed successfully! Your total is $${total}.`);
        }, 2000);
    });
}

// Initialize products display
displayProducts();
