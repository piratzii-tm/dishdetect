import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../config";
import { ref, set } from "firebase/database";

export const handleRegistration = ({ email, password, username }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
      const newUserData = {
        username,
        email,
        userID: credentials.user.uid,
        shopping_list: ["IGNORE"],
        saved_recipes: ["IGNORE"],
      };

      const userRef = ref(database, `/users/${credentials.user.uid}`);
      set(userRef, newUserData)
        .then(() => console.log("RTDB data added with success."))
        .catch((err) => console.log(err));
    })
    .then(() => console.log("User created with success"))
    .catch((err) => console.log(err));
};
