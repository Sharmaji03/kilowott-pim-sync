const express = require('express');
const path = require('path');
const ProductMapper = require('./src/core/mapper');
const PIMProduct = require('./src/core/productModel');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// --- PART 1: TERMINAL DEMO ---
console.log("--- 🛠️ Kilowott PIM Integration Demo ---");

const terminalDemoProduct = new PIMProduct({
    sku: "KILO-2026-WIN",
    name: "Agentic AI Controller",
    price: 299.00,
    description: "Advanced hardware for AI orchestration.",
    attributes: [
        { label: "Interface", value: "USB-C" },
        { label: "OS Compatibility", value: ["Windows", "macOS", "Linux"] }
    ]
});

console.log("Transforming PIM Data for Terminal...");
const wooData = ProductMapper.toWooCommerce(terminalDemoProduct);
console.log("Ready for WooCommerce API (Preview):", JSON.stringify(wooData, null, 2));


// --- PART 2: WEB SERVER & API ---

// Serve static files from the 'public' folder
app.use(express.static('public'));

/**
 * Endpoint for the Frontend Dashboard to get a preview
 */
app.get('/api/sync-preview', (req, res) => {
    const mockProduct = new PIMProduct({
        sku: "KILO-WOTT-2026",
        name: "Enterprise PIM Sync Module",
        price: 499.99,
        description: "High-performance data synchronization hardware.",
        categories: [101, 202],
        attributes: [
            { label: "Connectivity", value: "Fiber-Optic" },
            { label: "Supported OS", value: ["Windows", "Linux", "macOS"] }
        ]
    });

    const transformed = ProductMapper.toWooCommerce(mockProduct);
    res.json({ source: mockProduct, result: transformed });
});

/**
 * Main Sync Endpoint for the Frontend "Execute Sync" button
 */
app.post('/api/sync-to-woo', (req, res) => {
    const productData = req.body;
    
    console.log("\n--- 🔄 WooCommerce API Sync Initiated ---");
    console.log("Payload Received:", JSON.stringify(productData, null, 2));

    // Simulation of a successful API response (HTTP 201 Created)
    setTimeout(() => {
        console.log(`✅ Success: Product ${productData.sku} synced.`);
        res.status(201).json({
            id: Math.floor(Math.random() * 1000),
            message: "Product synced to WooCommerce successfully",
            data: productData
        });
    }, 1500);
});

// Start the server
app.listen(PORT, () => {
    console.log(`\n--- 🚀 Kilowott PIM Dashboard Live ---`);
    console.log(`View your project at: http://localhost:3000`);
    console.log(`Press Ctrl+C to stop the server\n`);
});
