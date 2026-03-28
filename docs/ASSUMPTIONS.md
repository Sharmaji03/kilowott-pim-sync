# Technical Assumptions & Operational Details

### 1. Unique Identifiers
The system assumes that the **SKU (Stock Keeping Unit)** is the unique source of truth. If a SKU exists in WooCommerce, the system will perform an `update`; otherwise, it will `create`.

### 2. Attribute Handling
* **Visibility:** All mapped attributes are set to `visible: true` by default for storefront display.
* **Variations:** The current MVP handles "Simple" products. For "Variable" products, the `variation` flag in the mapper would need to be toggled based on PIM metadata.

### 3. Data Types
* **Pricing:** Prices are cast to **Strings** before being sent to the WooCommerce REST API to prevent floating-point errors during JSON serialization.
* **Categories:** The system assumes the PIM provides valid WooCommerce Category IDs.

### 4. Scalability
The `ProductMapper` is a stateless static utility, allowing it to be easily used within asynchronous batch-processing workers without side effects.