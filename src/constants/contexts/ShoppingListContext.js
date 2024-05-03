import { createContext } from "react";

export const ShoppingListContext = createContext({
  //TODO: primeste un obiect de forma {name: "Egg", amount: 1}
  shopList: [],
  setShopList: () => {},
  onPressDecisionModal: {},
  setOnPressDecisionModal: () => {},
});
