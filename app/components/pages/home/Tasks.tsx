import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tasks = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Страница находится в разработке </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#616161',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff',
    },
});

export default Tasks; 
