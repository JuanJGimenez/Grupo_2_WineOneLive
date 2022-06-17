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
        }
    };

    let config = {
        tableName: "products",
        timestamps: false
    };



    const Product = sequelize.define(alias, cols, config);

    return Product;
}