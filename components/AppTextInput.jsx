import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

import useAppTheme from "../hooks/useTheme";
import appStyles from "../constants/styles";
import AppText from "./AppText";

const AppTextInput = ({
  containerStyle,
  inputStyle,
  label,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const { colors } = useAppTheme();
  const styles = makeStyles({ colors, label });
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <AppText style={styles.label}>{label}</AppText>}
      {leftIcon && leftIcon}
      <TextInput style={[styles.input, inputStyle]} {...rest} placehol />
      {rightIcon && rightIcon}
    </View>
  );
};

export default AppTextInput;

const makeStyles = ({ colors, label }) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#eee",
      borderRadius: 12,
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      padding: 13,
      marginVertical: label ? 20 : 10,
    },
    input: {
      ...appStyles.text,
      flex: 1,
      marginHorizontal: 8,
      fontSize: 16,
    },
    label: {
      position: "absolute",
      top: -20,
      fontSize: 14,
      fontWeight: "bold",
      color: "#555",
    },
  });
