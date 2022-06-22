var express = require('express');
let db = require('../database/models');
const bcrypt = require('bcryptjs');
const path = require("path")
const multer = require("multer")
const { validationResult } = require("express-validator");

let usersControllers = {

    login: function (req, res) {
        res.render('users/userLogin');
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
            db.Users.create(nuevoUsuario)
            .then(res.render('users/userLogin', {nuevoUsuario}));
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