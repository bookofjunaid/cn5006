let mongoose= require('mongoose')
const BookScheme= new mongoose.Schema({
 booktitle:{
    e:String,
 required:true
 },
 PubYear:Number,
 author:String,
 Topic:String,
 formate:String
 })
 module.exports= mongoose.model('bookmodel',BookScheme,'BookCollection2') 