import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, TouchableOpacity, ImageBackground, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/startImg.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.startText}>Станьте частью {"\n"}
          DesEng! </Text>
        <Button style={styles.startButton}
          title="Продолжить"
          color="#FF6014"
        />
      </ImageBackground>
      <StatusBar style="auto" />
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
    fontSize: 28,
  },
  startButton: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
