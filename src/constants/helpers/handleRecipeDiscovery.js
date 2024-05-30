import { edamam } from "../api";

export const handleRecipeDiscovery = async ({ developer = false }) => {
  if (developer) {
    return edamam.developer;
  }

  let dishes = [];
  let recipes = [];

  while (dishes.length <= 5) {
    let dishToAdd = edamam.dishes[Math.floor(Math.random() * 30)];
    if (!dishes.includes(dishToAdd)) {
      dishes.push(dishToAdd);
    }
  }

  for (let i = 0; i < dishes.length; i++) {
    await fetch(edamam.searchRecipeApi({ dish: dishes[i] }))
      .then((response) => response.json())
      .then((response) => {
        const recipesFromResponse = response["hits"];
        let formattedRecipes = recipesFromResponse.map((entry) => {
          return {
            name: entry.recipe.label,
            image: entry.recipe.images.REGULAR.url,
            url: entry.recipe.url,
          };
        });
        formattedRecipes.forEach((recipe) => {
          if (!recipes.map((r) => r.name).includes(recipe.name)) {
            recipes.push(recipe);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  recipes = recipes.sort((r1, r2) => r1.name.localeCompare(r2.name));

  return recipes;
};
