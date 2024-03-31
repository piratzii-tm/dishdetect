import { useFonts } from "expo-font";

export const ExpoFonts = ({ children }) => {
  const [doneLoading] = useFonts({
    "DMSans-Regular": require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  return doneLoading ? children : null;
};
