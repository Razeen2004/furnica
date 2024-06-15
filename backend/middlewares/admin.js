const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const { Admin } = require("../db/index");

const adminLogin = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  const tokenBreak = authorizationHeader.split(" ");
  const token = tokenBreak[1];

  try {
    const coin = jwt.verify(token, JWT_SECRET);

    const userDetails = await Admin.findOne({
      email: coin.email,
    });
    
    next();
  } catch (e) {
    res.json({
      message: "Cannot Authenticated",
    });
  }
};

module.exports = adminLogin;