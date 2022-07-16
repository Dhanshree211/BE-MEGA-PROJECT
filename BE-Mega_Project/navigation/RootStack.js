import React from "react";

// Navigators
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import SplashRoot from "../screens/SplashRoot";
import AuthDashboard from "../screens/AuthDashboard";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { TabNavigator } from "./AppNavigator";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashRoot" component={SplashRoot} />
      <Stack.Screen name="AuthDash" component={AuthDashboard} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Goto Dash" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootStack;
