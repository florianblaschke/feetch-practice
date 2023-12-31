import dbConnect from "@/db/connect";
import Roast from "@/db/Models/roasts";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const roast = await Roast.find();
    if (!roast) {
      res.status(400).json({ status: "Not found" });
    }
    return res.status(200).json(roast);
  }
  if (req.method === "POST") {
    try {
      const newRoast = req.body;
      await Roast.create(newRoast);
      return res.status(201).json({ status: "New Roast created" });
    } catch (er) {
      return res.status(400).json({ error: error.message });
    }
  }
}
