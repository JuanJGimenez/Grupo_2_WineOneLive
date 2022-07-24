const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');


const usersAPIController = {
    list: async (req, res) => {
        try {
            users = await db.Users.findAll({ attributes: ['user_id', 'user_first_name', 'user_last_name', 'user_email'] });
            users.forEach(element => {
                element.dataValues.detail = 'http://localhost:3000/api/users/' + element.user_id
            });
            res.json({
                count: users.length,
                users
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
            user = await db.Users.findByPk(req.params.id)
            user.dataValues.image = 'http://localhost:3000/images/' + user.image
            res.json(user)
        } catch (e) {
            res.status(500).json({
                status: 500,
                message: 'Ah ocurrido un error',
                error: e,
            });
        }
    },
    destroy: (req, res) => {
        db.Users.destroy({ where: { user_id: req.params.id }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(confirm => {
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: '/api/Users/destroy/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            url: '/api/Users/destroy/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    }

    /* ,
    create: (req,res) => {
        Clientes
        .create(
            {
                empresa: req.body.empresa,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                responsable: req.body.responsable,
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/api/clientes/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        url: '/api/clientes/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let clienteId = req.params.id;
        Clientes.update(
            {
                empresa: req.body.empresa,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                responsable: req.body.responsable,
            },
            {
                where: {id: clienteId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/api/clientes/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        url: '/api/clientes/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
   */

}

module.exports = usersAPIController;