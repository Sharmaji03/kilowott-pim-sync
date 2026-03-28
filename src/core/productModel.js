// src/core/productModel.js
class PIMProduct {
    constructor({ sku, name, description, price, categories = [], attributes = [] }) {
        this.sku = sku;
        this.name = name;
        this.description = description;
        this.price = price;
        this.categories = categories; 
        this.attributes = attributes; // e.g., [{ label: "Color", value: "Space Grey" }]
    }
}

module.exports = PIMProduct;