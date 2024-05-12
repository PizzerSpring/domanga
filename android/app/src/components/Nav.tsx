/* eslint-disable */

import React from "react";
import { Button, View } from "react-native";

const Nav = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to Login"
        onPress={() =>
          navigation.navigate('Login')
        }/>
      <Button
        title="Go to Library"
        onPress={() =>
          navigation.navigate('Library')
        }/>
    </View>
  );
};

export default Nav;
