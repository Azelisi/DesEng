import React from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


const Home = ({ navigation, username, avatar, word   }) => {
    
    return (
        <SafeAreaProvider>
        <View style={styles.container}>
         <Header username="ivanagopov74 " avatar="https://bestappsforkids.com/wp-content/uploads/2017/10/Frog.jpg" />
         
        <WordOfTheDay word = "Usability [ˌjuːzəˈbɪləti]  " translation="Практичность [Юзабилити] " navigation={navigation}/>
        <Course course = "Пройти «Logotype» урок из курса «Фирменный стиль»" time="Сегодня 15:00 Грамматика " navigation={navigation}/>
        
      </View>
      </SafeAreaProvider>
    
    );
};

const Header = (props) => {
    const { username, avatar } = props;
    const insets = useSafeAreaInsets();
  
    return (
        <View style={{
            marginLeft:20,
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: insets.top}}>
        <Image source={{ uri: avatar }} style={styles.img} />
        <Text style={styles.container}>{username}</Text>
      </View>
    );
  };

  const WordOfTheDay = ({ word, translation, navigation }) => {
    return (
      <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Слово дня</Text>
            <View style={styles.divider} />
            <TouchableOpacity onPress={() => navigation.navigate('Словарь')}>
              <Text style={styles.titleText}>Словарь</Text>
            </TouchableOpacity>
          </View>
        <View style={styles.borderVid}>
          <View style={styles.word}>
            <Text style={styles.wordText}>{word}</Text>
            <Text style={styles.wordTranslation}>{translation}</Text>
          </View>
        </View>
      </View>
    );
  };

  
  const Course = ({ course, time, navigation }) => {
    return (
      <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Назначенный курс</Text>
            <View style={styles.divider} />
            <TouchableOpacity onPress={() => navigation.navigate('Задания')}>
              <Text style={styles.titleText}>Дневник</Text>
            </TouchableOpacity>
          </View>
        <View style={styles.borderVid}>
          <View style={styles.word}>
            <Text style={styles.wordTranslation}>{time}</Text>
            <Text style={styles.wordText}>{course}</Text>
          </View>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#616161',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  text: {
    fontSize: 20,
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  title: {
    backgroundColor: '#545454',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    paddingRight:30,
  },
  titleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    marginLeft:30,
  },
  borderVid: {
    paddingRight:100,
  },
  divider: {
    flex: 1,
  },
  word: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft:10,
  },
  wordText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    margin:5,
  },
  wordTranslation: {
    color: '#fff',
    fontSize: 15,
    margin:5,
  },
});

export default Home; 
