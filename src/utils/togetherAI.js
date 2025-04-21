import axios from "axios";

const API_KEY = "8f40a3a594734d80919c26e3f246a018e1c9c0a65bc4fd663e631ed5f25bbdc0"; 
const API_URL = "https://api.together.xyz/v1/chat/completions";

export const getAIResponse = async (userInput) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
        messages: [
          {
            role: "system",
            content:
              "You are an AI that paraphrases user input in a natural and conversational way. Keep the meaning intact, but use casual and fluent phrasing. Return only the paraphrased sentence.",
          },
          {
            role: "user",
            content: userInput,
          },
        ],
        temperature: 0.7,
        max_tokens: 100,
      }),
    });

    const data = await response.json();
    return data.choices[0]?.message?.content || "No response from AI.";
  } catch (error) {
    console.error("AI request failed:", error);
    return "Something went wrong!";
  }
};
