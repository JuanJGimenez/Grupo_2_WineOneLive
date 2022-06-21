let db = require('../database/models');
const bcrypt = require('bcryptjs');

let usersControllers = {

    login: function (req, res) {
        res.render('users/userLogin');
    },
    registerView: function (req, res) {
        res.render('users/userRegister');
    },
    register: function (req, res) {
        console.log(req.file)
        db.Users.create(req.body)
            .then(res.redirect('/users/login'));
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