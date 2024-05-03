import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  CartScreen,
  RecipeScreen,
  HomeScreen,
  RecipesNameScreen,
} from "./screens/app";
import { AuthScreen, VerifyMailScreen } from "./screens/auth";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../backend";
import DiscoverRecipes from "./screens/app/DiscoverRecipes";

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
    <Stack.Screen name="RecipesNameScreen" component={RecipesNameScreen} />
    <Stack.Screen name="CartScreen" component={CartScreen} />
    <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
    <Stack.Screen name="DiscoverRecipes" component={DiscoverRecipes} />
  </Stack.Navigator>
);

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(user !== null);
    });
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default Navigation;
