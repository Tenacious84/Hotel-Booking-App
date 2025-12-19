

const token = req.headers.authorization
if (!token) return res.status(403).json("Access Denied!")