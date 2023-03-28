import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StartPages from './pages/StartPages';



export default function App() {
  return (
    <View style={styles.container}>
      <StartPages />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
