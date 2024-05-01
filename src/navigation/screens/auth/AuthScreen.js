import { Image, Text, View } from "react-native-ui-lib";
import { KButton, KContainer, KSpacer } from "../../../components";
import { KTextInput } from "../../../components";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { Colors, emailjs } from "../../../constants";
import { useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthScreen = () => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const { height, width } = useWindowDimensions();
  const { navigate } = useNavigation();

  const [isLoginPage, setIsLoginPage] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [username, setUsername] = useState("");

  const [securityCode, setSecurityCode] = useState("");
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
            borderRadius: 20,
            backgroundColor: "rgba(255,255,255, 0.75)",
          }}
        >
          <Image
            source={require("../../../../assets/photos/chef.png")}
            height={125}
            width={125}
          />
          <KSpacer />
          <Text largeText black>
            {isLoginPage ? "Login" : "Register"}
          </Text>
          <KSpacer height={30} />
          {isLoginPage ? (
            <View></View>
          ) : (
            <>
              <KTextInput
                icon={faUser}
                placeholder={"Enter your username....."}
                text={username}
                setText={setUsername}
              />
              <KSpacer height={20} />
            </>
          )}
          <KTextInput
            icon={faEnvelope}
            placeholder={"Enter your email..."}
            text={email}
            setText={setEmail}
          />
          <KSpacer height={20} />

          <KTextInput
            icon={faLock}
            placeholder={"Enter your password..."}
            text={password}
            setText={setPassword}
          />
          {isLoginPage ? (
            <View></View>
          ) : (
            <>
              <KSpacer height={20} />

              <KTextInput
                icon={faLock}
                placeholder={"Retype the password....."}
                text={verifyPassword}
                setText={setVerifyPassword}
              />
            </>
          )}
          <KSpacer height={30} />
          <KButton
            text={isLoginPage ? "Login" : "Register"}
            onPress={() => {
              if (!isLoginPage) {
                if (
                  password === verifyPassword &&
                  password.length >= 6 &&
                  username.length > 0 &&
                  regex.test(email)
                ) {
                  let emailData = {
                    service_id: emailjs.email_service_id,
                    template_id: emailjs.email_template_id,
                    user_id: emailjs.email_public_key,
                    template_params: {
                      email: email,
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
                      navigate("VerifyMailScreen", {
                        email,
                        password,
                        username,
                        securityCode,
                      });
                    })
                    .catch((err) => console.log(err));
                } else {
                  alert("Verify your credentials, something went wrong");
                }
              }
            }}
            color={Colors.persian_red}
          />
          <KSpacer height={20} />
          <View row center gap-10>
            <View height={1} bg-black width={50}></View>
            <Text>or</Text>
            <View height={1} bg-black width={50}></View>
          </View>
          <KSpacer height={20} />
          <KButton
            text={isLoginPage ? "Register" : "Login"}
            onPress={() => setIsLoginPage(!isLoginPage)}
            color={Colors.white}
          />
        </View>
      </View>
    </KContainer>
  );
};
