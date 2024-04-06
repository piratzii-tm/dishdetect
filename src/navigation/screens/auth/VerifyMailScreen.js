import { Text, View, Image } from "react-native-ui-lib";
import { KButton, KContainer, KSpacer } from "../../../components";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { Colors } from "../../../constants";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { emailjs } from "../../../constants/api/emailjs";
import { handleRegistration } from "../../../backend/authentication/handleRegistration";

export const VerifyMailScreen = ({ route }) => {
  const { height, width } = useWindowDimensions();

  const [passCode, setPassCode] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [codeResent, setCodeResent] = useState(false);

  useEffect(() => {
    setSecurityCode(
      (
        Math.floor(Math.random() * 10) * 1000 +
        Math.floor(Math.random() * 10) * 100 +
        Math.floor(Math.random() * 10) * 10 +
        Math.floor(Math.random() * 10)
      ).toString(),
    );
  }, []);

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

            <Text smallText black center>
              We’ve sent you a code to the {route.params.email} email address!
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
            <TouchableOpacity
              onPress={() => {
                setCodeResent(true);
                setPassCode("");

                let emailData = {
                  service_id: emailjs.email_service_id,
                  template_id: emailjs.email_template_id,
                  user_id: emailjs.email_public_key,
                  template_params: {
                    email: route.params.email,
                    body: securityCode,
                  },
                };
                // we send the email
                fetch("https://api.emailjs.com/api/v1.0/email/send", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(emailData),
                })
                  .then((res) => {
                    console.log(
                      "Send security code: " + securityCode + " with success",
                    );
                  })
                  .catch((err) => console.log(err));
              }}
            >
              <Text smallText persian_red>
                Send again
              </Text>
            </TouchableOpacity>
          </View>
          <KButton
            text={"Verify"}
            color={Colors.persian_red}
            onPress={() => {
              if (
                (!codeResent ? route.params.securityCode : securityCode) ===
                passCode
              ) {
                handleRegistration({
                  email: route.params.email,
                  password: route.params.password,
                  username: route.params.username,
                });
              } else {
                alert("Something went wrong");
              }
            }}
          />
        </View>
      </View>
    </KContainer>
  );
};
