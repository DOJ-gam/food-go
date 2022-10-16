import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import useAppTheme from "../hooks/useTheme";
import AppText from "./AppText";
import appStyles from "../constants/styles";

const AppButton = ({
  alignSelf = "stretch",
  onPress = () => {},
  my = 0,
  style,
  title,
  textStyle,
  width = "100%",
}) => {
  const { colors } = useAppTheme();
  const styles = makeStyles({ alignSelf, colors, my, width });
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <AppText style={[textStyle, styles.text]}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const makeStyles = ({ alignSelf, colors, my, width }) =>
  StyleSheet.create({
    button: {
      alignItems: "center",
      alignSelf,
      backgroundColor: colors.primary,
      borderRadius: 15,
      justifyContent: "center",
      padding: 15,
      marginVertical: my,
      width,
    },
    text: {
      fontWeight: "bold",
      color: colors.white,
    },
  });
