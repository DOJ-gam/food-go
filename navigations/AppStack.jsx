import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import useAppTheme from "../hooks/useTheme";
import HomeScreen from "../screens/home";
import TransactionsButton from "./TransactionsButton";
import TransactionsScreen from "../screens/transactiions";
import AccountScreen from "../screens/account/Account";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  const { colors } = useAppTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#eee",
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: colors.black,

        tabBarStyle: {
          elevation: 20,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 80,
          borderColor: colors.grey,
          marginBottom: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TransactionsButton
              onPress={() => navigation.navigate("Transactions")}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
