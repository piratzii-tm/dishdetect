import { Text, View } from "react-native-ui-lib";
import {
  KButton,
  KContainer,
  KSpacer,
  KCheckIngredients,
  KHeader,
} from "../../../components";
import { useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Colors, ShoppingListContext } from "../../../constants";
import {
  updateShoppingCart,
  findSavedRecipe,
  handleRecipeSave,
} from "../../../backend";

export const RecipeScreen = () => {
  const { width } = useWindowDimensions();
  const route = useRoute();

  const { shopList, setShopList } = useContext(ShoppingListContext);
  const [currentList, setCurrentList] = useState([]);
  const [recipeSaved, setRecipeSaved] = useState(false);

  const PARAM_RECIPE = route.params.recipe;

  useEffect(() => {
    findSavedRecipe({ recipe: PARAM_RECIPE }).then((response) =>
      setRecipeSaved(response),
    );
  }, []);

  return (
    <KContainer image={require("../../../../assets/photos/background.png")}>
      <KHeader title={PARAM_RECIPE.title} />
      <View flex center>
        <View
          bg-coconut_cream
          padding-20
          style={{
            width: width * 0.8,
            borderRadius: 20,
          }}
        >
          <Text normalText black>
            Ingredients:
          </Text>
          <KSpacer height={20} />

          <View center gap-10>
            {PARAM_RECIPE.ingredients.map((item) => {
              const [isChecked, setChecked] = useState(false);

              // TODO uncomment if we want the item already added in the shopping list to be checked
              // useEffect(() => {
              //   setChecked(
              //     shopList.map((item) => item.name).includes(item.name),
              //   );
              // }, []);

              return (
                <KCheckIngredients
                  key={PARAM_RECIPE.ingredients.indexOf(item)}
                  text={`${item.quantity} ${item.name}`}
                  isChecked={isChecked}
                  setChecked={setChecked}
                  onValueChange={() => {
                    if (isChecked) {
                      setCurrentList(
                        currentList.filter(
                          (element) => element.name !== item.name,
                        ),
                      );
                    } else {
                      setCurrentList((prev) => [
                        ...prev,
                        { name: item.name, amount: 1 },
                      ]);
                    }
                    setChecked(!isChecked);
                  }}
                />
              );
            })}
            <KSpacer />
            <KButton
              text={"Add"}
              onPress={() => {
                if (currentList.length > 0) {
                  let aux = shopList;
                  currentList.forEach((item) => {
                    if (
                      !shopList.map((item) => item.name).includes(item.name)
                    ) {
                      console.log("Will add item");
                      setShopList((prev) => [...prev, item]);
                      aux = [...aux, item];
                    }
                  });
                  updateShoppingCart({ shopList: aux }).then(() =>
                    alert("Ingredients added to cart"),
                  );
                }
              }}
            />
          </View>
          <KSpacer height={20} />
          <Text normalText black>
            Steps:
          </Text>
          <KSpacer />
          <View gap-5>
            {PARAM_RECIPE.steps.map((item, index) => {
              return (
                <Text key={PARAM_RECIPE.steps.indexOf(item)} smallText black>
                  {`${index + 1}. ${item}`}
                </Text>
              );
            })}
          </View>
        </View>

        <View
          style={{
            paddingTop: 10,
          }}
        >
          <KButton
            color={recipeSaved ? Colors.gray : Colors.white}
            text={!recipeSaved ? "Save recipe" : "Saved"}
            onPress={() => {
              handleRecipeSave({ recipe: PARAM_RECIPE });
              setRecipeSaved(true);
            }}
          />
        </View>
      </View>
    </KContainer>
  );
};
