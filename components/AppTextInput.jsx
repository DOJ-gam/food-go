import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

import useAppTheme from "../hooks/useTheme";
import appStyles from "../constants/styles";

const AppTextInput = ({
  containerStyle,
  inputStyle,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const { colors } = useAppTheme();
  const styles = makeStyles(colors);
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon && leftIcon}
      <TextInput style={[styles.input, inputStyle]} {...rest} />
      {rightIcon && rightIcon}
    </View>
  );
};

export default AppTextInput;

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.light,
      //   borderRadius: 25,
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      padding: 15,
      marginVertical: 10,
      borderBottomWidth: 1,
      borderColor: colors.grey,
    },
    input: {
      ...appStyles.text,
      flex: 1,
      marginHorizontal: 5,
    },
  });
