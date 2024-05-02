export const handleSuggestionByImageResponse = ({ response }) => {
  let dishes = response.split("@");
  dishes = dishes.map((dish) => {
    dish = dish.split("#");
    const title = dish[1].trim();
    let ingredients = dish[2].split(",").map((ingredient) => {
      ingredient = ingredient.split("$");
      try {
        return {
          quantity: ingredient[0].trim(),
          name: ingredient[1].trim(),
        };
      } catch (err) {}
    });
    ingredients = ingredients.filter((ingredient) => ingredient !== undefined);
    const steps = dish[3].split("|").map((step) => step.trim());
    return {
      title,
      ingredients,
      steps,
    };
  });
  return dishes;
};
