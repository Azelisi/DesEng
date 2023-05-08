import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ButtonComponent from '../../ButtonCustom'

export default function Degree({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>Пройдите тест на определение уровня подготовки</Text>
                <Text style={styles.pagesText}>Благодаря этому приложение сможет подстроить под вас упражнения
                    {"\n"}   {"\n"}
                    Или, если вы знаете свой уровень подготовки английского языка, можете выбрать его сами</Text>
            </View>
            <ButtonComponent text="Приступить к тесту" path="Тестирование" navigation={navigation} />
            <TouchableOpacity onPress={() => navigation.navigate('Тестирование')} style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Выбрать уровень подготовки  </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#616161',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 16,
        marginBottom: 50,
    },
    headerText: {
        color: 'white',
        fontSize: 26,
        fontFamily: 'Roboto',
        marginLeft: 20,
        marginTop: 16,
    },
    pagesText: {
        color: 'white',
        marginLeft: 20,
        fontSize: 18,
        marginTop: 12,
        fontFamily: 'Roboto',
    },
    portalButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6014',
        borderRadius: 6,
        width: 330,
        height: 50,
        marginBottom: 26,
        top: 200,
    },
    portalIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    portalButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'medium',
        fontFamily: 'Roboto',
    },
    signInButton: {
        color: 'white',
        fontSize: 14,
        top: 200,
    },
    signInButtonText: {
        color: 'white'
    },
});