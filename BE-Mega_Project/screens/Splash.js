import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate("Goto Dash");
  }, 3000);

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView source={require("../assets/Splash.json")} autoPlay loop />
      </View>

      <View style={styles.textView}>
        <Text style={styles.text}>Schedulelt</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Regular",
    paddingTop: 20,
    fontSize: 28,
  },
  animationContainer: {
    height: 250,
    width: "80%",
    // borderWidth: 1,
    // borderColor: "red",
  },
});
