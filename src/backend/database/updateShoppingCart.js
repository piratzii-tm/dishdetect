import { ref, set, get } from "firebase/database";
import { auth, database } from "../config";

export const updateShoppingCart = async ({ shopList }) => {
  const userRef = ref(database, `users/${auth.currentUser.uid}`);
  let userData = await get(userRef).then((snapshot) => snapshot.val());

  userData.shopping_list = shopList;

  set(userRef, userData)
    .then(() => console.log("Added item in the shopping cart!"))
    .catch((err) => console.log(err));
};
