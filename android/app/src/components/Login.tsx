/* eslint-disable */

import React from "react";
import {StyleSheet, TextInput, View, } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.borderInput}></TextInput>
      <TextInput style={styles.borderInput}></TextInput>
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
    marginTop: 40
  }
});

export default Login;
