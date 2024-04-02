import { View } from "react-native-ui-lib";
import { KContainer, KRecipeNameCard, KSpacer } from "../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const RecipesNameScreen = () => {
  //TODO: ASA ARATA LISTA DE RETETE care va fi primita ca parametru
  const recipes = [
    {
      title: "Stuffed Bell Peppers",
      ingredients: [
        { name: "Egg", quantity: 6, unit: "buc" },
        { name: "Sugar", quantity: 0.5, unit: "kg" },
        { name: "Mascarpone cheese", quantity: 500, unit: "g" },
      ],
      recipe: [
        "In a saucepan, heat the chicken or vegetable broth",
        "Baga la cuptor",
        "Scoate de la cuptor",
        "Mananca",
      ],
    },
    {
      title: "Title 1",
      ingredients: [
        { name: "name1", quantity: 69, unit: "kg" },
        { name: "name2", quantity: 60, unit: "kg" },
        { name: "name3", quantity: 50.69, unit: "g" },
      ],
      recipe: ["Recipe 1", "Recipe 2", "Recipe 3"],
    },
    {
      title: "Title 2",
      ingredients: [
        { name: "name1.1", quantity: 8, unit: "buc" },
        { name: "name2.1", quantity: 8, unit: "cuc" },
        { name: "name3.1", quantity: 8.88, unit: "bub" },
      ],
      recipe: ["Recipe 1 dame", "Recipe 2 dame", "Recipe 3 dame"],
    },
  ];

  const { goBack } = useNavigation();

  return (
    <KContainer>
      <TouchableOpacity
        onPress={() => goBack()}
        style={{ paddingHorizontal: 20, paddingVertical: 10 }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size={20} />
      </TouchableOpacity>
      <View center gap-20>
        {recipes.map((repice) => (
          <KRecipeNameCard key={recipes.indexOf(repice)} recipe={repice} />
        ))}
      </View>
    </KContainer>
  );
};
