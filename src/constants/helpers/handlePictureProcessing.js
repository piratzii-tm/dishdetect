import OpenAI from "openai";
import { openai as constants } from "../../constants/openai/openai";

export const handlePictureProcessing = async ({ imageUrl }) => {
  const apiKey = constants.apiKey();
  const openai = new OpenAI({
    apiKey: apiKey,
  });
  console.log(
    "Started processing the image based on the given link from Firebase...",
  );
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: constants.imageRecognitionPrompt,
          },
          {
            type: "image_url",
            image_url: {
              url: imageUrl,
            },
          },
        ],
      },
    ],
  });
  return response.choices[0].message.content;
};
