import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useAppTheme from "../hooks/useTheme";

const HR = ({ h = 2, w = "100%", bg, my = 0, mx = 0 }) => {
  const { colors } = useAppTheme();
  const styles = makeStyles({ colors, h, w, bg, my, mx });
  return <View style={styles.hr} />;
};

export default HR;

const makeStyles = ({ colors, h, w, bg, mx, my }) =>
  StyleSheet.create({
    hr: {
      height: h,
      width: w,
      backgroundColor: bg || colors.light,
      marginHorizontal: mx,
      marginVertical: my,
    },
  });
