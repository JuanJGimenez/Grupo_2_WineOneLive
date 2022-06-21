module.exports = (sequelize, dataTypes) => {

    let alias = "Categories";

    let cols = {

        category_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: "categories",
        timestamps: false
    };

    const Categories = sequelize.define(alias, cols, config);

     Categories.associate = function (models) {
        Categories.hasMany(models.Products, {
            as: "products",
            foreignKey: "category_id"
        })
    } 

    return Categories;
}