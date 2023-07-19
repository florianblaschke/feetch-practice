import dbConnect from "@/db/connect";
import User from "@/db/Models/users";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { mail: givenMail, password: givenPassword } = req.body;
    const user = await User.findOne(givenMail);
    const { password } = user;

    if (!user) {
      return res.status(400).json({ status: "User does not exist" });
    }

    if (givenPassword === password) {
      return res.status(200).json(user);
    } else if (givenPassword !== password) {
      return res.status(406).json({ status: "Try again" });
    }
  }
}
