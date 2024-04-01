import { Image, Text, View } from "react-native-ui-lib";
import { KButton, KContainer, KSpacer } from "../../../components";
import { KTextInput } from "../../../components/KTextInput";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { Colors } from "../../../constants";
import { useWindowDimensions } from "react-native";
import { useState } from "react";

export const LoginScreen = () => {
  const { height, width } = useWindowDimensions();

  const [isLoginPage, setIsLoginPage] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <KContainer>
      <View center>
        <View
          center
          padding={20}
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
            //TODO: Implement the login and register logic
            onPress={isLoginPage ? () => {} : () => {}}
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
