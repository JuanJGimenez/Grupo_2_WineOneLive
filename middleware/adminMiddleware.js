// Middleware control de acceso a rutas sensibles solo para usuario rol admin

function adminMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/');
    } else {
        if (req.session.userLogged.admin != 1) {
            return res.redirect('/');
        }
    }
    next();
}

module.exports = adminMiddleware;