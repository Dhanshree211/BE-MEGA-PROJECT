import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import color from "../constants/color";

const AppButton = ({ title, type , onPress , style }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.defaultContainer,
          style,
          type === "white" ? styles.whiteBtnContainer : null,
        ]}
      >
        <Text
          style={[
            styles.defaultTitle,
            type === "white" ? styles.whiteTitle : null,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  defaultContainer: {
    alignItems: "center",
    backgroundColor: color.primary,
    width: 200,
    height: 45,
    justifyContent: "center",
    borderRadius: 18,
  },
  whiteBtnContainer: {
    backgroundColor: color.secondary,
    borderWidth: 1,
    borderColor: color.primary,
  },
  defaultTitle: {
    color: color.secondary,
    fontFamily: "Regular",
    fontSize: 18,
  },
  whiteTitle:{
    color:color.primary
  }
});
