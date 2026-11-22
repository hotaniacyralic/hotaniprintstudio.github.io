
/* =====================================
   HOTANI PRINT STUDIO
   Main JavaScript
===================================== */

// WhatsApp Number
// Apna business WhatsApp number baad mein add karna
const WHATSAPP_NUMBER = "923000000000";


// Product Data
const products = [
    {
        id: 1,
        name: "Flex Printing",
        category: "Flex & Panaflex",
        price: 0,
        image: "",
        description: "High quality flex printing."
    },
    {
        id: 2,
        name: "Panaflex Printing",
        category: "Flex & Panaflex",
        price: 0,
        image: "",
        description: "Professional panaflex printing."
    },
    {
        id: 3,
        name: "Visiting Cards",
        category: "Business Printing",
        price: 0,
        image: "",
        description: "Premium quality visiting cards."
    },
    {
        id: 4,
        name: "Wedding Cards",
        category: "Wedding Printing",
        price: 0,
        image: "",
        description: "Beautiful wedding invitation cards."
    },
    {
        id: 5,
        name: "Banners & Posters",
        category: "Advertising",
        price: 0,
        image: "",
        description: "Custom banners and posters."
    },
    {
        id: 6,
        name: "Stickers & Labels",
        category: "Custom Printing",
        price: 0,
        image: "",
        description: "Custom printed stickers and labels."
    },
    {
        id: 7,
        name: "Brochures & Flyers",
        category: "Business Printing",
        price: 0,
        image: "",
        description: "Professional business brochures."
    },
    {
        id: 8,
        name: "Graphic Designing",
        category: "Design Services",
        price: 0,
        image: "",
        description: "Creative graphic designing services."
    }
];


// Shopping Cart
let cart = [];


// Load Products
function displayProducts() {

    const container = document.getElementById("product-container");

    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        const imageHTML = product.image
            ? `<img src="${product.image}" alt="${product.name}">`
            : `<div class="product-placeholder">${product.name}</div>`;

        card.innerHTML = `
            <div class="product-image">
                ${imageHTML}
            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="product-price">
                    ${product.price > 0
                        ? "Rs. " + product.price
                        : "Price on Request"}
                </div>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>
        `;

        container.appendChild(card);

    });

}


// Add to Cart
function addToCart(productId) {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    updateCartCount();

    alert(product.name + " added to your cart!");

}


// Update Cart Count
function updateCartCount() {

    const cartCount = document.querySelector(".cart-count");

    if (!cartCount) return;

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = totalItems;

}


// Show Cart
function showCart() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    let message = "HOTANI PRINT STUDIO - ORDER\n\n";

    let total = 0;

    cart.forEach(item => {

        message +=
            item.name +
            " x " +
            item.quantity +
            " - " +
            (item.price > 0
                ? "Rs. " + item.price * item.quantity
                : "Price on Request") +
            "\n";

        total += item.price * item.quantity;

    });

    message += "\nTotal: " +
        (total > 0 ? "Rs. " + total : "Price on Request");

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}


// Cart Button
const cartButton = document.querySelector(".cart-btn");

if (cartButton) {

    cartButton.addEventListener("click", showCart);

}


// Contact Form
const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = contactForm.querySelector(
            'input[type="text"]'
        ).value.trim();

        const email = contactForm.querySelector(
            'input[type="email"]'
        ).value.trim();

        const phone = contactForm.querySelector(
            'input[type="tel"]'
        ).value.trim();

        const message = contactForm.querySelector(
            "textarea"
        ).value.trim();

        const whatsappMessage =
            "HOTANI PRINT STUDIO - New Inquiry\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Message: " + message;

        const url =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(url, "_blank");

    });

}


// Search Products
function searchProducts() {

    const searchTerm = prompt("Enter product name:");

    if (!searchTerm) return;

    const results = products.filter(product =>
        product.name.toLowerCase().includes(
            searchTerm.toLowerCase()
        ) ||
        product.category.toLowerCase().includes(
            searchTerm.toLowerCase()
        )
    );

    if (results.length === 0) {

        alert("No products found!");

        return;

    }

    const container = document.getElementById("product-container");

    container.innerHTML = "";

    results.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                ${product.image
                    ? `<img src="${product.image}" alt="${product.name}">`
                    : `<div class="product-placeholder">${product.name}</div>`}
            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="product-price">
                    ${product.price > 0
                        ? "Rs. " + product.price
                        : "Price on Request"}
                </div>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>
        `;

        container.appendChild(card);

    });

}


// Search Button
const searchButton = document.querySelector(".search-btn");

if (searchButton) {

    searchButton.addEventListener("click", searchProducts);

}


// Initialize Website
document.addEventListener("DOMContentLoaded", function() {

    displayProducts();

    updateCartCount();

    console.log("HOTANI PRINT STUDIO Website Loaded Successfully!");

});
