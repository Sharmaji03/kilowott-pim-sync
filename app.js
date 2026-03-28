// app.js
const ProductMapper = require('./src/core/mapper');
const PIMProduct = require('./src/core/productModel');

console.log("--- Kilowott PIM Integration Demo ---");

// 1. Create a PIM Product instance
const myProduct = new PIMProduct({
    sku: "KILO-2026-WIN",
    name: "Agentic AI Controller",
    price: 299.00,
    description: "Advanced hardware for AI orchestration.",
    attributes: [
        { label: "Interface", value: "USB-C" },
        { label: "OS Compatibility", value: ["Windows", "macOS", "Linux"] }
    ]
});

// 2. Transform it
console.log("Transforming PIM Data...");
const wooData = ProductMapper.toWooCommerce(myProduct);

// 3. Display the result
console.log("Ready for WooCommerce API:");
console.log(JSON.stringify(wooData, null, 2));