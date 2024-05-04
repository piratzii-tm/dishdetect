import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native-ui-lib";

export const KContainer = ({
  children,
  scrollable = true,
  safeArea = true,
  style = undefined,
  image = require("../../assets/photos/background.png"),
}) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
        {scrollable ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingTop: safeArea && insets.top,
              paddingBottom: safeArea && insets.bottom,
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
    </KeyboardAvoidingView>
  );
};
