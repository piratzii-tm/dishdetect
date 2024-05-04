import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../backend";
import { useEffect, useState } from "react";
import { AuthProvider } from "../constants";

export const AuthWrapper = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLogged(user !== null);
    });
  }, []);

  return (
    <AuthProvider.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthProvider.Provider>
  );
};
