import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StartPages from './pages/StartPages';
import Registr from './pages/Registr';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Начальный экран" component={StartPages} />
        <Stack.Screen name="Регистрация в DesEng" component={Registr} />
        <Stack.Screen name="Портал МИДиС" component={Registr} />
        <Stack.Screen name="Вход в приложение" component={Registr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
