let db = require('../database/models');
const bcrypt = require('bcryptjs');

let usersControllers = {

    login: function (req, res) {
        res.render('users/userLogin');
    },

    registerView: function(req, res) {
        res.render('users/userRegister');
    },
    register: function(req, res) {
        db.Users.create(req.body)
        .then(res.redirect('/users/login'));            
    },
    list: function (req, res) {
        db.Users.findAll()
            .then(function (user) {
                res.render('users/usersList', { user })
            })
        }
}

module.exports = usersControllers;