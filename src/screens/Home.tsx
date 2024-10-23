import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text} >Welcome to Home Screen Buddy</Text>
        <Text style={styles.text} >Welcome to Home Screen Buddy</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#5084ec',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: '#050505',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
});
