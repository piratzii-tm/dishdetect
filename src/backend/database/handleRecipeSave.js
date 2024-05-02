import { database, auth } from "../config";
import { ref, get, set } from "firebase/database";

export const handleRecipeSave = ({ recipe }) => {
  const userRef = ref(database, `users/${auth.currentUser.uid}`);
  get(userRef).then((snapshot) => {
    if (snapshot.exists()) {
      let response = snapshot.val();
      response["saved_recipes"].push(recipe);
      set(userRef, response).then(() => console.log("Saved with success!"));
    }
  });
};
