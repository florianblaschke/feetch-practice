import dbConnect from "@/db/connect";
import Roast from "@/db/Models/roasts";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const roast = await Roast.findById(id);

    if (!roast) {
      res.status(404).json({ status: "not found" });
    }

    return res.status(200).json(roast);
  }
}
