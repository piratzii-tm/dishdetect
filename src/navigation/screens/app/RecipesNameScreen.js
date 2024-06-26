import { View } from "react-native-ui-lib";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KContainer, KRecipeNameCard } from "../../../components";
import { FontAwesomeIcon, faArrowLeft } from "../../../constants";

export const RecipesNameScreen = ({ route }) => {
  const { goBack } = useNavigation();
  return (
    <KContainer image={require("../../../../assets/photos/background.png")}>
      <TouchableOpacity
        onPress={() => goBack()}
        style={{ paddingHorizontal: 20, paddingVertical: 10 }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size={30} />
      </TouchableOpacity>
      <View center flex style={{ justifyContent: "space-evenly" }}>
        {route.params.dishes.map((recipe, index) => (
          <KRecipeNameCard key={index} recipe={recipe} />
        ))}
      </View>
    </KContainer>
  );
};
