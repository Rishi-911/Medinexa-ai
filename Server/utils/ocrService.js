import Tesseract from "tesseract.js";

export const extractTextFromImage = async (imagePath) => {
  try {
    const result = await Tesseract.recognize(
      imagePath,
      "eng",
      { logger: m => console.log(m) }
    );

    return result.data.text;

  } catch (error) {
    console.error("OCR Error:", error);
    throw new Error("Failed to extract text");
  }
};