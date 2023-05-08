import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from 'react-native';

//StartPages

export default function Cool({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/finalReg.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.startText}>Поздравляем! Вы прошли регистрацию!</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Профиль')} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Продолжить </Text>
                </TouchableOpacity>
                <StatusBar />
            </ImageBackground>
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
        top: 230,
        fontSize: 28,
        left: 15,
    },
    appButtonContainer: {
        top: 240,
        right: 90,
    },
    appButtonText: {
        elevation: 8,
        backgroundColor: "#FF6014",
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        fontSize: 18,
        color: "#fff",
        fontWeight: "medium",
        alignSelf: "center",

    }
});
