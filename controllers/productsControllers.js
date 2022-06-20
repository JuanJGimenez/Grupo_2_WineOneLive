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
                res.render("./products/product-detail", {Product: Product, recommended: recomendado });
            });
               
                
            
           },
      
}

module.exports = productsControllers;


