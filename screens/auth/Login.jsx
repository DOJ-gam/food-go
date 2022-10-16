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
import HR from "../../components/HR";

const LoginScreen = () => {
  const { colors, animations, icons } = useAppTheme();
  const styles = makeStyles(colors);
  const navigation = useNavigation();

  const handleToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <AppScreen style={styles.container}>
      <AppRow mx={5}>
        <AppLogo />
        <TouchableOpacity onPress={() => navigation.navigate("AppStack")}>
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
          Login
        </AppHeading>

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
          placeholder="............."
          label="Password"
          secureTextEntry
          leftIcon={<Feather name="lock" size={20} color={colors.medium} />}
        />
        <TouchableOpacity onPress={handleToRegister}>
          <AppText
            fw="bold"
            small
            color={colors.primary}
            ml={3}
            ta="right"
            mb={10}
          >
            forgoot password?
          </AppText>
        </TouchableOpacity>
        <AppButton
          my={20}
          title="Login"
          style={styles.button}
          onPress={() => navigation.navigate("AppStack")}
        />
        <AppRow jc="center">
          <AppText fw="bold" small>
            Don't have an account?
          </AppText>
          <TouchableOpacity onPress={handleToRegister}>
            <AppText fw="bold" small color={colors.primary} ml={3}>
              Signup
            </AppText>
          </TouchableOpacity>
        </AppRow>
        <AppRow my={20} ai="center">
          <HR w="45%" bg="#999" />
          <AppText color={colors.primary}>or</AppText>
          <HR w="45%" bg="#999" />
        </AppRow>
        <AppRow jc="center" ai="center">
          <TouchableOpacity style={styles.socialMediaButton}>
            <Image style={styles.socialMediaImage} source={icons.facebook} />
            <AppText style={styles.socialMediaText}>Facebook</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMediaButton}>
            <Image style={styles.socialMediaImage} source={icons.google} />
            <AppText style={styles.socialMediaText}>Google</AppText>
          </TouchableOpacity>
        </AppRow>
      </View>
    </AppScreen>
  );
};

export default LoginScreen;

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {},
    formContainer: { flex: 1, justifyContent: "center" },
    imageContainer: {},
    socialMediaButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#eee",
      padding: 5,
      borderRadius: 10,
      width: 100,
      justifyContent: "center",
      marginHorizontal: 10,
    },
    socialMediaImage: { height: 15, width: 15, marginRight: 5 },
    socialMediaText: {
      fontSize: 12,
    },
  });
