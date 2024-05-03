import { UserProvider } from "../constants/contexts/UserProvider";
import { useEffect, useState } from "react";
import { auth, database, retrieveUserData } from "../backend";
import { ref, onValue } from "firebase/database";

export const UserProviderWrapper = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    retrieveUserData().then((data) => setUserData(data));
  }, []);

  const userRef = ref(database, `users/${auth.currentUser.uid}`);
  useEffect(() => {
    onValue(userRef, (snapshot) => {
      if (snapshot.exists()) {
        setUserData(snapshot.val());
      }
    });
  }, []);

  return (
    userData && (
      <UserProvider.Provider value={{ userData, setUserData }}>
        {children}
      </UserProvider.Provider>
    )
  );
};
