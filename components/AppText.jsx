import { StyleSheet, Text } from "react-native";
import React from "react";
import useAppTheme from "../hooks/useTheme";
import appStyles from "../constants/styles";

const AppText = ({
  children,
  color = appStyles.text.color,
  fw = "normal",
  ml,
  mr,
  mt,
  mb,
  mx = 0,
  my = 0,
  small = false,
  style,
  ta = "left",
  ...rest
}) => {
  const { colors } = useAppTheme();
  const styles = makeStyles({
    colors,
    color,
    fw,
    ml,
    mr,
    mt,
    mb,
    mx,
    my,
    small,
    ta,
  });
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;

const makeStyles = ({ colors, color, fw, ml, mr, mt, mb, mx, my, small, ta }) =>
  StyleSheet.create({
    text: {
      ...appStyles.text,
      color: color,
      fontWeight: fw,
      marginLeft: ml || mx,
      marginRight: mr || mx,
      marginTop: mt || my,
      marginBottom: mb || my,
      marginHorizontal: mx,
      marginVertical: my,
      textAlign: ta,
      fontSize: small ? 11 : appStyles.text.fontSize,
    },
  });
