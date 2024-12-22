const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../constants");
const chalk = require("chalk");

function auth(req, res, next) {
  const token = req.cookies.token;

  try {
    const verifyResult = jwt.verify(token, JWT_SECRET);

    req.user = {
      email: verifyResult.email,
    };

    next();
  } catch (e) {
    res.send(e);
  }
}

module.exports = auth;
