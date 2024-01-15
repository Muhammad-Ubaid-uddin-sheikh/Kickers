import React from 'react'
import { View, StyleSheet, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import ColoredLine from '../../components/LineComponet';
import { Fonts } from '../style';
import { useState } from 'react';
import Button from '../../components/Button';
const CustomizeProfile = ({navigation}) => {
    const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  const handleNavigate = () => {
    if (selectedItem) {
      navigation.navigate('CustomizeProfileNationlity');
    } else {
      console.warn('Please select the foot do you play.');
    }
  };
    return (
        <View style={styles.container}>
            
            
            <StatusBar backgroundColor={'white'} />
            <View style={styles.MainContainer}>
                <ColoredLine flex={1.8} />
                <Text style={styles.MainHeading} >¿ Cuál es tu pie</Text>
                <View style={styles.ShoeContainer}>
                    <View style={styles.row}>
                        <View style={styles.ShoeCon}>

                          
                          <TouchableOpacity onPress={() => handleImageClick('item1')}>
        <Image
          source={selectedItem === 'item1' ? require('../../assets/leftGreen.png') : require('../../assets/left.png')}
          style={{ width: 130, height: 130 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImageClick('item1')}>
        <Text style={[styles.textPoints, selectedItem === 'item1' && styles.selectedText]}>
          {selectedItem === 'item1' ? 'Left Foot' : 'Left Foot'}
        </Text>
      </TouchableOpacity>

     

                            
                        </View>
                        <View style={styles.ShoeCon}>
                        <TouchableOpacity onPress={() => handleImageClick('item2')}>
        <Image
          source={selectedItem === 'item2' ? require('../../assets/rightGreen.png') : require('../../assets/right.png')}
          style={{ width: 130, height: 130 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImageClick('item2')}>
        <Text style={[styles.textPoints, selectedItem === 'item2' && styles.selectedText]}>
          {selectedItem === 'item2' ? 'Right Foot' : 'Right Foot'}
        </Text>
      </TouchableOpacity>
                       
                        </View>
                    </View>

                </View>
                <View style={styles.nextButton}>
    <Button Link={handleNavigate} text="Siguiente"/>
                  
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ShoeContainer: {
        // marginTop: 80,
        position:'absolute',
bottom:320
    },
    textPoints: {
        fontSize: 16,
        lineHeight: 24,
        color: '#61646B',
        marginLeft: 38,
        marginTop: 30,
       fontFamily: 'Satoshi-Medium'
    },
    ShoeCon: {
        textAlign: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        // Other container styles
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center'
    },
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        width: 'auto',
        paddingLeft: 5,
        paddingRight: 5
    },
    MainHeading: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        fontFamily: Fonts.BOLD,
        width: 300,
        lineHeight: 36,
        marginTop:30,
    },
    ImageContainer: {
        marginTop: 30
    },
    nextButton: {
        position: 'absolute',
        bottom: 25,
    }
    ,
    row: {
        flexDirection: 'row', // Arrange points and text horizontally
        alignItems: 'center', // Center content vertically
        gap: 47,
    },
      selectedText: {
        color: '#408639',
        // Add other styles for the selected state
      },
     
});

export default CustomizeProfile