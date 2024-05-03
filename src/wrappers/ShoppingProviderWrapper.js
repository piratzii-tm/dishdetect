import { useContext, useEffect, useState } from "react";
import { ShoppingListContext } from "../constants";
import { UserProvider } from "../constants/contexts/UserProvider";
import { AuthProvider } from "../constants/contexts/AuthProvider";
import { retrieveUserData } from "../backend";

export const ShoppingProviderWrapper = ({ children }) => {
  const [shopList, setShopList] = useState([]);
  const { userData } = useContext(UserProvider);
  const { isLogged } = useContext(AuthProvider);

  useEffect(() => {
    retrieveUserData()
      .then((response) => setShopList(response ? response.shopping_list : []))
      .catch();
  }, [isLogged]);

  return (
    <ShoppingListContext.Provider
      value={{
        shopList,
        setShopList,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};
