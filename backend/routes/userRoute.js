const express = require("express");
const jwt = require("jsonwebtoken");
const z = require("zod");
const bcrypt = require("bcrypt");
const { User } = require("../db/index");
const userRouter = express.Router();
const JWT_SECRET = require('../config');

const user = z.object({
  name: z.string().min(6),
  email: z.string().email(),
  password: z.string(),
});

console.log(JWT_SECRET);

userRouter.post("/signup", async (req, res) => {
  const result = await user.safeParse(req.body);
  //   res.json(result)
//   if (result.success) {
//     const hashPass = await bcrypt.hash(result.data.password, 10);

//     const userDetails = await User.create({
//       email: result.data.email,
//       name: result.data.name,
//       password: hashPass,
//     });

//     jwt.sign()

//     res.json({
//       message: "The user is created",
//     });
//   } else {
//     res.json({
//       message: "Invalid Credintials",
//     });
//   }

});

userRouter.post("signin", async (req, res) => {

});

module.exports = userRouter;
