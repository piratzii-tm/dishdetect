import { Text, View } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const KSettings = ({ text, fontName, onPress }) => {
  return (
    <View row center>
      <View width={"75%"}>
        <Text largeText>{text}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name={fontName} size={40} padding={5} />
      </TouchableOpacity>
    </View>
  );
};
