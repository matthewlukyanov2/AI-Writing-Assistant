import axios from "axios";

const API_KEY = "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"; 
const API_URL = "https://api.openai.com/v1/chat/completions";

// Function to add a delay before making an API request
//const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getAIResponse = async (userInput) => {
    //await delay(5000); // Wait 5 seconds before making a request
    try {
      const response = await axios.post(API_URL, {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userInput }]
      }, {
        headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" }
      });
      console.log("Hello Sunshine");
      return response.data.choices[0].message.content;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        return "Too many requests. Please wait and try again.";
      }
    console.error("OpenAI API Error:", error);
    return "Error: Unable to generate text";
  }
};
