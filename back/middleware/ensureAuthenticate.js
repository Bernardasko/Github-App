export async function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } 
    return res.status(401).json({ error: "Unauthorized" });
}