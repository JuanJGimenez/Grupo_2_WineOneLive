let db = require("../database/models");

let productsControllers = {

    list: function (req, res) {
        db.Products.findAll()
            .then(function (product) {
                res.render("products/productsList", { product })
            })
    },

    create: function (req, res) {
        res.render("products/productsCreate")
    },

    detalleProducto: function (req, res) {

        let recomendado = []

        db.Products.findAll({
            where: {
                recommended: 1
            }
        })
            .then(function (product) {
                recomendado = product
            })


        db.Products.findByPk(req.params.id)
            .then(Product => {
                console.log(recomendado)
                res.render("./products/product-detail", { Product: Product, recommended: recomendado });
            });



    },
<<<<<<< HEAD
    
=======
    detalleProducto: function (req, res) {

        let recomendado = []

        db.Products.findAll({
            where: {
                recommended: 1
            }
        })
            .then(function (product) {
                recomendado = product
            })


        db.Products.findByPk(req.params.id)
            .then(Product => {
                console.log(recomendado)
                res.render("./products/product-detail", { Product: Product, recommended: recomendado });
            });



    },
>>>>>>> 2aec0499b519b53aa15ed0791a1c1c16dbdb74e3
    vinos: function (req, res) {


        db.Products.findAll({
            where: {
                category_id: 1
            }
        })
            .then(function (product) {
                res.render("./products/vinos", { product });
            })

    },
    cervezas: function (req, res) {


        db.Products.findAll({
            where: {
                category_id: 2
            }
        })
            .then(function (product) {
                res.render("./products/cervezas", { product });
            })

    },
    whiskys: function (req, res) {


        db.Products.findAll({
            where: {
                category_id: 3
            }
        })
            .then(function (product) {
                res.render("./products/whiskys", { product });
            })

    },
    espumantes: function (req, res) {


        db.Products.findAll({
            where: {
                category_id: 4
            }
        })
            .then(function (product) {
                res.render("./products/espumantes", { product });
            })

    },

}

module.exports = productsControllers;


