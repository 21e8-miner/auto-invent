import axios from 'axios';
import { OPENAI_API_KEY } from '../constants/secrets'; // We will reuse this var for HF Token to keep secrets.js simple
import { cleanJSON } from '../utils/jsonHelper';

// Using Mistral 7B Instruct v0.3 via Hugging Face Inference API
const MODEL_ID = "mistralai/Mistral-7B-Instruct-v0.3";
const API_URL = `https://api-inference.huggingface.co/models/${MODEL_ID}`;

const SYSTEM_PROMPT = `
You are an expert Production Engineer. Analyze the user's product description.
You MUST reply with VALID JSON only. Do not add markdown blocks. Do not explain.

Required JSON Structure:
{
  "summary": {
    "title": "Short Title",
    "highlights": ["Insight 1", "Insight 2", "Insight 3"]
  },
  "functions": [
    { "name": "Function Name", "type": "Primary" }
  ],
  "failures": [
    { "part": "Part Name", "risk": "High", "note": "Reason" }
  ],
  "improvements": [
    { "title": "Idea", "impact": "High", "difficulty": "Hard", "cost": "+" }
  ],
  "concepts": [
    { "name": "Concept Name", "desc": "Visual description" }
  ]
}
`;

export const analyzeProduct = async (description, photoBase64 = null) => {
  try {
    const prompt = `[INST] ${SYSTEM_PROMPT}\n\nProduct Description: ${description} [/INST]`;

    console.log("🧠 Sending request to Hugging Face (" + MODEL_ID + ")...");

    // Note: HF Inference API is rate limited. 
    const response = await axios.post(API_URL, {
      inputs: prompt,
      parameters: {
        max_new_tokens: 1500,
        return_full_text: false,
        temperature: 0.7,
      }
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`, // Using the variable from secrets.js (User should paste HF token here)
        'Content-Type': 'application/json'
      }
    });

    let resultText = response.data[0].generated_text;
    console.log("Raw AI Response:", resultText.substring(0, 100) + "...");

    // Clean and Parse
    const jsonStr = cleanJSON(resultText);
    const parsed = JSON.parse(jsonStr);

    return parsed;

  } catch (error) {
    console.error("AI Error:", error.response?.data || error.message);
    // If parsing failed (common with local LLMs), throw specific error
    if (error instanceof SyntaxError) {
      console.error("Failed to parse JSON from AI");
    }
    throw error;
  }
};
