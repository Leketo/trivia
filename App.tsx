import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';

export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  }
});
