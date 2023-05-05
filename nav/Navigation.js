import { StyleSheet, View } from 'react-native';
import StartPages from '../pages/StartPages';
import Registr from '../pages/Registr';
import NotFound from '../pages/NotFound';
import Midis from '../pages/Midis';
import Direction from '../pages/Direction';
import Categories from '../pages/Categories';
import Degree from '../pages/Degree';
import Test from '../pages/Testing';
import Cool from '../pages/Cool';
import Profile from '../pages/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
