import { createContext } from "react";

export const ShoppingListContext = createContext({
  shopList: [],
  setShopList: () => {},
});
