import dbConnect from "@/db/connect";
import Roast from "@/db/Models/roasts";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const roast = await Roast.find();

    if (!roast) {
      res.status(404).json({ status: "No coffee for you" });
    }
    res.status(200).json(roast);
  }
}
