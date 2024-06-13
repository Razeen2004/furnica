const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const { User } = require("../db/index");

const userLogin = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  const tokenBreak = authorizationHeader.split(" ");
  const token = tokenBreak[1];

  try {
    const coin = jwt.verify(token, JWT_SECRET);

    const userDetails = await User.findOne({
      email: coin.email,
    });
    
    next();
  } catch (e) {
    res.json({
      message: "Cannot Authenticated",
    });
  }
};

module.exports = userLogin;