import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";

import useAppTheme from "../hooks/useTheme";

const AppScreen = ({ children, style }) => {
  const { colors } = useAppTheme();
  const styles = makeStyles(colors);
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default AppScreen;

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      paddingTop: Constants.statusBarHeight,
      // backgroundColor: colors.white,
      flex: 1,
      padding: 10,
    },
  });
