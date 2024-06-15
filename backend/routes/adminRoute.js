const express = require("express");
const jwt = require("jsonwebtoken");
const z = require("zod");
const bcrypt = require("bcrypt");
const { Admin, Product } = require("../db/index");
const Router = express.Router();
const JWT_SECRET = require("../config");
const adminLogin = require('../middlewares/admin');

const admin = z.object({
  name: z.string().min(6),
  email: z.string().email(),
  password: z.string(),
});


Router.post("/signup", async (req, res) => {
    const result = await admin.safeParse(req.body);
  
    if (result.success) {
      const hashPass = await bcrypt.hash(result.data.password, 10);
  
      const userDetails = await Admin.create({
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
      const userDetails = await Admin.findOne({
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

  Router.post('/create', adminLogin , async (req, res)=> {
    const body = req.body;

    try{
      const productDetail = await Product.create({
        productName: body.productName,
        productDes: body.productDes,
        productPrice: body.productPrice,
        productImage: body.productImage,
        productSale: body.productSale,
        productCategory: body.productCategory,
        productAbout: body.productAbout,
        productFnPrice: body.productFnPrice,
        productImages: body.productImages[{
          product1: body.productImages.product1,
          product2: body.productImages.product2,
          product3: body.productImages.product3,
          product4: body.productImages.product4
        }]
      });

      res.json({
        message: "Product Created Successfully"
      })
    }catch(e){
      console.log(e);
      res.json({
        message: "Unknown Error Occured"
      })
    }
  });
  
  module.exports = Router;