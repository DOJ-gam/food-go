import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import useAppTheme from "../hooks/useTheme";
import LoginScreen from "../screens/auth/Login";
import RegisterScreen from "../screens/auth/Register";
import VerifyNumberScreen from "../screens/auth/VerifyNumber";
import OnboardingScreen from "../screens/onboarding";
import AppStack from "./AppStack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const { colors } = useAppTheme();

  return (
    <>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="VerifyNumber" component={VerifyNumberScreen} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
