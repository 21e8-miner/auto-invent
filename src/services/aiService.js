import axios from 'axios';
import { OPENAI_API_KEY } from '../constants/secrets';

const API_URL = 'https://api.openai.com/v1/chat/completions';

const SYSTEM_PROMPT = `
You are an expert Senior Product Design Engineer and Patent Strategy Consultant.
Your goal is to analyze a product description or image prompt and output a structured "Innovation Report".
Focus on:
1. Identifying hidden constraints and functions.
2. Predicting likely failure modes (mechanical, electrical, UX).
3. Proposing concrete, actionable improvements.
4. Suggesting cost optimization (manufacturing methods).
5. Heuristic patentability (what makes this novel).
6. Visual concept variants for redesign.

Return ONLY valid JSON with this structure:
{
  "summary": {
    "title": "Short Project Title",
    "highlights": ["Key insight 1", "Key insight 2", "Key insight 3"]
  },
  "functions": [
    { "name": "Function Name", "type": "Primary" | "Secondary" | "Hidden Constraint" }
  ],
  "failures": [
    { "part": "Part Name", "risk": "High" | "Medium" | "Low", "note": "Why it fails" }
  ],
  "improvements": [
    { "title": "Improvement Title", "impact": "High" | "Medium", "difficulty": "Easy" | "Medium" | "Hard", "cost": "+" | "-" | "=" }
  ],
  "concepts": [
    { "name": "Variant Name", "desc": "Visual description for DALL-E prompt" }
  ]
}
`;

export const analyzeProduct = async (description, photoBase64 = null) => {
    try {
        const messages = [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: `Product Description: ${description}` }
        ];

        // TODO: If photoBase64 exists, add image support for GPT-4-Vision here

        console.log("🧠 Sending request to OpenAI...");
        const response = await axios.post(API_URL, {
            model: "gpt-4o",
            messages: messages,
            response_format: { type: "json_object" }, // Force JSON
            temperature: 0.7,
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const result = response.data.choices[0].message.content;
        const parsed = JSON.parse(result);
        return parsed;

    } catch (error) {
        console.error("AI Error:", error.response?.data || error.message);
        throw error;
    }
};
