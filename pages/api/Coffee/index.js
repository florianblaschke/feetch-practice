import dbConnect from "@/db/connect";
import Roast from "@/db/Models/roasts";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const roast = await Roast.find();

    if (!roast) {
      res.status(404).json({ status: "not found" });
    }

    res.status(200).json(roast);
  }
  if (req.method === "POST") {
    try {
      const newRoast = req.body;
      await Roast.create(newRoast);
      res.status(200).json({ status: "Coffee roasted" });
    } catch (error) {
      res.status(404).json({ status: error.message });
    }
  }
}
