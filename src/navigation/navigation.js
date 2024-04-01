import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  CartScreen,
  RecipeScreen,
  HomeScreen,
  RecipesNameScreen,
} from "./screens/app";
import { LoginScreen, VerifyMailScreen } from "./screens/login";

const Stack = createNativeStackNavigator();

const LoginStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LoginStack" component={LoginScreen} />
    <Stack.Screen name="VerifyMailScreen" component={VerifyMailScreen} />
  </Stack.Navigator>
);

const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="RecipesNameScreen" component={RecipesNameScreen} />
    <Stack.Screen name="CartScreen" component={CartScreen} />
    <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
  </Stack.Navigator>
);

const Navigation = () => {
  const isLogin = false;
  return (
    <NavigationContainer>
      {isLogin ? <AppStack /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default Navigation;
