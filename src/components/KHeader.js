import { Text, View } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { useNavigation } from "@react-navigation/native";

export const KHeader = ({ title }) => {
  const { goBack } = useNavigation();

  return (
    <View row spread centerV marginB-50>
      <TouchableOpacity
        onPress={() => goBack()}
        style={{ paddingHorizontal: 20, paddingVertical: 10 }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size={26} />
      </TouchableOpacity>
      <View width={"90%"} paddingH-30 right>
        <Text largeText ellipsizeMode={"tail"} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  );
};
