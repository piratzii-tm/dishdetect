import { KContainer, KDiscoverRecipe, KHeader } from "../../../components";
import { useEffect, useState } from "react";
import { Colors, handleRecipeDiscovery } from "../../../constants";
import { Text, View } from "react-native-ui-lib";
import LottieView from "lottie-react-native";
import { TextInput, useWindowDimensions } from "react-native";

export const DiscoverRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //TODO change to developer:false when presenting
  useEffect(() => {
    handleRecipeDiscovery({ developer: true }).then((response) =>
      setRecipes(response),
    );
  }, []);

  const { height, width } = useWindowDimensions();

  return (
    <KContainer>
      <KHeader title={"Discover Recipes"} />
      {recipes.length === 0 ? (
        <View
          flex
          center
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            height,
            width,
            position: "absolute",
          }}
        >
          <LottieView
            source={require("../../../../assets/animations/loading.json")}
            autoPlay
            loop
            style={{
              height: "50%",
              width: "90%",
            }}
          />
          <Text
            largeText
            center
            style={{ paddingHorizontal: 20, color: Colors.white }}
          >
            Searching for the best recipes for you to explore
          </Text>
        </View>
      ) : (
        <>
          <View
            style={{
              backgroundColor: Colors.coconut_cream,
              marginHorizontal: 20,
              marginBottom: 20,
              borderRadius: 10,
              height: 70,
            }}
          >
            <TextInput
              placeholder="🔍 Search for a recipe ..."
              value={searchValue}
              placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
              onChangeText={(text) => setSearchValue(text)}
              style={{
                fontFamily: "DMSans-Regular",
                fontSize: 24,
                lineHeight: 30,
                color: Colors.black,
                padding: 20,
              }}
            />
          </View>
          {recipes
            .filter((recipe) => recipe.name.includes(searchValue))
            .map((recipe) => (
              <KDiscoverRecipe
                key={recipes.indexOf(recipe)}
                image={recipe.image}
                title={recipe.name}
                url={recipe.url}
              />
            ))}
        </>
      )}
    </KContainer>
  );
};
