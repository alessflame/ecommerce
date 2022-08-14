import { database } from "../../../utils/database";
import { userModel } from "../../../models/userModel.js";
import bcrypt from "bcrypt";

database();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const passwordHashed = await bcrypt.hash(req.body.password, 10);

    const newUser = { ...req.body };
    newUser.password = passwordHashed;

    try {
      const user = new userModel(newUser);
      await user.save();

      res.json({
        status: 201,
        title: "Account creato!",
        description: " Account creato con successo, esegui il login",
      });
    } catch (error) {
      res.json({ status: 400, title: "ERRORE", description: error.message });
    }
  }
}
