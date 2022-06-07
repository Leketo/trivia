import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Result = ({navigation, route}) => {
  const params = route.params
  return (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>Lograste {params.correctAnswer} de 10</Text>
    </View>

    <View style={styles.bottom}>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home')}}>
         <Text style={styles.buttonText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Quiz')}}>
         <Text style={styles.buttonText}>Jugar de nuevo</Text>
      </TouchableOpacity>
    </View>
  </View>
)};

export default Result;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingTop: 100,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 36,
    fontWeight: '600'
  },
  top: {
    marginVertical: 16,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',

  },
  button: {
    backgroundColor: '#1A759F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
}); 

