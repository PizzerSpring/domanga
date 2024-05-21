/* eslint-disable */

import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Button, Linking, Pressable } from "react-native";
import Nav from "./Nav";
import WebView from "react-native-webview";
import Login from "./Login";

export const sources = [
  {
    id: 1,
    title: "Google"
    //image src
  },
  {
    id: 2,
    title: "Remanga"
    //image src
  },
  {
    id: 3,
    title: "Mangalib"
    //image src
  }
];

const Libraries = ({ navigation }) => {
  const [src, setSrc] = useState(sources);
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
        {src.map(s => {
          return (
            <Pressable onPress={() =>
              navigation.navigate("Preview", { names: s.title})
            }>
              <View style={styles.srcComponent} key={s.id}>
                <Text>{s.title}</Text>
                <Image source={require("../assets/images/google.png")}
                       style={{ width: 24, height: 24 }} />
              </View>
            </Pressable>
          );
        })}
        {/*<View style={styles.libraryContentInner}>
          <Image source={require("../assets/images/empty.png")}
                 style={[{ width: 64, height: 64 }, styles.libraryContentImg]} />
          <Text style={styles.libraryContentText}>Ваша библиотека пуста</Text>
        </View>*/}
      </View>
      <Nav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  library: {
    paddingTop: 10,
    height: "100%",
    backgroundColor: "#fff8e6",
    display: "flex",
    justifyContent: "space-between"
  },
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 0
  },
  libraryInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50
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
    alignItems: "center"
  },
  libraryContentImg: {
    marginBottom: 30
  },
  libraryContentText: {
    color: "#55503d"
  },
  srcComponent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000000",
    padding: 10,
    margin: 5,
    borderRadius: 10
  }
});

export default Libraries;
