import { Text, View } from "react-native-ui-lib";
import { KContainer, KModal } from "../../../components";
import { useContext, useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, TouchableOpacity, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors, ShoppingListContext } from "../../../constants";
import { handleStorage } from "../../../backend";
import {
  handlePictureProcessing,
  handleSuggestionByImageResponse,
} from "../../../constants/helpers";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

export const HomeScreen = () => {
  // TODO: Implement the modal button, and onPress => setModalVisible(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [isProcessing, setIsProcessing] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);

  const { top, bottom } = useSafeAreaInsets();
  const { height, width } = useWindowDimensions();
  const { navigate } = useNavigation();
  const { onPressDecisionModal, setOnPressDecisionModal } =
    useContext(ShoppingListContext);

  useEffect(() => {
    setOnPressDecisionModal(false);
  }, []);
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
        handleStorage({ uri: imageUri }).then((imageStorageUrl) => {
          handlePictureProcessing({ imageUrl: imageStorageUrl }).then(
            (response) => {
              console.log("Successfully processed the image!");
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
          height: "40%",
          width: "60%",
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
        {
          [
            "Stirring up mischief... ETA: Tasty results!",
            "Cooking up chaos... Patience, it's worth the bytes!",
            "Mixing up magic... Hungry yet?",
          ][Math.floor(Math.random() * 3)]
        }
      </Text>
    </View>
  );

  return (
    <KContainer safeArea={false}>
      <Camera
        style={{
          flex: 1,
        }}
        type={CameraType.back}
        autoFocus={true}
        ref={(ref) => setCameraRef(ref)}
      >
        {isProcessing && <ProcessingView />}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingTop: top,
          }}
        >
          {/*TODO add the top buttons inside this view*/}
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
        {modalVisible && (
          <View
            style={{
              flex: 1,
              position: "absolute",
              backgroundColor: Colors.black,
              height: height,
              width: width,
              opacity: 0.7,
            }}
          ></View>
        )}
        <KModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          image={require("../../../../assets/photos/tableware.png")}
          title={"What would you like to cook today?"}
          placeholder={"Write recipe name..."}
        />
      </Camera>
    </KContainer>
  );
};
