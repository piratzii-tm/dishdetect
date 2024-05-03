import { View } from "react-native-ui-lib";
import { ShoppingListContext } from "../../../constants";
import { useContext, useState } from "react";
import { KContainer, KHeader, KSpacer } from "../../../components";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Colors, Typographies } from "../../../constants";
import AntDesign from "react-native-vector-icons/AntDesign";
import { KQuantity } from "../../../components/KQuantity";

export const CartScreen = () => {
  const { shopList, setShopList } = useContext(ShoppingListContext);

  const [addIngredient, setAddIngredient] = useState("");

  return (
    <>
      <KContainer image={require("../../../../assets/photos/background.png")}>
        <KHeader title={"Shopping list"} />
        <KSpacer height={60} />
        <View centerH gap-20>
          {shopList.map((ingredient, index) => {
            return (
              <KQuantity
                key={index}
                name={ingredient.name}
                quantity={ingredient.amount}
              />
            );
          })}
        </View>
        <KSpacer height={120} />
      </KContainer>
      <View padding-20 bg-coconut_cream absB row>
        <TextInput
          onChangeText={setAddIngredient}
          value={addIngredient}
          placeholder="Add an ingredient..."
          style={[
            Typographies.smallText,
            {
              backgroundColor: Colors.white,
              padding: 10,
              borderRadius: 10,
              marginBottom: 10,
              width: "90%",
              height: "75%",
            },
          ]}
        />
        <TouchableOpacity
          onPress={() => {
            if (addIngredient.trim() !== "") {
              if (
                !shopList.find(
                  (ingredient) => ingredient.name === addIngredient,
                )
              ) {
                setShopList((prevShopList) => [
                  ...prevShopList,
                  { name: addIngredient.trim(), amount: 1 },
                ]);
                setAddIngredient("");
                console.log("Ingredient added successfully!");
              } else {
                console.log("Ingredient already on the list!");
                setAddIngredient("");
              }
            }
          }}
        >
          <AntDesign name={"plus"} size={26} marginBottom={10} padding={10} />
        </TouchableOpacity>
      </View>
    </>
  );
};
