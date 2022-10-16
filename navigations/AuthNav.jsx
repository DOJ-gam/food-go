import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import useAppTheme from "../hooks/useTheme";
import LoginScreen from "../screens/auth/Login";
import AppStack from "./AppStack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const { colors } = useAppTheme();

  return (
    <>
      <StatusBar backgroundColor={colors.primary} style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
