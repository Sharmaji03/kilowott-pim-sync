// src/core/productModel.js
class PIMProduct {
    constructor({ sku, name, description, price, categories = [], attributes = [] }) {
        if (!sku || !name || !price) {
            throw new Error("Missing required product fields");
        }

        this.sku = sku;
        this.name = name;
        this.description = description || "";
        this.price = price;
        this.categories = categories;
        this.attributes = attributes;
    }
}

module.exports = PIMProduct;
