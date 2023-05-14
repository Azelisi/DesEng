import { StyleSheet, Image } from 'react-native';
import StartPages from '../components/pages/auth/StartPages';
import Registr from '../components/pages/auth/Registr';
import NotFound from '../components/pages/NotFound';
import Midis from '../components/pages/auth/Midis';
import Direction from '../components/pages/auth/Direction';
import Categories from '../components/pages/auth/Categories';
import Degree from '../components/pages/auth/Degree';
import Test from '../components/pages/test/Testing';
import Cool from '../components/pages/auth/Cool';
import Profile from '../components/pages/home/Profile';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/pages/home/Home';
import Calendar from '../components/pages/home/Calendar';
import Dictionary from '../components/pages/home/Dictionary';
import Tasks from '../components/pages/home/Tasks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from './AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <SafeAreaProvider>
            <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
                <NavigationContainer>
                    {isAuthenticated ? (
                        <Tab.Navigator screenOptions={{
                            tabBarShowLabel: false,
                            headerMode: 'screen',
                            headerTintColor: 'white',
                            headerStyle: { backgroundColor: '#616161' },
                            inactiveTintColor: 'white',
                            tabBarStyle: {
                                backgroundColor: 'gray',
                            },
                            tabBarActiveTintColor: 'white',
                        }}>
                            <Tab.Screen name="Главная страница" component={Home}
                                options={{
                                    headerShown: false,
                                    tabBarIcon: ({ focused }) => (
                                        <Image
                                            source={focused ? require('../assets/home_active.png') : require('../assets/home.png')}
                                            style={{ width: 28, height: 28 }}
                                        />
                                    ),
                                }} />
                            <Tab.Screen name="Задания" component={Tasks}
                                options={{
                                    tabBarIcon: ({ focused }) => (
                                        <Image
                                            source={focused ? require('../assets/pen_active.png') : require('../assets/pen.png')}
                                            style={{ width: 28, height: 28 }}
                                        />
                                    ),
                                }} />
                            <Tab.Screen name="Словарь" component={Dictionary}
                                options={{
                                    tabBarIcon: ({ focused }) => (
                                        <Image
                                            source={focused ? require('../assets/book_active.png') : require('../assets/book.png')}
                                            style={{ width: 28, height: 28 }}
                                        />
                                    ),
                                }} />
                            <Tab.Screen name="Календарь" component={Calendar}
                                options={{
                                    tabBarIcon: ({ focused }) => (
                                        <Image
                                            source={focused ? require('../assets/more_active.png') : require('../assets/more.png')}
                                            style={{ width: 28, height: 28 }}
                                        />
                                    ),
                                }} />
                        </Tab.Navigator>
                    ) : (
                        <Stack.Navigator
                            screenOptions={{
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
                    )}
                </NavigationContainer>
            </AuthContext.Provider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#616161',
    },
});
