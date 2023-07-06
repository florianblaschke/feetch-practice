import dbConnect from "@/db/connect";
import Roast from "@/db/Models/roasts";

export default async function handler(req, res) {
  await dbConnect();
  const roast = await Roast.findById(req.query.id);

  if (!roast) {
    res.status(404).json({ status: "not found" });
  }

  res.status(200).json(roast);
}
