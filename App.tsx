/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* eslint-disable */

import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Login from "./android/app/src/components/Login";

function App() {
  return <View style={styles.container}>
           <Login/>
         </View>;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center'
  },
});

export default App;
