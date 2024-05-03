import { View } from "react-native-ui-lib";
import { ShoppingListContext } from "../../../constants";
import { useContext, useState } from "react";
import { KContainer, KSpacer } from "../../../components";
import {
  Alert,
  KeyboardAvoidingView,
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
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <KContainer
          scrollable={true}
          image={require("../../../../assets/photos/background.png")}
        >
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
                  Alert.alert("", "Ingredient added successfully!");
                } else {
                  Alert.alert("", "Ingredient already on the list!");
                  setAddIngredient("");
                }
              }
            }}
          >
            <AntDesign name={"plus"} size={26} marginBottom={10} padding={10} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
