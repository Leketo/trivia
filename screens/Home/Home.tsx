import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity, Image } from 'react-native';
import Title from '../../components/Title';

export const mainAssets = require("../../assets/main.png");

const Home = () => {
  const navigation = useNavigation();
  return (
  <View style={styles.container}>
    <Title />
    <View style={styles.bannerContainer }>
      <Text>Son 10 preguntas de opcion multiple</Text>
    </View>
    
    <View>
      <Text>Podes lograr 100%?</Text>
    </View>

    <TouchableOpacity onPress={() => {navigation.navigate('Quiz')}} style={styles.button}>
      <Text style={styles.buttonText}>Iniciar</Text>
    </TouchableOpacity>


  </View>
)};

export default Home;

const styles = StyleSheet.create({
  banner:{
    height: 300,
    width: 300,
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container:{
    paddingTop: 20,
    paddingHorizontal: 20,
    height: '100%'     
  },
  button:{
    width: '100%',
    backgroundColor: '#1A759f',
    padding: 20,
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 30,
  },
  buttonText:{
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  }
});
