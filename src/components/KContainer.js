import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native-ui-lib";

export const KContainer = ({ children, scrollable = true }) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View flex bg-serenade>
        <ImageBackground
          source={require("../../assets/photos/background.png")}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center" }}
        >
          {scrollable ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
              }}
            >
              {children}
            </ScrollView>
          ) : (
            <View flex style={{ paddingTop: insets.top }}>
              {children}
            </View>
          )}
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};
