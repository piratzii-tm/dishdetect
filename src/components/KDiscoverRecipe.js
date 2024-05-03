import { Image, Text, View } from "react-native-ui-lib";
import { Linking, TouchableOpacity } from "react-native";
import { Colors } from "../constants";

export const KDiscoverRecipe = ({ image, title, url }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.coconut_cream,
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 10,
      }}
      onPress={() => Linking.openURL(url)}
    >
      <Image
        source={{ uri: image }}
        style={{
          height: 200,
          width: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View padding-20 center>
        <Text normalText center>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
