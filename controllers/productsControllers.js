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
                res.render('products/productsCreate', { categoria })
            });
    },

    create: function (req, res) {
        let nuevoProducto = req.body;
        if (req.file) {
            if (req.file.filename) {
                nuevoProducto.image = req.file.filename
            }
        }
        db.Products.create(nuevoProducto)
            .then(res.redirect('./list'));
    },

    edit: function (req, res) {
        db.Products.findByPk(req.params.id)
        .then(product => {res.render('products/product-edit', { product })});
    },

    delete: function (req,res) {
        let productId = req.params.id;
        db.Products
        .destroy({where: {product_id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/products/list')});
    },

}

module.exports = productsControllers;


