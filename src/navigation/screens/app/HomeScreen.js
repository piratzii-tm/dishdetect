import { Text, View } from "react-native-ui-lib";
import { KContainer, KModal, KSpacer, KHomeButton } from "../../../components";
import { useContext, useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Button, TouchableOpacity, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Colors,
  ShoppingListContext,
  handlePictureProcessing,
  handleSuggestionByImageResponse,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "../../../constants";
import { handleStorage } from "../../../backend";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

export const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const [isProcessing, setIsProcessing] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);

  const { top, bottom } = useSafeAreaInsets();
  const { height, width } = useWindowDimensions();
  const { navigate } = useNavigation();

  const { shopList } = useContext(ShoppingListContext);

  const [loadingMessage, setLoadingMessage] = useState(
    "⚙️ Started processing the image",
  );

  if (!permission) {
    return (
      <KContainer>
        <Text>Welcome to DishDetect</Text>
      </KContainer>
    );
  }

  if (!permission.granted) {
    return (
      <KContainer>
        <View flex center>
          <Text style={{ textAlign: "center" }}>
            We need your permission to show the camera
          </Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      </KContainer>
    );
  }

  const handlePictureTaking = () => {
    if (!isProcessing) {
      cameraRef.takePictureAsync().then((response) => {
        setIsProcessing(true);
        const imageUri = response.uri;
        setLoadingMessage("📷 Started uploading the image...");
        handleStorage({ uri: imageUri }).then((imageStorageUrl) => {
          setLoadingMessage("🤖 Started processing the image...");
          handlePictureProcessing({ imageUrl: imageStorageUrl }).then(
            (response) => {
              setLoadingMessage("✨ Image processed successfully!");
              setIsProcessing(false);
              navigate("RecipesNameScreen", {
                dishes: handleSuggestionByImageResponse({ response }),
              });
            },
          );
        });
      });
    }
  };

  const ProcessingView = () => (
    <View
      resizeMode="cover"
      style={{
        flex: 1,
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 1,
        backgroundColor: Colors.coconut_cream,
      }}
    >
      <LottieView
        source={require("../../../../assets/animations/cook1.json")}
        autoPlay
        loop
        style={{
          height: "50%",
          width: "80%",
        }}
      />
      <Text
        style={{
          fontFamily: "DMSans-Regular",
          fontSize: 28,
          color: Colors.black,
          textAlign: "center",
          paddingHorizontal: 20,
        }}
      >
        {loadingMessage}
      </Text>
      <KSpacer height={20} />
      <Text
        style={{
          fontFamily: "DMSans-Regular",
          fontSize: 14,
          color: Colors.gray,
          textAlign: "center",
          paddingHorizontal: 100,
        }}
      >
        Image processing is taking a bit, so don't disturb the chef!
      </Text>
    </View>
  );

  return (
    <CameraView
      style={{
        flex: 1,
      }}
      type={"back"}
      autoFocus={true}
      ref={(ref) => setCameraRef(ref)}
    >
      {isProcessing && <ProcessingView />}
      <KSpacer height={30} />
      <View row spread paddingH-10 paddingTop={top - 30}>
        <View row gap-10>
          <KHomeButton
            icon={
              <MaterialCommunityIcons
                name={"notebook-edit-outline"}
                size={40}
              />
            }
            onPress={() => {
              navigate("CartScreen");
            }}
            notificationCount={shopList.length - 1}
          />
          <KHomeButton
            icon={<MaterialCommunityIcons name={"chef-hat"} size={40} />}
            onPress={() => {
              navigate("DiscoverRecipes");
            }}
          />
          <KHomeButton
            icon={<AntDesign name={"question"} size={40} />}
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </View>
        <KHomeButton
          icon={<FontAwesome name={"user-circle"} size={40} />}
          onPress={() => {
            navigate("ProfileScreen");
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          height: 80,
          width: 80,
          borderRadius: 50,
          backgroundColor: Colors.white,
          opacity: 0.95,
          position: "absolute",
          bottom: bottom + 20,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={handlePictureTaking}
        disabled={modalVisible}
      >
        <View
          style={{
            height: 70,
            width: 70,
            borderRadius: 50,
            borderColor: Colors.black,
            borderWidth: 1,
            backgroundColor: Colors.white,
          }}
        />
      </TouchableOpacity>
      <KModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        isForProfile={false}
        image={require("../../../../assets/photos/tableware.png")}
        title={"What would you like to cook today?"}
        placeholder={"Write recipe name..."}
        buttonText={"Get recipe"}
      />
    </CameraView>
  );
};
