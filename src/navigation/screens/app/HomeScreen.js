import { Text, View } from "react-native-ui-lib";
import { KModal } from "../../../components";
import { useState } from "react";

export const HomeScreen = () => {
  // TODO: Implemente de modal button, and onPress => setModalVisible(true)
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View flex center>
      {/*This is the modal, don't remove it*/}
      <KModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <Text>Home page</Text>
    </View>
  );
};
