import { Text, View } from "react-native-ui-lib";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { Colors } from "../constants";

export const KCheckIncredients = ({ text }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View row gap-5 style={{ width: "95%" }}>
      <Checkbox
        style={{}}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? Colors.persian_red : undefined}
      />
      <Text normalText black>
        {text}
      </Text>
    </View>
  );
};
