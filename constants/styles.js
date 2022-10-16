import { Platform } from "react-native";
import { colors } from "./assets";

const appStyles = {
  border: {
    borderWidth: 1,
    borderColor: "#ccc",
  },

  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.text,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    // marginTop: 50,
    // marginBottom: 20,
  },
};

export default appStyles;
