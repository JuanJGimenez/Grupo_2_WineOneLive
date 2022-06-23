/* function userCookieMiddleware (req, res, next) {
	res.locals.isLogged = false;

	if (req.cookies.userCookie || req.session.user) {		
		req.session.userId = req.cookies.userCookie ? req.cookies.userCookie : req.session.userId;
		res.locals.isLogged = true;
	}

	next();
}

module.exports = userCookieMiddleware; */

//**Middleware controlo el acceso del usuario usando Sequelize**/

const fs = require('fs');
const path = require('path');

//------- Sequelize ----------------//

const { User} = require('../database/models');


module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.usuario = false;
    
    if(req.session.usuario){
        console.log(req.session.usuario.user_first_name + req.session.usuario.email);
        res.locals.usuario = req.session.usuario;
        return next();
    }else if(req.cookies.email){
        User.findOne({
            where: {
				user_email: req.cookies.email
            }
        })
        .then(user =>{
            req.session.usuario = user;
            res.locals.usuario = user;
            
            return next();
    
        })
                
    }else{
        return next();
    }
}