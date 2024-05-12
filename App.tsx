/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* eslint-disable */

import React from "react";
import { StyleSheet, View } from "react-native";
import Libraries from "./android/app/src/components/Libraries";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./android/app/src/components/MyStack";
import Login from "./android/app/src/components/Login";

function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
};


export default App;
