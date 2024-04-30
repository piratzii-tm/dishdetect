import { Text, View } from "react-native-ui-lib";
import { KModal } from "../../../components";
import { useState } from "react";

export const HomeScreen = () => {
  // TODO: Implement the modal button, and onPress => setModalVisible(true)
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View flex center>
      {/*TODO here the entire screen will be a camera and when the button of the camera is pressed the handlePictureTaking function will proccess it*/}

      {/*This is the modal, don't remove it*/}
      <KModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <Text>Home page</Text>
    </View>
  );
};
