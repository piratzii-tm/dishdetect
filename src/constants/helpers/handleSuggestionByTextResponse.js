export const handleSuggestionByTextResponse = ({ response }) => {
  console.log(response);
  const dish = response.split("#");
  const ingredients = dish[1].split(",").map((ingredient) => {
    ingredient = ingredient.split("$");
    try {
      return {
        quantity: ingredient[0].trim(),
        name: ingredient[1].trim(),
      };
    } catch (err) {}
  });
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
