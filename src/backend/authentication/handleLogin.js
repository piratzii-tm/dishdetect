import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
export const handleLogin = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => console.log("Logged with success"))
    .catch((err) => console.log(err));
};
