import { StyleSheet, Text } from "react-native";
import React from "react";
import useAppTheme from "../hooks/useTheme";
import appStyles from "../constants/styles";

const AppText = ({ children, style, ...rest }) => {
  const { colors } = useAppTheme();
  const styles = makeStyles(colors);
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;

const makeStyles = (colors) =>
  StyleSheet.create({
    text: { ...appStyles.text },
  });
