import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Lottie from "lottie-react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import AppScreen from "../../layouts/Screen";
import useAppTheme from "../../hooks/useTheme";
import AppHeading from "../../components/AppHeading";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

import appStyles from "../../constants/styles";
import AppLogo from "../../components/Logo";
import AppRow from "../../components/AppRow";
import AppText from "../../components/AppText";

const VerifyNumberScreen = () => {
  const { colors, animations, images } = useAppTheme();
  const styles = makeStyles(colors);
  const navigation = useNavigation();
  const [success, setSuccess] = useState(false);

  const handleToLogin = () => {
    navigation.navigate("Login");
  };
  const handleVerify = () => {
    setTimeout(() => {
      setSuccess(false);
      navigation.navigate("AppStack");
    }, 3000);
    setSuccess(true);
  };

  if (success)
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={images.bg}
          style={styles.imageBg}
          blurRadius={2}
        >
          <View style={styles.overlay}>
            <Lottie source={animations.success} autoPlay={true} loop={false} />
          </View>
          <AppText ta="center" color={colors.text} style={styles.congrats}>
            Congrats!{"\n"}Your number is verified
          </AppText>
        </ImageBackground>
      </View>
    );
  return (
    <AppScreen style={styles.container}>
      <AppRow mx={5} mt={20}>
        <AppRow ai="center">
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Feather name="chevron-left" size={30} color={colors.medium} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToLogin}>
            <AppRow ai="center">
              <AppText small color={colors.primary} fw="bold">
                Veryfy Phone Number
              </AppText>
            </AppRow>
          </TouchableOpacity>
        </AppRow>

        <AppLogo />
      </AppRow>
      <View style={styles.formContainer}>
        <AppHeading ta="center" mb={45}>
          Verify Your Phone Number
        </AppHeading>

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="* * * *"
          label="Enter pin sent to your phone"
          secureTextEntry
          leftIcon={
            <Feather name="check-circle" size={20} color={colors.medium} />
          }
        />
        <AppButton
          my={10}
          title="Verify"
          style={styles.button}
          onPress={handleVerify}
        />
        <AppRow jc="center">
          <AppText fw="bold" small>
            Already have an account?
          </AppText>
          <TouchableOpacity onPress={handleToLogin}>
            <AppText fw="bold" small color={colors.primary} ml={3}>
              Login
            </AppText>
          </TouchableOpacity>
        </AppRow>
      </View>
    </AppScreen>
  );
};

export default VerifyNumberScreen;

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    back: {
      marginRight: 10,
    },
    container: {},
    congrats: {
      position: "absolute",
      top: "70%",
      left: "-50%",
      right: "-50%",
    },
    formContainer: {
      marginHorizontal: 10,
      flex: 1,
      justifyContent: "center",
      marginBottom: 30,
    },
    imageContainer: {},
    imageBg: { flex: 1 },
    overlay: { flex: 1, backgroundColor: colors.light2, opacity: 0.6 },

    button: {},
    logo: {},
  });
