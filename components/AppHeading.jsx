import { StyleSheet, Text } from "react-native";
import React from "react";
import useAppTheme from "../hooks/useTheme";
import AppText from "./AppText";

const AppHeading = ({ children, style }) => {
  const { colors } = useAppTheme();
  const styles = makeStyles(colors);
  return <AppText style={[styles.text, style]}>{children}</AppText>;
};

export default AppHeading;

const makeStyles = (colors) =>
  StyleSheet.create({
    text: { fontSize: 30, fontWeight: "800", letterSpacing: 2 },
  });
