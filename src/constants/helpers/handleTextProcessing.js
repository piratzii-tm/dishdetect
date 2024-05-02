import OpenAI from "openai";
import { openai as constants } from "../../constants/openai/openai";

export const handleTextProcessing = async ({ dish }) => {
  const apiKey = constants.apiKey();
  const openai = new OpenAI({
    apiKey: apiKey,
  });
  console.log("Started processing the required dish...");
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: constants.recipeSuggestionPrompt(dish),
          },
        ],
      },
    ],
  });
  return response.choices[0].message.content;
};
