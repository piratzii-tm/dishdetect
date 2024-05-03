import { Text, View, Image } from "react-native-ui-lib";
import { Modal, TextInput, useWindowDimensions } from "react-native";
import { useContext, useState } from "react";
import { Colors, ShoppingListContext } from "../constants";
import { KSpacer } from "./KSpacer";
import { KButton } from "./KButton";
import {
  handleTextProcessing,
  handleSuggestionByTextResponse,
} from "../constants/helpers";
import { useNavigation } from "@react-navigation/native";

export const KModal = ({
  modalVisible = false,
  setModalVisible,
  title,
  placeholder,
  image,
  buttonText,
  onPress,
}) => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation();

  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { onPressDecisionModal, setOnPressDecisionModal } =
    useContext(ShoppingListContext);

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
              onPressDecisionModal === false ? handleProcessing() : onPress();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
