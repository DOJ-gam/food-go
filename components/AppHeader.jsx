import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import useAppTheme from "../hooks/useTheme";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AppHeader = ({ style, title }) => {
  const { colors } = useAppTheme();
  const styles = makeStyles(colors);
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="chevron-left" style={styles.icon} />
      </TouchableOpacity>
      <AppText style={[styles.text]}>{title}</AppText>
    </View>
  );
};

export default AppHeader;

const makeStyles = (colors) =>
  StyleSheet.create({
    container: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
    text: {
      fontSize: 22,
      fontWeight: "800",
      letterSpacing: 2,
      color: colors.white,
      flex: 1,
      textAlign: "center",
    },
    icon: {
      color: colors.white,
      fontSize: 40,
    },
  });
