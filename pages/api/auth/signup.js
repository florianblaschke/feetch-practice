import dbConnect from "@/db/connect";
import User from "@/db/Models/users";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Dont have form data" });
    const { mail, password } = req.body;

    const checkDuplicate = await User.findOne({ mail });
    if (checkDuplicate)
      return res.status(422).json({ message: "User already exists" });

    const hashedPassword = hash(password, 12);

    try {
      User.create(mail, hashedPassword);
      res.status(201).json({ status: true });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  } else {
    res.status(500).json({ message: "HTTP Method not vaild!" });
  }
}
