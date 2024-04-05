import { Text, View } from "react-native-ui-lib";
import { KButton, KContainer, KSpacer } from "../../../components";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { KCheckIngredients } from "../../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useContext, useState } from "react";
import { ShoppingListContext } from "../../../constants/contexts/ShoppingListContext";

export const RecipeScreen = () => {
  const { width } = useWindowDimensions();
  const route = useRoute();
  const { goBack } = useNavigation();

  const { shopList, setShopList } = useContext(ShoppingListContext);
  const [currentList, setCurrentList] = useState([]);

  const PARAM_RECIPE = route.params.recipe;

  return (
    <KContainer>
      <TouchableOpacity
        onPress={() => goBack()}
        style={{ paddingHorizontal: 20, paddingVertical: 10 }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size={20} />
      </TouchableOpacity>
      <View center>
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
                  text={`${item.quantity} ${item.unit} ${item.name}`}
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
            Recipe:
          </Text>
          <KSpacer />
          <View gap-5>
            {PARAM_RECIPE.recipe.map((item, index) => {
              return (
                <Text key={PARAM_RECIPE.recipe.indexOf(item)} smallText black>
                  {`${index + 1}. ${item}`}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    </KContainer>
  );
};
