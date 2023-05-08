import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';



const Categories = ({ navigation }) => {
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
        navigation.navigate('Уровень подготовки');
    };
    // проверка на количество выбранных направлений
    const disableContinueButton = selectedDirections.length === 0;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Выберите наиболее интересующие вас категории для Графического дизайна </Text>
            <TouchableOpacity
                style={[
                    styles.directionButton,
                    selectedDirections.includes('Композиция') && styles.selectedDirectionButton,
                ]}
                onPress={() => handleDirectionSelect('Композиция')}
            >
                <Text style={styles.directionButtonText}>Композиция </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.directionButton,
                    selectedDirections.includes('Колористика') && styles.selectedDirectionButton,
                ]}
                onPress={() => handleDirectionSelect('Колористика')}
            >
                <Text style={styles.directionButtonText}>Колористика </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.directionButton,
                    selectedDirections.includes('Орнамент') && styles.selectedDirectionButton,
                ]}
                onPress={() => handleDirectionSelect('Орнамент')}
            >
                <Text style={styles.directionButtonText}>Орнамент </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.directionButton,
                    selectedDirections.includes('Полиграфия') && styles.selectedDirectionButton,
                ]}
                onPress={() => handleDirectionSelect('Полиграфия')}
            >
                <Text style={styles.directionButtonText}>Полиграфия </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.directionButton,
                    selectedDirections.includes('Типография') && styles.selectedDirectionButton,
                ]}
                onPress={() => handleDirectionSelect('Типография')}
            >
                <Text style={styles.directionButtonText}>Типография </Text>
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
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
        marginLeft: 20,
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

export default Categories;