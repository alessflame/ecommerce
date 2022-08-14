import { database } from "../../../utils/database";
import { commentModel } from "../../../models/commentModel.js";
import { userModel } from "../../../models/userModel.js";
import { tokenVerify } from "../../../utils/auth";

database();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const comments = await commentModel.find({ id_item: req.query.id_item });

    let elements = [];
    console.log(elements);

    for (let index = 0; index < comments.length; index++) {
      const user = await userModel.findById(comments[index].id_user);

      elements.push({
        _id: comments[index]._id,
        name: user.username,
        content: comments[index].content,
      });
    }

    res.json(elements);
  } else if (req.method === "POST") {
    const verify = tokenVerify(req.headers);
    if (verify) {
      const { content, id_user } = req.body;
      const { id_item } = req.query;

      const comment = { content: content, id_user: id_user, id_item: id_item };
      console.log("wee", comment);

      try {
        //  const {id_item}= req.query;
        const newComment = new commentModel({
          content: content,
          id_user: id_user,
          id_item: id_item,
        });

        await newComment.save();

        res.json({ status: 201, message: "contenuto inserito con successo" });
      } catch (e) {
        res.json({ status: 400, message: "qualcosa è andato storto, riprova" });
      }
    } else {
      res.json({ status: 400, message: "errore autenticazione" });
    }
  }
}
