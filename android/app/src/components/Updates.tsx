/* eslint-disable */

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "./Nav";

const Updates = ({navigation}) => {
  return (
    <View style={styles.updates}>
      <View style={styles.container}>
        <View style={styles.updatesInner}>
          <View>
            <Text style={styles.updatesText}>Обновления</Text>
          </View>
          <View style={styles.updatesImages}>
            <Image source={require("../assets/images/preloader.png")}
                   style={{ width: 24, height: 24 }} />
          </View>
        </View>
        <View style={styles.updatesContentInner}>
          <Image source={require("../assets/images/empty.png")}
                 style={[{ width: 64, height: 64 }, styles.updatesContentImg]} />
          <Text style={styles.updatesContentText}>Нет новых обновлений</Text>
        </View>
      </View>
      <Nav  navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  updates: {
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
  updatesInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 250
  },
  updatesText: {
    fontSize: 24,
    color: "#0e0800"
  },
  updatesImages: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

  },
  updatesContentInner: {
    alignItems: "center",
    marginBottom: 250
  },
  updatesContentImg: {
    marginBottom: 30
  },
  updatesContentText: {
    color: "#55503d"
  },
});

export default Updates;
