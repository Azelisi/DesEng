import { StyleSheet, View } from 'react-native';
import StartPages from '../components/pages/auth/StartPages';
import Registr from '../components/pages/auth/Registr';
import NotFound from '../components/pages/NotFound';
import Midis from '../components/pages/auth/Midis';
import Direction from '../components/pages/auth/Direction';
import Categories from '../components/pages/auth/Categories';
import Degree from '../components/pages/auth/Degree';
import Test from '../components/pages/test/Testing';
import Cool from '../components/pages/auth/Cool';
import Profile from '../components/pages/auth/Profile';
import TypeRootStackParamList from './navigation.types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#616161' },
            }}
            >
                <Stack.Screen name="Начальный экран" component={StartPages} />
                <Stack.Screen name="Регистрация в DesEng" component={Registr} />
                <Stack.Screen name="Портал МИДиС" component={Midis} />
                <Stack.Screen name="Вход в приложение" component={Registr} />
                <Stack.Screen name="Направление" component={Direction} />
                <Stack.Screen name="Категории" component={Categories} />
                <Stack.Screen name="Уровень подготовки" component={Degree} />
                <Stack.Screen name="Тестирование" component={Test} />
                <Stack.Screen name="Завершение регистрации" component={Cool} />
                <Stack.Screen name="Профиль" component={Profile} />
                <Stack.Screen name="В разработке" component={NotFound} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#616161',
    },
});
