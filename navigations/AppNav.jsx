import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import useAppTheme from "../hooks/useTheme";
import AuthStack from "./AuthNav";
import navigationTheme from "./navigationTheme";

const AppNav = () => {
  const { colors } = useAppTheme();
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar backgroundColor={colors.primary} style="light" />
      <AuthStack />
      {/* <AppStack/> */}
    </NavigationContainer>
  );
};

export default AppNav;
