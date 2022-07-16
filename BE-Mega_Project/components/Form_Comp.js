import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

import TextField from "./TextField";

import color from "../constants/color";

export default class Form_Comp extends Component {
  render() {
    const {
      column_title,
      textInputContainer,
      container_style,
      textFieldName,
      value,
      onChangeText,
    } = this.props;
    return (
      <View style={container_style}>
        <View style={styles.row1}>
          <Text style={styles.fieldTitle}>{column_title}</Text>
        </View>

        <TextField
          textFieldName={textFieldName}
          placeHolderColor="black"
          textInputStyle={{ color: "black" }}
          value={value}
          onChangeText={onChangeText}
          text_field_style={[styles.textInputContainer, textInputContainer]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row1: {
    // borderWidth: 1,
    // borderColor: "white",
    minWidth: 80,
    height: "100%",
    justifyContent: "space-between",
    height: 25,
    padding: 0,
  },
  fieldTitle: {
    fontWeight: "bold",
    color: color.secondary,
  },
  textInputContainer: {
    height: "50%",
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 4,
  },
});
