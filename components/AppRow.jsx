import React from "react";
import { View, StyleSheet } from "react-native";

const AppRow = ({
  children,
  jc = "space-between",
  ai = "stretch",
  p = 0,
  mx = 0,
  my = 0,
  mt,
  mb,
  minWidth = 200,
  style,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: ai,
        justifyContent: jc,
        padding: p,
        marginHorizontal: mx,
        marginVertical: my,
        marginBottom: mb || my,
        marginTop: mt || my,
        // minWidth,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default AppRow;
