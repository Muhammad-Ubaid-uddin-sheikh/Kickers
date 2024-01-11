
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, StatusBar, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/FontAwesome6'
import NewIcons from 'react-native-vector-icons/Fontisto'
import FaIcon from 'react-native-vector-icons/MaterialIcons'
import Button from '../../components/Button';
import { Fonts } from '../style';
const Sigup = ({ navigation }) => {
    const handleNavigate = () => {
        navigation.navigate('CustomizeProfile');
    }
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // Format the date as needed
        const formattedDate = date.toISOString().split('T')[0]; // Get the date part
        setSelectedDate(formattedDate);
        hideDatePicker();
    };
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
    };


    const [RePassword, setRePassword] = useState('');
    const [isRePasswordVisible, setRePasswordVisibility] = useState(false);

    const toggleRePasswordVisibility = () => {
        setRePasswordVisibility(!isRePasswordVisible);
    };

    return (
        <ScrollView style={styles.form} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            
            <Text style={styles.heading}>Sign Up</Text>
            {/* <Text style={styles.headingSub}>Court Owner </Text> */}

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                    letterSpacing={0.6}
                />


            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                    letterSpacing={0.6}
                />

            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    keyboardType="default"
                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                    letterSpacing={0.6}
                />
                <Icons name='check' style={styles.eyeIcon} size={17} />
            </View>
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.input}
                    placeholder="Date of Birth"
                    value={selectedDate}
                    onFocus={showDatePicker}
                    letterSpacing={0.6}
                    placeholderTextColor="#AFB1B6"
                />
                {/* <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                /> */}
                <NewIcons name='date' style={styles.eyeIcon} size={17} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                    secureTextEntry={!isPasswordVisible}
                    value={password}
                    letterSpacing={0.6}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
                    <Text style={styles.eyeText}>{isPasswordVisible ? <Icon name="eye" style={styles.eyeIcon} size={17} /> : <Icon name="eye-slash" style={styles.eyeIcon} size={17} />}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Re Enter Password"
                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                    secureTextEntry={!isRePasswordVisible}
                    value={RePassword}
                    letterSpacing={0.6}
                    onChangeText={(text) => setRePassword(text)}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={toggleRePasswordVisibility}>
                    <Text style={styles.eyeText}>{isRePasswordVisible ? <Icon name="eye" style={styles.eyeIcon} size={17} /> : <Icon name="eye-slash" style={styles.eyeIcon} size={17} />}</Text>
                </TouchableOpacity>
            </View>
            <Button text="Sign Up " Link={handleNavigate} />

            <Text style={styles.informationText}>By signing up you agree to our <Text style={{ color: '#408639' }}>Terms & Conditions.</Text></Text>
            <View style={styles.SinupText}>

                <TouchableOpacity style={styles.buttonGoole}>
                    <Image source={require('../../assets/google.png')} style={styles.image} />
                    {/* <GooIcon name='google' style={styles.googleICon} color='rgb(52, 168, 90)' size={25}  /> */}
                    <Text style={styles.buttonTextGoogle}>Continue with google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGoole}>
                    <FaIcon name='facebook' style={styles.googleICon} color='#4267B2' size={25} />
                    <Text style={styles.buttonTextGoogle} >Continue With Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkText}>
                    <Text style={styles.informationTextAccont}>Already have an account?  <Text style={styles.TextLink} onPress={() => navigation.navigate('LoginScreen')} >Sign In!</Text> </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    linkText: {
        marginTop: 10,
        paddingBottom: 10,
        marginBottom: 28,
        fontFamily: 'WorkSans-Regular'
    },
    buttonGoole: {
        backgroundColor: 'white',
        padding: 15,
        marginTop: 25,
        borderRadius: 12,
        width: 338,
        borderColor: '#AFB1B6',
        borderWidth: 0.5, // Set the border width
        fontFamily: 'Work Sans',
        marginLeft: 25,
        marginRight: 25
    },
    buttonTextGoogle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular'

    },
    TextLink: {
        fontSize: 15,
        lineHeight: 24,
        color: '#408639',
        fontWeight: '800',
    },
    SinupText: {
        marginTop: 0,

        textAlign: 'center',

    },
    image: {
        width: 20,
        height: 25,
        objectFit: 'contain',
        position: 'absolute',
        top: 14,
        left: 20,
    },
    form: {
        backgroundColor: '#fff',
        display: 'flex',
        width: 'auto',
        borderRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 15,
        shadowOpacity: 1,
        position: 'relative',
        paddingTop: 20,


    },
    heading: {
        fontSize: 28,
        marginBottom: 10,
        color: 'black',
        fontFamily: Fonts.SAMIBOLD,
        textAlign: 'center',
        marginTop: 25
    },
    paragraphs: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 16,
        color: '#61646B',
        letterSpacing: 1,
        fontFamily: 'WorkSans-Regular'
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
        fontFamily: 'WorkSans-Regular',
        backgroundColor: 'rgba(64, 134, 57, 0.05)'
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        padding: 16,
        justifyContent: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: 30,
        top: 35,
        color: '#408639'
    },
    googleICon: {

        position: 'absolute',
        top: 14,
        left: 20
    },
    eyeText: {
        fontSize: 20,
    },
    informationText: {
        fontSize: 13,
        lineHeight: 16,
        color: '#61646B',
        textAlign: 'center',
        letterSpacing: 0.2,
        marginTop: 8,
        paddingBottom: 30,
        fontFamily: 'WorkSans-Medium'
    },
    informationTextAccont: {
        fontSize: 15,
        lineHeight: 16,
        color: '#61646B',
        textAlign: 'center',
        letterSpacing: 0.2,
        marginTop: 8,
        fontFamily: 'WorkSans-Regular'
    },
    headingSub: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',
        fontFamily: Fonts.SAMIBOLD,
        textAlign: 'center',
        letterSpacing: 0.2
    },
});

export default Sigup;
