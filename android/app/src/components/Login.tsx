/* eslint-disable */

import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Pressable, Linking } from "react-native";
import WebView from "react-native-webview";
import Nav from "./Nav";

const Login = ({ navigation }) => {
  return (

        <WebView javaScriptEnabled={true}
                 domStorageEnabled={true}
                 startInLoadingState={true}
                 scalesPageToFit={true}
                 style={{width: 320, height: 200}} source={{ uri: "https://www.google.com/" }}
        cacheEnabled={false}/>




  );
};

const styles = StyleSheet.create({
  container: {
    /*alignItems: 'center'*/
  },
  borderInput: {
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    marginTop: 40
  },
  buttonStyle: {
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    marginTop: 40,
    backgroundColor: "#b9f7f5"
  },
  buttonTextStyle: {
    textAlign: "center",
    padding: 10
  }
});

export default Login;
