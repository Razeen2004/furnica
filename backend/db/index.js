const mongoose =  require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb+srv://razeen:<Bestwishes1>@cluster.bsqjsaa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster');

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});


const adminSchema = new Schema({
    name: String, 
    email: String,
    password: String,
});


const productSchema = new Schema({
    productName: String,
    productDes: String,
    productPrice: String,
    productImage: String,
    productSale: Number,
    productCategory: String,
    productAbout: String,
    productFnPrice: String,
    productImages: [
      {
        product1: String,
        product2: String,
        product3: String,
        product4: String,
      }
    ]
  });

  const Product = new mongoose.model('Product', productSchema);
  const Admin = new mongoose.model('Admin', adminSchema);
  const User = new mongoose.model('User', userSchema);

module.exports = {Product , Admin , User}