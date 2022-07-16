import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";

const TextField = ({
  leftIcon,
  rightIcon,
  type,
  onChangeText,
  value,
  textFieldName,
  onPressIcon,
  leftIconStyle,
  text_field_style,
  secureTextEntry,
  placeHolderColor,
  textInputStyle,
}) => {
  let rightIconContainer;
  if (rightIcon) {
    rightIconContainer = (
      <TouchableWithoutFeedback onPress={onPressIcon}>
        <View style={styles.iconContainer}>
          <Image source={rightIcon} style={styles.icon} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <View style={[styles.textFiledContainer, text_field_style]}>
      {leftIcon ? (
        <View style={styles.iconContainer}>
          <Image source={leftIcon} style={[styles.icon, leftIconStyle]} />
        </View>
      ) : null}
      <View
        style={[
          styles.placeHolder,
          !rightIcon ? { width: !rightIcon ? "82%" : null } : null,
        ]}
      >
        <TextInput
          placeholder={textFieldName}
          placeholderTextColor={["#fff", placeHolderColor]}
          style={[
            { color: "#fff", fontWeight: "bold", overflow: "hidden" },
            textInputStyle,
          ]}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {rightIconContainer}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  textFiledContainer: {
    width: "90%",
    height: 50,
    borderWidth: 3,
    borderColor: "#ffff",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 18,
    overflow: "hidden",
    paddingLeft: 5
  },
  iconContainer: {
    // borderWidth: 2,
    // borderColor: "green",
    width: "18%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "50%",
    height: "60%",
  },
  placeHolder: {
    // borderWidth: 2,
    // borderColor: "yellow",
    width: "64%",
    justifyContent: "center",
  },
});
