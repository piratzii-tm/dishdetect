import { createContext } from "react";

export const TheContext = createContext({
  //TODO: primeste un obiect de forma {name: "Egg", amount: 1}
  shopList: [],
  setShopList: () => {},
});
