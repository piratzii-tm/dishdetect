import { useState } from "react";
import { ShoppingListContext } from "../constants";

export const ShoppingProviderWrapper = ({ children }) => {
  const [shopList, setShopList] = useState([]);

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
