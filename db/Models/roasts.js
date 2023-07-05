import mongoose from "mongoose";

const { Schema } = mongoose;

const roastSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  ratioA: { type: Number, required: true },
  ratioB: { type: Number, required: true },
});

const Roast = mongoose.models.Roasts || mongoose.model("Roasts", roastSchema);

export default Roast;
