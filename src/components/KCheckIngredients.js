import { Text, View } from "react-native-ui-lib";
import Checkbox from "expo-checkbox";
import { Colors } from "../constants";

export const KCheckIngredients = ({ text, isChecked, onValueChange }) => {
  return (
    <View row gap-5 style={{ width: "95%" }}>
      <Checkbox
        style={{}}
        value={isChecked}
        onValueChange={onValueChange}
        color={isChecked ? Colors.persian_red : undefined}
      />
      <Text normalText black>
        {text}
      </Text>
    </View>
  );
};
