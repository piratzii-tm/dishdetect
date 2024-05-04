import { View } from "react-native-ui-lib";
import { Colors, Typographies, FontAwesomeIcon } from "../constants";
import { TextInput } from "react-native";

export const KTextInput = ({ icon, placeholder, text, setText }) => {
  return (
    <View style={{ width: "95%" }}>
      <View row centerV padding-3 gap-5>
        <FontAwesomeIcon icon={icon} size={25} color={Colors.black} />
        <TextInput
          autoCapitalize={"none"}
          placeholder={placeholder}
          value={text}
          onChangeText={setText}
          style={[{ flex: 1 }, Typographies.smallText]}
        ></TextInput>
      </View>
      <View bg-black height style={{ width: "95%" }}></View>
    </View>
  );
};
