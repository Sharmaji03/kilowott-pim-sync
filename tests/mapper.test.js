// tests/mapper.test.js
const ProductMapper = require('../src/core/mapper');

function runTest() {
    console.log("🧪 Running Unit Test: PIM to WooCommerce Mapping...");

    const mockPimData = {
        sku: "KILO-TEST-001",
        name: "Mechanical Keyboard",
        price: 99.99,
        description: "RGB Backlit",
        attributes: [{ label: "Color", value: "Black" }]
    };

    try {
        const result = ProductMapper.toWooCommerce(mockPimData);
        
        // Assertions (Checks)
        const isSkuCorrect = result.sku === "KILO-TEST-001";
        const isPriceString = typeof result.regular_price === "string";
        const hasAttributes = result.attributes.length > 0;

        if (isSkuCorrect && isPriceString && hasAttributes) {
            console.log("✅ TEST PASSED: Data mapped correctly!");
            console.log("Resulting Object SKU:", result.sku);
        } else {
            throw new Error("Data mismatch detected.");
        }
    } catch (error) {
        console.error("❌ TEST FAILED:", error.message);
    }
}

runTest();