import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppRow from "./AppRow";
import AppHeading from "./AppHeading";
import useAppTheme from "../hooks/useTheme";
import appStyles from "../constants/styles";
import AppText from "./AppText";

const AppLogo = () => {
  const { colors, icons } = useAppTheme();
  const styles = makeStyles(colors);
  return (
    <View>
      <Image source={icons.logo} style={[appStyles.logo, styles.logo]} />
      <AppRow jc="center">
        <AppText small color={colors.secondary} fw="bold">
          Food
        </AppText>
        <AppText small ml={2} fw="bold">
          Go
        </AppText>
      </AppRow>
    </View>
  );
};

export default AppLogo;

const makeStyles = (colors) =>
  StyleSheet.create({
    logo: {
      height: 20,
      width: 20,
    },
  });
