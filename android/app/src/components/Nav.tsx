/* eslint-disable */

import React from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

const Nav = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.menuImage}  onPress={() =>
        navigation.navigate('Library')
      }>
        <Image source={require("../assets/images/books.png")}
               style={{ width: 24, height: 24,  }} />
        <Text>Библио...</Text>
      </Pressable>
      <Pressable style={styles.menuImage}  onPress={() =>
        navigation.navigate('Updates')
      }>
        <Image source={require("../assets/images/updates.png")}
               style={{ width: 24, height: 24 }} />
        <Text>Обновл...</Text>
      </Pressable>
      <Pressable style={styles.menuImage}  onPress={() =>
        navigation.navigate('History')
      }>
        <Image source={require("../assets/images/history.png")}
               style={{ width: 24, height: 24 }} />
        <Text>История</Text>
      </Pressable>
      <Pressable style={styles.menuImage}  onPress={() =>
        navigation.navigate('Login')
      }>
        <Image source={require("../assets/images/compass.png")}
               style={{ width: 24, height: 24 }} />
        <Text>Поиско...</Text>
      </Pressable>
      <Pressable disabled style={styles.menuImage}  onPress={() =>
        navigation.navigate('Login')
      }>
        <Image source={require("../assets/images/settings.png")}
               style={{ width: 24, height: 24 }} />
        <Text>Настро...</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f3ebd4",
    padding:15
  },
  menuImage: {
    alignItems: 'center'
  }
});

export default Nav;
