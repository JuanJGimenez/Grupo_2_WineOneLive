let db = require('../database/models');

let productsControllers = {

    list: function (req, res) {
        db.Products.findAll()
            .then(function (product) {
                res.render('products/productsList', { product })
            });
    },

    detail: function (req, res) {
        let recommended = [];
        db.Products.findAll({
            where: {
                recommended: 1
            }
        })
            .then(function (recomendado) {
                recommended = recomendado
            });
        db.Products.findByPk(req.params.id)
            .then(product => {
                res.render('./products/product-detail', { product, recommended });
            });
    },

    categories: (req, res) => {
        console.log(req.body.category)
        db.Products.findAll({
            include: ['categories'],
            where: {
                category_id: req.body.category
            }
        })
            .then(product => {
                console.log(product[1].categories[0])
                res.render('./products/categories.ejs', { product })
            });
    },

    add: function (req, res) {
        db.Categories.findAll()
            .then(categoria => {
                res.render('products/productsCreate', {categoria})});
    },

    create: function (req, res) {
        let nuevoProducto = req.body
        console.log(nuevoProducto)
        db.Products.create(nuevoProducto)
       
        .then(res.redirect('./list'));
    }

}

module.exports = productsControllers;


