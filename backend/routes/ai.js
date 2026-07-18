const express = require("express");
const { GoogleGenAI } = require("@google/genai");


const router = express.Router();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});



router.post("/travel-plan", async (req, res) => {
  try {
    if (!req.body || !req.body.query) {
  return res.status(400).json({
    error: "Please provide a query.",
  });
}

const { query } = req.body;

const prompt = `
You are an expert eco-tourism travel planner.

Based on the user's request:

"${query}"

Create a travel plan using this exact Markdown format.

# 🌄 Destination

# 🏡 Recommended Stay

# 🎯 Activities

# 💰 Estimated Budget

# 🎒 Packing List

# 🌱 Sustainable Travel Tips

Keep it concise, practical and attractive.
`;
const result = await ai.models.generateContent({
  model: "gemini-flash-latest",
  contents: prompt,
});


    res.json({
      reply: result.text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "AI service unavailable."
    });
  }
});
module.exports = router;