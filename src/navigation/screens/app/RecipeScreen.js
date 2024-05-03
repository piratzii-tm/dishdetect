import { Text, View } from "react-native-ui-lib";
import {
  KButton,
  KContainer,
  KSpacer,
  KCheckIngredients,
  KHeader,
} from "../../../components";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Colors, ShoppingListContext } from "../../../constants";
import { findSavedRecipe, handleRecipeSave } from "../../../backend";

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
                  currentList.forEach((item) => {
                    if (
                      !shopList.find(
                        (ingredient) => ingredient.name === item.name,
                      )
                    ) {
                      setShopList((prev) => [...prev, item]);
                    }
                  });
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
