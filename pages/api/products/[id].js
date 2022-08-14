
import { database } from "../../../utils/database"
import {productModel} from "../../../models/productModel.js";

database();

export default async function handler(req, res) {
  const products = await productModel.findById(req.query.id);

  res.json(products);
}