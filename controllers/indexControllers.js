let db = require("../database/models");

let mainControllers = {

    home: function (req, res) {
        console.log(req.session)
        db.Products.findAll({
            where: {
                recommended: 1
            }
        })
            .then(function (recommended) {
                res.render("index", { recommended })
            });
    },

    users: function (req, res) {
        db.Users.findAll()
            .then(function (user) {
                res.render("users", { user })
            });
    },

    products: function (req, res) {
        db.Products.findAll()
            .then(function (product) {
                res.render("products", { product })
            });
    },
    prueba: function (req, res) {
   
                res.render("prueba")
            }
}

module.exports = mainControllers;