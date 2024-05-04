import { KContainer, KHeader } from "../../../components";
import { useContext } from "react";
import { UserProvider } from "../../../constants/contexts/UserProvider";
import { View, Text } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Colors } from "../../../constants";

export const SavedRecipes = () => {
  const { userData } = useContext(UserProvider);
  const { navigate } = useNavigation();

  return (
    <KContainer>
      <KHeader title={"Saved recipes"} />
      {userData.saved_recipes.slice(1).map((recipe) => (
        <TouchableOpacity
          key={userData.saved_recipes.indexOf(recipe)}
          onPress={() => navigate("RecipeScreen", { recipe })}
        >
          <View
            paddingH-20
            paddingV-10
            marginH-20
            br20
            bg-coconut_cream
            row
            spread
            marginB-10
            centerV
          >
            <View width={"80%"}>
              <Text largeText center>
                {recipe.title}
              </Text>
            </View>
            <FontAwesomeIcon
              icon={faArrowRight}
              size={26}
              color={Colors.persian_red}
            />
          </View>
        </TouchableOpacity>
      ))}
    </KContainer>
  );
};
