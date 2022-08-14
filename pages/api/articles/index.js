import { database } from "../../../utils/database";
import { articleModel } from "../../../models/articleModel.js";

database();

export default async function handler(req, res) {
     const articles = await articleModel.find();
   
     res.json(articles);
   }
   
   