import { get, ref } from "firebase/database";
import { auth, database } from "../config";

export const findSavedRecipe = ({ recipe }) => {
  const userRef = ref(database, `users/${auth.currentUser.uid}`);
  return get(userRef).then((snapshot) => {
    if (snapshot.exists()) {
      let response = snapshot.val();
      return response["saved_recipes"]
        .map((savedRecipe) => savedRecipe.title)
        .includes(recipe.title);
    }
    return false;
  });
};
