import React, { createRef, useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// Navigators
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Splash from "../screens/Splash";
import RootStack from "./RootStack";
import Dashboard from "../screens/Dashboard";
import Profile from "../screens/Profile";
import color from "../constants/color";
import AuthDashboard from "../screens/AuthDashboard";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Schedule from "../screens/Schedule";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const [user_token, set_user_token] = useState("");

  useEffect(() => {
    getData();
  });

  async function getData() {
    token = await AsyncStorage.getItem("token");
    set_user_token(token);
  }
  return (
    <NavigationContainer>
      {!user_token ? (
        <RootStack />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name='AuthDash' component={AuthDashboard}/>
          <Stack.Screen name="Goto Dash" component={TabNavigator} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;

export const TabNavigator = (props) => {
  async function sign_out() {
    await AsyncStorage.removeItem("token");
    props.navigation.navigate("AuthDash");
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: color.secondary,
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => sign_out()}>
            <Image
              style={{ marginRight: 20, width: 40, height: 40 }}
              source={require("../assets/logout.png")}
            />
          </TouchableOpacity>
        ),
        tabBarActiveBackgroundColor: "rgba(221, 221, 221, 0.5)",
        tabBarInactiveBackgroundColor: color.secondary,
        tabBarStyle: {
          height: 70,
        },
        headerStyle: {
          backgroundColor: color.primary,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.primary,
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          tabBarIcon: (tintColor) => (
            <MaterialCommunityIcons
              name="tablet-dashboard"
              size={24}
              color={color.primary}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (tintColor) => (
            <Entypo name="user" size={24} color={color.primary} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="my dash" component={Dashboard} />
      <Stack.Screen name="Schedule" component={Schedule} />
    </Stack.Navigator>
  );
};
