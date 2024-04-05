import { Text, View, Image } from "react-native-ui-lib";
import { KButton, KContainer, KSpacer } from "../../../components";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { Colors } from "../../../constants";
import { useState } from "react";

export const VerifyMailScreen = () => {
  const { height, width } = useWindowDimensions();

  const [passCode, setPassCode] = useState("");

  return (
    <KContainer>
      <View center flex>
        <View
          center
          padding-20
          height={height * 0.8}
          width={width * 0.8}
          style={{
            backgroundColor: "rgba(255,255,255, 0.75)",
            borderRadius: 20,
            justifyContent: "space-evenly",
          }}
        >
          <Text normalText black center>
            Enter verification code
          </Text>
          <View center>
            <Image
              height={125}
              width={125}
              source={require("../../../../assets/photos/mail.png")}
            />
            <KSpacer height={30} />

            {/*TODO put the user mail*/}
            <Text smallText black center>
              We’ve sent you a code to the user@gmail.com email address!
            </Text>
            <KSpacer height={20} />
            <OtpInput
              numberOfDigits={4}
              focusColor={Colors.persian_red}
              onTextChange={(text) => setPassCode(text)}
              focusStickBlinkingDuration={500}
              inputStyle={{ backgroundColor: "red" }}
            />
            <KSpacer height={20} />
            <Text smallText black>
              Didn’t received anything?{" "}
            </Text>
            {/*TODO: Send again verify code*/}
            <TouchableOpacity onPress={() => {}}>
              <Text smallText persian_red>
                Send again
              </Text>
            </TouchableOpacity>
          </View>
          {/*TODO: Verify logic*/}
          <KButton
            text={"Verify"}
            color={Colors.persian_red}
            onPress={() => {}}
          />
        </View>
      </View>
    </KContainer>
  );
};
