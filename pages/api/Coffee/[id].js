import dbConnect from "@/db/connect";
import Roast from "@/db/Models/roasts";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  if (req.method === "GET") {
    const roast = await Roast.findById(id);
    if (!roast) {
      res.status(400).json({ status: "Not found" });
    }
    res.status(200).json(roast);
  }
  if (req.method === "PUT") {
    const coffee = await Roast.findById(id);
    coffee.score.push(req.body);
    await coffee.save();
    return res.status(200).json({ status: "File updated" });
  }
}
