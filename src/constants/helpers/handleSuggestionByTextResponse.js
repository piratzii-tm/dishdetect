export const handleSuggestionByTextResponse = ({ response }) => {
  console.log(response);
  const dish = response.split("#");
  let ingredients = dish[1].split(",").map((ingredient) => {
    ingredient = ingredient.split("$");
    try {
      return {
        quantity: ingredient[0].trim(),
        name: ingredient[1].trim(),
      };
    } catch (err) {}
  });
  ingredients = ingredients.filter((ingredient) => ingredient !== undefined);
  const steps = dish[2].split("|").map((step) => step.trim());
  console.log({
    ingredients,
    steps,
  });
  return {
    ingredients,
    steps,
  };
};
