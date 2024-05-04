import { Text, View } from "react-native-ui-lib";
import { Alert, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { ShoppingListContext, Colors, AntDesign } from "../constants";
import { updateShoppingCart } from "../backend";

export const KQuantity = ({ name, quantity }) => {
  const { shopList, setShopList } = useContext(ShoppingListContext);

  return (
    <View bg-coconut_cream width={"90%"} height={70} borderRadius={10} row>
      <View flex-1 centerV>
        <Text
          normalText
          style={{
            paddingLeft: 20,
          }}
        >
          {name}
        </Text>
      </View>
      <View flex-1 centerV gap-10 row right>
        <TouchableOpacity
          style={{ backgroundColor: Colors.white, borderRadius: 3 }}
          onPress={() => {
            if (quantity > 1) {
              const updatedList = shopList.map((item) => {
                if (item.name === name) {
                  return { ...item, amount: item.amount - 1 };
                }
                return item;
              });
              setShopList(updatedList);
              updateShoppingCart({ shopList: updatedList });
              quantity--;
            } else if (quantity === 1) {
              Alert.alert(
                "",
                "Are you sure you want to delete this ingredient?",
                [
                  {
                    text: "No",
                    onPress: () => console.log("Cancel Pressed"),
                  },
                  {
                    text: "Yes",
                    style: "destructive",
                    onPress: () => {
                      const updatedList = shopList.filter(
                        (item) => item.name !== name,
                      );
                      setShopList(updatedList);
                      updateShoppingCart({ shopList: updatedList });
                      console.log("Ingredient deleted successfully!");
                    },
                  },
                ],
              );
            }
          }}
        >
          <AntDesign name={"minus"} size={20} padding={5} />
        </TouchableOpacity>
        <Text normalText>{quantity}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.white,
            borderRadius: 3,
            marginRight: 20,
          }}
          onPress={() => {
            const updatedList = shopList.map((item) => {
              if (item.name === name) {
                return { ...item, amount: item.amount + 1 };
              }
              return item;
            });
            setShopList(updatedList);
            updateShoppingCart({ shopList: updatedList });
            quantity++;
          }}
        >
          <AntDesign name={"plus"} size={20} padding={5} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
