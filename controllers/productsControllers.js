let db = require("../database/models");

let productsControllers = {

    list: function (req, res) {
        db.Products.findAll()
            .then(function (product) {
                res.render("products/productsList", { product })
            })
        },
        create: function(req, res) {
            res.render("products/productsCreate")
            }
}

module.exports = productsControllers;