import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Test = ({ navigation }) => {
    const [answer, setAnswer] = useState(null);

    const onSelectAnswer = (selectedAnswer) => {
        setAnswer(selectedAnswer);
    };
    const sendAnswer = () => {
        fetch('https://linktr.ee/Azelisi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answer: answer,
            }),
        })
            .then(response => {
                if (response.ok) {
                    // Данные успешно отправлены на сервер
                    navigation.navigate('В разработке');
                    console.log(answer);
                } else {
                    throw new Error('Ошибка отправки данных');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    const renderOption = (option) => {
        const backgroundColor = answer === option ? '#1E1E1E' : '#545454';
        const onPress = () => onSelectAnswer(option);

        return (
            <TouchableOpacity
                key={option}
                style={[styles.option, { backgroundColor }]}
                onPress={onPress}>
                <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Выберите перевод слова</Text>
            <Text style={styles.word}>Слушать</Text>
            <View style={styles.optionsContainer}>
                {renderOption('Listen ')}
                {renderOption('Read ')}
                {renderOption('Write ')}
            </View>
            <TouchableOpacity
                style={[styles.button, answer ? styles.buttonActive : null]}
                disabled={!answer}
                onPress={sendAnswer}>
                <Text style={styles.buttonText}>Продолжить </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Завершение регистрации')}>
                <Text style={styles.skipButtonText}>Пропустить </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#707070',
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: 'center',
    },
    heading: {
        fontSize: 27,
        color: '#fff',
        marginBottom: 20,
    },
    word: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    optionsContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    option: {
        width: 330,
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionText: {
        color: '#fff',
        fontSize: 20,
    },
    button: {
        width: 330,
        height: 50,
        borderRadius: 10,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
    },
    buttonActive: {
        backgroundColor: '#FF6014',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    skipButton: {
        marginTop: 10,
    },
    skipButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Test;