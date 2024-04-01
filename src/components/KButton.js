import { Text } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";
import { Colors } from "../constants";

export const KButton = ({ text = "press", onPress, color = Colors.white }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
      }}
    >
      <Text
        smallText
        style={
          color === Colors.white
            ? { color: Colors.black }
            : { color: Colors.white }
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
