import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
     name:{
          type: String,
          required:true,
     },

     category:{
          type: String,
          required:true,
     },

     price:{
          type: Number,
          required:true,
     },
     features:{
          type:Array,
          required:true,
     }
})


export let productModel= mongoose.models.product || mongoose.model("product", productSchema);