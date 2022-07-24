const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const { categories } = require('../productsControllers');

const productsAPIControllers = {
    list: async (req, res) => {
        try {
            products = await db.Products.findAll({ attributes: ['product_id', 'product_name', 'product_description', 'image', 'price', 'quantity_stock'], include: ['categories'] });
            categorias = await db.Categories.findAll();
            products.forEach(element => {
                element.dataValues.detail = 'http://localhost:3000/api/products/' + element.product_id
                element.dataValues.image = 'http://localhost:3000/images/' + element.image
            });
            res.json({
                count: products.length,
                products,
                countCat: categorias.length,
                categorias: categorias
            });
        } catch (e) {
            res.status(500).json({
                status: 500,
                message: 'Ah ocurrido un error',
                error: e,
            });
        }
    },
    detail: async (req, res) => {
        try {
            product = await db.Products.findByPk(req.params.id, { include: ['categories'] })
            product.dataValues.image = 'http://localhost:3000/images/' + product.image
            res.json(product)
        } catch (e) {
            res.status(500).json({
                status: 500,
                message: 'Ah ocurrido un error',
                error: e,
            });
        }
    },
    destroy: (req, res) => {
        db.Products.destroy({ where: { product_id: req.params.id }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(confirm => {
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: '/api/clientes/destroy/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            url: '/api/clientes/destroy/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },
    category: async (req, res) => {
        try {
            products = await db.Products.findAll({
                attributes: ['product_id', 'product_name', 'product_description', 'image', 'price', 'quantity_stock'], include: ['categories'],
                where: {
                    category_id: req.params.id
                }
            });
            categorias = await db.Categories.findAll();
            products.forEach(element => {
                element.dataValues.detail = 'http://localhost:3000/api/products/' + element.product_id
                element.dataValues.image = 'http://localhost:3000/images/' + element.image
            });
            res.json({
                count: products.length,
                products,
                countCat: categorias.length,
                categorias: categorias
            });
        } catch (e) {
            res.status(500).json({
                status: 500,
                message: 'Ah ocurrido un error',
                error: e,
            });
        }
    },
    search: async (req, res) => {
        try {
            let product_search = req.params.id;
            console.log(product_search)
            search = await db.Products.findAll({
                where: {
                    product_name: {
                        [Op.like]: '%' + product_search + '%'
                    }
                }
            });
            res.json({
                search
            });
        } catch (e) {
            res.status(500).json({
                status: 500,
                message: 'Ah ocurrido un error',
                error: e,
            });
        }
    }
}

module.exports = productsAPIControllers;