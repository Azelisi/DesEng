import { StyleSheet, View } from 'react-native';
import Navigation from './app/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
        <Navigation />
        <StatusBar style='light' />
    </SafeAreaProvider>
  );
};
