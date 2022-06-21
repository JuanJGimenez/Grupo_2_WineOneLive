let db = require('../database/models');

let productsControllers = {

    list: function (req, res) {
        db.Products.findAll()
            .then(function (product) {
                res.render('products/productsList', { product })
            });
    },

    detail: function (req, res) {
        db.Products.findByPk(req.params.id)
            .then(product => {
                res.render('./products/product-detail', { product });
            });
    },

    categories: (req, res) => {
        console.log(req.body.category)
        db.Products.findAll({
            where: {
                category_id: req.body.category
            }
        })
            .then(product => {
                res.render('./products/categories.ejs', { product })
            });
    },

    add: function (req, res) {
        db.Categories.findAll({
            
        })
        res.render('products/productsCreate');
    },

    create: function (req, res) {
        db.Products.create(req.body)
        .then(res.render('products/productsCreate'));
    }

}

module.exports = productsControllers;


