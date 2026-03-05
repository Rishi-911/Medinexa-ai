import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const analyzePrescription = async (text) => {

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
You are a medical assistant AI.

Analyze the following prescription text and return the result strictly in JSON format.

Prescription Text:
${text}

Return JSON in this structure:

{
 "disease": "",
 "medicines": [
   {
     "name": "",
     "genericAlternative": "",
     "purpose": "",
     "estimatedCost": ""
   }
 ],
 "dietRecommendations": [],
 "healthAdvice": []
}
`;

  const result = await model.generateContent(prompt);

  const response = result.response.text();

  return response;
};