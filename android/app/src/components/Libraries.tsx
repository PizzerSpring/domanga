/* eslint-disable */

import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Button, Linking } from "react-native";
import Nav from "./Nav";
import WebView from "react-native-webview";
import Login from "./Login";

const sources = [];

const Libraries = ({ navigation }) => {
  const[src, setSrc] = useState();
  return (
    <View style={styles.library}>
      <View style={styles.container}>
        <View style={styles.libraryInner}>
          <View>
            <Text style={styles.libraryText}>Библиотека</Text>
          </View>
          <View style={styles.libraryImages}>
            <Image source={require("../assets/images/loupe.png")}
                   style={{ width: 24, height: 24 }} />
            <Image source={require("../assets/images/menuburger.png")}
                   style={{ width: 24, height: 28 }} />
            <Image source={require("../assets/images/ellipsis.png")}
                   style={{ width: 24, height: 24 }} />
          </View>
        </View>
        <View style={styles.libraryContentInner}>
          <Image source={require("../assets/images/empty.png")}
                 style={[{ width: 64, height: 64 }, styles.libraryContentImg]} />
          <Text style={styles.libraryContentText}>Ваша библиотека пуста</Text>
        </View>
      </View>
      <Nav  navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  library: {
    paddingTop: 10,
    height: "100%",
    backgroundColor: "#fff8e6",
  },
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 0,
  },
  libraryInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 250
  },
  libraryText: {
    fontSize: 24,
    color: "#0e0800"
  },
  libraryImages: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexBasis: 100
  },
  libraryContentInner: {
    alignItems: "center",
    marginBottom: 250
  },
  libraryContentImg: {
    marginBottom: 30
  },
  libraryContentText: {
    color: "#55503d"
  },
});

export default Libraries;
