import Prescription from "../models/Prescription.js";
import { extractTextFromImage } from "../utils/ocrService.js";
import { analyzePrescription } from "../utils/geminiService.js";
export const uploadPrescription = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const imagePath = req.file.path;

    const extractedText = await extractTextFromImage(imagePath);

    const aiResponse = await analyzePrescription(extractedText);

    const newPrescription = await Prescription.create({
      userId: req.user.userId,
      imagePath,
      extractedText,
      aiResponse
    });

    res.status(201).json({
      message: "Prescription processed successfully",
      extractedText,
      prescription: newPrescription
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Processing failed" });
  }
};