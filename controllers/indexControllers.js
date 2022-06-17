let db = require("../database/models");

let mainControllers = {

    home: function (req, res) {
        res.render("index")
    },

    users: function (req, res) {
        db.Users.findAll()
            .then(function (user) {
                res.render("users", { user })
            })
    },

    products: function (req, res) {
        db.Products.findAll()
            .then(function (product) {
                res.render("products", { product })
            })
    },
}


module.exports = mainControllers