import axios from "axios";

const API_KEY = ""; 
const API_URL = "https://api.together.xyz/v1/chat/completions";

export const getAIResponse = async (userInput) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "mistral-7b-instruct", // AI model
        messages: [{ role: "user", content: userInput }],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Together AI Error:", error);
    return "Error: Unable to generate text";
  }
};
