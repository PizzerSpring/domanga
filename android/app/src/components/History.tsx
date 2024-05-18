/* eslint-disable */

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "./Nav";

const History = ({navigation}) => {
  return (
    <View style={styles.history}>
      <View style={styles.container}>
        <View style={styles.historyInner}>
          <View>
            <Text style={styles.historyText}>История</Text>
          </View>
          <View style={styles.historyImages}>
            <Image source={require("../assets/images/loupe.png")}
                   style={{ width: 24, height: 24 }} />
            <Image source={require("../assets/images/garbage.png")}
                   style={{ width: 24, height: 28 }} />
          </View>
        </View>
        <View style={styles.historyContentInner}>
          <Image source={require("../assets/images/empty.png")}
                 style={[{ width: 64, height: 64 }, styles.historyContentImg]} />
          <Text style={styles.historyContentText}>Ничего не прочитано в последнее время</Text>
        </View>
      </View>
      <Nav  navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  history: {
    paddingTop: 10,
    height: "100%",
    backgroundColor: "#fff8e6"
  },
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 0,
  },
  historyInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 250
  },
  historyText: {
    fontSize: 24,
    color: "#0e0800"
  },
  historyImages: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexBasis: 70
  },
  historyContentInner: {
    alignItems: "center",
    marginBottom: 250
  },
  historyContentImg: {
    marginBottom: 30
  },
  historyContentText: {
    color: "#55503d"
  },
});

export default History;
