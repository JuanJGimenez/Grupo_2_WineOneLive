const fs = require('fs');
const path = require('path');
const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
        return next();
    }else if (req.cookies.user_email) {
    db.Users.findOne({
       where: {
           user_email: req.cookies.user_email
       }
   })
       .then(user => {
        req.session.userLogged = user;
        res.locals.userLogged = user;
        console.log(locals.userLogged)

        return next();
        })

    } else {
    next();
    }
}
module.exports = userLoggedMiddleware;