/* eslint-disable */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Libraries from "./Libraries";
import Login from "./Login";
import Nav from "./Nav";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Library"
                      component={Libraries}
                      options={{title: ''}}>
        </Stack.Screen>
        <Stack.Screen name="Login"
                      component={Login}
                      options={{title: ''}}>
        </Stack.Screen>
        <Stack.Screen name="Nav"
                      component={Nav}
                      options={{title: ''}}>
        </Stack.Screen>
      </Stack.Navigator>

  );
};

export default MyStack;