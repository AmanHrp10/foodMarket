/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.container}>Hello Food Market</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
  },
});

export default App;
