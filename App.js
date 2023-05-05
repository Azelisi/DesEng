import { StyleSheet, View } from 'react-native';
import Navigation from './nav/Navigation';
import StartPages from './pages/StartPages';
import Registr from './pages/Registr';
import NotFound from './pages/NotFound';
import Midis from './pages/Midis';
import Direction from './pages/Direction';
import Categories from './pages/Categories';
import Degree from './pages/Degree';
import Test from './pages/Testing';
import Cool from './pages/Cool';
import Profile from './pages/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
