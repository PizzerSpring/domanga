/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* eslint-disable */

import React, { useState } from "react";
import { Linking, StyleSheet, Text, View, Pressable } from "react-native";
import Login from "./android/app/src/components/Login";
import Mangas from "./android/app/src/components/Mangas";
import WebView from "react-native-webview";

function App() {
  const [url, setUrl] = useState('');
  return <View style={styles.container}>
    <WebView
      source={{uri: `${url}`}}
      injectedJavaScript={`(function() {
    document.body.style.background = 'blue';
  })();`}
      />
    {/*<Text>1234</Text>*/}
    <Pressable>
      <Text
            onPress={() => { setUrl('https://remanga.org/')}}>
        Remanga
      </Text>
    </Pressable>
    <Pressable>
      <Text
        onPress={() => { setUrl('https://mangalib.me/')}}>
        Mangalib
      </Text>
    </Pressable>
    <Pressable>
      <Text
        onPress={() => { setUrl('')}}>
        Reset
      </Text>
    </Pressable>
           {/*<Login/>*/}
           {/*<Mangas/>*/}
         </View>;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center'
  },
});

export default App;
