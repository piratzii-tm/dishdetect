import { Image, Text, View } from "react-native-ui-lib";
import { KModal, KSpacer } from "../../../components";
import { useState } from "react";
import { KProfileContainer } from "../../../components/KProfileContainer";
import { TouchableOpacity } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const HomeScreen = () => {
  // TODO: Implemente de modal button, and onPress => setModalVisible(true)
  const [modalVisible, setModalVisible] = useState(false);
  const chefImage = require("../../../../assets/photos/chef.png");

  return (
    <KProfileContainer scrollable={false}>
      {/*This is the modal, don't remove it*/}
      <KModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </KProfileContainer>
  );
};
