import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, TouchableOpacity, ImageBackground, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/startImg.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.startText}>Станьте частью {"\n"}
          DesEng! </Text>
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Продолжить </Text>
        </TouchableOpacity>
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
  appButtonText: {
    elevation: 8,
    backgroundColor: "#FF6014",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#fff",
    fontWeight: "medium",
    alignSelf: "center",
  }
});
