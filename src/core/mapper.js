// src/core/mapper.js
class ProductMapper {
    static toWooCommerce(pimProduct) {
        return {
            name: pimProduct.name,
            type: "simple",
            regular_price: String(pimProduct.price),
            description: pimProduct.description || "",
            sku: pimProduct.sku,
            manage_stock: true,
            attributes: pimProduct.attributes.map(attr => ({
                name: attr.label,
                visible: true,
                options: Array.isArray(attr.value) ? attr.value : [attr.value]
            }))
        };
    }
}

module.exports = ProductMapper;