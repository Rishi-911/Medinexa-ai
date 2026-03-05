import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    imagePath: String,
    extractedText: String,
    aiResponse: Object
  },
  { timestamps: true }
);

export default mongoose.model("Prescription", prescriptionSchema);