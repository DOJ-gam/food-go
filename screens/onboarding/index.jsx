import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import AppScreen from "../../layouts/Screen";
import AppText from "../../components/AppText";
import useAppTheme from "../../hooks/useTheme";
import appStyles from "../../constants/styles";
import AppRow from "../../components/AppRow";
import AppHeading from "../../components/AppHeading";
import AppButton from "../../components/AppButton";

const OnboardingScreen = ({ navigation }) => {
  const { colors, icons } = useAppTheme();
  const styles = makeStyles(colors);
  return (
    <AppScreen style={styles.container}>
      <Image source={icons.logo} style={[styles.logo, appStyles.logo]} />
      <AppRow jc="center" mb={70}>
        <AppHeading style={styles.h1} color={colors.secondary}>
          Food
        </AppHeading>
        <AppHeading style={styles.h1}>Go</AppHeading>
      </AppRow>
      <AppButton
        title="Get Started"
        width={140}
        alignSelf="center"
        my={10}
        onPress={() => navigation.navigate("Register")}
      />
      <AppRow jc="center" mb={10}>
        <AppText mr={5}>at your</AppText>
        <AppText fw="bold">Doorstep</AppText>
      </AppRow>
      <View style={styles.bottom}>
        <AppText small ta="center" fw="400">
          Buy food online and get it delivered to your doorstep without any
          hassle
        </AppText>
      </View>
    </AppScreen>
  );
};

export default OnboardingScreen;

const makeStyles = (colors) =>
  StyleSheet.create({
    bottom: {
      width: "70%",
      alignSelf: "center",
    },
    container: {
      justifyContent: "center",
    },
    h1: {
      fontSize: 55,
      letterSpacing: 0,
    },
  });
