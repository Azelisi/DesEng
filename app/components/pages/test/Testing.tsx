import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

type Answer = {
  id: number;
  text: string;
};

type Question = {
  id: number;
  typeQuestion: string;
  text: string;
  answers: Answer[];
  correctAnswerId: number;
};

type Test = {
  id: number;
  questions: Question[];
};

const testData: Test = {
  id: 1,
  questions: [
    {
      id: 1,
      typeQuestion: 'Выберите перевод слова',
      text: 'Cлушать ',
      answers: [
        { id: 1, text: 'follow ' },
        { id: 2, text: 'listen ' },
        { id: 3, text: 'hear ' },
      ],
      correctAnswerId: 2,
    },
    {
      id: 2,
      typeQuestion: 'Вставьте пропущенное слово',
      text: 'Jane and Ann __ from Leeds',
      answers: [
        { id: 1, text: 'am ' },
        { id: 2, text: 'is ' },
        { id: 3, text: 'are ' },
      ],
      correctAnswerId: 3,
    },
    {
      id: 3,
      typeQuestion: 'Выберите правильный  перевод выделенного слова',
      text: 'Im in a awkward situation',
      answers: [
        { id: 1, text: 'неприятный ' },
        { id: 2, text: 'неловкий ' },
        { id: 3, text: 'плохой ' },
      ],
      correctAnswerId: 2,
    },
    // Add more questions here
  ],
};

const Testing = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);

  const handleAnswerPress = (answerId: number) => {
    setSelectedAnswerId(answerId);
  };

  const handleNextQuestionPress = () => {
    // Check if the answer is correct before moving to the next question
    const currentQuestion = testData.questions[currentQuestionIndex];
    if (selectedAnswerId === currentQuestion.correctAnswerId) {
      console.log('Answer is correct!');
    } else {
      console.log('Answer is incorrect!');
    }

    // Move to the next question
    if (currentQuestionIndex + 1 < testData.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswerId(null);
    } else {
      console.log('Test is finished!');
      navigation.navigate('Завершение регистрации')
      // Here you can navigate to the result screen or do any other actions
    }
  };

  const currentQuestion = testData.questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text  style={styles.heading}>{testData.questions[0].typeQuestion}</Text>
      <Text style={styles.word}>{currentQuestion.text}</Text>
      {currentQuestion.answers.map(answer => (
        <TouchableOpacity
          key={answer.id}
          onPress={() => handleAnswerPress(answer.id)}
          style={[styles.option, {backgroundColor: answer.id === selectedAnswerId ? '#1E1E1E' : '#545454'}]}>
          {/* Here you can render the image for the answer if it's provided */}
          <Text style={styles.optionText}>{answer.text}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        disabled={selectedAnswerId === null}
        onPress={handleNextQuestionPress}
        style={{
          backgroundColor: selectedAnswerId === null ? '#1E1E1E' : '#FF6014',
          width: 330,
          height: 50,
          borderRadius: 10,
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'white' }}>Продолжить </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Завершение регистрации')}>
                <Text style={styles.skipButtonText}>Пропустить </Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#707070',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  heading: {
    fontSize: 27,
    color: '#fff',
    marginBottom: 20,
  },
  word: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#fff',
  },
  optionsContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  option: {
    width: 330,
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 20,
  },
  buttonActive: {
    backgroundColor: '#FF6014',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  skipButton: {
    marginTop: 10,
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
});
export default Testing;
