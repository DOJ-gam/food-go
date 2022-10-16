import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import useAppTheme from "../hooks/useTheme";
import AppText from "./AppText";
import appStyles from "../constants/styles";

const AppButton = ({ onPress = () => {}, style, title, textStyle }) => {
  const { colors } = useAppTheme();
  const styles = makeStyles(colors);
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <AppText style={[textStyle, styles.text]}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const makeStyles = (colors) =>
  StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
      width: "100%",
    },
    text: {
      fontWeight: "bold",
      color: colors.white,
    },
  });
