// Middleware control de usuario logueado o no

function authMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/users/login');
    }
    next();
}

module.exports = authMiddleware;