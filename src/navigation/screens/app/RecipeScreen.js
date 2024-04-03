import { Text, View } from "react-native-ui-lib";
import { KButton, KContainer, KSpacer } from "../../../components";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { KCheckIncredients } from "../../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const RecipeScreen = () => {
  const { width } = useWindowDimensions();
  const route = useRoute();
  const { goBack } = useNavigation();

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
          padding={20}
          style={{
            width: width * 0.8,
            borderRadius: 20,
          }}
        >
          <Text normalText black>
            Incredients:
          </Text>
          {/*TODO: implement the Select all logic*/}
          <TouchableOpacity onPress={() => {}}>
            <Text smallText black style={{ alignSelf: "flex-end" }}>
              Select all
            </Text>
          </TouchableOpacity>
          <KSpacer />

          <View center gap-10>
            {PARAM_RECIPE.ingredients.map((item) => {
              return (
                <KCheckIncredients
                  key={PARAM_RECIPE.ingredients.indexOf(item)}
                  text={`${item.quantity} ${item.unit} ${item.name}`}
                />
              );
            })}
            {/*TODO: Implement the add button logic*/}
            <KButton text={"Add"} onPress={() => {}} />
          </View>
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
