import { KProfileContainer } from "../../../components/KProfileContainer";
import { Image, Text, View } from "react-native-ui-lib";
import { KButton, KModal, KSpacer } from "../../../components";
import { KSettings } from "../../../components/KSettings";
import { Colors } from "../../../constants";
import { auth } from "../../../backend/config";
import { useState } from "react";

export const ProfileScreen = () => {
  //TODO: trebuie puse numele si email-ul user-ului curent
  //TODO: am pus modal la change name, trebuie facuta logica la modal,
  // adica sa modifice numele in baza de date

  const chefImage = require("../../../../assets/photos/chef.png");
  const [modalVisible, setModalVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  let iconName;
  darkMode
    ? (iconName = "toggle-switch")
    : (iconName = "toggle-switch-off-outline");

  return (
    <KProfileContainer scrollable={false}>
      <View flex center>
        <View gap-10 flex-1 center>
          <KSpacer height={50} />
          <Image width={125} height={125} source={chefImage} />
          <KSpacer height={10} />
          <Text largeText>Name</Text>
          <Text normalText>user email</Text>
        </View>
        <View flex-1 centerV>
          <KSettings
            text={"Change name"}
            fontName={"lead-pencil"}
            onPress={() => {
              setModalVisible(true);
            }}
          />
          <KModal
            image={require("../../../../assets/photos/user.png")}
            title={"Write down your new name:"}
            placeholder={"New name..."}
            buttonText={"Change"}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <KSettings
            text={"Dark mode"}
            fontName={iconName}
            onPress={() => {
              setDarkMode(!darkMode);
            }}
          />
        </View>
        <View flex-1 center>
          <KButton
            text={"LogOut"}
            color={Colors.persian_red}
            onPress={() => {
              signOut(auth);
            }}
          />
          <KSpacer height={50} />
        </View>
      </View>
    </KProfileContainer>
  );
};
