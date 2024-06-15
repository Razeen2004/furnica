const express = require("express");
const jwt = require("jsonwebtoken");
const z = require("zod");
const bcrypt = require("bcrypt");
const { User } = require("../db/index");
const Router = express.Router();
const JWT_SECRET = require("../config");
const userLogin = require("../middlewares/user");

const user = z.object({
  name: z.string().min(6),
  email: z.string().email(),
  password: z.string(),
});

Router.post("/signup", async (req, res) => {
  const result = await user.safeParse(req.body);

  if (result.success) {
    const hashPass = await bcrypt.hash(result.data.password, 10);

    const userDetails = await User.create({
      email: result.data.email,
      name: result.data.name,
      password: hashPass,
    });

    const token = await jwt.sign(
      { name: userDetails.name, email: userDetails.email },
      JWT_SECRET
    );
    const fnftoken = "Bearer " + token;

    res.json({
      token: fnftoken,
    });
  } else {
    res.json({
      message: "Invalid Credintials",
    });
  }
});

Router.post("/signin", async (req, res) => {
  const body = req.body;

  try {
    const userDetails = await User.findOne({
      email: body.email,
    });
    const match = await bcrypt.compare(body.password , userDetails.password)
    if (match) {
      const token = await jwt.sign(
        { name: userDetails.name, email: userDetails.email },
        JWT_SECRET
      );
      const fnftoken = "Bearer " + token;
      res.json({
        token: fnftoken
      });
    } else {
      res.json({
        message: "Cannot Login Incorrect Password",
      });
    }
  } catch (e) {
    res.json({
      message: "Incorrect Password",
    });
  }
});

module.exports = Router;