import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import AppLogo from "../components/AppLogo";
import TextField from "../components/TextField";
import AppButton from "../components/AppButton";
import color from "../constants/color";
import logos from "../constants/logos";
import { useNavigation } from "@react-navigation/native";
import { authentication } from "../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (props) => {
  const [visiblePassword, setVisiblePassword] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // console.log(password);

  const navigation = useNavigation();
  const LoginUser = async () => {
    authentication
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        console.log("Login user_Info =>", result.user.uid);
        await AsyncStorage.setItem("token", result.user.uid);
        navigation.replace("Goto Dash");
      })
      .catch((result) => {
        console.log("UserInfo =>", result);
        Alert.alert("Enter Email & Password:");
        navigation.navigate("Login");
      });
  };
  // const getData = async () => {
  //   try {
  //     const userId = await AsyncStorage.getItem("User_Info", userId);
  //     if (userId !== null) {
  //       // userId   previously  stored
  //     }
  //   } catch (e) {
  //     //error reading value
  //   }
  // };
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <AppLogo />
        <View style={styles.textFieldContainer}>
          <TextField
            leftIcon={logos.email}
            textFieldName="email"
            placeHolderColor="#fff"
            textInputStyle={{ color: "#fff" }}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextField
            placeHolderColor={"#fff"}
            textInputStyle={{ color: "#fff" }}
            leftIcon={logos.key}
            leftIconStyle={styles.leftIconStyle}
            rightIcon={visiblePassword ? logos.invisible : logos.eye}
            textFieldName="password"
            type="password"
            value={password}
            secureTextEntry={visiblePassword}
            onChangeText={(text) => setPassword(text)}
            onPressIcon={() => setVisiblePassword(!visiblePassword)}
          />
        </View>
        <AppButton
          type="white"
          title="login"
          style={{ marginTop: 50, elevation: 6 }}
          onPress={() => {
            LoginUser();
          }}
        />
      </View>
      <View style={styles.footerContainer}>
        <Text style={{ color: "#ffff" }}>Don't have an account?</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ color: "#ffff", fontWeight: "bold", marginLeft: 3 }}>
            Create One!
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: color.primary,
  },
  leftIconStyle: {
    width: "50%",
    height: "63%",
  },
  textFieldContainer: {
    // borderWidth: 2,
    // borderColor: "green",
    height: 150,
    justifyContent: "space-between",
    marginTop: 40,
  },
  footerContainer: {
    flexDirection: "row",
  },
});
