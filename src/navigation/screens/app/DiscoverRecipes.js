import { KContainer, KDiscoverRecipe } from "../../../components";
import { useEffect, useState } from "react";
import { handleRecipeDiscovery } from "../../../constants/helpers";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { Text, View } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const DiscoverRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  //TODO change to developer:false when presenting
  useEffect(() => {
    handleRecipeDiscovery({ developer: true }).then((response) =>
      setRecipes(response),
    );
  }, []);

  const { goBack } = useNavigation();

  return (
    <KContainer>
      <View row spread centerV marginB-50>
        <TouchableOpacity
          onPress={() => goBack()}
          style={{ paddingHorizontal: 20, paddingVertical: 10 }}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={26} />
        </TouchableOpacity>
        <Text largeText style={{ paddingHorizontal: 20 }}>
          Discover Recipes
        </Text>
      </View>
      {recipes.length === 0 ? (
        <View flex center>
          <LottieView
            source={require("../../../../assets/animations/cook1.json")}
            autoPlay
            loop
            style={{
              height: "50%",
              width: "90%",
            }}
          />
          <Text largeText>Loading...</Text>
        </View>
      ) : (
        recipes.map((recipe) => (
          <KDiscoverRecipe
            key={recipes.indexOf(recipe)}
            image={recipe.image}
            title={recipe.name}
            url={recipe.url}
          />
        ))
      )}
    </KContainer>
  );
};

export default DiscoverRecipes;
