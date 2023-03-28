import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from 'react-native';



export default function ButtonCustom() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Продолжить </Text>
            </TouchableOpacity>
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
    startText: {
        color: 'white',
        fontSize: 28,
    },
    appButtonText: {
        elevation: 8,
        backgroundColor: "#FF6014",
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 20,
        fontSize: 18,
        color: "#fff",
        fontWeight: "medium",
        alignSelf: "center",
    }
});
