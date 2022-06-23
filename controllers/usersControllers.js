var express = require('express');
let db = require('../database/models');
const bcrypt = require('bcryptjs');
const path = require("path")
const multer = require("multer")
const { validationResult } = require("express-validator");
// const { where } = require('sequelize/types');

let usersControllers = {

    login: function (req, res) {
        res.render('users/userLogin');
    },
    processLogin: (req, res) => {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('users/userLogin', {
                errors: resultValidation.mapped(),
            });
        }


        // Buscar usuario por email
        let { email, password } = req.body;
        console.log(req.body.remember + " aca");

        db.Users.findOne({
            where: {
                user_email: email
            }
        })
            .then(user => {
                if (!user) {
                    res.redirect('./register');
                } else {
                    if (bcrypt.compareSync(password, user.user_password)) {
                        // Setear en session el ID del usuario
                        req.session.user = user;
                        res.redirect("/");
                        // Setear la cookie
                        if (req.body.remember) {
                            res.cookie('email', user.user_email, {maxAge: 1000 * 60 * 60 * 24});
                        }
                        res.send("ok")
                    } else {
                        res.send("pass invalido")
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
        // Setear en session el ID del usuario nuevo para auto loguearlo
		req.session.userId = req.body.user_id;
		// Setear la cookie para mantener al usuario logueado
		res.cookie('userCookie', req.body.user_id, { maxAge: 60000 * 60 });
        db.Users.create(nuevoUsuario)
            .then(res.render('users/userLogin', { nuevoUsuario }));
    },
    userDetail: function (req, res) {
        db.Users.findByPk(req.params.id)
            .then(User => {
                res.render("./users/user-detail", { User });
            });
    },
    list: function (req, res) {
        db.Users.findAll()
            .then(function (user) {
                res.render('users/usersList', { user })
            });
    }
}

module.exports = usersControllers;