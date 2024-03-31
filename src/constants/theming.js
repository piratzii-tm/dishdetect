import {
  Colors as RNUILibColors,
  Typography as RNUILibTypographies,
} from "react-native-ui-lib";

export const Colors = {
  black: "#000000",
  coconut_cream: "#F8F2DC",
  persian_red: "#CD4631",
  white: "#FFFFFF",
};

export const Typographies = {
  smallText: {
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "DMSans-Regular",
  },
  normalText: {
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "DMSans-Regular",
  },
  largeText: {
    fontSize: 28,
    lineHeight: 33,
    fontFamily: "DMSans-Regular",
  },
};

export const configTheme = () => {
  RNUILibColors.loadColors(Colors);
  RNUILibTypographies.loadTypographies(Typographies);
};
