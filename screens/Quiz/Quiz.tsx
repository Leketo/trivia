import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from "@react-navigation/native";

const Quiz = () => {
  const isVisible = useIsFocused();
  const navigation = useNavigation();
  const [questions, setQuestions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const getQuiz = async () => {
    const url = 'https://softec.com.py/preguntas.php';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.questions);
  };

  useEffect(() => {
   if (isVisible) {
      setCurrentQuestion(0)
      setCorrectAnswer(0)
   }

}, [isVisible]);

  useEffect(() => {
    getQuiz();
  }, []);

  useEffect(() => {
    if (currentQuestion == 9) {
      navigation.navigate('Result', {
        correctAnswer: correctAnswer
      })
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (currentQuestion == 9) {
      navigation.navigate('Result', {
        correctAnswer: correctAnswer
      })
    }
  }, [currentQuestion]);


  const handleNextQuestion = (selectAnswer) => {
    if (questions[currentQuestion].correctAnswer == selectAnswer) {
      setCorrectAnswer(correctAnswer + 1)
    }
    setCurrentQuestion(currentQuestion + 1)

  };

  const handleExit = () => {
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      {questions &&
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>{questions[currentQuestion].text}</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButtom}
              onPress={() => handleNextQuestion(1)}>
              <Text style={styles.option}> {questions[currentQuestion].answers[0].text} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}
              onPress={() => handleNextQuestion(2)}>
              <Text style={styles.option}> {questions[currentQuestion].answers[1].text} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}
              onPress={() => handleNextQuestion(3)}>
              <Text style={styles.option}> {questions[currentQuestion].answers[2].text} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}
              onPress={() => handleNextQuestion(4)}>
              <Text style={styles.option}> {questions[currentQuestion].answers[3].text} </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button} onPress={() => handleExit()}>
              <Text style={styles.buttonText}>Salir</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.scoreText}> {currentQuestion + 1} de 10</Text>
            </View>
          </View>
        </View>
      }
    </View>
  )
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    paddingVertical: 16,
    paddingLeft: 250,
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
  scoreText: {
    fontSize: 18,
    fontWeight: '600'
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18
  },
  optionButtom: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%'
  }
}); 