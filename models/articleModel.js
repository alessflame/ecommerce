import mongoose from "mongoose";

const articleSchema= new mongoose.Schema({
     title:{
          type: String,
          required:true,
          unique:true,
     },

     image:{
          type: String,
          required:true,
     },

     description:{
          type: String,
          required:true,
     },

     category:{
          type: String,
          required:true,
     },



})


export let articleModel= mongoose.models.article || mongoose.model("article", articleSchema);