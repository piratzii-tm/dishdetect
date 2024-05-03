import { Image, Text, View } from "react-native-ui-lib";
import {
  KButton,
  KContainer,
  KModal,
  KSpacer,
  KIconButton,
} from "../../../components";
import { auth } from "../../../backend";
import { useEffect, useState } from "react";
import { Colors } from "../../../constants";
import { TouchableOpacity, useWindowDimensions } from "react-native";

export const ProfileScreen = () => {
  //TODO: trebuie puse numele si email-ul user-ului curent

  const chefImage = require("../../../../assets/photos/chef.png");
  const [modalVisible, setModalVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [iconName, setIconName] = useState("toggle-switch-off-outline");

  useEffect(() => {
    setIconName(darkMode ? "toggle-switch" : "toggle-switch-off-outline");
  }, [darkMode]);

  const { height } = useWindowDimensions();

  return (
    <KContainer
      scrollable={false}
      image={require("../../../../assets/photos/whiteBlurBg.png")}
    >
      <View height={height * 0.8} center>
        <View gap-10 center>
          <KSpacer height={50} />
          <Image width={125} height={125} source={chefImage} />
          <KSpacer height={10} />
          <Text largeText>Name</Text>
          <Text normalText>user email</Text>
        </View>
        <View flex centerV>
          <KIconButton
            text={"Change name"}
            fontName={"lead-pencil"}
            onPress={() => {
              setModalVisible(true);
            }}
          />
          <KIconButton
            text={"Dark mode"}
            fontName={iconName}
            onPress={() => {
              setDarkMode(!darkMode);
            }}
          />
        </View>
        <KButton
          text={"LogOut"}
          color={Colors.persian_red}
          onPress={() => {
            signOut(auth);
          }}
        />
        <KSpacer height={50} />
      </View>
      <KModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        image={require("../../../../assets/photos/user.png")}
        title={"How should we call you?"}
        placeholder={"Your new username..."}
        buttonText={"Change"}
        onPress={() => {
          //TODO: am pus modal la change name, trebuie facuta logica la modal, adica sa modifice numele in baza
          // de date
          setModalVisible(false);
        }}
      />
    </KContainer>
  );
};
