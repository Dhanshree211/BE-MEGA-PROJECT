import React from "react";
import { StyleSheet, Text, View } from "react-native";
import color from "../constants/color";
import LottieView from "lottie-react-native";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";

const AuthDashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require("../assets/AuthDashboard.json")}
          autoPlay
          loop
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Hello teacher's,getting stress about creating timetable?
        </Text>
        <Text
          style={{ textAlign: "center", fontSize: 10, fontFamily: "Regular" }}
        >
          Here we are with solution! manage your academic schedule with
          Schedulelt!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Log in" onPress={()=>navigation.navigate("Login")}/>
        <AppButton title="Register" type="white" onPress={()=>navigation.navigate("Register")}/>
      </View>
    </View>
  );
};

export default AuthDashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.secondary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  animationContainer: {
    height: 230,
    width: "85%",
    // borderWidth: 1,
    // borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  text: {
    fontFamily: "Regular",
    fontSize: 18,
    textAlign: "center",
  },
  textContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "green",
    height: 130,
    width:300
  },
  buttonContainer: {
    // borderWidth: 1,
    // borderColor: "pink",
    height: 120,
    width: "65%",
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
