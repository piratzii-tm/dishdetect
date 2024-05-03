import { useState } from "react";
import { ShoppingListContext } from "../constants";

export const ShoppingProviderWrapper = ({ children }) => {
  const [shopList, setShopList] = useState([]);
  const [onPressDecisionModal, setOnPressDecisionModal] = useState(false);

  return (
    <ShoppingListContext.Provider
      value={{
        shopList,
        setShopList,
        onPressDecisionModal,
        setOnPressDecisionModal,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};
