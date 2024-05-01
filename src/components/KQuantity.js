import { Colors } from "../constants";
import { Text, View } from "react-native-ui-lib";
import { Alert, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useContext } from "react";
import { ShoppingListContext } from "../constants/contexts/ShoppingListContext";

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
      <View flex-1 centerV gap-10 row>
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
              quantity--;
            } else if (quantity === 1) {
              Alert.alert(
                "",
                "Are you sure you want to delete this ingredient?",
                [
                  {
                    text: "no",
                    onPress: () => console.log("Cancel Pressed"),
                  },
                  //TODO: trebuie sterse ingredientele din baza de date
                  {
                    text: "yes",
                    onPress: () => {
                      const updatedList = shopList.filter(
                        (item) => item.name !== name,
                      );
                      setShopList(updatedList);
                      Alert.alert("Ingredient deleted successfully!");
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
            quantity++;
          }}
        >
          <AntDesign name={"plus"} size={20} padding={5} />
        </TouchableOpacity>
      </View>
    </View>
  );
};