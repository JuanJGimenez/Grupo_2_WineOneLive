// Requiero los modelos
let db = require('../database/models');

let mainControllers = {

    home: (req, res) => {
        db.Products.findAll({
            include: ['categories'],
            where: {
                recommended: 1
            }
        })
            .then((recommended) => {
                res.render('index', { recommended })
            });
    },
    users: (req, res) => {
        db.Users.findAll()
            .then((user) => {
                res.render('users', { user })
            });
    },
    products: (req, res) => {
        db.Products.findAll()
            .then((product) => {
                res.render('products', { product })
            });
    },
    prueba: (req, res) => {

        res.render('prueba')
    }
}

module.exports = mainControllers;