/* eslint-disable */

import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Pressable, Linking } from "react-native";
import WebView from "react-native-webview";

const Login = () => {
  return (
    <View style={styles.container}>
      {/*<WebView source={{uri: 'https://www.google.com/'}}/>*/}
      {/*<TextInput style={styles.borderInput}></TextInput>
      <TextInput style={styles.borderInput}></TextInput>
      <Pressable style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>Вход</Text>
        <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL('https://remanga.org/')}>
          Remanga
        </Text>
      </Pressable>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  borderInput: {
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    marginTop: 40,
  },
  buttonStyle: {
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    marginTop: 40,
    backgroundColor: '#b9f7f5',
  },
  buttonTextStyle: {
    textAlign: 'center',
    padding: 10,
  }
});

export default Login;
