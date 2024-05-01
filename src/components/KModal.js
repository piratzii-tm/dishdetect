import { Text, View, Image } from "react-native-ui-lib";
import { Modal, TextInput, useWindowDimensions } from "react-native";
import { useState } from "react";
import { Colors } from "../constants";
import { KSpacer } from "./KSpacer";
import { KButton } from "./KButton";

export const KModal = ({
  modalVisible = false,
  setModalVisible,
  title,
  placeholder,
  image,
  buttonText,
}) => {
  const { width } = useWindowDimensions();

  const [text, setText] = useState("");

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
          {/*TODO: Implemente the recipe button press*/}
          <KButton
            text={buttonText}
            color={Colors.persian_red}
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
