import { database, auth } from "../config";
import { ref, get, set, update } from "firebase/database";

export const changeUsername = async ({ username }) => {
  const userRef = ref(database, `users/${auth.currentUser.uid}/username`);
  set(userRef, username)
    .then(() => console.log("Changed username with success"))
    .catch((err) => console.log(err));
};
