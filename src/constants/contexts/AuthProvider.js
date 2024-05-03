import { createContext } from "react";

export const AuthProvider = createContext({
  isLogged: false,
  setIsLogged: () => {},
});
