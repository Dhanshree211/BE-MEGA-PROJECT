import React from "react";
import { StyleSheet, Dimensions, LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/inter";
import color from "../BE-MegaProject/constants/color";


import * as firebase from "firebase";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

// Redux
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

// Reducer's
import userReducer from "./store/reducer/user";

// AppNavigator
import AppNavigator from "./navigation/AppNavigator";

// firebase config
import { config } from "./services/firebase-config";

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(config);
} else {
  app = firebase.app();
}
export const authentication = firebase.auth(app);

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default function App() {
  LogBox.ignoreAllLogs();
  let [fontsLoaded] = useFonts({
    Regular: require("./assets/font/VarelaRound-Regular.ttf"),
  });
  console.log("height-: ", height);
  console.log("width-: ", width);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
});
