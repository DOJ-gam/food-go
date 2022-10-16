import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import useAppTheme from "../hooks/useTheme";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  const { colors } = useAppTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarInactiveTintColor: "#eee",

        tabBarStyle: {
          borderColor: colors.grey,
          backgroundColor: colors.primary,
          borderWidth: 1,
          justifyContent: "flex-end",
          borderTopRightRadius: 200,
          borderTopLeftRadius: 200,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          // height: 70,
          // transform: [{ perspective: 850 }, { scaleY: 0.7 }],
          overflow: "hidden",
        },
        tabBarLabelStyle: {
          // fontSize: 12,
          marginTop: -5,
          // marginBottom: 5,
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
        name="Search"
        component={HomeStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={HomeStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={HomeStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
