import { TouchableOpacity } from "react-native";
import { Badge } from "react-native-elements";
import { Colors } from "../constants";
import { View } from "react-native-ui-lib";

export const KHomeButton = ({ icon, onPress, notificationCount }) => {
  return (
    <View height-60 width-60>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.coconut_cream,
          height: 50,
          width: 50,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          // elevation: 7,
        }}
        onPress={onPress}
      >
        {icon}
      </TouchableOpacity>
      {notificationCount > 0 && (
        <Badge
          value={notificationCount.toString()}
          status="error"
          containerStyle={{
            position: "absolute",
            top: -8,
            right: -8,
            zIndex: 1,
            elevation: 1,
          }}
          badgeStyle={{ width: 20, height: 20 }}
          textStyle={{ textAlign: "center" }}
          textProps={{ style: { fontSize: 14, color: "white" } }}
        />
      )}
    </View>
  );
};
