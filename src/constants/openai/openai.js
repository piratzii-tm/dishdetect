import base64 from "react-native-base64";

export const openai = {
  apiKey: () => {
    const encoded =
      "c2stdHpiaUpyd0E1MGg4dXlzM08wbVhUM0JsYmtGSmIzNWJ4TTFUMjEzY1lOM25LaXc0";
    return base64.decode(encoded);
  },
  imageRecognitionPrompt:
    "You will be provided an image containing all sorts of objects. Some of the objects can be used in different recipes. Return 4 recipes that will contain as much edible ingredients found in the image, even if the image provides you just one usable ingredient. If an object in the image looks like a container for a usable ingredient (example being a carton of milk) consider it being full. For each recipe specify the other necessary ingredients for achieving the dish. For each ingredient specify the necessary quantity and for each recipe add all the necessary information for achieving the dish. This details could contain times of cooking and other additional details. The recipes should be separated using @ character and each recipe should be formatted as following without other details: the title of the recipe should be on the first row, the ingredients on the next row separated by commas and the steps of preparation on the third row separated by a straight vertical line |. Don't offer titles for the rows, just the name of the recipe, ingredients and steps of preparation. The ingredients should be exact. The name of the recipe, ingredients and steps should be on separated rows. Start each row with a # character and not with any other detail. Each ingredients should be precise, with no room for interpretation, without giving the option to choose between two possible ingredients. Don't use the word OR or AND for the ingredients. For each ingredient separate the quantity and the name of the ingredient using $ character. Don't give any details for the ingredients in the image, just list them as any other ingredient. The quantity of an ingredient should not be ambiguous, should contain numbers along with unit measures.",
};
