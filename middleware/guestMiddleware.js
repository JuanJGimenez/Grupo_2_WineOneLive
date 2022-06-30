// Middleware que verifica si el usuario ya se encuentra logueado. No puede accedera al registro o login


function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/');
    }

    next();
}

module.exports = guestMiddleware;