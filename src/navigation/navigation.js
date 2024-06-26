import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  CartScreen,
  RecipeScreen,
  HomeScreen,
  RecipesNameScreen,
  SavedRecipes,
  DiscoverRecipes,
  ProfileScreen,
} from "./screens/app";
import { AuthScreen, VerifyMailScreen } from "./screens/auth";
import { useContext } from "react";
import { AuthProvider } from "../constants";

const Stack = createNativeStackNavigator();

const LoginStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LoginStack" component={AuthScreen} />
    <Stack.Screen name="VerifyMailScreen" component={VerifyMailScreen} />
  </Stack.Navigator>
);

const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="RecipesNameScreen" component={RecipesNameScreen} />
    <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
    <Stack.Screen name="CartScreen" component={CartScreen} />
    <Stack.Screen name="DiscoverRecipes" component={DiscoverRecipes} />
    <Stack.Screen name="SavedRecipes" component={SavedRecipes} />
  </Stack.Navigator>
);

const Navigation = () => {
  const { isLogged } = useContext(AuthProvider);
  return (
    <NavigationContainer>
      {isLogged ? <AppStack /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default Navigation;
