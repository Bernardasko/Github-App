export async function ensureAuthenticate(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } 
    res.redirect(process.env.CLIENT_BASE_URL + "/login");
}