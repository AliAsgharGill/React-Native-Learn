import {SafeAreaView, StyleSheet, StatusBar, Platform} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 10,
    backgroundColor: '#65676b',
  },
});

export default App;
