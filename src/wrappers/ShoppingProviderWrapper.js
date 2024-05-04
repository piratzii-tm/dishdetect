import { useContext, useEffect, useState } from "react";
import { UserProvider, AuthProvider, ShoppingListContext } from "../constants";
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
