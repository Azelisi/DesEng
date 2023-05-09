import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Directions = [
    { id: 1, name: 'Композиция ' },
    { id: 2, name: 'Колористика ' },
    { id: 3, name: 'Орнамент ' },
    { id: 4, name: 'Полиграфия ' },
    { id: 5, name: 'Типография ' },
];

const DirectionSelector = ({ navigation }) => {
    const [selectedDirection, setSelectedDirection] = useState(null);

    const handleDirectionSelect = (direction) => {
        setSelectedDirection(direction);
    };

    const handleDirectionSubmit = () => {
        // отправка выбранного направления на бэкенд json
        console.log(selectedDirection);
        navigation.navigate('Уровень подготовки');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>На каком направлении вы обучаетесь?</Text>
            {Directions.map((direction) => (
                <TouchableOpacity
                    key={direction.id}
                    style={[
                        styles.directionButton,
                        selectedDirection && selectedDirection.id === direction.id && styles.selectedDirectionButton,
                    ]}
                    onPress={() => handleDirectionSelect(direction)}>
                    <Text
                        style={[
                            styles.directionButtonText,
                            selectedDirection && selectedDirection.id === direction.id && styles.selectedDirectionText,
                        ]}>
                        {direction.name}
                    </Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity
                style={[styles.continueButton, !selectedDirection && styles.disabledContinueButton]}
                onPress={handleDirectionSubmit}
                disabled={!selectedDirection}>
                <Text style={styles.continueButtonText}>Продолжить</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        marginLeft: 15,
        color: '#E0E0E0',
    },
    directionButton: {
        alignItems: 'center',
        backgroundColor: '#707070',
        padding: 16,
        marginBottom: 20,
        borderRadius: 8,
        width: 330,
    },
    selectedDirectionButton: {
        backgroundColor: '#a3a3a3',
    },
    directionButtonText: {
        fontSize: 16,
        color: '#FFFFFF',

    },
    continueButton: {
        backgroundColor: '#FF6014',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        marginTop: 60,
        width: 330,
    },
    continueButtonText: {

        color: 'white',
        fontSize: 15,
        fontWeight: 'medium',
        fontFamily: 'Roboto',
    },
    disabledContinueButton: {
        backgroundColor: '#545454'
    }
});

export default DirectionSelector;