import { KContainer } from "../../../components";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GeneralScreen = () => {
  const { navigate } = useNavigation();
  return (
    <KContainer>
      <Button title={"HomeScreen"} onPress={() => navigate("HomeScreen")} />
      <Button
        title={"ProfileScreen"}
        onPress={() => navigate("ProfileScreen")}
      />
      <Button title={"CartScreen"} onPress={() => navigate("CartScreen")} />
      <Button
        title={"DiscoverRecipes"}
        onPress={() => navigate("DiscoverRecipes")}
      />
    </KContainer>
  );
};

export default GeneralScreen;
