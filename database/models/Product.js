module.exports = (sequelize, dataTypes) => {

    let alias = "Products";

    let cols = {

        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: dataTypes.STRING
        },
        product_description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DECIMAL
        },
        image: {
            type: dataTypes.STRING
        },
        quantity_stock: {
            type: dataTypes.SMALLINT
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        recommended: {
            type: dataTypes.TINYINT
        }
    };

    let config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "category_id"
        });
    }

    return Product;
}