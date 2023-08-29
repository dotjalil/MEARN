const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.headers["access-token"];
  if (!token) { return res.status(403).send(`Token is required`) }
  try {
    jwt.verify(token, config.TOKEN_KEY);
    return next();
  } catch (error) {
    return next(error)
  }
}

module.exports = verifyToken;