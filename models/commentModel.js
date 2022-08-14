import mongoose from "mongoose";

const commentSchema= new mongoose.Schema({
     id_user:{
          type: String,
          required:true,
     },
     id_item:{
          type: String,
          required:true,
     }, 
      content:{
          type: String,
          required:true,
     }
     
})


export let commentModel= mongoose.models.comment || mongoose.model("comment", commentSchema);