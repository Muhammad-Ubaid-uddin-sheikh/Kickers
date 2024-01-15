import React from 'react'
import ColoredLine from '../../components/LineComponet';
import Icons from 'react-native-vector-icons/MaterialIcons'
import { useState } from 'react';
import { Fonts } from '../style';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../../components/Button';
// import  ScrollView  from '';

const CustomizeProfilePrefferd = ({ navigation }) => {


    const [jerseyNumber, setJerseyNumber] = useState('0'); // Start with '00' as a string

    const handleIncrement = () => {
        const incrementedNumber = parseInt(jerseyNumber, 10) + 1;
        setJerseyNumber(incrementedNumber <= 99 ? `${incrementedNumber}` : jerseyNumber);
    };

    const handleDecrement = () => {
        const decrementedNumber = parseInt(jerseyNumber, 10) - 1;
        setJerseyNumber(decrementedNumber >= 0 ? `${decrementedNumber}` : jerseyNumber);
    };

    const handleNavigate = () => {
        // Check if the jersey number is not '00' before navigating
        if (jerseyNumber !== '0') {
            navigation.navigate('Dashboard');
        } else {
            console.warn('Please select a valid jersey number before navigating.');
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <StatusBar backgroundColor={'white'} />

                <View style={styles.MainContainer}>
                    <ColoredLine flex={0} />
                    <Text style={styles.MainHeading} >¿Cuál es el número que utilizas?</Text>
                    <View style={styles.ShoeCon}>

                        <View style={styles.jerseyNumberContainer}>
                            <Text style={styles.jerseyNumberText}>{jerseyNumber < 10 ? `0${jerseyNumber}` : jerseyNumber}</Text>
                        </View>

                        {/* Input field for jersey number */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Número de dorsal"
                                keyboardType="numeric"
                                placeholderTextColor="rgba(33, 33, 33, 0.60)"
                                letterSpacing={0.6}
                                maxLength={2}
                                value={jerseyNumber}
                                onChangeText={(text) => setJerseyNumber(text)}
                            />
                            <TouchableOpacity onPress={handleIncrement}>
                                <Icons name='keyboard-arrow-up' style={styles.arrowTop} size={28} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleDecrement}>
                                <Icons name='keyboard-arrow-down' style={styles.arrowDown} size={28} />
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
                <View style={styles.nextButton}>
                    <Button text='Terminar' Link={handleNavigate} />
                </View>

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    arrowTop: {
        position: 'absolute',
        right: 15,
        color: 'rgba(120, 187, 113, 1)',
        top: -53
    },
    arrowDown: {
        position: 'absolute',
        right: 15,
        color: 'rgba(120, 187, 113, 1)',
        top: -37
    },
    inputContainer: {
        position: 'relative',
        marginBottom: 8,
        width: 345,
        marginLeft: 22,
        marginRight: 30
    },
    input: {
        marginTop: 12,
        paddingLeft: 12,
        padding: 16,
        paddingRight: 40,
        fontSize: 14,
        lineHeight: 20,
        width: 345,
        borderRadius: 12,
        borderWidth: 0.25,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 1,
        color: '#212121',
        fontFamily: 'Satoshi-Medium',
        backgroundColor: 'rgba(64, 134, 57, 0.05)'
    },
    jerseyNumberContainer: {
        marginTop: 80,
        // marginTop:-40,   
        marginBottom: 80,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: ' rgba(64, 134, 57, 0.05)',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#408639',
        paddingLeft: 50,
        paddingRight: 50,

    },
    jerseyNumberText: {
        fontSize: 160,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#78BB71',
        textShadowColor: '#212121',
        textShadowOffset: { width: 3, height: 5 },
        textShadowRadius: 0.5,

    },
    inputField: {
        borderWidth: 1,
        borderColor: 'black',
        width: 100,
        textAlign: 'center',
        marginBottom: 10,
    },
    arrowButton: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    nextButton: {
        // position: 'absolute',
        // bottom: 0,
        marginTop: 70
    },
    ShoeCon: {
        flex: 1,
        // marginTop: 130
        justifyContent: 'center',
        alignItems: 'center'

    },
    container: {
        flex: 1,
        // Other container styles
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        // marginTop: 30,
        width: 'auto',
        paddingLeft: 5,
        paddingRight: 5
    },
    MainHeading: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        fontFamily: Fonts.BOLD,
        width: 330,
        lineHeight: 36,
        marginTop: 30
    },
    ImageContainer: {
        marginTop: 30
    },
    selectedNumber: {
        fontSize: 150,
        fontWeight: 'bold',
        color: '#666'
    },
    //   modalContainer: {
    //     backgroundColor: 'white',
    //     padding: 20,
    //     borderRadius: 10,
    //     alignItems: 'center',
    //   },
    inputField: {
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        color: '#666'
    },
    warningText: {
        color: 'red',
    },
});

export default CustomizeProfilePrefferd