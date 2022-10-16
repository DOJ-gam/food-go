import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import useAppTheme from "../hooks/useTheme";
import AuthStack from "./AuthStack";
import navigationTheme from "./navigationTheme";

const AppNav = () => {
  const { colors } = useAppTheme();
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthStack />
      {/* <AppStack/> */}
    </NavigationContainer>
  );
};

export default AppNav;
