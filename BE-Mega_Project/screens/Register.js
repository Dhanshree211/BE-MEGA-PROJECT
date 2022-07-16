import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import color from "../constants/color";
import logos from "../constants/logos";
import AppLogo from "../components/AppLogo";
import AppButton from "../components/AppButton";
import TextField from "../components/TextField";
import { useNavigation } from "@react-navigation/native";

import {authentication} from "../App";

const Register = () => {
  const [visiblePassword, setVisiblePassword] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState();

  const navigation = useNavigation();

  const RegisterUser = () => {
    authentication.createUserWithEmailAndPassword(email, password)
      // .then// createUserWithEmailAndPassword(authentication, email, password)
      .then((result) => {
        console.log("userInfo =>", result);
        setUserId(result);
      })
      .catch((result) => {
        console.log("UserInfo =>", result.user.uid);
        navigation.navigate("Register");
        Alert.alert("Enter Email & Password:");
      });
  };

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
            leftIcon={logos.user}
            textFieldName={"enter name"}
            placeHolderColor="#fff"
            textInputStyle={{ color: "#fff" }}
            onChangeText={(text) => {
              setUserName(text);
            }}
          />
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
            placeHolderColor="#fff"
            textInputStyle={{ color: "#fff" }}
            leftIcon={logos.key}
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
          title="Register"
          style={{ marginTop: 50, elevation: 6 }}
          onPress={() => {
            RegisterUser(), navigation.replace("Login");
          }}
        />
      </View>
      <View style={styles.footerContainer}>
        <Text style={{ color: "#ffff" }}>Already have an account? </Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#ffff", fontWeight: "bold", marginLeft: 3 }}>
            Login
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: color.primary,
  },
  textFieldContainer: {
    height: 210,
    justifyContent: "space-between",
    marginTop: 40,
  },
  footerContainer: {
    flexDirection: "row",
  },
});
