//Aquí requiero la Base  de Datos.
let db = require('../database/models');

const bcrypt = require('bcryptjs');
const path = require("path")
const multer = require("multer")
const { validationResult } = require("express-validator");
const session = require('express-session');


let usersControllers = {

    login: function (req, res) {
        res.render('users/userLogin');
    },
    processLogin: (req, res) => {
        // Buscar usuario por email
        let email = req.body.user_email;
        let password = req.body.user_password;

        db.Users.findOne({
            where: {
                user_email: email
            }
        })
            .then(user => {
                if (!user) {
                    // Pasamos el error a la vista
                    return res.render('users/userLogin', { errors: { user_email: { msg: "El mail no se encuentra registrado" } } });
                } else {
                    if (bcrypt.compareSync(password, user.user_password)) {
                        // Setear session
                        delete user.user_password;
                        req.session.userLogged = user;
                        // Set cookie user
                        if (req.body.remember_user) {
                            res.cookie('user_email', req.body.user_email, { maxAge: 300000 });
                        }
                        res.redirect("/");
                    } else {
                        // Pasamos el error a la vista
                        return res.render('users/userLogin', { errors: { user_password: { msg: "La contraseña no es correcta" } } });
                    }
                }
            });
    },
    registerView: function (req, res) {
        res.render('users/userRegister');
    },
    register: function (req, res) {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('users/userRegister', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        let nuevoUsuario = (req.body);
        nuevoUsuario.image = req.file.filename;
        nuevoUsuario.user_password = bcrypt.hashSync(req.body.user_password, 10);
        db.Users.create(nuevoUsuario)
            .then(res.render('users/userLogin', { nuevoUsuario }));
    },
    userDetail: function (req, res) {
        db.Users.findByPk(req.params.id)
            .then(user => {
                res.render('./users/user-detail', { user });
            });
    },
    userEdit: function (req, res) {
        db.Users.findByPk(req.params.id)
            .then(user => {
                res.render('./users/user-edit', { user });
            });
    },
    userUpdate: function (req, res) {
        let updateUser = req.body;
        updateUser.user_password = bcrypt.hashSync(req.body.user_password, 10);
        if (req.file) {
            if (req.file.filename) {
                updateUser.image = req.file.filename;
            }
        }
        db.Users.update(updateUser,
            {
                where: { user_id: updateUser.user_id }
            })
            .then(res.redirect('/'));
    },

    delete: function (req, res) {
        db.Users
            .destroy({ where: { user_id: req.params.id }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(res.redirect('/users/list'));

    },
    list: function (req, res) {
        db.Users.findAll()
            .then(function (user) {
                res.render('./users/usersList', { user })
            });
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = usersControllers;