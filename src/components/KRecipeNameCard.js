import { View, Image, Text } from "react-native-ui-lib";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { Colors } from "../constants";

export const KRecipeNameCard = ({ title }) => {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity
      // TODO: Implement the onPress card logic
      onPress={() => {}}
      style={{
        backgroundColor: Colors.coconut_cream,
        width: width * 0.8,
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "space-evenly",
      }}
    >
      <View flex>
        <Image
          source={require("../../assets/photos/recipe.png")}
          height={125}
          width={125}
        />
      </View>
      <View flex>
        <Text normalText>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
