import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useAppTheme from "../hooks/useTheme";

const TransactionsButton = ({ onPress }) => {
  const { colors, icons } = useAppTheme();
  const styles = makeStyles(colors);
  return (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: "#eee" }}>
      <View style={styles.container}>
        <Image source={icons.trans} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionsButton;

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      height: 80,
      width: 80,
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center",
      bottom: 35,
      borderColor: colors.white,
      borderWidth: 10,
      elevation: 2,
    },
    image: {
      height: 40,
      width: 40,
    },
  });
