import { UserProvider, AuthProvider } from "../constants";
import { useContext, useEffect, useState } from "react";
import { auth, database, retrieveUserData } from "../backend";
import { ref, onValue } from "firebase/database";

export const UserProviderWrapper = ({ children }) => {
  const [userData, setUserData] = useState();
  const { isLogged } = useContext(AuthProvider);

  useEffect(() => {
    retrieveUserData().then((data) => setUserData(data));
  }, [isLogged]);

  useEffect(() => {
    if (auth.currentUser !== null) {
      const userRef = ref(database, `users/${auth.currentUser.uid}`);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
      });
    }
  }, [isLogged]);

  return (
    <UserProvider.Provider value={{ userData, setUserData }}>
      {children}
    </UserProvider.Provider>
  );
};
