import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Title = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Bienvenido al desafio de Trivia!</Text>
  </View>
);

export default Title;

const styles = StyleSheet.create({
  container:{
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 36,
    fontWeight: '600'
  },
});
