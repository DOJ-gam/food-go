import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import useAppTheme from "../hooks/useTheme";
import HomeScreen from "../screens/home";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { colors } = useAppTheme();

  return (
    <>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
