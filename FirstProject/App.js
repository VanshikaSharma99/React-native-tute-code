/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  Linking,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = () => {
  const [name,Setname]= useState('')
  
  return (
  <View style={styles.body}>
  <Text style={styles.text}>Enter your text here</Text>
  <TextInput
  multiline
  style={styles.input}
  placeholder='Eg John'
  onChangeText={(value)=>Setname(value)}
  />
  <Text>Name you typed is {name}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor:"pink",
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    color:"black",
    fontSize:18,
    fontStyle:"italic",
    margin:10

  },
   input:{
    borderColor:'grey',
    width:200,
    borderRadius:5
   }
});

export default App;
