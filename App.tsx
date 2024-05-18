/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* eslint-disable */

import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Libraries from "./android/app/src/components/Libraries";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./android/app/src/components/MyStack";
import Login from "./android/app/src/components/Login";
import WebView from "react-native-webview";

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff8e6" barStyle="dark-content"/>
      <MyStack/>
    </NavigationContainer>
  )
};


export default App;
