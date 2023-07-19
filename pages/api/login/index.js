import dbConnect from "@/db/connect";
import User from "@/db/Models/users";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const newUser = req.body;
      await User.create(newUser);
      return res.status(200).json({ status: "New user created" });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
}
