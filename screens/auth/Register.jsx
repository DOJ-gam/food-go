import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
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

const RegisterScreen = () => {
  const { colors, animations, icons } = useAppTheme();
  const styles = makeStyles(colors);
  const navigation = useNavigation();

  const handleToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <AppScreen style={styles.container}>
      <AppRow mx={5} mt={20}>
        <AppLogo />
        <TouchableOpacity onPress={handleToLogin}>
          <AppRow ai="center">
            <AppText small color={colors.primary} fw="bold">
              Skip now
            </AppText>
            <MaterialCommunityIcons
              name="arrow-right"
              size={15}
              color={colors.primary}
            />
          </AppRow>
        </TouchableOpacity>
      </AppRow>
      <View style={styles.formContainer}>
        <AppHeading ta="center" mb={45}>
          Sign up
        </AppHeading>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Angelline Willams"
          label="Full Name"
          leftIcon={<Feather name="user" size={20} color={colors.medium} />}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="willamsangelline@gmail.com"
          label="Email"
          leftIcon={<Feather name="mail" size={20} color={colors.medium} />}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          placeholder="09031508575"
          label="Phone"
          secureTextEntry
          leftIcon={<Feather name="phone" size={20} color={colors.medium} />}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="............."
          label="Password"
          secureTextEntry
          leftIcon={<Feather name="lock" size={20} color={colors.medium} />}
        />
        <AppButton
          my={20}
          title="Sign up"
          style={styles.button}
          onPress={() => navigation.navigate("VerifyNumber")}
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

export default RegisterScreen;

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {},
    formContainer: {
      marginHorizontal: 10,
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: 30,
    },
    imageContainer: {},

    button: {},
    logo: {},
  });
