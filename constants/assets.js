import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
export const sizes = { width, height };
export const colors = {
  primary: "#6ADA25",
  secondary: "#F81717",
  dark: "#29C16E",
  light2: "#E2F5CB",
  grey: "#CCCCCC",

  light: "#f8f4f4",
  danger: "#ff5252",
  text: "#333",
  black: "#000000",
  white: "#FFF",
  background: "rgb(242, 242, 242)",
  card: "rgb(255, 255, 255)",
  medium: "#6e6969",
};
export const icons = {
  logo: require("../assets/icons/logo.png"),
  google: require("../assets/icons/google.png"),
  facebook: require("../assets/icons/facebook.png"),
};

export const images = {
  bg: require("../assets/images/bg.png"),
};
export const animations = {
  success: require("../assets/animations/success.json"),
};

const assets = {
  sizes,
  colors,
  icons,
  images,
  animations,
};
export default assets;
