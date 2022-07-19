const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const usersAPIController = {
    list: (req, res) => {
        db.Users.findAll({ attributes: ['user_id', 'user_email']})
        .then(users => {
            console.log(users)
            let respuesta = users
            
                res.json(respuesta);
                
            })
    },
    detail: (req, res) => {
        db.Users.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/users/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    }/* ,
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
    destroy: (req,res) => {
        let clienteId = req.params.id;
        Clientes
        .destroy({where: {id: clienteId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/api/clientes/destroy/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        url: '/api/clientes/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    } */
    
}

module.exports = usersAPIController;