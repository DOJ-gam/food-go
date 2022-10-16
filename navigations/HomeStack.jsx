import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import useAppTheme from "../hooks/useTheme";
import HomeScreen from "../screens/home";
import IpowerScreen from "../screens/i-power";
import ItopUpScreen from "../screens/i-top-up";
import ReceiveMoneyScreen from "../screens/receive-money";
import SendMoneyScreen from "../screens/send-money";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { colors } = useAppTheme();

  return (
    <>
      <StatusBar backgroundColor={colors.primary} style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IPower" component={IpowerScreen} />
        <Stack.Screen name="ITopup" component={ItopUpScreen} />
        <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
        <Stack.Screen name="ReceiveMoney" component={ReceiveMoneyScreen} />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
