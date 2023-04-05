import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from 'react-native';

//StartPages

export default function StartPages({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/startImg.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.startText}>Станьте частью {"\n"}
          DesEng! </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Регистрация в DesEng')} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Продолжить </Text>
        </TouchableOpacity>
        <StatusBar />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    color: 'white',
    top: 230,
    fontSize: 28,
    right: 20,
  },
  appButtonContainer: {
    top: 240,
    right: 80,
  },
  appButtonText: {
    elevation: 8,
    backgroundColor: "#FF6014",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "#fff",
    fontWeight: "medium",
    alignSelf: "center",

  }
});
