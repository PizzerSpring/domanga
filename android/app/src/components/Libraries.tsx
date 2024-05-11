/* eslint-disable */

import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Libraries = () => {
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
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 0,
  },
  library: {
    paddingTop: 10,
    minHeight: 1280,
    backgroundColor: "#fff8e6",
  },
  libraryInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
  }
});

export default Libraries;
