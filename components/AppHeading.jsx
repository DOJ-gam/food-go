import { StyleSheet, Text } from "react-native";
import React from "react";
import useAppTheme from "../hooks/useTheme";
import AppText from "./AppText";
import appStyles from "../constants/styles";

const AppHeading = ({ children, style, ...rest }) => {
  const { colors } = useAppTheme();
  const styles = makeStyles({ colors });
  return (
    <AppText style={[styles.text, style]} {...rest}>
      {children}
    </AppText>
  );
};

export default AppHeading;

const makeStyles = ({ colors, color }) =>
  StyleSheet.create({
    text: { fontSize: 30, fontWeight: "800" },
  });
