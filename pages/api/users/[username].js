import { database } from "../../../utils/database";
import { userModel } from "../../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

database();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      const user = await userModel.findOne({ username: username });

      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          { username: user.username, _id: user._id, email: user.email },
          process.env.NEXT_PUBLIC_JWT_SECRET
        );

        console.log(token);

        res.json({
          status: 201,
          token: token,
          title: "Login effettuato!",
          description: " Login effettuato con successo, buon proseguimento",
        });
      } else {
        res.json({
          status: 400,
          title: "Riprova",
          description: "Username o password errati",
        });
      }
    } catch (error) {
      res.json({ status: 400, title: "ERRORE", description: error.message });
    }
  }
}
