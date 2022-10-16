import { StyleSheet } from "react-native";
import React, { useState } from "react";

import AppScreen from "../../layouts/Screen";
import AppText from "../../components/AppText";
import useAppTheme from "../../hooks/useTheme";

const HomeScreen = ({ navigation }) => {
  const { colors } = useAppTheme();
  const styles = makeStyles(colors);
  return (
    <AppScreen>
      <AppText>Home</AppText>
    </AppScreen>
  );
};

export default HomeScreen;

const makeStyles = (colors) => StyleSheet.create({});
