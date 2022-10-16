import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useAppTheme from "../hooks/useTheme";

const AppCard = ({ children, style }) => {
  const { colors } = useAppTheme();
  const styles = makeStyles(colors);
  return <View style={[styles.container, style]}>{children}</View>;
};

export default AppCard;

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      padding: 10,
      borderRadius: 10,
      elevation: 10,
    },
  });
