// src/core/mapper.js
class ProductMapper {
    static toWooCommerce(pimProduct) {
        const categories = Array.isArray(pimProduct.categories)
            ? pimProduct.categories.map(cat => (typeof cat === 'object' && cat.id ? { id: cat.id } : { name: String(cat) }))
            : [];

        const attributes = Array.isArray(pimProduct.attributes)
            ? pimProduct.attributes.map(attr => {
                const value = attr.value === undefined || attr.value === null ? [] : attr.value;
                return {
                    name: attr.label,
                    visible: true,
                    variation: false,
                    options: Array.isArray(value) ? value : [String(value)]
                };
            })
            : [];

        return {
            name: pimProduct.name,
            type: "simple",
            regular_price: String(pimProduct.price),
            description: pimProduct.description || '',
            sku: pimProduct.sku,
            manage_stock: true,
            categories,
            attributes
        };
    }
}

module.exports = ProductMapper;
