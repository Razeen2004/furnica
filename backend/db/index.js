import mongoose from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/furnica');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String, 
  password: String,
});
const adminSchema = new Schema({
    name: String, 
    password: String,
});
const productSchema = new Schema({
    title: String, 
    description: String,
  });
