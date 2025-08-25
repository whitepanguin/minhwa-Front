import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// pages 폴더에서 import
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Gallery from "./pages/Gallery";
import MyAlbum from "./pages/MyAlbum";
import MinwhaTrans from "./pages/MinwhaTrans";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="MyAlbum" component={MyAlbum} />
        <Stack.Screen name="MinwhaTrans" component={MinwhaTrans} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
