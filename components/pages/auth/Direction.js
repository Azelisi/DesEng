import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';



const Direction = ({ navigation }) => {
    const [selectedDirections, setSelectedDirections] = useState([]);

    const handleDirectionSelect = (direction) => {
        const isSelected = selectedDirections.includes(direction);

        if (isSelected) {
            setSelectedDirections(selectedDirections.filter((d) => d !== direction));
        } else {
            setSelectedDirections([...selectedDirections, direction]);
        }
    };

    const handleContinue = () => {
        // отправка выбранных направлений на бекенд
        console.log({ selectedDirections });
        navigation.navigate('Категории');
    };
    // проверка на количество выбранных направлений
    const disableContinueButton = selectedDirections.length === 0;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>На каком направлении вы обучаетесь? </Text>
            <TouchableOpacity
                style={[
                    styles.directionButton,
                    selectedDirections.includes('3D графика') && styles.selectedDirectionButton,
                ]}
                onPress={() => handleDirectionSelect('3D графика')}
            >
                <Text style={styles.directionButtonText}>3D графика </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.directionButton,
                    selectedDirections.includes('Графический дизайн') && styles.selectedDirectionButton,
                ]}
                onPress={() => handleDirectionSelect('Графический дизайн')}
            >
                <Text style={styles.directionButtonText}>Графический дизайн </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.directionButton,
                    selectedDirections.includes('Интерьер') && styles.selectedDirectionButton,
                ]}
                onPress={() => handleDirectionSelect('Интерьер')}
            >
                <Text style={styles.directionButtonText}>Интерьер </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.directionButton,
                    selectedDirections.includes('Костюм') && styles.selectedDirectionButton,
                ]}
                onPress={() => handleDirectionSelect('Костюм')}
            >
                <Text style={styles.directionButtonText}>Костюм </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.directionButton,
                    selectedDirections.includes('UI/UX дизайн') && styles.selectedDirectionButton,
                ]}
                onPress={() => handleDirectionSelect('UI/UX дизайн')}
            >
                <Text style={styles.directionButtonText}>UI/UX дизайн </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.continueButton,
                    disableContinueButton && styles.disabledContinueButton // добавляем стилизацию для отключенной кнопки
                ]}
                onPress={disableContinueButton ? undefined : handleContinue} // блокируем обработчик нажатия для отключенной кнопки
                disabled={disableContinueButton} // включаем или отключаем свойство disabled для кнопки
            >
                <Text style={styles.continueButtonText}>Продолжить </Text>
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

export default Direction;