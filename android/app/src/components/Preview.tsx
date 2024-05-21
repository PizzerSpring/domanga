/* eslint-disable */

import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "./Nav";

const Preview = ({navigation, route}) => {
  return (
    <View style={styles.preview}>
      <View style={styles.container}>
        <View style={styles.previewInner}>
          <View>
            <Image/>
            <Text style={styles.previewText}>{route.params.names}</Text>
          </View>
          <View style={styles.previewImages}>
            <Image source={require("../assets/images/loupe.png")}
                   style={{ width: 24, height: 24 }} />
            <Image source={require("../assets/images/menuburger.png")}
                   style={{ width: 24, height: 28 }} />
            <Image source={require("../assets/images/ellipsis.png")}
                   style={{ width: 24, height: 24 }} />
          </View>
        </View>
        <View>
          <View>
            <Image/>
            <Text></Text>
          </View>
          <View>
            <Image/>
            <Text></Text>
          </View>
          <View>
            <Image/>
            <Text></Text>
          </View>
        </View>
        <View>
          <Text>Preview</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    paddingTop: 10,
    height: "100%",
    backgroundColor: "#fff8e6",
    display: 'flex',
    justifyContent: 'space-between'
  },
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 0,
  },
  previewInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50
  },
  previewText: {
    fontSize: 24,
    color: "#0e0800"
  },
  previewImages: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexBasis: 100
  },
});

export default Preview;
