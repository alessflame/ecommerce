import { database } from "../../../utils/database";
import { articleModel } from "../../../models/articleModel.js";

database();

export default async function handler(req, res) {
  const article = await articleModel.findById(req.query.id);

  res.json(article);
}
