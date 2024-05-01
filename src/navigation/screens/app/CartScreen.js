import { Text, View } from "react-native-ui-lib";
import { ShoppingListContext } from "../../../constants";
import { useContext } from "react";

export const CartScreen = () => {
  //TODO: PENTRU ANDRA: Acesta este contextul
  const { shopList, setShopList } = useContext(ShoppingListContext);

  //TODO:  De forma asta este contextul, doar ca initial e gol
  const auxShopList = [
    { name: "Egg", amount: 1 },
    { name: "Milk", amount: 15 },
    { name: "Bred", amount: 4 },
  ];

  return (
    <View flex center>
      <Text>Cart page</Text>
    </View>
  );
};
