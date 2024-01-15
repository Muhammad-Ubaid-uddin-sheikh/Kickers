import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import ColoredLine from '../../components/LineComponet';
import { Fonts } from '../style';
import DefualtImage from '../../assets/defualt.png'
import MidFeildImage from '../../assets/midFeild.png'
import DefendImage from '../../assets/defend.png'
import GoalKeeperImage from '../../assets/goalKeeper.png'
import AttacakImage from '../../assets/attacak.png'
import Button from '../../components/Button';
const CustomizeProfile = ({ navigation }) => {

    const [selectedText, setSelectedText] = useState(null);

    const [selectedImage, setSelectedImage] = useState(DefualtImage);

    const handleTextClick = (imageName, text) => {
        switch (imageName) {
            case 'attackImage':
                setSelectedImage(AttacakImage);

                break;
            case 'defendImage':
                setSelectedImage(DefendImage);
                break;
            case 'midfieldImage':
                setSelectedImage(MidFeildImage);
                break;
            case 'goalkeeperImage':
                setSelectedImage(GoalKeeperImage);
                break;
            default:
                setSelectedImage(DefualtImage);
        }
        setSelectedText(text);
    };

    const handleNavigate = () => {
        // Check if any text is selected before navigating
        if (selectedImage !== DefualtImage) {
            navigation.navigate('CustomizeProfileFoot');
        } else {
            console.warn('Please select an item before navigating.');
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'} />
            <ColoredLine flex={4} />
            <View style={styles.MainContainer}>
                <Text style={styles.MainHeading} >¿ Qué posición juegas?</Text>
                <Image source={selectedImage} style={styles.image} />

                {/* Text 1 */}
                <View style={styles.row}>
                    <View style={styles.colm}>
                        <TouchableOpacity style={[
                            styles.buttonSelect,
                            selectedText === 'Attack' && styles.selectedTextTouchable,
                        ]} onPress={() => handleTextClick('attackImage', 'Attack')}>
                            <Text style={styles.textSelectProfile}>Delantero</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Text 2 */}
                    <View style={styles.colm}>
                        <TouchableOpacity style={[
                            styles.buttonSelect,
                            selectedText === 'Defend' && styles.selectedTextTouchable,
                        ]} onPress={() => handleTextClick('defendImage', 'Defend')}>
                            <Text style={styles.textSelectProfile}>Defensa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Text 3 */}
                <View style={styles.row}>
                    <View style={styles.colm}>
                        <TouchableOpacity style={[
                            styles.buttonSelect,
                            selectedText === 'Midfield' && styles.selectedTextTouchable,
                        ]} onPress={() => handleTextClick('midfieldImage', 'Midfield')}>
                            <Text style={styles.textSelectProfile}>Medio</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.colm}>
                        {/* Text 4 */}
                        <TouchableOpacity style={[
                            styles.buttonSelect,
                            selectedText === 'Goalkeeper' && styles.selectedTextTouchable,
                        ]} onPress={() => handleTextClick('goalkeeperImage', 'Goalkeeper')}>
                            <Text style={styles.textSelectProfile}>Portero</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.nextButton}>
                    <Button text='Siguiente' Link={handleNavigate} />

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    selectedTextTouchable: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: 20,
        flexShrink: 0,
        borderRadius: 10,
        borderWidth: 0.25,
        borderColor: '#408639',
        backgroundColor: "rgba(64, 134, 57, 0.05)"
    },

    textSelectProfile: {
        color: 'black'
    },
    container: {
        flex: 1,
        // Other container styles
        backgroundColor: 'white',
    },
    buttonSelect: {
        display: 'flex',
        justifyContent: 'space-around',
        // height: 56,
        padding: 20,
        flexShrink: 0,
    },
    colm: {
        width: '50%',
        borderRadius: 10,
        borderWidth: 0.25,
        borderColor: 'rgba(0, 0, 0, 0.40)',
    },
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
        width: 'auto',
        paddingLeft: 10,
        paddingRight: 10
    },
    MainHeading: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        fontFamily: Fonts.BOLD,
        width: 330,
        lineHeight: 36,
    },
    ImageContainer: {
        marginTop: 30
    },
    nextButton: {
        position: 'absolute',
        bottom: 25,
    },
    MainPointCon: {
        flexDirection: 'column', // Arrange rows vertically
        alignItems: 'center',
        marginTop: 50,
    },
    row: {
        flexDirection: 'row', // Arrange points and text horizontally
        alignItems: 'center', // Center content vertically
        marginVertical: 10,
        gap: 12,
        paddingLeft: 20,
        paddingRight: 20
    },
    pointContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
        width: 125,
        justifyContent: 'start'
    },
    image: {
        width: 350,
        height: 350,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 10,
    },
    textPoints: {
        fontSize: 16,
        lineHeight: 24,
        color: '#61646B',
        fontFamily: 'Satoshi-Medium',
    }
});

export default CustomizeProfile