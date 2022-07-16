import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function CheckBox({ onPress, isChecked, checkBoxStyle }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          isChecked ? { backgroundColor: "white" } : styles.container,
          checkBoxStyle
        ]}
      >
        {isChecked ? (
          <Image
            source={require("../assets/check.png")}
            style={{ width: 18, height: 18 }}
          />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
