import { createContext } from "react";

export const UserProvider = createContext({
  userData: {},
  setUserData: () => {},
});
