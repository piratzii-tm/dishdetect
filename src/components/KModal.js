import { Text, View, Image } from "react-native-ui-lib";
import {
  Modal,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import {
  Colors,
  handleTextProcessing,
  handleSuggestionByTextResponse,
} from "../constants";
import { KSpacer } from "./KSpacer";
import { KButton } from "./KButton";
import { useNavigation } from "@react-navigation/native";

export const KModal = ({
  modalVisible = false,
  setModalVisible,
  title,
  placeholder,
  image,
  buttonText,
  onPress,
  isForProfile = true,
}) => {
  const { navigate } = useNavigation();

  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const { height, width } = useWindowDimensions();

  const handleRequireDish = ({ dish }) => {
    handleTextProcessing({ dish }).then((response) => {
      let recipe = handleSuggestionByTextResponse({ response });
      recipe["title"] = text;
      setIsProcessing(false);
      navigate("RecipeScreen", { recipe });
      setText("");
      setModalVisible(!modalVisible);
    });
  };

  const handleProcessing = () => {
    if (!isProcessing) {
      setIsProcessing(true);
      handleRequireDish({ dish: text });
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        alert("Fail to add stock");
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          height: height,
          width: width,
        }}
        onPressOut={() => setModalVisible(false)}
      >
        <View flex center>
          <View
            width={width * 0.8}
            center
            padding-20
            gap-20
            bg-coconut_cream
            style={{ borderRadius: 10 }}
          >
            <Image source={image} height={70} width={70} />
            <Text normalText black center>
              {title}
            </Text>
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder={placeholder}
              placeholderTextColor={Colors.gray}
              style={{
                width: "90%",
                padding: 15,
                backgroundColor: Colors.white,
                borderRadius: 10,
              }}
            />
            <KSpacer height={30} />
            <KButton
              text={isProcessing ? "Loading..." : buttonText}
              color={isProcessing ? Colors.gray : Colors.persian_red}
              onPress={() => {
                {
                  if (isForProfile === false) {
                    handleProcessing();
                  } else {
                    onPress(text);
                  }
                  setText("");
                }
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
