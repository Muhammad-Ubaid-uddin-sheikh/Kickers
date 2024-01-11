// CustomHeader.js
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import  Icons  from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
  const handleBackPress = () => {
    const navigation = useNavigation()
    navigation.goBack();
  };

  return (
    <View style={{flex:1,justifyContent:'center'}}>
    {/* <ImageBackground
      source={require('../../assets/Avatar.png')}
      style={{ width: '100%', height: 120 }}
    > */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 ,backgroundColor:'red'}}>
        {/* <TouchableOpacity onPress={handleBackPress}> */}
          <Icon name="keyboard-arrow-left"  color="black" />
        {/* </TouchableOpacity> */}
        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>asdasd</Text>
        <Icons name="staro"  color="white" />
      </View>
    {/* </ImageBackground> */}
    </View>
  );
};

export default CustomHeader;
