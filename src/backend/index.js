import { handleStorage } from "./storage/handleStorage";
import { handleLogin } from "./authentication/handleLogin";
import { handleRegistration } from "./authentication/handleRegistration";
import { handleRecipeSave } from "./database/handleRecipeSave";
import { findSavedRecipe } from "./database/findSavedRecipe";
import { retrieveUserData } from "./database/retrieveUserData";
import { changeUsername } from "./database/changeUsername";
import { updateShoppingCart } from "./database/updateShoppingCart";

export {
  handleLogin,
  handleRegistration,
  handleStorage,
  handleRecipeSave,
  findSavedRecipe,
  retrieveUserData,
  changeUsername,
  updateShoppingCart,
};
export * from "./config";
