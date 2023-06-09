import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ButtonComponent from '../../ButtonCustom'

export default function Registr({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>Зарегистрируйтесь в приложении, {"\n"} это нужно для сохранения вашего аккаунта в системе МИДиС</Text>
            </View>
            <ButtonComponent text="Войти через портал МИДиС" path="Портал МИДиС" navigation={navigation} />
            <TouchableOpacity onPress={() => navigation.navigate('Портал МИДиС')} style={styles.signInButton}>
                <Text style={styles.signInButtonText}>У меня уже есть аккаунт  </Text>
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
        marginTop: 100,
        marginBottom: 50,
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 28,
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