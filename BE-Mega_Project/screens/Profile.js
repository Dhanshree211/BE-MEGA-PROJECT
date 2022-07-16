import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import color from "../constants/color";
import AppButton from "../components/AppButton";

const Profile = () => {
  //   let openImagePickerAsync = async () => {
  //     let permissionResult =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();

  //     if (permissionResult.granted === false) {
  //       alert("Permission to access camera roll is required!");
  //       return;
  //     }

  //     let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //     console.log(pickerResult);
  //   };
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }
  {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://pixlok.com/wp-content/uploads/2021/03/default-user-profile-picture.jpg",
          }}
        />
        <View style={styles.button1}>
          <AppButton
            title="Update Profile"
            style={{ marginTop: 50, elevation: 2, width: "70%", color: "blue" }}
            onPress={() => {
              setModalVisible(true);
            }}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <AppButton
                  title="Select Profile Image"
                  style={{ borderRadius: 10, elevation: 2, width: "70%" }}
                  onPress={() => {
                    openImagePickerAsync();
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
};

export default Profile;
const styles = StyleSheet.create({
  header: {
    backgroundColor: color.primary,
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#000000",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  button1: {
    alignItems: "center",
    marginTop: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
