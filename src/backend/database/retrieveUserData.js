import { database, auth } from "../config";
import { ref, get } from "firebase/database";

export const retrieveUserData = async () => {
  const userRef = ref(database, `users/${auth.currentUser.uid}`);
  return await get(userRef).then((snapshot) =>
    snapshot.exists() ? snapshot.val() : null,
  );
};
